import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { withNavigation } from 'react-navigation';
import TeamTitleGrid from './TeamTitleGrid';

interface IGridViewProps {
  teams: any,
  teamOne: any,
  teamTwo: any,
  teamOnePlayers: any,
  teamTwoPlayers: any,
  navigation: any
}

const GridView = ({ teams, teamOne, teamTwo, teamOnePlayers, teamTwoPlayers, navigation }: IGridViewProps) => {
  const [like, setlike] = useState('');

  return (
    <React.Fragment>
      <View style={styles.backgroundStyle}>
        <TeamTitleGrid
          logoUri={(teamOne && teamOne.logo) ? teamOne.logo : 'https://illustoon.com/photo/4589.png'}
          teamName={(teamOne && teamOne.name) ? teamOne.name : ' Team one'}
        />
        <TeamTitleGrid
          logoUri={(teamTwo && teamTwo.logo) ? teamTwo.logo : 'https://illustoon.com/photo/4589.png'}
          teamName={(teamTwo && teamTwo.name) ? teamTwo.name : ' Team Two'}
        />
      </View>
      <View style={{marginBottom: 35}} />
      <ScrollView>


        <View style={styles.listContainer}>
          <View style={styles.col}>
            {
              teamOnePlayers.map((player: any) => (
                <TouchableOpacity
                  onPress={() => navigation.navigate('PlayerDetails', { player })}
                  style={styles.playerContainerStyle}
                  key={player.id}>
                  <Text style={styles.playerNameStyle}>{player.name}</Text>
                  
                </TouchableOpacity>
              ))
            }
          </View>

          <View style={styles.col}>
            {
              teamTwoPlayers.map((player: any) => (
                <TouchableOpacity
                  onPress={() => navigation.navigate('PlayerDetails', { player })}
                  style={styles.playerContainerStyle}
                  key={player.id}>
                  <Text style={styles.playerNameStyle}>{player.name}</Text>
                </TouchableOpacity>
              ))
            }
          </View>
        </View>
      </ScrollView>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#fff',
    height: 60,
    borderRadius: 5,
    marginHorizontal: 5,
    flexDirection: 'row'
  },
  iconStyle: {
    fontSize: 36,
    alignSelf: 'center',
    marginHorizontal: 10
  },
  listContainer: {
    width: '100%',
    flex: 1,
    flexDirection: 'row',
  },
  col: {
    width: '50%',
  },
  playerContainerStyle: {
    height: 45,
    borderBottomColor: 'grey',
    borderBottomWidth: 0.5,
    borderRightColor: 'grey',
    borderRightWidth: 0.5,
    paddingTop: 11,
  },
  playerNameStyle: {
    fontSize: 16,
    marginHorizontal: 10,
  }
});

export default withNavigation(GridView);