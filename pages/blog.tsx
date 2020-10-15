import React from 'react';
import { NextSeo } from 'next-seo';
// eslint-disable-next-line
// @ts-ignore
import { frontMatter as posts } from './blog/**/*.mdx';
import BlogPost from '~/components/layouts/BlogPost';
import Main from '~/components/layouts/Main';

const Blog = () => {
  const sortedPosts = posts.sort((a, b) => parseInt(b.publishedAt, 10) - parseInt(a.publishedAt, 10));
  return (
    <Main>
      <NextSeo title="Blog" description="Catatan dan keluh kesah keseharian sebagai frontend developer dan siswa yang kurang berguna" />
      {sortedPosts.map(post => {
        // eslint-disable-next-line
        const slug = post.__resourcePath.replace('blog\\\\', '').replace('.mdx', '');
        return (
          <BlogPost
            title={post.title}
            description={post.description}
            publishedAt={post.publishedAt}
            category={post.category}
            slug={slug}
            key={slug}
            variant="blog"
          />
        );
      })}
    </Main>
  );
};

export default Blog;
