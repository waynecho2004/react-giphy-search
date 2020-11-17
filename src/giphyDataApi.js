import axios from 'axios';

// Index, Show, Create, Update, Destroy

// Get All Giphys matching the search
const getAllGiphysBySearch = (searchString) => {
    return axios.get(`https://api.giphy.com/v1/gifs/search?api_key=Ude0jqD9DdKRWtKy5Dv8TVE4SSbRdpDo&limit=5&q=${searchString}`);
    // return axios.get(`${process.env.GIPHY_SEARCH_URL}?api_key=${process.env.API_KEY}&limit=${process.env.LIMIT}&q=${searchString}`);
};

export { getAllGiphysBySearch };