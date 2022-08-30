import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

interface ITeamTitleGridProps {
  logoUri: string,
  teamName: string
}

const TeamTitleGrid = ({logoUri, teamName}: ITeamTitleGridProps) => {
  return (
    <View style={styles.teamBackgroundStyle}>
      <Image
        style={styles.teamLogoStyle}
        source={{
          uri: `${logoUri}`,
        }}
      />
      <Text style={styles.titleStyle}>{teamName}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  teamBackgroundStyle: {
    backgroundColor: '#fff',
    height: 50,

    marginHorizontal: 15,
    marginTop: 15,
    flexDirection: 'row',
    flex: 1,
  },
  titleStyle: {
    alignSelf: 'center',
    marginVertical: 15
  },
  teamLogoStyle: {
    height: 50,
    width: 50,
    alignSelf: 'center'
  }
})

export default TeamTitleGrid;