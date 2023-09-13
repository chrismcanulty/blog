import React from 'react';
import BlogPostForm from '../components/BlogPostForm';
import {useBlogContext} from '../../context/BlogContext';

const EditScreen = () => {
  const {currentPost} = useBlogContext();
  const {title: initialTitle, content: initialContent} = currentPost;
  // const [title, setTitle] = useState(initialTitle);
  // const [content, setContent] = useState(initialContent);

  return (
    <BlogPostForm
      initialValues={{initialTitle, initialContent}}
      onSubmit={(title: string, content: string) => {
        console.log(title, content);
      }}
    />
  );
  // (
  //   <View>
  //     <InputLabel>Enter Title:</InputLabel>
  //     <InputField value={title} onChangeText={text => setTitle(text)} />
  //     <InputLabel>Enter Content:</InputLabel>
  //     <InputField value={content} onChangeText={text => setContent(text)} />
  //     <InputLabel>{id}</InputLabel>
  //   </View>
  // );
};

export default EditScreen;
