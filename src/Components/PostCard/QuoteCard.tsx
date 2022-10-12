import React from 'react';
import PostCard from './PostCard';
import {TimelineItem} from '../../Types/Post.types';
import {PostCardStyled, PostContent} from './styles';
import PostAuthor from '../PostAuthor/PostAuthor';
import PostButtons from '../PostButtons';

const QuoteCard: React.FC<{
  item: TimelineItem;
  navigate: (name: any, params: any) => void;
  onRepost: Function;
  onQuote: Function;
}> = ({item, navigate, onQuote, onRepost}) => {
  if (!item.post) {
    return <></>;
  }
  return (
    <PostCardStyled>
      <PostAuthor
        author={item.author}
        onPress={() => {
          navigate('UserProfile', {author: item.author});
        }}
      />
      <PostContent>{item.content}</PostContent>
      <PostCard
        item={item.post}
        navigate={() => {
          navigate('UserProfile', {author: item.post?.author});
        }}
      />
      <PostButtons onRepost={onRepost} onQuote={onQuote} />
    </PostCardStyled>
  );
};

export default QuoteCard;
