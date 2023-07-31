import axios from "axios";

const handleError = (error) =>{console.error(error)}

export const fetchPopularRepos = (language) => {
  
  const encodeURL = window.encodeURI(`https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`)
  return axios.get(encodeURL)
  .then(response => response.data.items)
  .catch(handleError)
  
}