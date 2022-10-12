import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {Post, PostTypes, TimelineItem} from '../../Types/Post.types';
import {getPosts, savePost} from '../../Services/Post';
import {fakeAuthorList, fakePostList} from '../../FakeData';
import {Author} from '../../Types/User.types';
import {getAuthors} from '../../Services/Author';

export interface PostsState {
  posts: Post[];
  authors: Author[];
  timeline: TimelineItem[];
}

const initialState: PostsState = {
  posts: fakePostList,
  authors: fakeAuthorList,
  timeline: [],
};

export const fetchPostsAndAuthors = createAsyncThunk(
  'posts/fetchPostsAndAuthors',
  async () => {
    const postList: Post[] = await getPosts();
    const authorList: Author[] = await getAuthors();
    return {
      postList,
      authorList,
    };
  },
);

export const newPost = createAsyncThunk(
  'users/newPosts',
  async (params: {
    content?: string;
    author: Author;
    post?: TimelineItem;
    type: PostTypes;
  }) => {
    const newPostData: TimelineItem = await savePost(params);
    return newPostData;
  },
);

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(
      fetchPostsAndAuthors.fulfilled,
      (state, action: {payload: {postList: Post[]; authorList: Author[]}}) => {
        const oldPosts: Post[] = state.posts as Post[];
        const oldIds: string[] = oldPosts.map((post: Post) => String(post.id));
        const newPostsRemovingDuplicates = [...action.payload.postList].filter(
          post => {
            return !oldIds.includes(String(post.id));
          },
        );
        const posts = [...newPostsRemovingDuplicates, ...oldPosts];

        const staleAuthors: Author[] = state.authors as Author[];
        const staleIds: string[] = staleAuthors.map((author: Author) =>
          String(author.id),
        );
        const newAuthorsRemovingDuplicates = [
          ...action.payload.authorList,
        ].filter(author => {
          return !staleIds.includes(String(author.id));
        });
        const authors = [...newAuthorsRemovingDuplicates, ...staleAuthors];

        const timeline: TimelineItem[] = [];
        for (let i = 0; i < posts.length; i++) {
          timeline.push({
            id: posts[i].id,
            type: posts[i].type,
            content: posts[i].content,
            post: posts[i].post,
            createdAt: posts[i].createdAt,
            author: authors.filter(
              (author: Author) => author.id === posts[i].authorId,
            )[0],
          });
        }
        state.timeline = timeline;
        state.posts = posts;
        state.authors = authors;
      },
    );
    builder.addCase(
      newPost.fulfilled,
      (state, action: {payload: TimelineItem}) => {
        state.timeline = [action.payload, ...state.timeline];
      },
    );
  },
});

export const {} = postsSlice.actions;

export default postsSlice.reducer;
