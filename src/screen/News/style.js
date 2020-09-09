import styled from 'styled-components/native';

export const ScrollView = styled.ScrollView`
  flex: 1;
  background: #1C1D24;
`;

export const Container = styled.View`
  flex: 1;
`;

export const ImageTop = styled.Image`
  flex: 1;
  max-width: 100%;
  height: 300px;
  border-bottom-left-radius:20px;
  border-bottom-right-radius:20px;
`;

export const Card = styled.View`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 10px
`;

export const TitleNews = styled.Text`
  margin: 30px 0 10px 0px;
  font-size: 20px;
  font-family: 'MontserratBold';
  text-align: justify;
`;

export const SourceNews = styled.Text`
  margin-bottom: 10px;
  font-size: 15px;
  font-family: 'MontserratRegular';
  text-align: right;
  color: #EA2340;
`;

export const Description = styled.Text`
  font-size: 20px;
  font-family: 'MontserratRegular';
  text-align: justify;
`;