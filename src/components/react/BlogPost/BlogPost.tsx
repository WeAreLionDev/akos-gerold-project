import type { FC } from 'react'

import { FormattedDate } from 'src/components/react'

import type { BlogPostProps } from './BlogPost.interface'

const BlogPost: FC<BlogPostProps> = ({ title, pubDate, slug }) => {
  return (
    <div className="flex md:contents">
      <div className="relative mr-10 md:col-start-5 md:col-end-6 md:mx-auto">
        <div className="flex h-full w-6 items-center justify-center">
          <div className="pointer-events-none h-full w-1 bg-orange-800"></div>
        </div>
        <div className="absolute top-1/2 -mt-3 h-6 w-6 rounded-full bg-orange-500 shadow"></div>
      </div>
      <div className="my-4 mr-auto rounded-xl bg-orange-500 p-4 shadow-md md:col-start-6 md:col-end-10">
        <a className="mb-5 rounded-lg bg-orange-600 shadow-xl lg:mb-0" href={`/blog/${slug}/`}>
          <h3 className="mb-1 text-lg font-semibold">{title}</h3>
        </a>
        <FormattedDate className="italic text-gray-600" date={pubDate} />
      </div>
    </div>
  )
}

export default BlogPost
