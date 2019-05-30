import { useState, useEffect } from 'react'
import axios from 'axios';

export const useHttp = (url, depedencies) => {
    const [isLoading, setIsLoading] = useState(false);
    const [fetchData, setFetchData] = useState(null);
    useEffect(() => {
        setIsLoading(true);
        axios.get(url).then(data => {
            setIsLoading(false);
            setFetchData(data);
        }).catch(err => {
            setIsLoading(false);
            console.log(err);
        });
    }, depedencies);

    return [isLoading, fetchData];

}