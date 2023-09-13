import React from 'react';
import BlogPostForm from '../components/BlogPostForm';

const EditScreen = () => {
  // const {currentPost} = useBlogContext();
  // const {title: initialTitle, content: initialContent, id} = currentPost;
  // const [title, setTitle] = useState(initialTitle);
  // const [content, setContent] = useState(initialContent);

  return <BlogPostForm />;
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
