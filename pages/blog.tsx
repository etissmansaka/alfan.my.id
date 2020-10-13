import React from "react";
import { Text } from "@chakra-ui/core";
import { frontMatter as posts } from "./blog/**/*.mdx";
import BlogPost from "~/components/layouts/BlogPost";
import Main from "~/components/layouts/Main";

const Blog = () => {
  return (
    <Main>
      {posts.map((post) => {
        const slug = post.__resourcePath
          .replace("blog\\\\", "")
          .replace(".mdx", "");
        return (
          <BlogPost
            title={post.title}
            description={post.description}
            publishedAt={post.publishedAt}
            category={post.category}
            slug={slug}
          />
        );
      })}
    </Main>
  );
};

export default Blog;
