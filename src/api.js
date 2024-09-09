import axios from "axios";


const searchImages = async(term)=> {
const response =await axios.get('https://api.unsplash.com/search/photos', {
    headers:{
Authorization:"Client-ID FbX5um8j5n1qI2rWhoXpEdR-OXIAU2914uzEubuCRvU",
    },
    params:{
query:term,
    },
});

return response.data.results;

};
export default searchImages;