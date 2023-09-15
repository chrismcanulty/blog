import React, {useEffect} from 'react';
import {FlatList, TouchableOpacity} from 'react-native';
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

const IndexScreen = ({navigation}: any) => {
  const {blogPosts, deleteBlogPost, getBlogPosts} = useBlogContext();

  useEffect(() => {
    getBlogPosts();
    // add listener to detect if user has navigated to IndexScreen
    const listener = navigation.addListener('focus', () => {
      getBlogPosts();

      // cleanup function to remove listener
      return () => {
        listener.remove();
      };
    });
  }, [navigation, getBlogPosts]);

  return (
    <FlatList
      data={blogPosts}
      keyExtractor={blogPost => `${blogPost.id}`}
      renderItem={({item}) => {
        return (
          <TouchableOpacity
            onPress={() => navigation.navigate('Show', {id: item.id})}>
            <BlogView>
              <BlogPost>
                {item.title} - {item.id}
              </BlogPost>
              <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                <DeleteIcon name="trash" size={24} color="#900" />
              </TouchableOpacity>
            </BlogView>
          </TouchableOpacity>
        );
      }}
    />
  );
};

export default IndexScreen;
