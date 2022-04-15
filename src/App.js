import './App.css';
import { useState } from 'react';
import srcDate from './srcDate';
import { Button, Card } from 'react-bootstrap';
import { Switch, Route, Link } from "react-router-dom";


function SecContainer(props){
  return(
    <div className="container">
      {
        props.wear.map((item,idx,arr)=>{
          return(
            <div key={item.id} className="card">
              <h2>{item.title}</h2>
              <p>{item.content}</p>
              <p>{item.price}</p>
            </div>
          );
        })
      }
    </div>
  );
}

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

function App() {
  let [wear,setWear] = useState(srcDate);
  return (
    <div className="App">     
      <Link to="/">홈으로</Link>
      <Link to="/sec1">sec1으로</Link>
      <Link to="/sec2">sec2으로</Link>
      
      <Switch>
        <Route path="/sec1">
          <section>
            <Input onChange={(e)=>{console.log(e.target.value)}}/>
            <button>버튼</button>
            <SecContainer wear={wear} setWear={setWear}/>
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
