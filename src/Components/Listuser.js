import axios from "axios"
import { useEffect, useState } from "react"
import Spinner from 'react-bootstrap/Spinner';
import { Link } from "react-router-dom";

const Listuser=()=>{
   const [users,setUsers] = useState([])
   const [loade,setLoade] = useState(true)

   useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then((res)=>setUsers(res.data))
    .then(()=>setLoade(false))
    .catch((err)=>console.log(err))
   },[])
    return(
        <div>
        {
            loade?<Spinner animation="border" />  : users.map(user=> <Link to={`/user/${user.id}`}><h2>{user.name}</h2></Link>)
            
        }
        </div>
    )
}
export default Listuser

