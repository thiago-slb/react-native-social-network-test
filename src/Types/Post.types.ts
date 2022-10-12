import {Author} from './User.types';

export enum PostTypes {
  default = 1,
  repost = 2,
  quote = 3,
}

export type Post = {
  id: string | number[];
  type: PostTypes;
  content?: string;
  post?: Post;
  createdAt: string;
  authorId: string | number[];
};

export interface TimelineItem {
  id: string | number[];
  type: PostTypes;
  content?: string;
  post?: TimelineItem;
  createdAt: string;
  author: Author;
}
