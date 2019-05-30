import { useState, useEffect } from 'react'
import Fetch from 'fetch'

export const useHttp = (url, depedencies) => {
    const [isLoading, setIsLoading] = useState(false);
    cosnt [fetchData, setFetchData] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        Fetch(url).then((response) => {
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