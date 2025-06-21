import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {

    const data = useLoaderData();

    // const [data, setData] = useState([])

    // useEffect(() => {
    //     fetch('https://api.github.com/users/Abhishek-Singh5')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
    //     })
    // }, [])

    return (




        <div 
            className="text-center m-4 bg-orange-200 text-black
            p-4 text-4xl font-bold"
        >Github followers: {data.followers}
        
        <img src={data.avatar_url} alt="Git picture" width={300} className="rounded"/>
        </div>
    )
}

export default Github


export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/Abhishek-Singh5')

    return response.json();
}