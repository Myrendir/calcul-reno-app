import React, {useEffect, useState} from "react";
import axios from "axios";

const apiUrl = process.env.URL_JAD_API;

export const GetAll = (path) => {
    const [data, setData] = useState([])

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const {data: response} = await axios.get(apiUrl + path);
                setData(response);
            } catch (e) {
                console.error(e.message)
            }
            setLoading(false);
        }
        fetchData();
    }, [path])


    return {
        data,
        loading
    }
}

export const addArticle = (path, data) => {
    return axios.post(path, data);
}