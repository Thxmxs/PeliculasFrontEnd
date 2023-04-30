import { Outlet } from 'react-router-dom';
import { NavBar } from '../../components/shared/NavBar';


export const Layout = () => {
  return (
    <div>
        <NavBar/>
        <div  className='container'>
            <Outlet/>
        </div>
    </div>
  )
}
