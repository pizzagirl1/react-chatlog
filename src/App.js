import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  const [messages, setMessages] = useState(chatMessages)

  const onLike = id => {
    setMessages((oldMessages) => {
      return oldMessages.map((message) => {
        if (id === message.id) {
          return {...message, liked: !message.liked};
        }
        return message;
      })
    })
  }

  const calcTotalLikes = (messages) => {
    const initialValue = 0;
    const likedTally = messages.reduce((total, message)=> {
      return (message.liked === true) ? total + 1 : total;
    }, initialValue)
    return likedTally
  }

  const totalLikesTally = calcTotalLikes(messages);


  return (
    <div id="App">
      <header>
        <h1>Nadia's ChatLog</h1>
        <h2>{totalLikesTally} ❤️s</h2>
      </header>
      <main>
        <ChatLog entries={messages} onClick={onLike}/>
      </main>
    </div>
  );
};

export default App;
