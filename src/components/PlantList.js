// src/components/PlantsList.js
import React, { useState, useEffect } from 'react';
import { fetchPlants } from '../api/TrefleApi';

const PlantsList = () => {
    const [plants, setPlants] = useState([]);
    const [loading, setLoading] = useState(false); // Ajouté pour gérer l'état de chargement
    const [error, setError] = useState(''); // Ajouté pour gérer l'état d'erreur

    useEffect(() => {
        setLoading(true); // Commence le chargement
        const getPlants = async () => {
            try {
                const data = await fetchPlants();
                setPlants(data.data); 
                setError(''); // Réinitialise l'état d'erreur
            } catch (error) {
                setError('Failed to fetch plants.'); // Met à jour l'état d'erreur
                console.error(error);
            } finally {
                setLoading(false); // Termine le chargement
            }
        };

        getPlants();
    }, []);

    if (loading) return <div>Loading...</div>; // Affiche un indicateur de chargement
    if (error) return <div>Error: {error}</div>; // Affiche un message d'erreur

    return (
        <div>
            <h2>Plants</h2>
            <ul>
                {plants.map((plant) => (
                    <li key={plant.id}>{plant.common_name || 'Unnamed plant'}</li>
                ))}
            </ul>
        </div>
    );
};

export default PlantsList;
