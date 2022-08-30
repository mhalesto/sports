import React, { useState } from 'react';
import { View, TextInput, Text, Image, StyleSheet, FlatList, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import TeamTitleGrid from './TeamTitleGrid';

interface IGridViewProps {
  teams: any,
  teamOne: any,
  teamTwo: any,
  teamOnePlayers: any,
  teamTwoPlayers: any,
}

const GridView = ({ teams, teamOne, teamTwo, teamOnePlayers, teamTwoPlayers }: IGridViewProps) => {
  // const [selectedId, setSelectedId] = useState(null);

  return (
    <React.Fragment>
            <View style={styles.backgroundStyle}>
        <TeamTitleGrid
          logoUri={(teamOne && teamOne.logo) ? teamOne.logo : 'https://cdn-1.motorsport.com/images/mgl/68ey3q40/s100/f1-abu-dhabi-gp-2017-f1-logo.jpg'}
          teamName={(teamOne && teamOne.name) ? teamOne.name : 'Team one'}
        />
        <TeamTitleGrid
          logoUri={(teamTwo && teamTwo.logo) ? teamTwo.logo : 'https://cdn-1.motorsport.com/images/mgl/68ey3q40/s100/f1-abu-dhabi-gp-2017-f1-logo.jpg'}
          teamName={(teamTwo && teamTwo.name) ? teamTwo.name : 'Team Two'}
        />
      </View>
    <ScrollView>


      <View style={styles.listContainer}>
        <View style={styles.col}>
          {
            teamOnePlayers.map((player: any) => (
              <TouchableOpacity style={styles.playerContainerStyle}>
                <Text style={styles.playerNameStyle}>{player.name}</Text>
              </TouchableOpacity>
            ))
          }
        </View>

        <View style={styles.col}>
          {
            teamTwoPlayers.map((player: any) => (
              <TouchableOpacity style={styles.playerContainerStyle}>
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
    marginTop: 20,
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
    marginTop: 10,
  },
  col: {
    width: '50%',
  },
  playerContainerStyle: {
    height: 40,
    borderBottomColor: 'grey',
    borderBottomWidth: 0.5,
    borderRightColor: 'grey',
    borderRightWidth: 0.5,
    paddingTop: 10,
  },
  playerNameStyle: {
    fontSize: 16,
    marginHorizontal: 10,
  }
});

export default GridView;