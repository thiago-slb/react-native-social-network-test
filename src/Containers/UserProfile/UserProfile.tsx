import React from 'react';
import {Text} from 'react-native';
import NewPost from '../../Components/NewPost';
import PostAuthor from '../../Components/PostAuthor/PostAuthor';
import PostList from '../../Components/PostList';
import {formatDate} from '../../Services/Date';
import {filterPostsOwner} from '../../Services/Filters';
import {newPost} from '../../Store/posts/postsSlice';
import {useAppDispatch, useAppSelector} from '../../Store/Store';
import {Author} from '../../Types/User.types';
import {
  Container,
  HeaderStyled,
  InfoContainer,
  UserStats,
  UserStatsLabel,
} from './styles';

const UserProfile: React.FC<{route: any}> = ({route}) => {
  const {author}: {author: Author} = route?.params;
  const timeline = useAppSelector(state => state.main.timeline);
  const dispatch = useAppDispatch();
  const saveNewPost = (content: string) => {
    dispatch(newPost({content, author: author}));
  };
  const Header = () => {
    return (
      <HeaderStyled>
        <PostAuthor author={author} />
        <InfoContainer>
          <Text>Joined {formatDate(author.createdAt)}</Text>
          <UserStats>
            <UserStatsLabel>Posts {author.posts}</UserStatsLabel>
            <UserStatsLabel>Reposts {author.posts}</UserStatsLabel>
            <UserStatsLabel>Quotes {author.quotePosts}</UserStatsLabel>
          </UserStats>
        </InfoContainer>
      </HeaderStyled>
    );
  };
  return (
    <Container>
      <PostList data={filterPostsOwner(timeline, author.id)} header={Header} />
      <NewPost onSend={saveNewPost} />
    </Container>
  );
};

export default UserProfile;
