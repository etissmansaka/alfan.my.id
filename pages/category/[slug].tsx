import React from 'react';
import { NextSeo } from 'next-seo';
import { GetStaticPaths, GetStaticProps } from 'next';
// eslint-disable-next-line
// @ts-ignore
import { frontMatter as posts } from '../blog/**/*.mdx';
import Main from '~/components/layouts/Main';
import BlogPost from '~/components/layouts/BlogPost';
import config from '~/utils/config';

const Category = ({ allPosts, slug }) => {
  return (
    <Main>
      <NextSeo
        title={`Artikel ${slug}`}
        description={`Menampilkan artikel dengan kategori ${slug}`}
        canonical={`${config.BASE_URL}/category/${slug}`}
      />
      {allPosts.map(post => {
        // eslint-disable-next-line
        const slug = post.__resourcePath.replace(process.env.NODE_ENV === 'development' ? 'blog\\' : 'blog/', '/blog/').replace('.mdx', '');

        return (
          <BlogPost
            title={post.title}
            description={post.description}
            publishedAt={post.publishedAt}
            slug={slug}
            category={post.category}
            key={slug}
            mt={4}
          />
        );
      })}
    </Main>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: posts.map(post => ({
      params: {
        slug: post.category
      }
    })),
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const allPosts = posts.filter(post => post.category === params.slug);

  return {
    props: {
      allPosts,
      slug: params.slug
    }
  };
};

export default Category;
