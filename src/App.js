import './App.css';
import { useState, useEffect } from 'react';
import srcData from './srcData';
import { Button, Card } from 'react-bootstrap';
import { Switch, Route, Link, useParams, useHistory } from "react-router-dom";
import SecContainer from './SecContainer';
import axios from 'axios';


function Footer(props){
  return(
    <footer onClick={()=>{console.log('푸터')}}>
      푸터
    </footer>
  );
}

function Input(props){
  return(
    <input type="text" onChange={(e)=>{props.onChange(e)}}/>
  );
}

function Detail(props){
  let {num} = useParams();
  let history = useHistory();
  let [box,setBox] = useState(true);
  useEffect(()=>{
    setTimeout(()=>{setBox(false)},2000);
  });

  return(
    <div>
      <h1>{props.wear[num-1].title}</h1>
      {
        box ? <p>재고가 얼마 없습니다</p> : null
      }
      <p>{props.wear[num-1].content}</p>
      <p>{props.wear[num-1].price}</p>
      <button onClick={()=>{
        history.go(-1)
      }}>뒤로가기</button>
    </div>
  );
}

function fnGetData(wear,setWear){
  const axios = require('axios');
  axios.get('https://jurin2.github.io/react-server/serverDate.json')
  .then((respons)=>{
    setWear([...wear,...respons.data]);
  })
  .catch((error)=>{
    console.log(error);
  })
}

function App() {
  let [wear,setWear] = useState(srcData);
  return (
    <div className="App">     
      <Link to="/">홈으로</Link>
      <Link to="/sec1">sec1으로</Link>
      <Link to="/sec2">sec2으로</Link>
      
      <Switch>
        <Route path="/sec1/:num">
          <Detail wear={wear} setWear={setWear}/>      
        </Route>  
        <Route path="/sec1">
          <section>
            <Input onChange={(e)=>{console.log(e.target.value)}}/>
            <button>버튼</button>
            <SecContainer wear={wear} setWear={setWear}/>
            <button onClick={()=>{fnGetData(wear,setWear)}}>3개더</button>
          </section>
        </Route>      
        <Route path="/sec2">
          <section>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          </section>
        </Route>
        <Route path="/">
          <header>
            <h1>쇼핑몰</h1>
          </header>
        </Route>
      </Switch>
    <Footer/> 
    </div>
  );
}


export default App;
