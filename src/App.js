import src from '*.avif';
import React from 'react';

function Food(name, picture){
  return <div>
    <h1>i like {name}</h1>
    <img src = {picture}/>
  </div>
} 

const favFood = [
  {
    name : "pizza",
    picture : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Rpv88_S1O-3rILKXcjIJLQHaFn%26pid%3DApi&f=1"
  },
  {
    name : "chicken",
    picture : "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fsiksamenu.co.kr%2Fimages%2Fcpimage%2F707754953_377662.jpg&f=1&nofb=1"
  }
]

function App() {
  return (
    <div>
      {favFood.map(dish =>(
        <Food name = {dish.name} picture = {dish.picture} />
      ))}
    </div>
  );
}

export default App; 