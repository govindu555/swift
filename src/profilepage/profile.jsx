import { useEffect, useState } from "react"
import "./profile.css"
import { useNavigate } from "react-router-dom"

// this entire code is my own
const ProfilePage=()=>{

    const [profiledata,setProfiledata]=useState([]) // store profile data from API

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users/2")
        .then(res=>res.json())
        .then(res=>setProfiledata(res))
    },[])

    const nav=useNavigate()

    // to navigate to dashboard using useNavigate hook
     const arrowfun=()=>{
         nav("/")
     }
     

    return(
        <div className="profile">
            <div>
                <h1 className="profiletext"><span className="back" onClick={arrowfun}>{`<<< `}</span>Welcome, Ervin Howell</h1>
                <div className="profile2">
                  <div className="profilehead">
                    <div className="profilelogo">EH</div>
                    <div className="profilehead2">
                        <h1 className="profiletext2">{profiledata.name}</h1>
                        <h1 className="profiletext3">{profiledata.email}</h1>
                    </div>
                  </div>
                  <div className="row">
                    <div>
                        <h1 className="profileuser">User Id</h1>
                        <h1 className="profileuser2">{profiledata.id}</h1>
                    </div>
                    <div>
                        <h1 className="profileuser">Name</h1>
                        <h1 className="profileuser2">{profiledata.name}</h1>
                    </div>
                    <div>
                        <h1 className="profileuser">Email Id</h1>
                        <h1 className="profileuser2">{profiledata.email}</h1>
                    </div>
                    <div>
                        <h1 className="profileuser">Address</h1>
                        <h1 className="profileuser2">{profiledata.website}</h1>
                    </div>
                    <div>
                        <h1 className="profileuser">Phone</h1>
                        <h1 className="profileuser2">{profiledata.phone}</h1>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage