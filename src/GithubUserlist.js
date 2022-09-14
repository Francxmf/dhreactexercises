import { useState } from "react";
import { GithubUser } from "./GithubUser"

 export function GithubUserlist(){
     const [gituser, setUserProps] = useState({
         user : [],
         insert : ""
     })

     function userInputHandler(e){
         setUserProps(()=> {
             return {
                 user : [...gituser.user], 
                 insert : e.target.value
             }             
         })
     }
     function searchBtnHandler(){
         setUserProps((data)=> {
             console.log(data)
             return {
                 user : data.insert === "" ? [data.user] : data.user.push(data.insert),
                 ...data,
             }
         })
     }
     const {user} = gituser
     return (
         <form>
         <h2>- Search Git usernames:</h2>
         <input name="username" value={gituser.insert} onChange={userInputHandler}/>
         <button type="button" onClick={searchBtnHandler}>search</button>
         <ul>
           {user.map((username, index) => (
            (<li key={index}>{<GithubUser username={username} />}</li>)
           ))}
         </ul>
       </form>
     );
 }