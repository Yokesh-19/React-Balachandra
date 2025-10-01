import { useState } from 'react';
const Content = () => {

    const names=["Earn","Grow","Give"];

    const [word,setWord]=useState("Earn") //default set as Earn

     function handleNameChange()
    {
        const random =Math.floor(Math.random()*3);
        setWord (names[random]);
    }



  return (
    <main>
    <p>let's {word} Money</p>

    <button onClick={handleNameChange}>Subscribe</button>
    </main>
  )
}

export default Content