import { useGithubUser } from "./UseGithubUser"

export function GithubUser({username}){
  const {dataApi, error, loading, getApi} = useGithubUser(username)

    function FetchedDataHandler(){
      getApi(username)
    }
    return (
     <div>
      <h2>- Load Git profile:</h2>
      <button onClick={FetchedDataHandler}>reload profile</button>
      {loading && <p>Loading..</p>}
      {error && <p>There was an error</p>}
      {dataApi.name && <p>Nome dell'utente: {dataApi.name}</p>}
      {dataApi.bio && <p>Bio: {dataApi.bio}</p>}
      {dataApi.location && <p>Followers: {dataApi.bio}</p>}
      {dataApi.url && <p>Profile link: {dataApi.url}</p>}
     </div>
    );
}