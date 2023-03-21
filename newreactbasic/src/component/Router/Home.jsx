import React from 'react'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Home  = () => {
  const navigate = useNavigate('/')
  return (
    <div>
        <h1>Home Page~~~</h1>
        <button>
        <Link to='/about'>about으로 이동</Link>
        </button>
        <Link to={'/'}>
        <button>MainPage</button>
        </Link>
        <button onClick={()=>{navigate('/products')}}>ProductsPage</button>
        </div>
    
  )
}

export default Home 