import React, { createContext, useReducer } from 'react';
import searchImages from '../api';

export const AppContext = createContext();

const initialState = {
  images: [],
  loading: false,
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SEARCH_IMAGES':
      return { ...state, loading: true };
    case 'SEARCH_IMAGES_SUCCESS':
      return { ...state, images: action.payload, loading: false, error: null };
    case 'SEARCH_IMAGES_ERROR':
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const searchImagesHandler = async (term) => {
    dispatch({ type: 'SEARCH_IMAGES' });

    try {
      const result = await searchImages(term);
      dispatch({ type: 'SEARCH_IMAGES_SUCCESS', payload: result });
    } catch (error) {
      dispatch({ type: 'SEARCH_IMAGES_ERROR', payload: error.message });
    }
  };

  return (
    <AppContext.Provider value={{ state, searchImagesHandler }}>
      {children}
    </AppContext.Provider>
  );
};
