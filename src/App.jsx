import React from 'react';
import UserCard from './components/user_card';
import { ProductCard } from './components/product_card';

// this is NOT a component. It's just a normal
// javascript function. Notice the first letter
// of the name. It's not fulfilling the naming
// rule of a React Component. It's just a 
// utility function.
function sayGreeting(name) {
  return <p>Hello, {name}</p>
}

export default function App() {

  const authUser = {
    id: 'a354ds3f545a34f',
    name: 'Valentin',
    lastName: 'MEYANUI',
    createdAt: '2018-11-20T00:00 UTC 2015',
    email: 'valentin@example.com',
    age: 34
  };

  return (
    <div>
      <MyCustomButton
        content="Ted is late"
        type="purple"
      />
      <p>Bonjour a tous !</p>

      {sayGreeting("Daniel")}

      <MyCustomButton
        content="Ted is late"
        type='red'
      />
      <MyCustomButton
        content="Ted is late"
        type='green'
      />
      <MyCustomButton />
      <UserCard userInfos={authUser} />
      <ProductCard />
    </div>
  )
}

export function MyCustomButton({ content, type }) {

  const styling = {
    backgroundColor: type || '#404040',
    color: "white",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    margin: 10,
    width: '60%'
  }

  return <button style={styling}>
    {content || "Click me!"}
  </button>
}





