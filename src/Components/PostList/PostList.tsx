import {FlashList} from '@shopify/flash-list';
import React from 'react';
import {TimelineItem} from '../../Types/Post.types';
import {Author} from '../../Types/User.types';
import PostCardHolder from '../PostCard/PostCardHolder';
import {Container} from './styles';

const PostList: React.FC<{
  data: TimelineItem[];
  header?: () => JSX.Element;
  author: Author;
  repost?: Function;
  quote?: Function;
}> = ({data, header = <></>, author, quote, repost}) => {
  if (!data.length && header) {
    return header();
  }
  return (
    <Container>
      <FlashList
        ListHeaderComponent={header}
        renderItem={({item}) => {
          return (
            <PostCardHolder
              item={item}
              author={author}
              quote={quote}
              repost={repost}
            />
          );
        }}
        estimatedItemSize={data.length}
        data={data}
      />
    </Container>
  );
};

export default PostList;
