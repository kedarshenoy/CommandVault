import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './components/Home';
import Takepost from './components/Inputs/Takepost';
import Nav from './components/Nav';
import Profile from './components/Profile';
import Login from './components/Login/Login';
import BlogMain from './components/Details/BlogMain';
import ProtectedRoute from './components/ProtectedRoute';
import SearchPage from './components/SearchPage/Search';
const Router =()=> {
    return (
        <>
        <BrowserRouter>
            <Nav/>
        <Routes>
            <Route path='/'
                      element={
                        <ProtectedRoute>
                          <Home />
                        </ProtectedRoute>
                      }
            ></Route>
            <Route path='/post'Component={Takepost} ></Route>
            <Route path='/profile'Component={Profile} ></Route>
            <Route path='/login'Component={Login} ></Route>
            <Route path='/blog'Component={BlogMain} ></Route>
            <Route path='/search' Component={SearchPage}></Route>

        </Routes>
        </BrowserRouter>
        </>
    )

}
export default  Router;