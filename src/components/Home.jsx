import React, { useEffect } from 'react';
import styled from 'styled-components';
import { db } from '../firebase/firebase';
import { collection, getDocs } from 'firebase/firestore';
import ImgSlider from './ImgSlider';
import Viewers from './Viewers';
import Recommends from './Recommends';
import NewDisney from './NewDisney';
import Originals from './Originals';
import { useDispatch, useSelector } from 'react-redux';
import { setMovies } from '../Redux/movieSlice';
import { selectUserName } from '../Redux/userSlice';
import Trending from './Trending';

function Home() {
    const dispatch = useDispatch();
    const userName = useSelector(selectUserName);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'movies'));

                let recommends = [];
                let newDisneys = [];
                let originals = [];
                let trending = [];

                querySnapshot.forEach((doc) => {
                    switch (doc.data().type) {
                        case 'recommend':
                            recommends.push({ id: doc.id, ...doc.data() });
                            break;
                        case 'new':
                            newDisneys.push({ id: doc.id, ...doc.data() });
                            break;
                        case 'original':
                            originals.push({ id: doc.id, ...doc.data() });
                            break;
                        case 'trending':
                            trending.push({ id: doc.id, ...doc.data() });
                            break;
                        default:
                            break;
                    }
                });

                dispatch(
                    setMovies({
                        recommend: recommends,
                        newDisney: newDisneys,
                        original: originals,
                        trending: trending
                    })
                );
            } catch (error) {
                console.error('Error fetching movies: ', error);
            }
        };

        fetchMovies();
    }, [dispatch, userName]);

    return (
        <Container>
            <ImgSlider />
            <Viewers />
            <Recommends />
            <NewDisney />
            <Originals />
            <Trending />
        </Container>
    );
}

const Container = styled.main`
    position: relative;
    min-height: calc(100vh - 250px);
    overflow-x: hidden;
    display: block;
    padding: 0 calc(3.5vw + 5px);

    &:after {
        background: url('/images/home-background.png') center center / cover no-repeat fixed;
        content: '';
        position: absolute;
        inset: 0px;
        opacity: 1;
        z-index: -1;
    }
`;

export default Home;
