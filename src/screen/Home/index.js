import React from 'react'
import { View, Text } from 'react-native';

import {
  ScrollView,
  Title,
  TopNews,
  BannerTopNews,
  BottomContainer,
  BottomShadow,
  TopTitle,
  TopText,
  ListNews,
  TitleList,
  TextNews,
  TitleNews,
  CardNews,
  CardNewsContent,
  BannerNews,
  SubTextNews
} from './style';

import Banner from '../../assets/Khellven1600.jpg';
import BannerImageNews from '../../assets/5f504a8b4d53f.jpg'

const Home = ({ navigation }) => {
  return (
    <ScrollView>
      <Title>Football</Title>
      <TopNews>
        <BannerTopNews source={Banner} />
        <BottomContainer>
          <BottomShadow opacity={0.7} width="90%" />
          <BottomShadow opacity={0.3} width="80%" />
        </BottomContainer>
        <TopTitle>Athletico apresenta bons números individuais; Khellven é líder em desarmes</TopTitle>
        <TopText>Autor do gol do título estadual, o lateral se firmou na posição e cresce a cada rodada no BR-20</TopText>
      </TopNews>
      <ListNews>
        <TitleList>
          <TitleNews>Últimas Notícias</TitleNews>
        </TitleList>
        <CardNews onPress={() => navigation.navigate('News')}>
          <BannerNews source={BannerImageNews} />
          <CardNewsContent>
            <TextNews>Eduardo Barros viu o Athletico exposto no empate dentro de casa</TextNews>
            <SubTextNews>20m</SubTextNews>
          </CardNewsContent>
        </CardNews>
        <CardNews onPress={() => navigation.navigate('News')}>
          <BannerNews source={BannerImageNews} />
          <CardNewsContent>
            <TextNews>Eduardo Barros viu o Athletico exposto no empate dentro de casa</TextNews>
            <SubTextNews>20m</SubTextNews>
          </CardNewsContent>
        </CardNews>
      </ListNews>
    </ScrollView>
  )
}

export default Home
