const fetchBreed = (req, res, arr, id) => {
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
				arr.push(element);
			}
		});
	})
	.then(data => JSON.stringify(arr));
}

module.exports = fetchBreed;