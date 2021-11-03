export interface PostMeta {
  id: string
  title: string
  description: string
  date: string
  thumbnail: string
}

export interface PostContent {
  id: string
  title: string
  date: string
  contentHtml: string
  titleSuffix?: string
}