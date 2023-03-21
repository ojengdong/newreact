import './App.css';
import {useState, useEffect} from 'react' 
import React from 'react';
import {Routes, Route, Link} from 'react-router-dom'
import Header from './component/header/Header'
import Main from './component/main/Main'
import Cards from './component/main/Cards'
import Footer from './component/footer/Footer'
import Sub1 from './component/type/Sub1'
import Menu2 from './component/Menu2'
import Blog from './component/Blog/Blog'
// import { Button, Card, Container, Row, Col } from 'react-bootstrap';
// import Nav from'./component/Nav'
// import NavActive from './component/NavActive'
// import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './component/Router/Home'
import About from './component/Router/About'
import ProductDetail from './component/Router/ProductDetail'
import Products from './component/Router/Products'
import { useNavigate } from 'react-router-dom';
import Modal from './component/Modal'


function App() {
  const navigate = useNavigate('')
  const [count, setCount] = useState(0)
  // useEffet 함수가 매개변수를 두 개를 받는다.
  // 1. 콜백함수
  // 2.[] array
  useEffect(()=>{
    console.log('useEffect1')
  },[])

  // Array에 state 값을 넣으면 리액트 그 값을 주시하고 있다가 
  // count 업데이트 되면 render State 업데이트 됐다고 알려준다.                                                                               
  useEffect(()=>{
    console.log('useEffect2', count)
  },[count])

  function onClick(){
    setCount(count +1)
  }
  return (
    <div className="App">
      {console.log('render')}
      <h2>{count}</h2>
      <button onClick={onClick}>Count</button>
      <h1>메인페이지</h1>
      <button onClick={()=>{navigate('/home')}}>HomePage</button>
      <button onClick={()=>{navigate('/about')}}>AboutPage</button>
      <Link to={'/products'}>
      <button>products</button>
      </Link>
      <Link to={'/'}>
      <button>Main</button>
      </Link>
      <Routes>
        {/* Route 안에 속성값이 두 개가 들어간다 path / element
        1. path : 페이지의 주소 URL , /:기본경로
        2. element : path 주소로 이동 했을 때 보여줄 페이지 */}

        {/* nested Routes */}
        <Route path='/about' element={<About/>}>
          <Route path='/about/member' element={<h1>member~~</h1>}/>
          <Route path='/about/location' element={<h1>location~~~</h1>}/>
        </Route>
        {/* <Route path='/about' element={<About/>}/>
        <Route path='/about/member' element={<h1>member~~</h1>}/>
          <Route path='/about/location' element={<h1>location~~~</h1>}/> */}
        <Route path='/home' element={<Home/>}/>

        <Route path='/products/:id' element={<ProductDetail/>}/>
        <Route path='/products' element={<Products/>}/>
      </Routes>
      <Modal/>
    </div>
  );
}

export default App;
