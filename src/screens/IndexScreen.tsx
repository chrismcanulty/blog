import React from 'react';
import {View, Text, FlatList, Button} from 'react-native';
import {useGlobalContext} from '../../context/User.Context';

const IndexScreen = () => {
  const {blogPosts, addBlogPost} = useGlobalContext();

  return (
    <View>
      <Text>Index Screen</Text>
      <Button title="Add Post" onPress={addBlogPost} />
      <FlatList
        data={blogPosts}
        keyExtractor={blogPost => blogPost.title}
        renderItem={({item}) => {
          return <Text>{item.title}</Text>;
        }}
      />
    </View>
  );
};

// const styles = StyleSheet.create({});

export default IndexScreen;
