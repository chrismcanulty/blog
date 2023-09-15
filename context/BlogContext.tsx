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
      console.log('response', response.data);
      setBlogPosts(response.data);
    } catch (err: any) {
      setErrorMessage(err);
    }
  }, []);

  const addBlogPost = useCallback(
    async (title: string, content: string, callback: () => void) => {
      try {
        await jsonServer.post('/blogposts', {title, content});
      } catch (err: any) {
        setErrorMessage(err);
      }
      callback();
    },
    [],
  );

  const deleteBlogPost = useCallback(
    async (id: number) => {
      try {
        await jsonServer.delete(`/blogposts/${id}`);
        getBlogPosts();
      } catch (err: any) {
        setErrorMessage(err);
      }
    },
    [getBlogPosts],
  );

  const editBlogPost = useCallback(
    async (
      id: number,
      title: string,
      content: string,
      callback: () => void,
    ) => {
      try {
        await jsonServer.put(`/blogposts/${id}`, {title, content});
        getBlogPosts();
      } catch (err: any) {
        setErrorMessage(err);
      }
      callback();
    },
    [getBlogPosts],
  );

  const state = useMemo(
    () => ({
      blogPosts,
      setBlogPosts,
      errorMessage,
      setErrorMessage,
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
      errorMessage,
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
