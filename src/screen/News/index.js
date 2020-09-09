import React from 'react'
import { View, Text, ScrollView } from 'react-native';

import { Container, ImageTop, Card, TitleNews, SourceNews, Description } from './style';
import Image from '../../assets/Khellven1600.jpg';

const News = ({ navigation }) => {
  return (
    <ScrollView>
      <Container>
        <ImageTop source={Image} />
        <Card>
          <TitleNews>Diego Costa hits four as Atletico Madrid humiliate Real Madrid</TitleNews>
          <Description>
            Atletico Madrid inflicted a humiliating defeat on Real Madrid, scoring seven times past their rivals in the first Madrid derby to be played on foreign soil.

            Diego Simeone and Zinedine Zidane both picked strong teams for this International Champions Cup clash, but it was Atleti who dominated from the start with Diego Costa scoring after just 44 seconds. They then doubled their tally just minutes later through record summer signing Joao Felix, who prodded home a finish from a Saul Niguez cut back.

            This was only the start of the bloodbath as Angel Correa added a third before Costa completed his hat trick before half time with a fourth and a fifth, leaving Zidane and his players somewhat shellshocked at what was happening.

            Zidane made changes at the break with Dani Carvajal and Keylor Navas introduced, but after Atleti scored a sixth through Costa the former was shown a red card along with the Spanish international striker for an off the ball scuffle.
          </Description>
          <SourceNews>source : asia.eurosport.com</SourceNews>
        </Card>
      </Container>
    </ScrollView>
  )
}

export default News
