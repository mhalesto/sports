import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import useTeams from '../hooks/useTeams';
import GridView from '../components/GridView';
import AppLoading from 'expo-app-loading';
import { useFonts, Raleway_500Medium } from '@expo-google-fonts/raleway';

const SearchScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [errorMsg, teamOneDetails, teamTwoDetails, teamOnePlayers, teamTwoPlayers, filteredResults, filteredResultsTeam, searchPlayer] = useTeams();
  let [fontsLoaded, error] = useFonts({ Raleway_500Medium });

  if (!fontsLoaded) { return <AppLoading /> }

  return (
    <View style={styles.backgroundStyle}>
      <SearchBar
        searchValue={searchText}
        onSearchChange={(searchText: string) => { setSearchText(searchText); searchPlayer(searchText) }}
        onSearchSubmit={() => searchPlayer(searchText)}
      />

      {errorMsg && (
        <View style={styles.errorMessageContainer}>
          <Text style={styles.errorMessage}>{`${errorMsg}`}</Text>
        </View>
      )}

      <GridView
        searchText={searchText}
        filteredResults={filteredResults}
        filteredResultsTeam={filteredResultsTeam}
        teamOne={teamOneDetails}
        teamTwo={teamTwoDetails}
        teamOnePlayers={teamOnePlayers}
        teamTwoPlayers={teamTwoPlayers}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundStyle: {
    flex: 1,
    backgroundColor: '#fff'
  },
  errorMessageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  errorMessage: {
    fontSize: 18,
    fontWeight: '700',
    fontFamily: 'Raleway_500Medium'
  }
});

export default SearchScreen;