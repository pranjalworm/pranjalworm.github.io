export interface GlobalState {
  theme: boolean
}

export enum PostType {
  BlogPost = 'blogpost',
  Project = 'project'
}

export interface PostMeta {
  id: string
  title: string
  description: string
  date: string
  thumbnail: string
  type: PostType
  draft: boolean
}

export interface PostContent {
  id: string
  title: string
  date: string
  contentHtml: string
  titleSuffix?: string
}