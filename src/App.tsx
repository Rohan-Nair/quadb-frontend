import axios from 'axios';
import './App.css'
import Home from './components/Home'

axios.defaults.baseURL = 'http://localhost:3000/api';
function App() {

  return (
    <>
      <Home />
    </>
  )
}

export default App
