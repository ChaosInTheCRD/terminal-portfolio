import { defineDocumentType, makeSource } from 'contentlayer/source-files'

/** @type {import('contentlayer/sourcefiles').ComputedFields} */
const computedFields = {
  slug: {
    type: 'string',
    resolve: (doc) => `/${doc._raw.flattenedPath}`,
  },
  slugAsParams: {
    type: 'string',
    resolve: (doc) => doc._raw.flattenedPath.split('/').slice(1).join('/'),
  },
}

export const Doc = defineDocumentType(() => ({
  name: 'Doc',
  filePathPattern: `blog/**/*.md`,
  contentType: 'markdown',
  fields: {
    title: {
      type: 'string',
      required: true,
    }
  }
}))

export default makeSource({
  contentDirPath: 'src/content',
  documentTypes: [Doc],
})
