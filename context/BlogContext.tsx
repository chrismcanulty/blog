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
  blogPosts: {title: string}[];
  setBlogPosts: Dispatch<SetStateAction<{title: string}[]>>;
  addBlogPost: () => void;
};

export const MyBlogContext = createContext<BlogContent>({
  // loading: false,
  // setLoading: () => {},
  blogPosts: [],
  setBlogPosts: () => {},
  addBlogPost: async () => {},
});

export function MyBlogProvider({children}: {children: React.ReactNode}) {
  const [blogPosts, setBlogPosts] = useState<BlogContent['blogPosts']>([]);

  const addBlogPost = useCallback(() => {
    setBlogPosts([...blogPosts, {title: `Blog Post #${blogPosts.length + 1}`}]);
  }, [blogPosts]);

  const state = useMemo(
    () => ({
      blogPosts,
      setBlogPosts,
      addBlogPost,
    }),
    [addBlogPost, blogPosts],
  );

  return (
    <MyBlogContext.Provider value={state}>{children}</MyBlogContext.Provider>
  );
}

export const useBlogContext = () => useContext(MyBlogContext);
