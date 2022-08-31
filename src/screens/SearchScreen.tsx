import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import useTeams from '../hooks/useTeams';
import GridView from '../components/GridView';

const SearchScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [errorMsg, teamOneDetails, teamTwoDetails, teamOnePlayers, teamTwoPlayers, filteredResults, filteredResultsTeam, searchPlayer] = useTeams();

  return (
    <View style={styles.backgroundStyle}>
      <SearchBar
        searchValue={searchText}
        onSearchChange={(searchText: string) => { setSearchText(searchText); searchPlayer(searchText) }}
        onSearchSubmit={() => searchPlayer(searchText)}
      />
      {errorMsg && (<Text>{`${errorMsg}`}</Text>)}

      <GridView searchText={searchText} filteredResults={filteredResults} filteredResultsTeam={filteredResultsTeam} teamOne={teamOneDetails} teamTwo={teamTwoDetails} teamOnePlayers={teamOnePlayers} teamTwoPlayers={teamTwoPlayers} />
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundStyle: {
    flex: 1,
    backgroundColor: '#fff'
  }
});

export default SearchScreen;