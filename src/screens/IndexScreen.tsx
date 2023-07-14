import React from 'react';
import {View, Text} from 'react-native';
import {useGlobalContext} from '../../context/User.Context';

const IndexScreen = () => {
  const {blogPosts} = useGlobalContext();
  return (
    <View>
      <Text>{blogPosts[0].title}</Text>
      <Text>{blogPosts[1].title}</Text>
    </View>
  );
};

// const styles = StyleSheet.create({});

export default IndexScreen;
