import React, { useEffect, useState } from 'react';
import testApi from "../api/testApi"
import queryString from 'query-string';
function TestApi(props) {
    const [state,setState] = useState({
        array:[],
    })
    const getData = async() =>{  
        console.log(process.env.API_URL_AXIOS);     
        try {
            const results = await testApi.getAll();
            console.log(results);
        } catch (error) {
            
        }
    }
    useEffect(() =>{
            getData();
        }
    )
    return (
        <div>
            aaaa
        </div>
    );
}

export default TestApi;