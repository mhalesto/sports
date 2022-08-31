import axios from 'axios';

// Football
export default axios.create({
	baseURL: 'https://v3.football.api-sports.io',
	"headers": {
		"x-rapidapi-host": "v3.football.api-sports.io",
		"x-rapidapi-key": "b7a4ae28d48981624a414f1fdd857787" //Main key
	}
});