import React from 'react';
import Banner from './Banner';
import Nav from './Nav';
import Requests from '../api/Requests';
import Row from './Row';

import './styles/HomeScreen.css';

function HomeScreen() {
    return (
        <div className="homeScreen">
            <Nav />
            <Banner />

            <Row title="Netflix Originals" fetchUrl={Requests.fetchNetflixOriginals} isLargeRow />
            <Row title="Trending Now" fetchUrl={Requests.fetchTrending} />
            <Row title="Top Rated" fetchUrl={Requests.fetchTopRated} />
            <Row title="Action Movies" fetchUrl={Requests.fetchActionMovies} />
            <Row title="Comedy Movies" fetchUrl={Requests.fetchComedyMovies} />
            <Row title="Horror Movies" fetchUrl={Requests.fetchHorrorMovies} />
            <Row title="Romance Movies" fetchUrl={Requests.fetchRomanceMovies} />
            <Row title="Documentaries" fetchUrl={Requests.fetchDocumentaries} />
        </div>
    )
}

export default HomeScreen
