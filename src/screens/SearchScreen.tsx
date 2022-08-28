import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';

const SearchScreen = () => {
  const [searchText, setSearchText] = useState('');
  return(
    <View style={styles.backgroundStyle}>
      <SearchBar 
        searchValue={searchText} 
        onSearchChange={(searchText: string) => setSearchText(searchText)}
        onSearchSubmit={() => alert('Text submitted')}
        />
      <Text>Search screens {searchText}</Text>
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