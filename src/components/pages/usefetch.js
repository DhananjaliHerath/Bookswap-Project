import { useState, useEffect } from "react";
import axios from "axios";
const useFetch = (url, jwt,inputw) => {
    const [data, setData] = useState();
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    // console.log(url)
    // console.log(jwt)
    console.log("inputw from fetch: "+inputw)

    useEffect(() => {
        // console.log('hi')
        // const abortCont = new AbortController();
        // setTimeout(() => {
        axios({
            method: "get",
            url: url + inputw,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET,PUT,POST,PATCH,OPTIONS",
                "Authorization": `Bearer ` + jwt
            },

            mode: "cors",
        }).then((res) => {
            // console.log("kfhakhgfkag"+res.data.body)
            // if (!res.ok) {
            //     throw Error('Could not fetch the data for that resource')
            // } else {
            // console.log(res.data.body)
            setData(...[res.data.body]);
            setIsPending(false);
            setError(null);
            // localStorage.setItem('data', res.data.body)
            // }
            // return res.json();
        }).catch((err => {
            if (err.name == 'AbortError') {
                console.log('fetch aborted');
            } else {
                setIsPending(false);
                setError(err.message);
            }
        }));
        // setData(localStorage.getItem('data'));
        // }, 2000);
        // return () => abortCont.abort;
    },[inputw]);
    // console.log(data)
    return { data, isPending, error }
}

export default useFetch