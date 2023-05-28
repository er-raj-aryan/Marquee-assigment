import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';
import data from '../Data/userdata.json'

const LoginPage: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const [message,setMessage] = useState("");

  const history = useNavigate();
  const { setUser } = useContext(UserContext);



  const handleSubmit = (event:any) => {
    event.preventDefault();
    if (data.email === formData.email && data.password === formData.password) {
      setUser(formData.email)
      history('/dashboard');
      setMessage("Success");
      setTimeout(() => {
        setMessage("");
      },1000)
    } else {
      history('/');
      setMessage("Failed");
      setTimeout(() => {
        setMessage("");
      },1000)
    }
  };
  
  const handleChange = (event:any) => {
   const name = event.target.name;
   const value = event.target.value;
   setFormData({...formData, [name]:value})
  }

  return (
    <section className="text-gray-600 body-font relative">
      <form onSubmit={handleSubmit} >
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-col text-center w-full mb-12">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Login</h1>
      <div className='text-center'>{`(Note:- email: admin@mail.com password: admin@123)`}</div>
    </div>
      <div className="lg:w-1/2 md:w-2/3 mx-auto">
        <div className="flex flex-wrap -m-2">
          <div className="p-2 w-1/2">
            <div className="relative">
              <label  className="leading-7 text-sm text-gray-600">Email</label>
              <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={formData.email} onChange={handleChange}/>
            </div>
          </div>
          <div className="p-2 w-1/2">
            <div className="relative">
              <label  className="leading-7 text-sm text-gray-600">Password</label>
              <input type="password" id="password" name="password" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={formData.password} onChange={handleChange}/>
            </div>
          </div>
          <div className="p-2 w-full border-indigo-400 ">
            <button className="border-indigo-500 flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit</button>
          </div>
          
        </div>
      </div>
      <h2 className={`text-center w-full mt-5 ${message === "Success" ? "text-green-500 " : "text-red-500" }`} >{message === "Success" ? "Successfully logged" : message === "Failed" ? "Invalid credential" : ""}</h2>
    </div>
      </form>
  </section>
  );
};

export default LoginPage;
