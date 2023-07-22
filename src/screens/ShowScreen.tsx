import React from 'react';
import {View, Text} from 'react-native';
import {useBlogContext} from '../../context/BlogContext';
import {NativeStackHeaderProps} from '@react-navigation/native-stack';
// import styled from 'styled-components/native';

const ShowScreen = ({navigation}: NativeStackHeaderProps) => {
  const {} = useBlogContext();

  return (
    <View>
      <Text>Show Screen</Text>
    </View>
  );
};

export default ShowScreen;
