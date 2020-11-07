import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useReducer } from 'react'

function Redux() {


    const [url , urlchange] = useState("")
    const [datas , alldata] = useState([])

    const[switchval , newswitchval] = useState('get')
    const [ searchurl , changesearchurl] = useState([{data:null}])
  
  
     const submit = (event) =>{
         event.preventDefault()
        changesearchurl(url)
     }
const switchchange = (e) =>{
  newswitchval(e.target.value)
}


// changefinaldata ([alldata])

useEffect( ()=>{
  if (switchval==='get')
{axios.get(searchurl)
  .then( res => alldata([res.data]))
  .catch(err => console.log(err) )
}
if (switchval === 'post')
{console.log(switchval)}
if (switchval === 'patch')
{console.log(switchval)}
if (switchval === 'delete')
console.log(switchval)
   } )



    return (
        <>
        <div className="container">
        <div className="container" style={{marginTop:"100px"}}>
            <nav className="navbar navbar-light bg-light">
        <form className="form-inline" onSubmit={submit}>
      <div class="form-group">
    <label for="exampleFormControlSelect1"></label>
    <select class="form-control" id="exampleFormControlSelect1" onChange={switchchange}>
      <option value='get'>GET</option>
      <option value='post'>POST</option>
      <option value='patch'>PATCH</option>
      <option value='delete'>DELETE</option>
    </select>
  </div>
    <input className="form-control mr-sm-2" type="search" placeholder="URL" aria-label="Search"   onChange={ e => urlchange(e.target.value)}></input>
    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  </form>
</nav>
        </div>

        <div class="d-flex p-2 bd-highlight">

    { datas.map(res =>{ return (
      <>
    <div class="d-inline-flex p-2 bd-highlight"><h6>{JSON.stringify(res)}</h6></div>
    <br/>
    <br/>
    <br/>
 
    </> ) } ) }

    </div>
        </div>
</>
    )
}

export default Redux
