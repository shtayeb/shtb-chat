import {ChatEngine} from 'react-chat-engine';

import './App.css';
import ChatFeed from './components/ChatFeed.jsx';
import LoginForm from './components/LoginForm';
const App = () => {
  if(!localStorage.getItem('username')) return <LoginForm/>

  return(
    <ChatEngine
      height="100vh"
      projectID="bdea6358-d67b-46b7-b7af-9d3adb40787b"
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed ={(chatAppProps)=> <ChatFeed {...chatAppProps} />}

    
    />
  )
}

export default App;