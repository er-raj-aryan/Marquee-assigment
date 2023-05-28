import React, { useContext, useEffect } from 'react';
import { UserContext } from '../contexts/UserContext';
import { Link, useNavigate} from 'react-router-dom';


interface ProtectedRouteProps {
  // component: React.ComponentType<any>;
}

const Navbar: React.FC<ProtectedRouteProps> = () => {
  const { user,setUser } = useContext(UserContext);
  const history = useNavigate()

  const handleOnClick = (event:any) => {
    setUser(null);
    if(user) {
        history('/dashboard');
    } else {
        history('/');
    }
  };

  useEffect(() => {
    if(user) {
        history('/dashboard');
    } else {
        history('/');
    }
  },[user])

  return (
<header className="text-gray-600 body-font">
  <div className="container w-full justify-between mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <Link to="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span className="ml-3 text-xl">Tailblocks</span>
    </Link>
    <div className='flex gap-5 items-center'>
        <div className='text-indigo-600'>
        {user}
        </div>
    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0" onClick={handleOnClick}>{user ?  "Logout":"Login"}
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
    </div>
  </div>
</header>)
}

export default Navbar