import React from 'react';
import {View, FlatList, Button, TouchableOpacity} from 'react-native';
import {useBlogContext} from '../../context/BlogContext';
import styled from 'styled-components/native';
import DeleteIcon from 'react-native-vector-icons/FontAwesome';

const BlogPost = styled.Text`
  color: rgb(38, 38, 38);
  font-family: 'Montserrat-Regular';
  font-size: 18px;
  text-align: left;
`;
const BlogView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-vertical: 20px;
  padding-horizontal: 10px;
  border-top-width: 1px;
  border-color: gray;
`;

const IndexScreen = () => {
  const {blogPosts, addBlogPost, deleteBlogPost} = useBlogContext();

  return (
    <View>
      <Button title="Add Post" onPress={addBlogPost} />
      <FlatList
        data={blogPosts}
        keyExtractor={blogPost => `${blogPost.id}`}
        renderItem={({item, index}) => {
          return (
            <BlogView>
              <BlogPost>
                {item.title} - {item.id}
              </BlogPost>
              <TouchableOpacity onPress={() => deleteBlogPost(index)}>
                <DeleteIcon name="trash" size={24} color="#900" />
              </TouchableOpacity>
            </BlogView>
          );
        }}
      />
    </View>
  );
};

// const styles = StyleSheet.create({});

export default IndexScreen;
