import axios from 'axios';

// Football
export default axios.create({
  baseURL: 'https://v3.football.api-sports.io',
  "headers": {
		"x-rapidapi-host": "v3.football.api-sports.io",
		"x-rapidapi-key": "b7a4ae28d48981624a414f1fdd857787" //Main key
		// "x-rapidapi-key": "d53f743b9329224c73dbaa539e4254247" //Fash key
	}
});

// F1
// export default axios.create({
//   baseURL: 'https://v1.formula-1.api-sports.io',
//   "headers": {
// 		"x-rapidapi-host": "api-formula-1.p.rapidapi.com",
// 		"x-rapidapi-key": "b7a4ae28d48981624a414f1fdd857787" //Main key
// 		// "x-rapidapi-key": "d53f743b9329224c73dbaa539e4254247" //Fash key
// 	}
// });