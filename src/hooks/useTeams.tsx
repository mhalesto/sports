import { useEffect, useState } from 'react';
import sports from '../api/sports';

export default () => {
  const [errorMsg, setErrorMsg] = useState('');
  const [teams, setTeams] = useState([]);
  const [teamOneDetails, setTeamOneDetails] = useState({});
  const [teamTwoDetails, setTeamTwoDetails] = useState({})
  const [teamOnePlayers, setTeamOnePlayers] = useState([]);
  const [teamTwoPlayers, setTeamTwoPlayers] = useState([]);

  const SearchApi: any = async (term: string): Promise<any> => {
    try {
      const response = await sports.get('/drivers', {
        params: {
          search: term,
          // season: 2023
        }
      });
      setTeams(response.data.response);
    } catch (err: any) {
      setErrorMsg('Something went wrong');
    }
  }

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

  useEffect(() => {
    // SearchApi('');
    TeamOneDataApi();
    TeamTwoDataApi();
  }, []);

  return [errorMsg, teams, teamOneDetails, teamTwoDetails, teamOnePlayers, teamTwoPlayers, SearchApi];
};