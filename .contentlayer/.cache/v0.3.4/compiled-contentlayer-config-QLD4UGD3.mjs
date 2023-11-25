// contentlayer.config.ts
import withToc from "@stefanprobst/rehype-extract-toc";
import withTocExport from "@stefanprobst/rehype-extract-toc/mdx";
import { makeSource } from "contentlayer/source-files";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeKatex from "rehype-katex";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";

// content/definitions/Article.ts
import { defineDocumentType } from "contentlayer/source-files";
import readingTime from "reading-time";

// content/definitions/Author.ts
import { defineNestedType as defineNestedType2 } from "contentlayer/source-files";

// content/definitions/Image.ts
import { defineNestedType } from "contentlayer/source-files";
var Image = defineNestedType(() => ({
  name: "Image",
  fields: {
    url: {
      type: "string",
      description: "The URL of the image",
      required: true
    },
    alt: {
      type: "string",
      description: "The alt text of the image",
      required: true
    }
  }
}));

// content/definitions/Author.ts
var Author = defineNestedType2(() => ({
  name: "Author",
  fields: {
    name: {
      type: "string",
      description: "The name of the author",
      required: true
    },
    designation: {
      type: "string",
      description: "The designation of the author",
      required: true
    },
    url: {
      type: "string",
      description: "The URL of the author website"
    },
    avatar: {
      type: "nested",
      of: Image,
      description: "The avatar of the author",
      default: {
        src: "/images/authors/default.png",
        alt: "Author"
      }
    }
  }
}));

// content/definitions/Category.ts
import { defineNestedType as defineNestedType3 } from "contentlayer/source-files";
var Category = defineNestedType3(() => ({
  name: "Category",
  fields: {
    title: {
      type: "string",
      description: "The title of the category",
      required: true
    }
  }
}));

// content/definitions/Series.ts
import { defineNestedType as defineNestedType4 } from "contentlayer/source-files";
var Series = defineNestedType4(() => ({
  name: "Series",
  fields: {
    title: {
      type: "string",
      description: "The title of the series",
      required: true
    },
    order: {
      type: "number",
      description: "The order of the series",
      required: true
    }
  }
}));

// content/definitions/Tag.ts
import { defineNestedType as defineNestedType5 } from "contentlayer/source-files";
var Tag = defineNestedType5(() => ({
  name: "Tag",
  fields: {
    title: {
      type: "string",
      description: "The title of the tag",
      required: true
    }
  }
}));

// content/definitions/Article.ts
var Article = defineDocumentType(() => ({
  name: "Article",
  filePathPattern: "articles/*.mdx",
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the post",
      required: true
    },
    publishedAt: {
      type: "string",
      description: "The date the post was published"
    },
    description: {
      type: "string",
      description: "The description of the post",
      required: true
    },
    seoDescription: {
      type: "string",
      description: "The SEO description of the post",
      required: true
    },
    status: {
      type: "enum",
      options: ["draft", "published"],
      description: "The status of the post",
      required: true
    },
    series: {
      type: "nested",
      of: Series,
      description: "The series the post belongs to"
    },
    tags: {
      type: "list",
      of: Tag,
      description: "The tags of the post"
    },
    categories: {
      type: "list",
      of: Category,
      description: "The categories of the post",
      required: true
    },
    author: {
      type: "nested",
      of: Author,
      description: "The author of the post",
      required: true
    },
    covers: {
      type: "list",
      of: Image,
      description: "The covers of the post",
      required: true
    }
  },
  computedFields: {
    readingTime: {
      type: "json",
      resolve: (doc) => readingTime(doc.body.raw)
    },
    wordCount: {
      type: "number",
      resolve: (doc) => doc.body.raw.split(/\s+/gu).length
    },
    slug: {
      type: "string",
      description: "The slug of the post",
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, "")
    }
  }
}));

// content/definitions/Snippet.ts
import { defineDocumentType as defineDocumentType2 } from "contentlayer/source-files";
var Snippets = defineDocumentType2(() => ({
  name: "Snippet",
  filePathPattern: "snippets/*.mdx",
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the snippet",
      required: true
    },
    description: {
      type: "string",
      description: "The description of the snippet",
      required: true
    },
    language: {
      type: "string",
      description: "The language of the snippet",
      required: true
    },
    logo: {
      type: "nested",
      of: Image,
      description: "The logo of the snippet",
      required: true
    }
  },
  computedFields: {
    slug: {
      type: "string",
      description: "The slug of the snippet",
      required: true,
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, "")
    }
  }
}));

// contentlayer.config.ts
var PrettyCodeOptions = {
  theme: {
    dark: "github-dark",
    light: "github-light"
  },
  onVisitLine(node) {
    if (node.children.length === 0) {
      node.children = [{ type: "text", value: " " }];
    }
  },
  onVisitHighlightedLine(node) {
    const nodeClass = node.properties.className;
    if (nodeClass && nodeClass.length > 0) {
      node.properties.className.push("highlighted");
    } else {
      node.properties.className = ["highlighted"];
    }
  },
  onVisitHighlightedChars(node) {
    node.properties.className = ["word"];
  }
};
var contentlayer_config_default = makeSource({
  contentDirPath: "content",
  documentTypes: [Article, Snippets],
  mdx: {
    esbuildOptions(options) {
      options.target = "esnext";
      return options;
    },
    remarkPlugins: [[remarkGfm], [remarkMath]],
    rehypePlugins: [
      [rehypeKatex],
      [rehypeSlug],
      [rehypePrettyCode, PrettyCodeOptions],
      [withToc],
      [withTocExport, { name: "toc" }],
      [
        rehypeAutolinkHeadings,
        {
          behavior: "prepend",
          properties: {
            className: ["anchor"]
          }
        }
      ]
    ]
  }
});
export {
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-QLD4UGD3.mjs.map
