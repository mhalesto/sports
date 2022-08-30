import { useEffect, useState } from 'react';
import sports from '../api/sports';

interface IUseTeams {
  id: any;
}

export default () => {
  const [errorMsg, setErrorMsg] = useState('');
  const [teams, setTeams] = useState([]);
  const [teamOneDetails, setTeamOne] = useState<IUseTeams>({id: null});
  const [teamTwoDetails, setTeamTwo] = useState<IUseTeams>({id: null})
  const [teamOnePlayers, setTeamOnePlayers] = useState([]);
  const [teamTwoPlayers, setTeamTwoPlayers] = useState([]);

  const SearchApi = async (term: string): Promise<any> => {
    try {
      const response = await sports.get('/drivers', {
        params: {
          search: term
        }
      });
      setTeams(response.data.response);
    } catch (err: any) {
      setErrorMsg('Something went wrong');
    }
  }

  // const TeamOneApi = async () => {
  //   try {
  //     const response = await sports.get('/teams', {
  //       params: {
  //         id:1
  //       }
  //     });
  //     setTeamOne(response.data.response[0].team);
  //   } catch (err: any) {
  //     setErrorMsg('Something went wrong');
  //   }
  // }

  // const TeamTwoApi = async () => {
  //   try {
  //     const response = await sports.get('/teams', {
  //       params: {
  //         id:2
  //       }
  //     });
  //     setTeamTwo(response.data.response[0].team);
  //   } catch (err: any) {
  //     setErrorMsg('Something went wrong');
  //   }
  // }

  const TeamOneDataApi = async () => {
    try {
      const response = await sports.get('/players/squads', {
        params: {
          team: '1'
        }
      });
      setTeamOne(response.data.response[0].team);
      setTeamOnePlayers(response.data.response[0].players);
    } catch (err: any) {
      setErrorMsg('Something went wrong');
    }
  }

  const TeamTwoDataApi = async () => {
    try {
      const response = await sports.get('/players/squads', {
        params: {
          team: '2'
        }
      });
      setTeamTwo(response.data.response[0].team);
      setTeamTwoPlayers(response.data.response[0].players);
    } catch (err: any) {
      setErrorMsg('Something went wrong');
    }
  }

  useEffect(() => {
    // SearchApi();

    TeamOneDataApi();
    TeamTwoDataApi();
  }, []);

  return [errorMsg, teams, teamOneDetails, teamTwoDetails, teamOnePlayers, teamTwoPlayers, SearchApi];
};