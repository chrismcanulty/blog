import React from 'react';
import BlogPostForm from '../components/BlogPostForm';
import {useBlogContext} from '../../context/BlogContext';
import {NativeStackHeaderProps} from '@react-navigation/native-stack';

const EditScreen = ({navigation}: NativeStackHeaderProps) => {
  const {currentPost} = useBlogContext();
  const {
    title: initialTitle,
    content: initialContent,
    id: blogId,
  } = currentPost;
  const {editBlogPost} = useBlogContext();

  return (
    <>
      <BlogPostForm
        initialValues={{initialTitle, initialContent}}
        onSubmit={(title: string, content: string) => {
          return editBlogPost(blogId, title, content, () => {
            navigation.pop();
          });
        }}
      />
    </>
  );
};

export default EditScreen;
