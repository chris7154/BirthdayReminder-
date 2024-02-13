import React, {useState} from "react";
import List from "./list";
import "./App.css";
import data from "./data";





function App() {
  const [people, setPeople] = useState(data)
  return (
    <main>
      <section className="container">
        <h3 className="">{people.length} birthday today</h3>
        <List people = {people}/>
        <button onClick={() => setPeople([])}>clear all</button>
        
      </section>
    </main>
  )
}

export default App