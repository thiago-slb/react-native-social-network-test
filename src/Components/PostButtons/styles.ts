import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  justify-content: flex-end;
`;

export const Buttons = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  margin-bottom: 10px;
`;

export const Button = styled.TouchableOpacity`
  background-color: #ddd;
  padding: 5px 10px;
  border-radius: 10px;
  margin-left: 10px;
`;

export const ButtonLabel = styled.Text`
  color: #000;
`;
