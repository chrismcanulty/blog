import React, {useState, useEffect, useContext} from 'react';
import {node} from 'prop-types';

interface UserContextType {
  /** Unique id of the item */
  i: string;
}

export const UserContext = React.createContext<UserContextType | undefined>(
  undefined,
);

const UserProvider = ({children}) => {
  // define user context state here

  const userContext = useContext(UserContext);
  if (!userContext) {
    throw new Error('No UserContext.Provider found when calling User Provider');
  }
  return userContext;
  // define user context functions here, useEffect under those if needed
};

UserProvider.propTypes = {
  children: node.isRequired,
};

export default UserProvider;
