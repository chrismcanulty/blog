import React from 'react';
import {View, Text} from 'react-native';
import {useBlogContext} from '../../context/BlogContext';
import {NativeStackHeaderProps} from '@react-navigation/native-stack';
// import styled from 'styled-components/native';

const ShowScreen = ({
  navigation,
  route,
}: {
  navigation: NativeStackHeaderProps;
  route: any;
}) => {
  const {} = useBlogContext();

  const blogId = route.params.id;

  return (
    <View>
      <Text>Show Screen</Text>
      <Text>Blog Id: {blogId}</Text>
    </View>
  );
};

export default ShowScreen;
