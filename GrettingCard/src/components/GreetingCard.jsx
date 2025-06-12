import React from 'react'

export default function GreetingCard(props) {
  return (
    <div style={{
      border: "2px solid #ccc",
      padding: "16px",
      margin: "10px",
      borderRadius: "8px",
      backgroundColor: "#f0f0ff",
      color:"black"
    }}>
        <h2>Hello ,{props.name}</h2>
        <p>{props.message}</p>
    </div>
  );
}
