import React from 'react';
import BlogPostForm from '../components/BlogPostForm';
import {useBlogContext} from '../../context/BlogContext';
import {NativeStackHeaderProps} from '@react-navigation/native-stack';
import {Text} from 'react-native';

const EditScreen = ({navigation}: NativeStackHeaderProps) => {
  const {currentPost} = useBlogContext();
  const {
    title: initialTitle,
    content: initialContent,
    id: blogId,
  } = currentPost;
  const {editBlogPost, blogPosts} = useBlogContext();

  const blogIndex = blogPosts.findIndex(post => post.id === blogId);

  console.log(blogId);

  return (
    <>
      <BlogPostForm
        initialValues={{initialTitle, initialContent}}
        onSubmit={(title: string, content: string) => {
          return editBlogPost(blogIndex, blogId, title, content, () => {
            navigation.navigate('Root');
          });
        }}
      />
      <Text>Blog id - {blogId}</Text>
    </>
  );
};

export default EditScreen;
