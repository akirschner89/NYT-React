// Include the axios package for performing HTTP requests
import axios from "axios";

// NYT API authKey
const authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";


// Helper Functions\
const helpers = {

    
    //what to include in the api query    

    //performing the request
    runQuery: (numArticles) => {


//queryURL for NYT API
const queryURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key="
${authKey}"&q=`;

        console.log(numArticles, queryURL);
        return axios.get(queryURL).then((NYTData) => {
            
            console.log(NYTData);
            return NYTData.response.docs[numArticles];
        });
      },

      getArticles: (numArticles) => {
        return axios.get("/api/saved").then((NYTData) => {
            
            console.log(NYTData);
            return NYTData.response.docs[numArticles];
        });
      },

      saveArticles: (numArticles) => {
        
                
                return axios.post("/api/saved").then((NYTData) => {
                    
                    console.log(NYTData);
                    return NYTData.response.docs[numArticles];
                });
              },

              deleteArticles: () => {
                
                        return axios.delete("/api/saved").then((response) => {
                            
                            console.log(response);
                            return response.docs[0];
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