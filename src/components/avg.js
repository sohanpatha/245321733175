import React, { useState } from 'react';
import axios from 'axios';

const AverageCalculator = () => {
    const [numberId, setNumberId] = useState('');
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);

    const handleInputChange = (e) => {
        setNumberId(e.target.value);
    };

    const fetchAverage = async () => {
        try {
            console.log(`Fetching average for ID: ${numberId}`); // Debug log
            const response = await axios.get(`http://20.244.56.144/test/rand/${numberId}`);
            console.log('Response:', response.data); // Debug log
            setResult(response.data);
            setError(null); // Clear any previous errors
        } catch (error) {
            console.error('Error fetching data:', error);
            setError('Error fetching data. Please try again.');
            setResult(null);
        }
    };

    return (
        <div>
            <h1>Average Calculator</h1>
            <input
                type="text"
                value={numberId}
                onChange={handleInputChange}
                placeholder="Enter number ID (p, f, e, r)"
            />
            <button onClick={fetchAverage}>Get Average</button>
            {error && (
                <div style={{ color: 'red' }}>
                    <p>{error}</p>
                </div>
            )}
            {result && (
                <div>
                    <h2>Results:</h2>
                    <pre>{JSON.stringify(result, null, 2)}</pre>
                </div>
            )}
        </div>
    );
};

export default AverageCalculator;
