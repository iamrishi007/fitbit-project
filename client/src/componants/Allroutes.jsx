import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Earbuds from '../pages/Earbuds';
import Phones from '../pages/Phones';
import Watches from '../pages/Watches';
import Signup from '../pages/Signup';
import Login from '../pages/Login';
import Cart from '../pages/Cart';
import PrivateRoute from './PrivateRoute';

const Allroutes = () => {


     return (
          <>
               <Routes>
                    <Route path='/' element={<Home />} />


                    <Route path='/earbuds' element={<Earbuds />} />


                    <Route path='/phones' element={

                         <PrivateRoute>
                              <Phones />
                         </PrivateRoute>

                    }

                    />
                    <Route path='/watches' element={

                         <PrivateRoute>
                              <Watches />
                         </PrivateRoute>

                    } />
                    <Route path='/cart' element={

                         <PrivateRoute>
                              <Cart />
                         </PrivateRoute>

                    } />
                    <Route path='/signup' element={<Signup />} />
                    <Route path='/login' element={<Login />} />
               </Routes>
          </>
     )
}

export default Allroutes