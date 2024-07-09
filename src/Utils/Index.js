const url = 'https://youtube-v31.p.rapidapi.com';
export const options = {
	method: 'GET',
    params: {
        maxResults: 50,
      },
	headers: {
		'x-rapidapi-key': 'af07fdcaf9msh88dc8b9d3bfe41dp133dd1jsn3bf09b36ca51',
		'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
	}
};
export const Fetchdata = async(SECurl) => {
    try {
        const response = await fetch(`${url}/${SECurl}`, options);
        const result = await response.json();
        return result
    } catch (error) {
        console.error(error);
    }
}
