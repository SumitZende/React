import React, { useState } from "react";
import GreetingCard from "./components/GreetingCard";

export default function App() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const [cards, setCards] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCard = { name, message };
    setCards([newCard, ...cards]); // add new card at top
    setName("");
    setMessage("");
  
  };
  return (
    <>
      <div className="app">
        <div className="title">
          <h1>Gretting Card Genrator🎉</h1>
        </div>
        <hr />
        <div className="form">
          <div>
            <h3>Enter Name and Message</h3>
          </div>
          <form onSubmit={handleSubmit}>

            <input
          type="text"
          placeholder="Enter name"
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
        />
        <br /><br />
        <textarea
          placeholder="Enter message"
          value={message}
          required
          onChange={(e) => setMessage(e.target.value)}
        />
          <button type="submit">Generate Card</button>

          </form>
        </div>
        <hr />
        <div className="card">
          <GreetingCard name="Sumit Zende" message="Hi Good Morning" />
          <GreetingCard name="Sandesh Zende" message="Hello,Sandesh" />
           {cards.map((card, index) => (
        <GreetingCard
          key={index}
          name={card.name}
          message={card.message}
         
        />
      ))}
        </div>
      </div>
    </>
  );
}
