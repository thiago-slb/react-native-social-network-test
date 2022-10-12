import {TimelineItem} from '../Types/Post.types';

export const filterPostsFollowing = (
  posts: TimelineItem[],
  showAll: boolean,
): TimelineItem[] => {
  if (showAll) {
    return posts;
  } else {
    return posts.filter((item: TimelineItem) => {
      return item.author.following;
    });
  }
};

export const filterPostsOwner = (
  posts: TimelineItem[],
  userId: string | number[],
): TimelineItem[] => {
  return posts.filter((item: TimelineItem) => {
    return item.author.id === userId;
  });
};
