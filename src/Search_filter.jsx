import React from 'react'
import { useState } from 'react'

function  Search(){

    const names =['manohar','rahul' ,'ajey','ashish','prasanna','ranju','shashank','pk','ankith']
const [changed ,setchanged] = useState('')
const changing = (e)=>{
    setchanged(e.target.value)
    console.log(changed)
}


    return(
         <>
         <div className="container" style={{marginTop:"100px"}}>

         <form className="form-inline">
    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={changing}></input>
    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  </form>

  <div className="container">
      {}
<br></br>
<br></br>
    { changed === '' ? names.map(name =><h6> {name}</h6>) : names.filter(name =>name.includes(changed)).map( e =>
        <h6>
            {e}
        </h6>
        )}
  </div>
         </div>



        </>



    )
}

export default Search
