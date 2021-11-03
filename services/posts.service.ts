import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'
import { isProduction } from '../utils'
import { PostMeta } from '../common/interfaces'

export const DefaultPostCount = 3

export enum PostType {
  BlogPost = 'blog-posts',
  Project = 'projects',
  TravelDiaries = 'travel-diaries'
}

export namespace PostsService {

  const getPostTypeDirectoryPath = (postType: PostType) => {

    return path.join(process.cwd(), 'content', postType)
  }


  const postTypeDirectory = {
    [PostType.BlogPost]: getPostTypeDirectoryPath(PostType.BlogPost),
    [PostType.Project]: getPostTypeDirectoryPath(PostType.Project),
    [PostType.TravelDiaries]: getPostTypeDirectoryPath(PostType.TravelDiaries),
  }


  const getPostTypeDirectory = (postType: PostType) => {

    return postTypeDirectory[postType]
  }

  const isInDraftPhase = (matterResult: any) => {

    return matterResult.data.draft
  }


  const getPostMetaData = (fileName: string, matterResult: any) => {

    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')

    return {
      id,
      ...(matterResult.data as { date: string; title: string, draft: boolean, thumbnail: string })
    }
  }


  export function getSortedPostsData(postType: PostType, count?: number) {

    const pathname = getPostTypeDirectory(postType)
    const fileNames = fs.readdirSync(pathname)

    const filesCount = fileNames.length
    const postsCount = count && count <= filesCount ? count : fileNames.length

    const allPostsData = [];

    let i = 0
    let selectedPostsCount = 0

    while (i < filesCount && selectedPostsCount < postsCount) {

      const fileName = fileNames[i];

      // Read markdown file as string
      const fullPath = path.join(pathname, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents)

      if (isProduction() && isInDraftPhase(matterResult)) {
        i++
        continue
      }

      const postData = getPostMetaData(fileName, matterResult)

      allPostsData.push(postData)

      selectedPostsCount++
      i++
    }

    // Sort posts by date
    return allPostsData.sort((a, b) => {
      if (a.date < b.date) {
        return 1
      } else {
        return -1
      }
    })
  }


  export function getAllPostIds(postType: PostType) {

    const pathname = getPostTypeDirectory(postType);

    const fileNames = fs.readdirSync(pathname)
    return fileNames.map(fileName => {
      return {
        params: {
          id: fileName.replace(/\.md$/, '')
        }
      }
    })
  }


  export async function getPostContent(id: string, postType: PostType) {

    const pathname = getPostTypeDirectory(postType);

    const fullPath = path.join(pathname, `${id}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
      .use(html)
      .process(matterResult.content)

    const contentHtml = processedContent.toString()

    // Combine the data with the id and contentHtml
    return {
      id,
      contentHtml,
      ...(matterResult.data as { date: string; title: string })
    }
  }


  export const getSuggestedPosts = (postType: PostType, currentPostId: string): PostMeta[] => {

    const allPosts = getSortedPostsData(postType)

    let currentPostIndex: number

    for (let i = 0; i < allPosts.length; i++) {

      const post = allPosts[i]

      if (post.id === currentPostId) {
        currentPostIndex = i
        break
      }
    }

    const prevPost = allPosts[currentPostIndex + 1] || null
    const nextPost = allPosts[currentPostIndex - 1] || null

    return [prevPost, nextPost]
  }

}