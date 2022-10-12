import {Post} from './Types/Post.types';
import {Author} from './Types/User.types';

export const fakeContent =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tristique molestie libero feugiat scelerisque. Ut sit amet justo vulputate, laoreet sem id, viverra tortor. Fusce interdum elit sit amet mi ullamcorper, eget finibus libero dignissim. Ut fermentum est id tellus gravida malesuada. Praesent blandit ligula quis accumsan tempor.';

export const getNewDate = () => new Date().toISOString();

export function delay(timeout: number) {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}

export const fakeAuthorList: Author[] = [
  {
    id: 'c52b589-a32b-45d8-a7ce-55235e435ad2',
    username: 'johnDoe12',
    name: 'Jhon doe',
    following: true,
    posts: 3,
    reposts: 4,
    quotePosts: 3,
    createdAt: '2022-10-06T15:31:07.576Z',
  },
  {
    id: '9fd4b2a3-25f2-4a31-b84d-d1b3c6850383',
    username: 'susyDoe43',
    name: 'Susy doe',
    following: false,
    posts: 3,
    reposts: 4,
    quotePosts: 3,
    createdAt: '2022-09-03T15:31:07.576Z',
  },
  {
    id: '3d2e7356-260b-4e70-93ef-c64411a89855',
    username: 'jennyDoe13',
    name: 'Jenny doe',
    following: false,
    posts: 3,
    reposts: 4,
    quotePosts: 3,
    createdAt: '2021-11-02T11:31:07.576Z',
  },
  {
    id: '850eb071-7cae-4786-a159-09e9cc197006',
    username: 'robertDoe13',
    name: 'Robert doe',
    following: false,
    posts: 3,
    reposts: 4,
    quotePosts: 3,
    createdAt: '2021-02-03T12:31:07.576Z',
  },
];

export const fakePostList: Post[] = [
  {
    id: '71ca0912-bacc-4ec2-9cbd-ceea4607a150',
    type: 1,
    createdAt: '2021-02-03T12:31:07.576Z',
    content: fakeContent,
    authorId: fakeAuthorList[0].id,
  },
  {
    id: '5cafc139-0ddd-422e-b2a1-9a7f18e90013',
    type: 1,
    createdAt: '2021-02-03T12:31:07.576Z',
    content: fakeContent,
    authorId: fakeAuthorList[1].id,
  },
  {
    id: 'ccf52887-30db-42b4-b057-05083dbd6e89',
    type: 1,
    createdAt: '2021-02-03T12:31:07.576Z',
    content: fakeContent,
    authorId: fakeAuthorList[2].id,
  },
  {
    id: 'a3377175-e01c-41d2-a0da-5265a73f6f67',
    type: 1,
    createdAt: '2021-02-03T12:31:07.576Z',
    content: fakeContent,
    authorId: fakeAuthorList[3].id,
  },
];

export const fakeLogedInUser: Author = {
  id: '1c681d24-8f78-4a53-926b-340a3b08cce7',
  username: 'tobias123',
  name: 'Tobias Gibson',
  following: true,
  posts: 3,
  reposts: 4,
  quotePosts: 3,
  createdAt: '2021-02-03T12:31:07.576Z',
};
