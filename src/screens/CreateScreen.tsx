import React from 'react';
import {useBlogContext} from '../../context/BlogContext';
import {NativeStackHeaderProps} from '@react-navigation/native-stack';
import BlogPostForm from '../components/BlogPostForm';

const CreateScreen = ({navigation}: NativeStackHeaderProps) => {
  const {addBlogPost} = useBlogContext();

  // const blogId = route.params.id;

  // const blogPost = blogPosts.find(post => post.id === blogId);

  // const initialTitle = '';
  // const initialContent = '';

  return (
    <BlogPostForm
      onSubmit={(title: string, content: string) => {
        return addBlogPost(title, content, () => {
          navigation.navigate('Root');
        });
      }}
    />
  );
};

export default CreateScreen;
