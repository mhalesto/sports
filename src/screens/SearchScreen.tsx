import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import useTeams from '../hooks/useTeams';

import GridView from '../components/GridView';

const SearchScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [errorMsg, teams, teamOneDetails, teamTwoDetails, teamOnePlayers, teamTwoPlayers, SearchApi] = useTeams();

  return (
    <View style={styles.backgroundStyle}>
      <SearchBar
        searchValue={searchText}
        onSearchChange={(searchText: string) => setSearchText(searchText)}
        onSearchSubmit={() => SearchApi}
      />
      {errorMsg && (<Text>{`${errorMsg}`}</Text>)}

      <GridView teams={teams} teamOne={teamOneDetails} teamTwo={teamTwoDetails} teamOnePlayers={teamOnePlayers} teamTwoPlayers={teamTwoPlayers} />
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