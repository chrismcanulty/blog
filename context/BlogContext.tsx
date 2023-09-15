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
import jsonServer from '../src/api/jsonServer';

export type BlogContent = {
  // loading: boolean | undefined;
  // setLoading: Dispatch<SetStateAction<boolean>>;
  blogPosts: {id: number; title: string; content: string}[];
  setBlogPosts: Dispatch<
    SetStateAction<{id: number; title: string; content: string}[]>
  >;
  addBlogPost: (title: string, content: string, callback: () => void) => void;
  deleteBlogPost: (index: number) => void;
  editBlogPost: (
    index: number,
    id: number,
    title: string,
    content: string,
    callback: () => void,
  ) => void;
  getBlogPosts: () => void;
  currentPost: {id: number; title: string; content: string};
  setCurrentPost: Dispatch<
    SetStateAction<{id: number; title: string; content: string} | undefined>
  >;
};

export const MyBlogContext = createContext<BlogContent>({
  // loading: false,
  // setLoading: () => {},
  blogPosts: [],
  setBlogPosts: () => {},
  addBlogPost: () => {},
  deleteBlogPost: () => {},
  editBlogPost: () => {},
  getBlogPosts: () => {},
  currentPost: {
    id: 0,
    title: '',
    content: '',
  },
  setCurrentPost: () => {},
});

export function MyBlogProvider({children}: {children: React.ReactNode}) {
  const [blogPosts, setBlogPosts] = useState<BlogContent['blogPosts']>([]);
  const [currentPost, setCurrentPost] = useState<BlogContent['currentPost']>();
  const [errorMessage, setErrorMessage] = useState<any>(null);

  const getBlogPosts = useCallback(async () => {
    try {
      const response = await jsonServer.get('/blogposts');
      setBlogPosts(response.data.results);
    } catch (err: any) {
      setErrorMessage(err);
    }
  }, []);

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

  const editBlogPost = useCallback(
    (
      index: number,
      id: number,
      title: string,
      content: string,
      callback: () => void,
    ) => {
      const tempBlogPosts = [...blogPosts];
      // find blog post to modify based on post id
      tempBlogPosts.splice(index, 1, {id, title, content});
      setBlogPosts(tempBlogPosts);
      callback();
    },
    [blogPosts],
  );

  const state = useMemo(
    () => ({
      blogPosts,
      setBlogPosts,
      addBlogPost,
      deleteBlogPost,
      editBlogPost,
      currentPost,
      setCurrentPost,
      getBlogPosts,
    }),
    [
      addBlogPost,
      blogPosts,
      currentPost,
      deleteBlogPost,
      editBlogPost,
      getBlogPosts,
    ],
  );

  return (
    <MyBlogContext.Provider value={state}>{children}</MyBlogContext.Provider>
  );
}

export const useBlogContext = () => useContext(MyBlogContext);
