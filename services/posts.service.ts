import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { unified } from 'unified'
import remarkRehype from 'remark-rehype'
import rehypeRaw from 'rehype-raw'
import remarkParse from 'remark-parse'
import rehypeFormat from 'rehype-format'
import rehypeStringify from 'rehype-stringify'
import { isProduction } from '../dev-utils'
import { PostMeta, PostType } from '../common/interfaces'

export namespace PostsService {
  const isInDraftPhase = (matterResult: any) => {
    return matterResult.data.draft
  }

  const getContentDirectoryPath = () => {
    return path.join(process.cwd(), 'content')
  }

  const getPostId = (fileName: string) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')

    return id
  }

  export function getSortedPostsData(type: PostType, count?: number) {
    const pathname = getContentDirectoryPath()
    const fileNames = fs.readdirSync(pathname)

    const filesCount = fileNames.length
    const postsCount = count && count <= filesCount ? count : fileNames.length

    const allPostsMetaData = []

    let i = 0
    let selectedPostsCount = 0

    while (i < filesCount && selectedPostsCount < postsCount) {
      const fileName = fileNames[i]

      // Read markdown file as string
      const fullPath = path.join(pathname, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents)

      if (isProduction() && isInDraftPhase(matterResult)) {
        i++
        continue
      }

      const postId = getPostId(fileName)

      const postMetaData = {
        ...(matterResult.data as PostMeta),
        id: postId,
      }

      if (postMetaData.type === type) {
        allPostsMetaData.push(postMetaData)
        selectedPostsCount++
      }

      i++
    }

    // Sort posts by date
    return allPostsMetaData.sort((a, b) => {
      if (a.date < b.date) {
        return 1
      } else {
        return -1
      }
    })
  }

  export function getAllPostIds() {
    const pathname = getContentDirectoryPath()

    const fileNames = fs.readdirSync(pathname)
    return fileNames.map((fileName) => {
      return {
        params: {
          id: fileName.replace(/\.md$/, ''),
        },
      }
    })
  }

  export async function getPostContent(id: string) {
    const pathname = getContentDirectoryPath()

    const fullPath = path.join(pathname, `${id}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    const processedContent = await unified()
      .use(remarkParse)
      .use(remarkRehype, { allowDangerousHtml: true })
      .use(rehypeRaw)
      .use(rehypeFormat)
      .use(rehypeStringify)
      .process(matterResult.content)
      .catch((error) => {
        throw error
      })

    const contentHtml = processedContent.toString()

    // Combine the data with the id and contentHtml
    return {
      id,
      contentHtml,
      ...(matterResult.data as { date: string; title: string }),
    }
  }

  export const getSuggestedPosts = (
    type: PostType,
    currentPostId: string
  ): PostMeta[] => {
    const allPosts = getSortedPostsData(type)

    let currentPostIndex = 1

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
