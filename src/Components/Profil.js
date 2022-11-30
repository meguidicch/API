import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Spinner from 'react-bootstrap/Spinner';
import { Card } from "react-bootstrap";

const Profil=()=>{
    const {asma}= useParams()
    const [user,setUser] = useState({})
    const [loading,setLoading] = useState(true)

    useEffect(()=>{
         axios.get(`https://jsonplaceholder.typicode.com/users/${asma}`)
         .then((res)=>setUser(res.data))
         .then(()=>setLoading(false))
         .catch((err)=>console.log(err))
    },[])
    return(
        <div>
          {
            loading?
            <Spinner animation="border" />
            :
            <Card style={{ width: '17rem' }}>
            <Card.Body className="Wint">
              <Card.Title className="titre1">{user.name}</Card.Title>
              <Card.Subtitle className="titre3">Card Subtitle</Card.Subtitle>
              <Card.Text className="titre2">
                {user.username}
              </Card.Text>
              <Card.Text className="titre4">
                {user.email}
              </Card.Text>

            </Card.Body>
          </Card>
          }
        </div>
    )
}
export default Profil