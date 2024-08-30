import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './components/Home';
import Takepost from './components/Inputs/Takepost';
import Nav from './components/Nav';
import Chat from './components/Chat';
import Login from './components/Login/Login';
import BlogMain from './components/Details/BlogMain';
const Router =()=> {
    return (
        <>
        <BrowserRouter>
            <Nav/>
        <Routes>
            <Route path='/'Component={Home} ></Route>
            <Route path='/post'Component={Takepost} ></Route>
            <Route path='/chat'Component={Chat} ></Route>
            <Route path='/login'Component={Login} ></Route>
            <Route path='/blog'Component={BlogMain} ></Route>

        </Routes>
        </BrowserRouter>
        </>
    )

}
export default  Router;