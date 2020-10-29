import React from 'react';
import Actor from './Actor'

import "../css/ActorList.css";

const ActorList = (props) => {
    const renderActor = () => {
        return props.actors.map((actor, i) => {
            const imgSrc = './images/Fast_small.jpg'
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
