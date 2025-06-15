import React from 'react'
import UserCard from './components/UserCard'

export default function App() {
  return (
    <div > 
      <h1>Profile Card</h1>
      <div className='card'>
        <UserCard
          name='Sumit Zende'
          avatar='https://avatar.iran.liara.run/public/48'
          bio='Hi,Sumit Zende is here ,A Full Stack Developer
              skilled in MERN stack,PHP-Laravel '
          title='Full Stack Developer'
        />  
        <UserCard
          name='Sandesh Zende'
          avatar='https://avatar.iran.liara.run/public/38'
          bio='Hi,Sandesh Zende is here, A Cyber Securty Analyst
                skilled networking and Ethical Hacker'
          title='Full Stack Developer'
        />  
      </div>
    </div>
  )
}
