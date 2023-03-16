import { useState } from 'react';
import { nutrients } from './constants'

export const useGetNutrients = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    setTimeout(() => {
        if(loading){
            setData(nutrients);
            setLoading(false);
        }
    }, 5000);

    return { nutrients: data, loading }
}