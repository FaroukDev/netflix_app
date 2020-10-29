import React, { Component } from 'react';
import Spinner from '../components/Spinner';
import HeaderDetails from '../components/HeaderDetails';
import Actorlist from '../components/ActorList';

const actors = [
    {
        name: "Farouk Elayache",
    },
    {
        name: "Alex Delpiero",
    },
    {
        name: "Alessandro Nesta",
    },
    {
        name: "Denis Bergkamps",
    },
    {
        name: "Lionel messi",
    }
]

class Details extends Component {
    render() {
        return (
            <div className="app">
                {this.props.loading ? (
                    <Spinner/>
                ) :
                (
                    <>
                        <HeaderDetails
                            mtitle={"Batman"}
                            mDesc={"Voici la description du film batman"}
                            imgSrc={"./images/Fast_large.jpg"}
                            runtime={"2h30"}
                            revenue={"$15236478"}
                            status={"Released"}
                            vote={""}
                        />
                        <Actorlist actors={actors}/>
                    </>
                )}
            </div>
        );
    }
}

export default Details;