export interface User {
  id: string | number[];
  name: string;
  username: string;
  createdAt: string;
}

export interface Author extends User {
  following: boolean;
  posts: number;
  reposts: number;
  quotePosts: number;
}
