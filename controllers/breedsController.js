let allBreeds = [];
let oneBreed = [];

const getAllBreeds = async (req, res) => {
	const fetchBreed = () => {
		const URL_ALL_BREEDS = `https://api.thecatapi.com/v1/breeds`;
	
		fetch(URL_ALL_BREEDS, {headers: {
			'x-api-key': process.env.API_KEY
		}})
		.then((res) => {
			return res.json();
		})
		.then(async (data) => {
			await data.map(element => {
				allBreeds.push({
					name: element.name,
					id: element.id,
				})
			});
		})
		.then(data => JSON.stringify(allBreeds));
	}
	fetchBreed();
	res.status(200).json(allBreeds);
}

const getOneBreed = async (req, res) => {
	const { id } = req.params;
	const fetchBreed = () => {
		const URL_ALL_BREEDS = `https://api.thecatapi.com/v1/breeds`;
	
		fetch(URL_ALL_BREEDS, {headers: {
			'x-api-key': process.env.API_KEY
		}})
		.then((res) => {
			return res.json();
		})
		.then((data) => {
		  data.map(element => {
				if(id == element.id) {
					oneBreed.push(element);
				}
			});
		})
		.then(data => JSON.stringify(oneBreed));
	}
  fetchBreed();
  res.status(200).json(oneBreed);
}

module.exports = {
	getAllBreeds,
	getOneBreed,
}