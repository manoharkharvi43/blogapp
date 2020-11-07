import React, { useState} from 'react';
import './App.css';
import { Route, Link ,Switch,useHistory ,BrowserRouter} from 'react-router-dom';
import Home from './Home';

function App() {
const [name , changename] = useState("")
const [passkey , changepasskey] = useState("")
// const[login , changelogin] = useState ("false")
const inputname='varadraj@gmail.com'
const passwordname = 'varadraj'
const history = useHistory()


const namechange = (e) =>{
   changename(e.target.value)
   console.log(name)
}

const passchange = (e) =>{
  changepasskey(e.target.value)
}
const submit = (e) =>{
  
if (name === inputname && passkey === passwordname )
{
  
  history.push('/home')
}
}
  return (
    <div>
        <BrowserRouter>
        <div className="container">
      <form onSubmit={submit}>

        <div className="container">

        </div>
  <div className="form-group">
    <label for="exampleInputEmail1">UserName</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={namechange}></input>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" onChange={passchange}></input>
  </div>
  <div className="form-group form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
<button type="submit" className="btn btn-primary">Submit</button>
</form>
</div>


<Switch>
  <Route path="/home" component={Home}></Route>
</Switch>

</BrowserRouter>
    </div>
  );
}

export default App;
