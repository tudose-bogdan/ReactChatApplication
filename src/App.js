import {
    ChatEngine
} from 'react-chat-engine';

import LoginForm from './components/LoginForm';

import ChatFeed from './components/ChatFeed';

import './App.css';

const App = () => {

        if(!localStorage.getItem('username')) return <LoginForm/>

        return ( <
            ChatEngine height = "100vh"
            projectID = "1395918f-8d13-4eff-83b1-de55b987ab0b"
            userName = "tudosebogdan"
            userSecret = "flatout"
            renderChatFeed = {
                (chatAppProps) => < ChatFeed {
                    ...chatAppProps
                }
                />}

                /
                >
            )
        }

        export default App;