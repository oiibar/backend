const fetchBreed = (req, res, arr) => {
	const URL_ALL_BREEDS = `https://api.thecatapi.com/v1/breeds`;

	fetch(URL_ALL_BREEDS, {headers: {
		'x-api-key': process.env.API_KEY
	}})
	.then((res) => {
		return res.json();
	})
	.then((data) => {
		data.map(element => {
			arr.push({
				name: element.name,
				id: element.id,
			})
		});
	})
	.then(data => JSON.stringify(arr));
}

module.exports = fetchBreed;