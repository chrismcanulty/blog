import React from 'react';
import {
  Dispatch,
  useContext,
  SetStateAction,
  createContext,
  useState,
  useMemo,
  useCallback,
} from 'react';

export type BlogContent = {
  // loading: boolean | undefined;
  // setLoading: Dispatch<SetStateAction<boolean>>;
  blogPosts: {id: number; title: string; content: string}[];
  setBlogPosts: Dispatch<
    SetStateAction<{id: number; title: string; content: string}[]>
  >;
  addBlogPost: (title: string, content: string, callback: () => void) => void;
  deleteBlogPost: (index: number) => void;
};

export const MyBlogContext = createContext<BlogContent>({
  // loading: false,
  // setLoading: () => {},
  blogPosts: [],
  setBlogPosts: () => {},
  addBlogPost: () => {},
  deleteBlogPost: () => () => {},
});

export function MyBlogProvider({children}: {children: React.ReactNode}) {
  const [blogPosts, setBlogPosts] = useState<BlogContent['blogPosts']>([]);

  const addBlogPost = useCallback(
    (title: string, content: string, callback: () => void) => {
      setBlogPosts([
        ...blogPosts,
        {
          id: Math.floor(Math.random() * 99999),
          title: title,
          content: content,
        },
      ]);
      callback();
    },
    [blogPosts],
  );

  const deleteBlogPost = useCallback(
    (index: number) => {
      const tempBlogPosts = [...blogPosts];
      // find blog post to delete based on post id
      tempBlogPosts.splice(index, 1);
      setBlogPosts(tempBlogPosts);
    },
    [blogPosts],
  );

  const state = useMemo(
    () => ({
      blogPosts,
      setBlogPosts,
      addBlogPost,
      deleteBlogPost,
    }),
    [addBlogPost, blogPosts, deleteBlogPost],
  );

  return (
    <MyBlogContext.Provider value={state}>{children}</MyBlogContext.Provider>
  );
}

export const useBlogContext = () => useContext(MyBlogContext);
