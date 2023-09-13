import React from 'react';
import BlogPostForm from '../components/BlogPostForm';
import {useBlogContext} from '../../context/BlogContext';
import {NativeStackHeaderProps} from '@react-navigation/native-stack';

const EditScreen = ({
  navigation,
  route,
}: {
  navigation: NativeStackHeaderProps['navigation'];
  route: any;
}) => {
  const {currentPost} = useBlogContext();
  const {title: initialTitle, content: initialContent} = currentPost;
  const {editBlogPost, blogPosts} = useBlogContext();

  const blogId = route?.params?.id;

  const blogIndex = blogPosts.findIndex(post => post.id === blogId);

  return (
    <BlogPostForm
      initialValues={{initialTitle, initialContent}}
      onSubmit={(title: string, content: string) => {
        return editBlogPost(blogIndex, blogId, title, content, () => {
          navigation.navigate('Root');
        });
      }}
    />
  );
  // (
  //   <View>
  //     <InputLabel>Enter Title:</InputLabel>
  //     <InputField value={title} onChangeText={text => setTitle(text)} />
  //     <InputLabel>Enter Content:</InputLabel>
  //     <InputField value={content} onChangeText={text => setContent(text)} />
  //     <InputLabel>{id}</InputLabel>
  //   </View>
  // );
};

export default EditScreen;
