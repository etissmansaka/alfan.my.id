import React from 'react';
import { NextSeo } from 'next-seo';
import { Text } from '@chakra-ui/core';
// eslint-disable-next-line
// @ts-ignore
import { frontMatter as posts } from './blog/**/*.mdx';
import BlogPost from '~/components/layouts/BlogPost';
import Main from '~/components/layouts/Main';

const convertDate = date => {
  const newDate = date.split('-');
  return new Date(newDate[2], newDate[1] - 1, newDate[0]);
};

const Blog = () => {
  const sortedPosts = posts.sort((a, b) => Number(new Date(convertDate(b.publishedAt))) - Number(new Date(convertDate(a.publishedAt))));

  return (
    <Main>
      <NextSeo title="Blog" description="Catatan dan keluh kesah keseharian sebagai frontend developer dan siswa yang kurang berguna" />
      {posts.length > 0 ? (
        sortedPosts.map(post => {
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
            />
          );
        })
      ) : (
        <Text as="p">Nothing Hehehe :)</Text>
      )}
    </Main>
  );
};

export default Blog;
