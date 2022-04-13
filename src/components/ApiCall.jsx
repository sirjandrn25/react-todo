import React from 'react';

const ApiCall = ()=>{
    const callapi = ()=>{
        const url = "http://localhost:8000/api/v1/tasks/";
        fetch(url).then(res=>res.json()).then(json_res=>{
            console.log(json_res)
        })
    }

    return (
        <button onClick={callapi}>
            fetch api
        </button>
    );
}

export default ApiCall;