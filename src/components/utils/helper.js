// Include the axios package for performing HTTP requests
import axios from "axios";

// NYT API authKey
const authKey = "60064f02c0cb48578b7deb817fa16075";


// Helper Functions\
const helpers = {


    //performing the request
    runQuery: (numArticles, searchTerm) => {


        //queryURL for NYT API
        const queryURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=
${authKey}&q=${searchTerm}`;

        console.log(numArticles, queryURL);

        return axios.get(queryURL).then((NYTData) => {

            console.log(NYTData);
            return NYTData.data.response.docs;
        });
    },

    getArticles: (NYTData) => {
        return axios.get("http://localhost:3001/api/saved", NYTData)
    },

    saveArticles: (NYTData) => {
        return axios.post("http://localhost:3001/api/saved", NYTData)
    },

    deleteArticles: () => {
        return axios.delete("http://localhost:3001/api/saved")
    }

};

// We export the helpers function (which contains getGithubInfo)
export default helpers;