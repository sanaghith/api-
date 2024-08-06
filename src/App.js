import logo from './logo.svg';
import './App.css';
import {useState , useEffect} from 'react';
import axios from 'axios';
import PersonList from './PersonList';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {

const [users,setUsers]=useState([])


  const fetchdata=async()=>{
    const data= await axios.get("https://jsonplaceholder.typicode.com/users")
    console.log('data',data)
    setUsers(data.data)
  }

  useEffect(()=>{
    fetchdata()
  },[])

  console.log('users',users)

  return (
    <div className="App">
     
           <PersonList data={users}/>
        

    </div>
  );
}

export default App;
