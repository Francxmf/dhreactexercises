import { useEffect, useState } from "react"

export function GithubUser({username}){
    const API = "https://api.github.com/users/"
    const [dataApi, setDataApi] = useState({
        name : null,
        bio: null,
        location: null,
        url : null,
    })
    async function getApi(){
        const fetchedApi = await fetch(`${API}${username}`)
        const data = await fetchedApi.json()
        setDataApi(data)
    }
    useEffect(() => {getApi(username)}, [username])
    return (<div>
        <h1>My github data:</h1>
        <p>Username: {dataApi.name}</p>
        <p>Location: {dataApi.location}</p>
        <p>Bio: {dataApi.bio}</p>       
        <p>Profile URL: {dataApi.url}</p>
    </div>)
}