import { useGithubUser } from "./UseGithubUser"

export function GithubUser({username}){

    const {dataApi} = useGithubUser(username);

    return (<div>
        <h1>github data:</h1>
        <p>Username: {dataApi.name}</p>
        <p>Location: {dataApi.location}</p>
        <p>Bio: {dataApi.bio}</p>       
        <p>Profile URL: {dataApi.url}</p>
    </div>)
}