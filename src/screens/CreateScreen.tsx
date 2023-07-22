import React from 'react';
import {View, Text} from 'react-native';
import {useBlogContext} from '../../context/BlogContext';
import {NativeStackHeaderProps} from '@react-navigation/native-stack';
// import styled from 'styled-components/native';

const CreateScreen = ({
  navigation,
  route,
}: {
  navigation: NativeStackHeaderProps;
  route: any;
}) => {
  const {blogPosts} = useBlogContext();

  // const blogId = route.params.id;

  // const blogPost = blogPosts.find(post => post.id === blogId);

  return (
    <View>
      <Text>Create Screen</Text>
    </View>
  );
};

export default CreateScreen;
