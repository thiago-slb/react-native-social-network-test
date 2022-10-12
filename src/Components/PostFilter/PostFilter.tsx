import React, {Dispatch, SetStateAction} from 'react';
import {Switch} from 'react-native';

import {PostFilterLabel, PostFilterStyled} from './styles';

const PostFilter: React.FC<{
  showAll: boolean;
  setShowAll: Dispatch<SetStateAction<boolean>>;
}> = ({showAll = true, setShowAll = () => {}}) => {
  return (
    <PostFilterStyled>
      <PostFilterLabel>{showAll ? 'All' : 'Following'}</PostFilterLabel>
      <Switch
        trackColor={{false: 'blue', true: '#81b0ff'}}
        thumbColor={showAll ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={setShowAll}
        value={showAll}
      />
    </PostFilterStyled>
  );
};

export default PostFilter;
