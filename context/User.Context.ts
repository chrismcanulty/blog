import {Dispatch, useContext, SetStateAction, createContext} from 'react';

export type GlobalContent = {
  loading: boolean | undefined;
  setLoading: Dispatch<SetStateAction<boolean>>;
};

export const MyGlobalContext = createContext<GlobalContent>({
  loading: false,
  setLoading: () => {},
});

export const useGlobalContext = () => useContext(MyGlobalContext);
