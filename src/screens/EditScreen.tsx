import React, {useState} from 'react';
import {View} from 'react-native';
// import {useBlogContext} from '../../context/BlogContext';
// import {NativeStackHeaderProps} from '@react-navigation/native-stack';
import styled from 'styled-components/native';

const InputField = styled.TextInput`
  border-color: black;
  border-width: 1px;
  color: rgb(38, 38, 38);
  font-family: 'Montserrat-Regular';
  font-size: 18px;
  margin: 5px;
  margin-bottom: 15px;
  padding: 5px;
`;
const InputLabel = styled.Text`
  font-family: 'Montserrat-Regular';
  font-size: 20px;
  margin-bottom: 5px;
  margin-left: 5px;
`;

const EditScreen = () =>
  // {navigation}: NativeStackHeaderProps
  {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    // const {addBlogPost} = useBlogContext();

    // const blogId = route.params.id;

    // const blogPost = blogPosts.find(post => post.id === blogId);

    return (
      <View>
        <InputLabel>Enter Title:</InputLabel>
        <InputField value={title} onChangeText={text => setTitle(text)} />
        <InputLabel>Enter Content:</InputLabel>
        <InputField value={content} onChangeText={text => setContent(text)} />
        {/* <Button
        title="Add Blog Post"
        onPress={() => {
          addBlogPost(title, content, () => {
            navigation.navigate('Root');
          });
        }}
      /> */}
      </View>
    );
  };

export default EditScreen;
