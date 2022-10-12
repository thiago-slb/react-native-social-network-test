import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
`;

export const NewPostInputContainer = styled.View`
  background-color: #ddd;
  border-radius: 10px;
  flex-direction: row;
  align-items: flex-end;
`;

export const NewPostInput = styled.TextInput`
  padding: 10px;
  flex: 1;
`;
export const NewPostButton = styled.TouchableOpacity`
  padding: 10px;
  background-color: black;
  border-radius: 10px;
  height: 40px;
`;
export const NewPostButtonTitle = styled.Text`
  color: white;
`;
export const RemaingCharacters = styled.Text`
  background-color: #ddd;
  padding: 5px 10px;
  color: red;
`;
