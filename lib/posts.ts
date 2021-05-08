import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'

export enum PostType {
  BlogPost = 'blog-posts',
  Project = 'projects'
}

const postsDirectory = path.join(process.cwd(), PostType.BlogPost)
const projectsDirectory = path.join(process.cwd(), PostType.Project)

const getPostTypeDirectory = (postType: PostType) => {

  switch (postType) {
    case PostType.BlogPost:
      return postsDirectory;

    case PostType.Project:
      return projectsDirectory;
  }
}

const isInDraftPhase = (matterResult: any) => {

  return matterResult.data.draft
}


export function getSortedPostsData(postType: PostType) {

  const pathname = getPostTypeDirectory(postType)
  const fileNames = fs.readdirSync(pathname)

  const allPostsData = [];


  for (let i = 0; i < fileNames.length; i++) {

    const fileName = fileNames[i];

    // Read markdown file as string
    const fullPath = path.join(pathname, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    if (!isInDraftPhase(matterResult)) {

      // Remove ".md" from file name to get id
      const id = fileName.replace(/\.md$/, '')
      const postData = {
        id,
        ...(matterResult.data as { date: string; title: string, draft: boolean })
      }

      allPostsData.push(postData)
    }
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

export async function getPostData(id: string, postType: PostType) {

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