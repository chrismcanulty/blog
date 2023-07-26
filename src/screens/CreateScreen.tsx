import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
// import {useBlogContext} from '../../context/BlogContext';
// import {NativeStackHeaderProps} from '@react-navigation/native-stack';
// import styled from 'styled-components/native';

const CreateScreen = ({navigation}: any) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  // const {blogPosts} = useBlogContext();

  // const blogId = route.params.id;

  // const blogPost = blogPosts.find(post => post.id === blogId);

  return (
    <View>
      <Text>Enter Title:</Text>
      <TextInput value={title} onChangeText={text => setTitle(text)} />
      <Text>Enter Content:</Text>
      <TextInput value={content} onChangeText={text => setContent(text)} />
    </View>
  );
};

export default CreateScreen;
