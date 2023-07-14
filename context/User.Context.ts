import {Dispatch, useContext, SetStateAction, createContext} from 'react';

export type GlobalContent = {
  loading: boolean | undefined;
  setLoading: Dispatch<SetStateAction<boolean>>;
  blogPosts: {title: string}[];
  setBlogPosts: Dispatch<SetStateAction<{title: string}[]>>;
  addBlogPost: () => {};
};

export const MyGlobalContext = createContext<GlobalContent>({
  loading: false,
  setLoading: () => {},
  blogPosts: [],
  setBlogPosts: () => {},
  addBlogPost: async () => {},
});

export const useGlobalContext = () => useContext(MyGlobalContext);
