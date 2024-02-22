import React, { useEffect } from "react"
import Routing from "../src/Router";
import { DataContext } from "./Components/DataProvider/DataProvider";
import { Type } from "./Utility/action.type";
import { auth } from "./Utility/firebase";
import { useContext } from "react";


function App() {

  const [{user}, dispatch] = useContext(DataContext)
  useEffect(()=>{
    auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        // console.log(authUser)
        dispatch({
          type:Type.SET_USER,
          user: null,
        });
      }
    }
    );
  }, [])
  
  return (
    <div>
      <Routing />
    </div>
  );
  }

export default App
