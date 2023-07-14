import {Dispatch, useContext, SetStateAction, createContext} from 'react';

export type GlobalContent = {
  loading: boolean | undefined;
  setLoading: Dispatch<SetStateAction<boolean>>;
  blogPosts: {title: string}[];
  setBlogPosts: Dispatch<SetStateAction<{title: string}[]>>;
};

export const MyGlobalContext = createContext<GlobalContent>({
  loading: false,
  setLoading: () => {},
  blogPosts: [{title: 'Blog Post #1'}, {title: 'Blog Post #2'}],
  setBlogPosts: () => {},
});

export const useGlobalContext = () => useContext(MyGlobalContext);
