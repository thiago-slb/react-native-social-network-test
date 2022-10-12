import React, {useState} from 'react';

import {
  Container,
  NewPostButton,
  NewPostButtonTitle,
  NewPostInput,
  NewPostInputContainer,
  RemaingCharacters,
} from './styles';

const NewPost: React.FC<{onSend: Function}> = props => {
  const [content, setContent] = useState('');
  const onButtonPress = (): void => {
    props.onSend && props.onSend(content);
    setContent('');
  };
  return (
    <Container>
      <NewPostInputContainer>
        <NewPostInput
          onChangeText={setContent}
          value={content}
          multiline={true}
        />
        <NewPostButton onPress={onButtonPress}>
          <NewPostButtonTitle>Send</NewPostButtonTitle>
        </NewPostButton>
      </NewPostInputContainer>
      {content.length > 0 && (
        <RemaingCharacters>
          {777 - content.length} characters remaining
        </RemaingCharacters>
      )}
    </Container>
  );
};

export default NewPost;
