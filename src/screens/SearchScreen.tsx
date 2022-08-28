import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';

const SearchScreen = () => {
  return(
    <View style={styles.backgroundStyle}>
      <SearchBar />
      <Text>Search screen</Text>
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