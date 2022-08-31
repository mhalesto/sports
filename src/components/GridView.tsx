import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { withNavigation } from 'react-navigation';
import TeamTitleGrid from './TeamTitleGrid';

interface IGridViewProps {
  teamOne: any,
  teamTwo: any,
  teamOnePlayers: any,
  teamTwoPlayers: any,
  navigation: any,
  filteredResults: any,
  filteredResultsTeam: any,
  searchText: string
}

const GridView = ({ teamOne, teamTwo, teamOnePlayers, teamTwoPlayers, navigation, filteredResults, filteredResultsTeam, searchText }: IGridViewProps) => {
  const [like, setlike] = useState('');

  return (
    <React.Fragment>

      {
        (searchText !== '' && searchText.length > 3 && filteredResults.length > 0 ) ? (
          <View>
            <View>
              <View style={styles.backgroundStyle}>
                {
                  filteredResultsTeam && (
                    <TeamTitleGrid
                      logoUri={(filteredResultsTeam && filteredResultsTeam.logo) && filteredResultsTeam.logo}
                      teamName={(filteredResultsTeam && filteredResultsTeam.name) && filteredResultsTeam.name}
                      singleDetails
                    />
                  )
                }
              </View>
              <View style={{ marginBottom: 60 }} />
              <ScrollView>
                <View style={styles.listContainer}>
                  <View style={{ width: '100%' }}>
                    {
                      filteredResults.map((player: any) => (
                        <TouchableOpacity
                          onPress={() => navigation.navigate('PlayerDetails', { player })}
                          style={styles.filteredContainerStyle}
                          key={player.id}>
                          <Text style={styles.playerNameStyle}>{player.name}</Text>
                        </TouchableOpacity>
                      ))
                    }
                  </View>
                </View>
              </ScrollView>
            </View>
          </View>
        ) : (
          <View>
            <View style={styles.backgroundStyle}>
              {
                teamOne && (
                  <TeamTitleGrid
                    logoUri={(teamOne && teamOne.logo) && teamOne.logo}
                    teamName={(teamOne && teamOne.name) && teamOne.name}
                  />
                )
              }
              {
                teamTwo && (
                  <TeamTitleGrid
                    logoUri={(teamTwo && teamTwo.logo) && teamTwo.logo}
                    teamName={(teamTwo && teamTwo.name) && teamTwo.name}
                  />
                )
              }
            </View>
            <View style={{ marginBottom: 35 }} />
            <ScrollView>
              <View style={styles.listContainer}>
                <View style={styles.col}>
                  {
                    teamOnePlayers.map((player: any) => (
                      <TouchableOpacity
                        onPress={() => navigation.navigate('PlayerDetails', { player })}
                        style={styles.playerContainerStyle}
                        key={player.id}>
                        <Text style={styles.playerNameStyle}>
                          {(player.name.length > 18) ? `${player.name.slice(0, 18)}...` : player.name }
                        </Text>

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
                        <Text style={styles.playerNameStyle}>
                          {(player.name.length > 18) ? `${player.name.slice(0, 18)}...` : player.name }
                        </Text>
                      </TouchableOpacity>
                    ))
                  }
                </View>
              </View>
            </ScrollView>
          </View>
        )
      }

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
    marginBottom: 170
  },
  col: {
    width: '50%',
  },
  playerContainerStyle: {
    height: 50,
    borderBottomColor: 'grey',
    borderBottomWidth: 0.5,
    borderRightColor: 'grey',
    borderRightWidth: 0.5,
    paddingVertical: 14,
  },
  playerNameStyle: {
    fontSize: 16,
    marginHorizontal: 10,
  },
  filteredContainerStyle: {
    height: 45,
    borderBottomColor: 'grey',
    borderBottomWidth: 0.5,
    paddingTop: 11,
  }
});

export default withNavigation(GridView);