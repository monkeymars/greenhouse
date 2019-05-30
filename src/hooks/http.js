import { useState, useEffect } from 'react'
import MOCK_DATA from '../resource/MOCK_DATA.json';

export const useHttp = (url, depedencies) => {
    const [isLoading, setIsLoading] = useState(false);
    const [fetchData, setFetchData] = useState(null);
    useEffect(() => {
        setIsLoading(true);
        fetch(url).then((response) => {
            if (!response) {
                throw new Error('Failed to fetch!');
            }
            return response.json();
        }).then(data => {
            setIsLoading(false);
            setFetchData(data);
        }).catch(err => {
            setIsLoading(false);
            console.log(err);
        });
    }, depedencies);

    return [isLoading, fetchData];

}

/**
 * MockData
 * @returns {Object} sample products
 */
export const MockData = () => {
    return MOCK_DATA;
}