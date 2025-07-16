import { useEffect, useState } from "react";
import {ClimbingBoxLoader} from "react-spinners"
import "./dashboard.css"
import { NavLink } from "react-router-dom";
import axios from "axios"

//evry line of code and logics is my own thinking.
// maximum tryed to develop this. 
const DashboardPage=()=>{

    const [userdata,setUserdata]=useState([]) //store total data from API
    const [pagesize,setPagesize]=useState(10) //to pagenation
    const [count,setCount]=useState(1) //to count data
    const [search,setSearch]=useState([])// to store data

    useEffect(()=>{
        back()
             //  fetch("https://jsonplaceholder.typicode.com/comments")
              //.then(res=>res.json())
              //res.slice((count-1)*parseInt(pagesize),count*parseInt(pagesize)).
              //which importance is create the pages and display no.of items from page. 
              //.then(res=>setUserdata(res.slice((count-1)*parseInt(pagesize),count*parseInt(pagesize))))        

    },[count,pagesize])

    async function back(){
       let d= await axios.get("https://jsonplaceholder.typicode.com/comments")
       setSearch(d.data.slice((count-1)*parseInt(pagesize),count*parseInt(pagesize)))
       setUserdata(d.data.slice((count-1)*parseInt(pagesize),count*parseInt(pagesize)))
    }

    //item.name.includes(e.target.value) || item.email.includes(e.target.value) || item.body.includes(e.target.value)) this logic is search tha name , email , comment from list.
    const searchfun=(e)=>{
         let result=search.filter(item=>item.name.includes(e.target.value) || item.email.includes(e.target.value) || item.body.includes(e.target.value))
          if(result.length>0){
            setUserdata(result)
          }
        }

function ascendingid(){
    let data=[...userdata]
    if(data.length>0){
    let result=data.sort((a,b)=>b.postId.localeCompare(a.postId))
    setUserdata(result)
    }
}

function ascendingname(){
    let data=[...userdata]
    if(data.length>0){
        let result=data.sort((a,b)=>a.name.localeCompare(b.name))
        setUserdata(result)
    }
}

function ascendingemail(){
    let data=[...userdata]
    if(data.length>0){
        let result=data.sort((a,b)=>a.email.localeCompare(b.email))
        setUserdata(result)
    }
}

    return(
        <div className="dashboard">
            <div className="dashmain">
                <div className="sortmain">
                    <button className="sort" onClick={ascendingid}>Sort Post ID</button>
                    <button className="sort" onClick={ascendingname}>Sort Name</button>
                    <button className="sort" onClick={ascendingemail}>Sort Email</button>
                </div>
                    <input className="search" type="search" placeholder="Search name,email,comment" onChange={searchfun}/>
            </div>
            <div className="table">
                <div className="head">
                    <h1 className="head1">PostId</h1>
                    <h1 className="head1">Name</h1>
                    <h1 className="head1">Email</h1>
                    <h1 className="head1">Comment</h1>
                </div>
              {userdata.length? <div className="colums">
                    {userdata.map((item,index)=>(
                        <div>
                      <NavLink to="/profile">
                          <div key={index} className="table2">
                            <h1 className="body">{item.postId}</h1>
                            <h1 className="body">{item.name}</h1>
                            <h1 className="body">{item.email}</h1>
                            <h1 className="body">{item.body}</h1>
                        </div>
                        </NavLink> 
                        <hr className="line"/>
                        </div>
                    ))
                    }
                </div>:<div className="spinner"><ClimbingBoxLoader
                       color="#ab2cb7"
                       cssOverride={{}}
                       loading
                       size={25}
                       speedMultiplier={2}
                       /></div>}
            </div>
            <div className="pagenation">
                <span className="items">1 - {pagesize} of 100 items</span>
                <button className="arrow" onClick={()=>setCount(count-1)} disabled={count==1}>{`<<<`}</button>
                <span className="number">{count}</span>
                <button className="arrow" onClick={()=>setCount(count+1)} disabled={count==500/pagesize}>{`>>>`}</button>
                <div>
                    <select className="select" onChange={(e)=>setPagesize(parseInt(e.target.value))}>
                        <option>10</option>
                        <option>5</option>
                        <option>50</option>
                        <option>100</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default DashboardPage;