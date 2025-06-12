import React from "react";
import GreetingCard from "./components/GreetingCard";

export default function App() {
  return (
    <>
      <div className="app">
        <div className="title">
          <h1>Gretting Card Genrator🎉</h1>
        </div>
        <div className="card">
        <GreetingCard name="Sumit Zende" message="Hi Good Morning" />
        <GreetingCard name="Sandesh Zende" message="Hello,Sandesh" />
        </div>
      </div>
    </>
  );
}
