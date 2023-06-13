import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import User from "./components/User";

function App() { // komponente pocinju sa velikom slovom, bitno je exportovat komponentu

    /*const [user,setUser] = useState({
       name: 'Dzenad',
       lastName: 'Catic'
    });

    const handleName = () => {
       setUser({...user, name:'Test'})
    }

    return (
        <div>
            <h3>Hello {user.name}</h3>
            <h3>Hello {user.lastName}</h3>
            <button onClick={handleName}>Change name</button>
        </div>
    );*/
    const[toggle, setToggle] = useState(false);

    const changeColor = () => {
      setToggle((prevState)=> !prevState)
    }
    const[person, setPerson] = useState(['Dzenad', 'Minela', 'Hamza'])

    return (
        <div className='app'>
            <h1 className={toggle ? 'active' : 'inactive'}>Logo</h1>
            <button onClick={changeColor}>Change color</button>
            <User person={person}/>
        </div>

    );

}

export default App;
