import React from 'react';
import {useBlogContext} from '../../context/BlogContext';
import {NativeStackHeaderProps} from '@react-navigation/native-stack';
import BlogPostForm from '../components/BlogPostForm';

const CreateScreen = ({navigation}: NativeStackHeaderProps) => {
  const {addBlogPost} = useBlogContext();

  // const blogId = route.params.id;

  // const blogPost = blogPosts.find(post => post.id === blogId);

  return <BlogPostForm />;
  // (
  //   <View>
  //     <InputLabel>Enter Title:</InputLabel>
  //     <InputField value={title} onChangeText={text => setTitle(text)} />
  //     <InputLabel>Enter Content:</InputLabel>
  //     <InputField value={content} onChangeText={text => setContent(text)} />
  //     <Button
  //       title="Add Blog Post"
  //       onPress={() => {
  //         addBlogPost(title, content, () => {
  //           navigation.navigate('Root');
  //         });
  //       }}
  //     />
  //   </View>
  // );
};

export default CreateScreen;
