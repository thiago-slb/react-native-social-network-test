import {delay, getNewDate} from '../FakeData';
import {Post, PostTypes, TimelineItem} from '../Types/Post.types';
import uuid from 'react-native-uuid';
import {Author} from '../Types/User.types';

export async function savePost(params: {
  post?: TimelineItem;
  content?: string;
  author: Author;
  type: PostTypes;
}): Promise<TimelineItem> {
  await delay(500);
  return {
    id: uuid.v4(),
    post: params.post,
    type: params.type,
    content: params.content,
    author: params.author,
    createdAt: getNewDate(),
  };
}

export async function getPosts(): Promise<Post[]> {
  await delay(500);
  return [];
}
