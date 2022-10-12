import React from 'react';
import UserAvatar from 'react-native-user-avatar';

import {PostAuthorStyled, PostAuthorName} from './styles';
import {Author} from '../../Types/User.types';
import {alhpanumericOnly, excerpt} from '../../Services/Strings';

const PostAuthor: React.FC<{
  author: Author;
  onPress?: Function;
}> = ({author, onPress}) => {
  if (!author) {
    return <></>;
  }
  return (
    <PostAuthorStyled
      onPress={() => {
        onPress && onPress();
      }}>
      <UserAvatar name={author?.name} />
      <PostAuthorName>
        @{excerpt(alhpanumericOnly(author?.username), 14)}
      </PostAuthorName>
    </PostAuthorStyled>
  );
};

export default PostAuthor;
