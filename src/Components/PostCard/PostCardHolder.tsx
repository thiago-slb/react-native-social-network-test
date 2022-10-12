import React from 'react';
import {PostTypes, TimelineItem} from '../../Types/Post.types';
import PostCard from './PostCard';
import QuoteCard from './QuoteCard';
import RepostCard from './RepostCard';
import * as RootNavigation from '../../Navigation/RootNavigation';
import {Author} from '../../Types/User.types';

const PostCardHolder: React.FC<{
  item: TimelineItem;
  author: Author;
  repost?: Function;
  quote?: Function;
}> = ({item, author, repost, quote}) => {
  const onRepost = () => {
    repost &&
      repost({
        content: item.content,
        post: item,
        type: PostTypes.repost,
        author,
      });
  };
  const onQuote = () => {
    quote &&
      quote({
        content: item.content,
        post: item,
        type: PostTypes.quote,
        author,
      });
  };
  if (item.type === PostTypes.default) {
    return (
      <PostCard
        item={item}
        navigate={RootNavigation.navigate}
        onRepost={onRepost}
        onQuote={onQuote}
      />
    );
  }

  if (item.type === PostTypes.quote) {
    return (
      <QuoteCard
        item={item}
        navigate={RootNavigation.navigate}
        onRepost={onRepost}
        onQuote={onQuote}
      />
    );
  }

  if (item.type === PostTypes.repost) {
    return (
      <RepostCard
        item={item}
        navigate={RootNavigation.navigate}
        onRepost={onRepost}
        onQuote={onQuote}
      />
    );
  }

  return <></>;
};

export default PostCardHolder;
