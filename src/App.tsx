import React,{useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import { useAppDispatch, useAppSelector } from './hooks/redux.hook';
import { _signIn, selectorAuth } from './redux/user/auth';

function App() {
  const dispatch = useAppDispatch()
  const user = useAppSelector(selectorAuth)

  console.log()
  console.log(user)
  useEffect(() => {
    dispatch(_signIn({email:'minhnhat@gmail.com',password:'minhnhat@11'})) 
  }, [])
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
