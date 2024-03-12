import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Account from '../Account/account';
import Chat from '../CHAT/chat';
import YourLove from '../YourLove/yourLove';
import Events from '../Events/events';
import Home from '../Home/home';
import Login from '../Account/Login';
import Register from '../Account/Registration';
import Navigation from '../Home/Navigation'

function Routers() {
    return (
        <Router>

            <Navigation/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/account" element={<Account />} />
                <Route path="/chat" element={<Chat />} />
                <Route path="/yourLove" element={<YourLove />} />
                <Route path="/events" element={<Events />} />
                <Route path='/register' element={<Register/>}/>
                <Route path='/login' element={<Login/>}/>
            </Routes>
        </Router>
    )
}

export default Routers;