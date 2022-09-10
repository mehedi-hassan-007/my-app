import react, {useEffect, useState} from 'react'
import './App.css';

function App() {
  const hero = ['sharukh khan','mehedi hassan','jobber khan']
  const products = ['sharukh khan','mehedi hassan','jobber khan']
  const naioks= ['sharukh','jobber','kobir','rohomot','jobirul']
  return (
    <div className="App">
      <header className="App-header">

       <ul>
            {naioks.map(naiok => <li>{naiok}</li>)}
            {products.map(product=><li>{product}</li>)}
       </ul>
       <Counter> </Counter>
        <Users></Users>
        <Product name=' adobe illustrator' performance=' super'></Product>
        <Product name='photoshop' performance='good'></Product>
        <Product name='dangerous' performance='fair'></Product>
        <Product name='robiul islam' performance='not so good'></Product>
       <Person name={hero[2]} naika="jobbar ali"></Person>
       <Person name="josim" naika="sabana ali"></Person>
       <Person name="hero alom" naika="halima khatun"></Person>
       <Person name="amir khan" naika="beauty khatun"></Person>
      </header>
    </div>
  );
}


   
 function Counter (){
  const [count, setCount] = useState(10)
  return(
    <div>
      <h1>Count: {count}</h1> 
      <button onMouseMove={ () => setCount(count + 1)}>Increase</button>
      <button onClick={ () => setCount(count - 2)}>decrease</button>
    </div>
  )
}

function Users () {
  const [users, setUsers] = useState([]);
  useEffect(()=>{
   fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => setUsers(json))
  },[])
    return (
      <div>
        <h2>Dynamic users: {users.length}</h2>
        <ul>
          {
          users.map(user => <li>{user.name}</li>)
          }
          {users.map(user=> <li>{user.email}</li>)}
        </ul>
      </div>
    )
}

function Product (props) {
  const productStyle={
    border:'5px solid red',
    backgroundColor: 'grey',
    borderRadius: '20px',
    height: '200px',
    width:'300px',
    margin: '10px'
  }
  return (<div style={productStyle}>
    <h3>name: {props.name}</h3>
    <p>performane: {props.performance}</p>
    <button>buy now</button>
  </div>)
}
function Person (props) {
  const personStyle={
    border: '5px solid green',
    margin: '10px',
    borderRadius: '30px'
  }
  return (<div style={personStyle}>
<h1> name: {props.name}</h1>
  <h3>hero of {props.naika}</h3>
  <button>buy now</button>
  </div>
  )
}
export default App;
