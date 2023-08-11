import axios from "axios";

const id = "YOUR_CLIENT_ID";
const sec = `YOUR_SECRET_ID`;
const params =`?client_id=${id}?secret_id=${sec}`;
const handleError = (error) => console.error(error);

const getProfile = (username) => {
  return axios.get(`https://api.githab.com/users/${username}`)
  .then(user => user.data)
  .catch(handleError);
}


const getRepos = (username) => {
  return axios.get(`https://api.githab.com/users/${username}/repos${params}&per_page=100`)
  .then(repos =>
    repos.data)
 .catch(handleError)
}

const getStarCount = (repos) =>{
  return repos.reduce((acc,repo)=> acc + repo.stargazers_count,0)
}
 const calculateScore = (profile,repos) => {
  const followers = profile.followers;
  const totalStars = getStarCount(repos);
 return followers + totalStars;

 }

const getUserData = (player) => {
   return Promise.all([
    getProfile(player),
    getRepos(player)
])
.then(([profile,repos]) =>({
    profile,
    score: calculateScore(profile,repos)
}))
  .catch(handleError)
 }

const sortPlayers = (players)=>players.sort((a,b) => b.score-a.score);

export const madeBattle = (players) =>{
 return Promise.all(players.map(getUserData))
  .then(sortPlayers)
  .catch(handleError)
}




export const fetchPopularRepos = (language) => {
  
  const encodeURL = window.encodeURI(`https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`)
  return axios.get(encodeURL)
  .then(response => response.data.items)
  .catch(handleError)
  
}