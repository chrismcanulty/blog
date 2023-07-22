import React from 'react';
import {useBlogContext} from '../../context/BlogContext';
import styled from 'styled-components/native';

const ShowScreenText = styled.Text`
  color: rgb(38, 38, 38);
  font-family: 'Montserrat-Regular';
  font-size: 18px;
  padding-vertical: 20px;
  text-align: left;
`;
const ShowScreenView = styled.View`
  padding-vertical: 20px;
  padding-horizontal: 10px;
`;

const ShowScreen = ({
  // navigation,
  route,
}: {
  // navigation: NativeStackHeaderProps;
  route: any;
}) => {
  const {blogPosts} = useBlogContext();

  const blogId = route.params.id;

  const blogPost = blogPosts.find(post => post.id === blogId);

  return (
    <ShowScreenView>
      <ShowScreenText>Show Screen</ShowScreenText>
      <ShowScreenText>Blog Id: {blogPost?.title}</ShowScreenText>
    </ShowScreenView>
  );
};

export default ShowScreen;
