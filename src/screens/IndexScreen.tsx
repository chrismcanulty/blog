import React from 'react';
import {View, FlatList, Button} from 'react-native';
import {useBlogContext} from '../../context/BlogContext';
import styled from 'styled-components/native';
import DeleteIcon from 'react-native-vector-icons/FontAwesome';

const BlogPost = styled.Text`
  color: rgb(38, 38, 38);
  font-family: 'Montserrat-Regular';
  font-size: 14px;
  margin-left: 20px;
  text-align: left;
`;

const IndexScreen = () => {
  const {blogPosts, addBlogPost} = useBlogContext();

  return (
    <View>
      <Button title="Add Post" onPress={addBlogPost} />
      <FlatList
        data={blogPosts}
        keyExtractor={blogPost => blogPost.title}
        renderItem={({item}) => {
          return (
            <View>
              <BlogPost>{item.title}</BlogPost>
              <DeleteIcon name="trash" size={30} color="#900" />
            </View>
          );
        }}
      />
    </View>
  );
};

// const styles = StyleSheet.create({});

export default IndexScreen;
