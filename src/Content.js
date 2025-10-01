import { useState } from 'react';
const Content = () => {

  // const handleclick=(name)=>
  // {
  //   console.log("thanks for subscribing " +name);
  // }

    //  function handleNameChange()
    //   {
    //  const names=["Earn","Grow","Give"];
    //  const int =Math.floor(Math.random()*3);
    //  return names[int];
    //  }
    function namee()
    {
      return console.log("yoki")
    }

     const [count,setCount]=useState(0);
     const[name,setName]=useState(()=>namee()); 

     function increment()
     {
      setCount(count+1);
     }
     function decrement()
     {
      setCount(count-1);
     }


  return (
    <main>
    {/* <p>let's {handleNameChange} Money</p> */}
    {/* <button onClick={()=>handleclick("yoki")}>Subscribe</button> */}
    <button onClick={increment}>+</button>
    <span>{count}</span>
    <button onClick={decrement}>-</button>
    </main>
  )
}

export default Content