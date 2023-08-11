import PlayerPreview from "./PlayerPreview";
import React from "react";

const Player = ({label, score, profile}) =>(
<div>
    <h1 className="header"> {label} </h1>
    <h3 style={{textAlign:`center`}}> {score} </h3>
    <PlayerPreview  avatar = {profile.avatar_url} userName={profile.login}>
    <ul className="space-list-items">
        {profile.name && <li> {profile.name} </li>}
        {profile.location && <li> {profile.location} </li>}
        {profile.company &&<li> {profile.company} </li>}
        <li>Followers:{profile.followers}</li>
        <li>Folllowing:{profile.following}</li>
        <li>Public Repos:{profile.public_repos}</li>
        {profile.blog && <li><a href={profile.blog}>{profile.blog}</a></li>}

    </ul>

    </PlayerPreview>
</div>
 ) 

export default Player;