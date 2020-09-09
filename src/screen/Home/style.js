import styled from 'styled-components/native';

export const ScrollView = styled.ScrollView`
    background: #1C1D24;
`;

export const Title = styled.Text`
  color: #FFFFFF;
  font-size: 30px;
  font-family: 'MontserratBold';
  margin: 15px 20px 15px 15px;
`;

export const TopNews = styled.View`
  padding: 10px;
`;

export const BottomContainer = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const BottomShadow = styled.View`
  background: #EA2340;
  width: ${ (props) => props.width ?? '85%'};
  height: 15px;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  opacity: ${ (props) => props.opacity ?? 1};
`;

export const BannerTopNews = styled.Image`
  width: 100%;
  height: 200px;
  border-radius: 25px;
`;

export const TopTitle = styled.Text`
  font-family: 'MontserratBold';
  font-size: 18px;
  color: #EA2340;
  margin: 10px 0;
`;

export const TopText = styled.Text`
  font-family: 'MontserratRegular';
  font-size: 14px;
  color: #FFFFFF;
`;

export const ListNews = styled.View`
  flex: 1;
  margin: 30px 0 0px 0;
  padding: 0 10px;
  max-width: 100%;
`

export const TitleList = styled.View``

export const TitleNews = styled.Text`
  font-family: 'MontserratBold';
  font-size: 16px;
  color: #FFFFFF;
`;

export const CardNews = styled.TouchableOpacity`
  margin-top: 10px;
  flex: 1;
  flex-direction: row;
  background: #FFFFFF;
  height: 100px;
  border-radius: 20px;
  max-width: 100%;
  flex-direction: row;
`;

export const CardNewsContent = styled.View`
   max-width: 100%;
   justify-content: center;
   align-items: flex-start;
   padding: 10px;
   margin-right: 100px;
`;

export const BannerNews = styled.Image`
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  height: 100%;
  max-width: 25%;
`;

export const TextNews = styled.Text`
  font-family: 'MontserratBold';
  font-size: 12px;
  color: #1C1D24;

`;

export const SubTextNews = styled.Text`
  font-family: 'MontserratBold';
  font-size: 12px;
  color: #707070;

`;
