// Include the axios package for performing HTTP requests
import axios from "axios";

// NYT API authKey
const authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";


// Helper Functions\
const helpers = {


    //performing the request
    runQuery: (numArticles, searchTerm) => {


        //queryURL for NYT API
        const queryURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key="
${authKey}"&q=${searchTerm}`;

        console.log(numArticles, queryURL);
        return axios.get(queryURL).then((NYTData) => {

            console.log(NYTData);
            return NYTData.response.docs[numArticles];
        });
    },

    getArticles: () => {
        return axios.get("https://localhost:3001/api/saved").then((NYTData) => {

            console.log(NYTData);
            return NYTData;
        });
    },

    saveArticles: () => {
        return axios.post("https://localhost:3001/api/saved").then((NYTData) => {

            console.log(NYTData);
            return NYTData;
        });
    },

    deleteArticles: () => {
        return axios.delete("https://localhost:3001/api/saved").then((response) => {

            console.log(response);
            return response;
        });
    }

    // //for displaying the GET route articles
    // getArticles: (NYTData) => {
    //     return axios.get("/api/saved", NYTData);
    // };

    // //for POSTing the new articles to the db
    // saveArticles: (NYTData) => {
    //     return axios.post("/api/saved", NYTData);
    // };

    // //for DELETE route to delete articles from the db
    // deteleArticles: (NYTData) => {
    //     return axios.delete("api/saved", NYTData);
    // };
};

// We export the helpers function (which contains getGithubInfo)
export default helpers;