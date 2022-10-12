import React, {useEffect, useState} from 'react';
import NewPost from '../../Components/NewPost';
import PostFilter from '../../Components/PostFilter/PostFilter';
import PostList from '../../Components/PostList';
import {fakeLogedInUser} from '../../FakeData';
import {filterPostsFollowing} from '../../Services/Filters';
import {fetchPostsAndAuthors, newPost} from '../../Store/posts/postsSlice';
import {useAppDispatch, useAppSelector} from '../../Store/Store';
import {PostTypes} from '../../Types/Post.types';
import {Container} from './styles';

const HomePage: React.FC = () => {
  const [showAll, setShowAll] = useState(true);

  const timeline = useAppSelector(state => state.main.timeline);
  const dispatch = useAppDispatch();

  function saveNewPost(content: string) {
    dispatch(
      newPost({content, author: fakeLogedInUser, type: PostTypes.default}),
    );
  }

  function repost(params) {
    dispatch(newPost(params));
  }

  function quote(params) {
    dispatch(newPost(params));
  }

  useEffect(() => {
    dispatch(fetchPostsAndAuthors());
  }, []);

  return (
    <Container>
      <PostFilter showAll={showAll} setShowAll={setShowAll} />
      {timeline && timeline.length > 0 && (
        <PostList
          data={filterPostsFollowing(timeline, showAll)}
          author={fakeLogedInUser}
          repost={repost}
          quote={quote}
        />
      )}
      <NewPost onSend={saveNewPost} />
    </Container>
  );
};

export default HomePage;
