import React from 'react';
import useGetPets from '../hooks/index';
import PetItem from '../components/PetItem';

const API = 'https://us-central1-patitas-9da3d.cloudfunctions.net/api';

const Home = () => {
    const pets = useGetPets(API);
    return (
        <div className="Home">
            <div className="Home-container">
                <div className="Home-items">
                    {pets.map((pet, index) =>
                        <PetItem pet={pet} key={`pet-${index}`} /> 
                    )}
                </div>
            </div>
        </div>
    );
}

export default Home;