import { useEffect, useState } from 'react';
import sports from '../api/sports';

export default () => {
  const [errorMsg, setErrorMsg] = useState('');
  const [teamOneDetails, setTeamOneDetails] = useState([]);
  const [teamTwoDetails, setTeamTwoDetails] = useState([])
  const [teamOnePlayers, setTeamOnePlayers] = useState([]);
  const [teamTwoPlayers, setTeamTwoPlayers] = useState([]);

  const TeamOneDataApi = async () => {
    try {
      const response = await sports.get('/players/squads', {
        params: {
          team: '2691'
        }
      });
      setTeamOneDetails(response.data.response[0].team);
      setTeamOnePlayers(response.data.response[0].players);
    } catch (err: any) {
      setErrorMsg('Something went wrong');
    }
  }

  const TeamTwoDataApi = async () => {
    try {
      const response = await sports.get('/players/squads', {
        params: {
          team: '529'
        }
      });
      setTeamTwoDetails(response.data.response[0].team);
      setTeamTwoPlayers(response.data.response[0].players);
    } catch (err: any) {
      setErrorMsg('Something went wrong');
    }
  }

  const [filteredResults, setfilteredResults] = useState([]);
  const [filteredResultsTeam, setfilteredResultsTeam] = useState([]);

  const searchPlayer: any = (searchText: string) => {
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

  useEffect(() => {
    searchPlayer('');
    TeamOneDataApi();
    TeamTwoDataApi();
  }, []);

  return [errorMsg, teamOneDetails, teamTwoDetails, teamOnePlayers, teamTwoPlayers, filteredResults, filteredResultsTeam, searchPlayer];
};