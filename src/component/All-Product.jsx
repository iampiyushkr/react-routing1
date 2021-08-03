import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

export default function Allpro() {
    const [data1,setData1]=useState([])
    useEffect(() => {
        axios.get("http://localhost:3001/product").then(({ data }) => {
            setData1(data)
            console.log(data1)
        })
    },[])
    return <div>
        {data1.map(e => <div>
            <p>{e.name}</p>
            <p>{e.price}</p>
            <Link to={`/allproduct/${e.id}`}>more detail</Link>
        </div>)}
    </div>
    
}