import { useState, useEffect } from "react"
import axios from "axios"
import { useParams } from "react-router"
export default function ProductDetail() {
    const params = useParams();
    const [data2, setData2] = useState([])
    console.log(data2)
    useEffect(() => {
        axios.get("http://localhost:3001/product").then(({ data }) => {
            const data3 =  data.filter(e => e.id === Number(params.id)) 
            setData2(data3)
           
           
        })
    },[])

    
    return <div>Product Detail
        {data2.map(e => <div>
            <p>Name: {e.name}</p>
            <p>Price: {e.price}</p>
            <p>Id: { e.id}</p>
        </div>)}
    </div>
    
}