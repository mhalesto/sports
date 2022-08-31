import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import useTeams from '../hooks/useTeams';

import GridView from '../components/GridView';

const SearchScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [errorMsg, teams, teamOneDetails, teamTwoDetails, teamOnePlayers, teamTwoPlayers, SearchApi] = useTeams();
  const [filteredResults, setfilteredResults] = useState([]);
  const [filteredResultsTeam, setfilteredResultsTeam] = useState([]);

  const searchPlayer = () => {
    if (searchText !== '') {
      const combinedTeamPlayers = teamOnePlayers.concat(teamTwoPlayers);
      const filteredData = combinedTeamPlayers.filter((order: any) => {
        const searchTextValue: any = searchText.toLowerCase();
        return Object.values(order).join('').toLowerCase().includes(searchTextValue)
      });

      setfilteredResults(filteredData);

      if (filteredData.length > 0) {
        if (teamOnePlayers.includes(filteredData[0])) {
          setfilteredResultsTeam(teamOneDetails)
        } else {
          setfilteredResultsTeam(teamTwoDetails);
        }
      }
    }
  }

  return (
    <View style={styles.backgroundStyle}>
      <SearchBar
        searchValue={searchText}
        onSearchChange={(searchText: string) => {setSearchText(searchText); searchPlayer() }}
        onSearchSubmit={() => searchPlayer()}
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