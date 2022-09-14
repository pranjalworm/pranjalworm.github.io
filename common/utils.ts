import { PostType } from "./interfaces"

export const getPostTypePath = (type: PostType) => {

  switch (type) {
    case PostType.BlogPost:
      return 'posts'

    case PostType.Project:
      return 'projects'
  }

}