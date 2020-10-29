import React from 'react';
import Actor from './Actor';


import "../css/ActorList.css";

const IMAGE_BASE_URL = "http://image.tmdb.org/t/p";
const POSTER_SIZE = "w500";


const ActorList = (props) => {
    const renderActor = () => {
        return props.actors.map((actor, i) => {
            const imgSrc = `${IMAGE_BASE_URL}/${POSTER_SIZE}/${actor.profile_path}`;
            return (
                <Actor
                    key={i}
                    imgSrc={imgSrc}
                    name={actor.name}
                    hover={false}
                />
            )
        })
    }
    return (
        <div className="actorlist">
            <h3 className="actorList--title">ACTEURS</h3>
            <div className="actorList--grid">
                {renderActor()}
            </div>
        </div>
    );
};

export default ActorList;
