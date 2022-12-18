let oneBreedInfo = {};
 		allBreeds = [];
 		oneBreedImages = [];

const getAllBreeds = async (req, res) => {
	const fetchBreed = async () => {
		const URL_ALL_BREEDS = `https://api.thecatapi.com/v1/breeds`;
	
		await fetch(URL_ALL_BREEDS, {headers: {
			'x-api-key': process.env.API_KEY
		}})
		.then((res) => {
			return res.json();
		})
		.then((data) => {
				data.map(element => {
					allBreeds.push({
						name: element.name,
						id: element.id,
					})
				});
		})
		.then(data => JSON.stringify(allBreeds));
	}
	await fetchBreed();
	res.status(200).json(allBreeds);
}

const getOneBreedInfo = async (req, res) => {
	const { id } = req.params;
	const URL_BREED_IMAGE = `https://api.thecatapi.com/v1/images/search?limit=${3}&breed_ids=${id}`;
	const URL_ALL_BREEDS = `https://api.thecatapi.com/v1/breeds`;	

	await fetch(URL_BREED_IMAGE, {headers: {
		'x-api-key': process.env.API_KEY
	}})
	.then((res) => {
		return res.json();
	})
	.then((data) => {
		data.map(el => {
			oneBreedImages.push({
				url: el.url,
				width: el.width,
				height: el.height,
			});
		})
	})
	.then(data => JSON.stringify(oneBreedImages));

	await fetch(URL_ALL_BREEDS, {headers: {
		'x-api-key': process.env.API_KEY
	}})
	.then((res) => {
		return res.json();
	})
	.then((data) => {
		data.map(el => {
			if(id == el.id) {
				oneBreedInfo = {
					name: el.name,
					description: el.description,
					origin: el.origin,
					life_span: el.life_span,
					adaptability: el.adaptability,
					affection_level: el.affection_level,
					child_friendly: el.child_friendly,
					grooming: el.grooming,
					intelligence: el.intelligence,
					health_issues: el.health_issues,
					social_needs: el.social_needs,
					stranger_friendly: el.stranger_friendly,
					images: oneBreedImages,
				};
			} else {
				
			}
		});
	})
	.then(data => JSON.stringify(oneBreedInfo));
  res.status(200).json(oneBreedInfo);
}

module.exports = {
	getAllBreeds,
	getOneBreedInfo,
}