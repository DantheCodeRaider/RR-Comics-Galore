import React from 'react';
import './App.css';
import StylesContext from "./components/StylesContext.js";
import UserInterface from "./components/UserInterface.js"

function App() {
  const stylin = {
     margin: "auto",
     background: "#1ECD97",
     display: "block",
     width: 150,
     height: 70,
     fontSize: 18,
     letterSpacing: 1,
     border: "2px solid #1ECD97",
     borderRadius: 15
   };
 
 
   return (
     <main>
        <div className='container'>
          <StylesContext.Provider value={stylin}>
            <h1
            style={{
              color: "#FEE001",
              fontFamily: "Luminari, fantasy",
              fontSize: 50
            }}
            >
            Welcome to Comics Galore!
          </h1>

          <UserInterface />

          </StylesContext.Provider>
        </div>
     </main>
   );
 }
 
 export default App;   

          
