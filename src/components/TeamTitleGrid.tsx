import React, { useState } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, Raleway_100Thin, Raleway_400Regular, Raleway_600SemiBold } from '@expo-google-fonts/raleway';

interface ITeamTitleGridProps {
  logoUri: string,
  teamName: string,
  singleDetails?: boolean
}

const TeamTitleGrid = ({ logoUri, teamName, singleDetails }: ITeamTitleGridProps) => {
  let [fontsLoaded, error] = useFonts({
    Raleway_100Thin, Raleway_400Regular, Raleway_600SemiBold
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <View style={singleDetails ? styles.singleBackGroundColor : styles.teamBackgroundStyle}>
      <Image
        style={styles.teamLogoStyle}
        source={{
          uri: `${logoUri}`,
        }}
      />
      <Text style={styles.titleStyle}>{teamName}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  teamBackgroundStyle: {
    backgroundColor: '#fff',
    height: 50,
    flexDirection: 'row',
    marginHorizontal: 15,
    marginTop: 35,
    flex: 1,
  },
  titleStyle: {
    alignSelf: 'center',
    paddingLeft: 5,
    fontFamily: 'Raleway_600SemiBold',
    fontSize: 20,
  },
  teamLogoStyle: {
    height: 50,
    width: 50,
    alignSelf: 'center'
  },
  singleBackGroundColor: {
    backgroundColor: '#fff',
    height: 50,
    // flexDirection: 'row',
    marginHorizontal: 15,
    marginTop: 35,
    flex: 1,
  }
})

export default TeamTitleGrid;