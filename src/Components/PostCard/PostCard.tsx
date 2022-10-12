import React from 'react';
import {TimelineItem} from '../../Types/Post.types';
import PostAuthor from '../PostAuthor/PostAuthor';
import PostButtons from '../PostButtons';
import {PostCardStyled, PostContent} from './styles';

const PostCard: React.FC<{
  item: TimelineItem;
  navigate: (name: any, params: any) => void;
  onRepost?: Function;
  onQuote?: Function;
}> = ({item, navigate, onRepost, onQuote}) => {
  return (
    <PostCardStyled>
      <PostAuthor
        author={item?.author}
        onPress={() => {
          item?.author && navigate('UserProfile', {author: item.author});
        }}
      />
      <PostContent>{item?.content}</PostContent>
      {onRepost && onQuote && (
        <PostButtons onRepost={onRepost} onQuote={onQuote} />
      )}
    </PostCardStyled>
  );
};

export default PostCard;
