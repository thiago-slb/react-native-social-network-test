import React from 'react';
import PostCard from './PostCard';
import {TimelineItem} from '../../Types/Post.types';
import {PostCardStyled} from './styles';
import PostAuthor from '../PostAuthor/PostAuthor';
import PostButtons from '../PostButtons';

const RepostCard: React.FC<{
  item: TimelineItem;
  navigate: (name: any, params: any) => void;
  onRepost: Function;
  onQuote: Function;
}> = ({item, navigate, onRepost, onQuote}) => {
  return (
    <PostCardStyled>
      <PostAuthor
        author={item.author}
        onPress={() => {
          navigate('UserProfile', {author: item.author});
        }}
      />
      {item?.post && <PostCard item={item.post} navigate={navigate} />}
      <PostButtons onRepost={onRepost} onQuote={onQuote} />
    </PostCardStyled>
  );
};

export default RepostCard;
