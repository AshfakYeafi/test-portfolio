// NOTE This file is auto-generated by Contentlayer

import type { Markdown, MDX, ImageFieldData, IsoDateTimeString } from 'contentlayer/core'
import * as Local from 'contentlayer/source-files'

export { isType } from 'contentlayer/client'

export type { Markdown, MDX, ImageFieldData, IsoDateTimeString }

/** Document types */
export type Article = {
  /** File path relative to `contentDirPath` */
  _id: string
  _raw: Local.RawDocumentData
  type: 'Article'
  /** The title of the post */
  title: string
  /** The date the post was published */
  publishedAt?: string | undefined
  /** The description of the post */
  description: string
  /** The SEO description of the post */
  seoDescription: string
  /** The status of the post */
  status: 'draft' | 'published'
  /** The series the post belongs to */
  series?: Series | undefined
  /** The tags of the post */
  tags?: Tag[] | undefined
  /** The categories of the post */
  categories: Category[]
  /** The author of the post */
  author: Author
  /** The covers of the post */
  covers: Image[]
  /** MDX file body */
  body: MDX
  readingTime: json
  wordCount: number
  /** The slug of the post */
  slug: string
}

export type Snippet = {
  /** File path relative to `contentDirPath` */
  _id: string
  _raw: Local.RawDocumentData
  type: 'Snippet'
  /** The title of the snippet */
  title: string
  /** The description of the snippet */
  description: string
  /** The language of the snippet */
  language: string
  /** The logo of the snippet */
  logo: Image
  /** MDX file body */
  body: MDX
  /** The slug of the snippet */
  slug: string
}  

/** Nested types */
export type Author = {
  /** File path relative to `contentDirPath` */
  _id: string
  _raw: Local.RawDocumentData
  type: 'Author'
  /** The name of the author */
  name: string
  /** The designation of the author */
  designation: string
  /** The URL of the author website */
  url?: string | undefined
  /** The avatar of the author */
  avatar: Image

}

export type Category = {
  /** File path relative to `contentDirPath` */
  _id: string
  _raw: Local.RawDocumentData
  type: 'Category'
  /** The title of the category */
  title: string

}

export type Image = {
  /** File path relative to `contentDirPath` */
  _id: string
  _raw: Local.RawDocumentData
  type: 'Image'
  /** The URL of the image */
  url: string
  /** The alt text of the image */
  alt: string

}

export type Series = {
  /** File path relative to `contentDirPath` */
  _id: string
  _raw: Local.RawDocumentData
  type: 'Series'
  /** The title of the series */
  title: string
  /** The order of the series */
  order: number

}

export type Tag = {
  /** File path relative to `contentDirPath` */
  _id: string
  _raw: Local.RawDocumentData
  type: 'Tag'
  /** The title of the tag */
  title: string

}  

/** Helper types */

export type AllTypes = DocumentTypes | NestedTypes
export type AllTypeNames = DocumentTypeNames | NestedTypeNames

export type DocumentTypes = Article | Snippet
export type DocumentTypeNames = 'Article' | 'Snippet'

export type NestedTypes = Author | Category | Image | Series | Tag
export type NestedTypeNames = 'Author' | 'Category' | 'Image' | 'Series' | 'Tag'

export type DataExports = {
  allDocuments: DocumentTypes[]
  allArticles: Article[]
  allSnippets: Snippet[]
}


export interface ContentlayerGenTypes {
  documentTypes: DocumentTypes
  documentTypeMap: DocumentTypeMap
  documentTypeNames: DocumentTypeNames
  nestedTypes: NestedTypes
  nestedTypeMap: NestedTypeMap
  nestedTypeNames: NestedTypeNames
  allTypeNames: AllTypeNames
  dataExports: DataExports
}

declare global {
  interface ContentlayerGen extends ContentlayerGenTypes {}
}

export type DocumentTypeMap = {
  Article: Article
  Snippet: Snippet
}

export type NestedTypeMap = {
  Author: Author
  Category: Category
  Image: Image
  Series: Series
  Tag: Tag
}

 