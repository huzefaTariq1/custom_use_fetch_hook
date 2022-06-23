
import './App.css';
import { useFetch } from './hook/useFetch'
import { useState} from 'react'
import Loader from './Loader';
function App() {
  const [url,setUrl]=useState('https://jsonplaceholder.typicode.com/users')
  const {data ,ispending ,error}=useFetch(url)
  console.log(data)
  return (
  <>

 
{ispending && <div><Loader/></div>}

{error && <div>could not fetch data</div>}

   {data && data.map((item,index)=>{
     return(
      <center key={index}>
        <div className='box'>
            <h2> {item.id}</h2>
            <p>{item.name}</p>
        </div>
        </center>
     )
   })}
  </>
  );
}

export default App;
