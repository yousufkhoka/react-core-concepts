import React , {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const fname = [
    {name:'Kamal', father:'Humaun'},
    {name:'Jamal', father:'Ruhman'},
    {name:'tumal',father:'Abba'},
    {name:'Kalam', father:'Jabbar'},
    {name:'Harun', father:'Karun'}
  ]
  const products = [
    {name:'photoshop', price:'$99.99'},
    {name:'Illustrator',price:'69.99'},
  ]
  const prason =[
    {name:'Munna', jod:"artirs"},
    {name:'sakid all hasan', jod:"cricet"},
    { name:"Alom", jod:'biruktu'},
    { name:'jamila', jod:'bejam'},
    {name:'alumgul', jod:"nai"},
    
  ]
  return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            fname.map(num =><Products product={num}></Products>)
          }
        </ul>
      {
         products.map(pb => <Products product={pb}></Products>)
      }
      {
       prason.map(pra =><Preson prason={pra} ></Preson>)
      }
        
        <h1></h1>
        <p>hello react world</p>
      </header>
      
    </div>
  );
}

function Users(){
  const [users , setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  },[])
  return (
    <div>
      <h1>Dyenamic users:{users.length}</h1>
      <ul>
      {  
        users.map(user => <li> name: {user.name}</li>)
      }
      {  
        users.map(user => <li> phone: {user.phone}</li>)
      }
      </ul>
    </div>
  )
}


function Counter(){
  const [count , setCount] = useState(0);
  return(
     <div>
      <h3>count: {count}</h3>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() =>setCount(count + 1)}>Increase</button>
     </div>  
  )
    
  
}





function Products(props){
  const productStyle = {
    backgroundColor:"gray",
    borderRadius:'10px',
    width:'200px',
    margin:'20px',
    height:'200px'

  }
  const {name ,  father} = props.product
  return(
    <div style={productStyle}>
       <h3>{name}</h3>
       <h5>{father}</h5>
       <button>Buy Now</button>

    </div>
  )
}
function Preson(props){
  const {name,jod} = props.prason
  return (
   <div style={{border:'2px solid red', margin:'20px', padding:'10px'}}>
    <h2>name: {name}</h2>
    <h3>age: 34</h3>
    <h4>{jod}</h4>
   </div>
  );
}

export default App;
