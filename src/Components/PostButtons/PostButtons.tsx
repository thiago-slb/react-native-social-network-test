import React, {useState} from 'react';
import NewPost from '../NewPost';
import {Button, ButtonLabel, Buttons, Container} from './styles';

const PostButtons: React.FC<{
  onRepost: Function;
  onQuote: Function;
}> = ({onRepost = () => {}, onQuote = () => {}}) => {
  const [showQuoteInput, setShowQuoteInput] = useState(false);
  return (
    <Container>
      <Buttons>
        <Button onPress={onRepost}>
          <ButtonLabel>RePost</ButtonLabel>
        </Button>
        <Button
          onPress={() => {
            setShowQuoteInput(!showQuoteInput);
          }}>
          <ButtonLabel>Quote</ButtonLabel>
        </Button>
      </Buttons>

      {showQuoteInput && <NewPost onSend={onQuote} />}
    </Container>
  );
};

export default PostButtons;
