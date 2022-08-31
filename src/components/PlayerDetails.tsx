import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import IPlayer from '../models/player';
import AppLoading from 'expo-app-loading';
import { useFonts, Raleway_100Thin, Raleway_400Regular, Raleway_600SemiBold } from '@expo-google-fonts/raleway';

interface IPlayerDetailsProps {
  navigation: any
}

const PlayerDetails = ({ navigation }: IPlayerDetailsProps) => {
  const player: IPlayer = navigation.getParam('player');
  let [fontsLoaded, error] = useFonts({
    Raleway_100Thin, Raleway_400Regular, Raleway_600SemiBold
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <React.Fragment>
      {
        (player) ? (
          <View style={styles.backgroundStyle}>
            <View style={styles.photoContainer}>
              <Image
                style={styles.photoStyle}
                source={{
                  uri: `${player.photo}`,
                }}
              />
              <Text style={styles.playerName}>{player.name}</Text>
            </View>

            <View style={styles.rowContainerStyle}>
              <View style={styles.playerDetailsRow}>
                <View style={styles.colStyle}>
                  <Text style={styles.colTextStyle}>Age</Text>
                </View>
                <View style={styles.colStyle}>
                  {<Text style={styles.colTextStyle}>:&nbsp;{player.age}</Text>}
                </View>
              </View>

              <View style={styles.playerDetailsRow}>
                <View style={styles.colStyle}>
                  <Text style={styles.colTextStyle}>number</Text>
                </View>
                <View style={styles.colStyle}>
                  {<Text style={styles.colTextStyle}>:&nbsp;{player && player.number ? player.number : 'N/A'}</Text>}
                </View>
              </View>

              <View style={styles.playerDetailsRow}>
                <View style={styles.colStyle}>
                  <Text style={styles.colTextStyle}>position</Text>
                </View>
                <View style={styles.colStyle}>
                  {<Text style={styles.colTextStyle}>:&nbsp;{player.position}</Text>}
                </View>
              </View>
            </View>
          </View>
        ) : (
          <Text>{'Something went wrong :('}</Text>
        )
      }
    </React.Fragment>
  )
}

const styles = StyleSheet.create({
  backgroundStyle: {
    flex: 1,
    backgroundColor: '#fff'
  },
  photoContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 50,
  },
  photoStyle: {
    width: '50%',
    height: '50%'
  },
  playerName: {
    fontSize: 26,
    fontFamily: 'Raleway_600SemiBold',
    fontWeight: '700',
    marginTop: 20,
  },
  rowContainerStyle: {
    marginTop: -120
  },
  playerDetailsRow: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 30,

  },
  colStyle: {
    width: '50%',
    borderBottomColor: 'grey',
    borderBottomWidth: 0.5
  },
  colTextStyle: {
    fontSize: 24,
    fontFamily: 'Raleway_400Regular',
    marginHorizontal: 10,
    paddingVertical: 8
  }
});

export default PlayerDetails;