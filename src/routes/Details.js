import React, { Component } from 'react';
import Spinner from '../components/Spinner';
import HeaderDetails from '../components/HeaderDetails';
import Actorlist from '../components/ActorList';
import axios from 'axios';


const API_URL = "https://api.themoviedb.org/3";
const API_KEY = "26871ee4ec4ed58969ff8819cfeff30b";


class Details extends Component {
    state = {
        loading: true,
        actors : [
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
        ],
        mTitle: "Batman",
        mDesc: "Voici la description du film Batman",
        imgSrc: "./images/Fast_large.jpg",
        revenue: "$15236478",
        runtime: "Released",
        vote: ""
    }
    async componentDidMount() {
        try{
            const movieId = this.props.match.params.id
            const url = `${API_URL}/movie/${movieId}?api_key=${API_KEY}&language=fr`;
            const {data : { 
                revenue, 
                runtime, 
                title, 
                overview, 
                status, 
                vote_average, 
                poster_path 
                }
            } = await this.loadInfos(url)
            this.setState({
                revenue,
                runtime,
                mTitle: title,
                mDesc: overview,
                status,
                imgSrc: poster_path,
                vote: vote_average
            }, async () => {
                const url = `${API_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=fr`;
                const { data : { cast }} = await this.loadInfos(url);
                this.setState({ actors : [...cast], loading: false})
                
            })
        }catch(e){
            console.log("e", e);
        }
    }

    loadInfos = url => axios.get(url)
    render() {

        const { loading, mTitle, mDesc, actors, imgSrc, revenue, runtime, status, vote} = this.state;
        return (
            <div className="app">
                {loading ? (
                    <Spinner/>
                ) :
                (
                    <>
                        <HeaderDetails
                            mtitle={mTitle}
                            mDesc={mDesc}
                            imgSrc={imgSrc}
                            runtime={runtime}
                            revenue={revenue}
                            status={status}
                            vote={vote}
                        />
                        <Actorlist actors={actors}/>
                    </>
                )}
            </div>
        );
    }
}

export default Details;