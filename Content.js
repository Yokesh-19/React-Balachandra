import { useState } from 'react';
import { BsFillTrash3Fill } from "react-icons/bs";
const Content = () => {

  const[items,setItems]=useState([
      { id:1,
        checked:true,
        name:"Practice Coding"
      },
      { id:2,
        checked:false,
        name:"Play Cricket"
      },
      { id:3,
        checked:false,
        name:"Read AI"
      }

    ]);

    const handleCheck=(id)=>{
      const newItems=items.map((item)=>
        item.id===id ? {...item,checked:!item.checked}:item)  //...item to make all three state as it is and only change checked state
      setItems(newItems)
      localStorage.setItem("tot_list",JSON.stringify(newItems));
     };

    // const handledelete=(id)=>{
    //   const newItems=items.filter((item)=>item.id!==id);;
    //   setItems(newItems)
    //  };

    const handledelete=(id)=>{
      const newItems=items.filter((item)=>
      item.id!==id)
      setItems(newItems)
     };


  return (
    <main>
         <ul>
          {items.map((item)=>(     //.map is a JavaScript method that loops through the array.
            <li className="item" key={item.id}>
              <input
                  type="checkbox"
                  checked={item.checked}
                  onChange={()=>handleCheck(item.id)}
              />
              <label>{item.name}</label>
              <BsFillTrash3Fill
                role="button"
                tableindex="0"
                onClick={()=>handledelete(item.id)}
              />
            </li>
          ))}
         </ul>
    </main>
  )
}

export default Content