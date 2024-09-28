import React, { useEffect, useState } from 'react';

const Music = () => {
    const [musicData, setMusicData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/data')
            .then((response) => response.json())
            .then((data) => setMusicData(data))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <h2>Music Data</h2>
            <ul>
                {musicData.map((item, index) => (
                    <li key={index}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Music;
