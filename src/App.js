
import './App.css';
import { useFetch } from './hook/useFetch'
import { useState} from 'react'
import Loader from './Loader';
function App() {

             //for getting data
/*let url='https://jsonplaceholder.typicode.com/posts/1'
const {data ,ispending ,error}=useFetch(url)*/



  // for posting data
  let url='https://jsonplaceholder.typicode.com/posts'
  const {postData,data ,ispending ,error}=useFetch(url,"POST")
  
  const handleSubmit=()=>{
    postData({title:'fool', body: 'bar1',userId: 2,})
    console.log("click")
  }
  console.log(data)
  return (
  <>

 
{ispending && <div><Loader/></div>}

{error && <div>could not fetch data</div>}

   {/* {data && data.map((item,index)=>{
     return(
      <center key={index}>
        <div className='box'>
            <h2> {item.id}</h2>
            <p>{item.name}</p>
        </div>
        </center>
     )
   })} */}

  
   <button onClick={()=>handleSubmit()}>Post</button>
  </>
  );
}

export default App;
