import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './components/Home';
import Takepost from './components/Inputs/Takepost';
import Nav from './components/Nav';
import Profile from './components/Profile';
import Login from './components/Login/Login';
import BlogMain from './components/Details/BlogMain';
import ProtectedRoute from './components/ProtectedRoute';
import SearchPage from './components/SearchPage/Search';
import Avatar from './components/Login/Avatar';
const Router =()=> {
    return (
        <>
        <BrowserRouter>
            <Nav/>
        <Routes>
            <Route path='/'
                      element={
                        
                          <Home />
                        
                      }
            ></Route>
            <Route path='/post' element={<ProtectedRoute><Takepost/></ProtectedRoute>}></Route>
            
            <Route path='/profile' element={<ProtectedRoute><Profile/></ProtectedRoute>} > </Route>
            

            <Route path='/login'Component={Login} ></Route>
            <Route path='/blog'Component={BlogMain} ></Route>
            <Route path='/search' Component={SearchPage}></Route>
            <Route path='/avatar' Component={Avatar}></Route>
            

            

        </Routes>
        </BrowserRouter>
        </>
    )

}
export default  Router;