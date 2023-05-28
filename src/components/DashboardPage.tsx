import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';

const DashboardPage: React.FC = () => {
  const [inputValue, setInputValue] = useState<any>("");
  const [editTODO, setEditTODO] = useState<any>(-1);
  const history = useNavigate();
  const { user, setUser, todo,setTodo } = useContext(UserContext);

  const handleLogout = () => {
    setUser(null);
    history('/login');
  };


  const handleCreateButton = (e:any) => {
    const tData = [...todo];
    tData.push(inputValue);
    setTodo(tData);
    setInputValue("");
  };

  const handleOnChange = (e:any) => {
    const tData = e.target.value;
    setInputValue(tData);
  };

  const handleEditChange = (event:any, index:any) => {
    const tList = [...todo];
    tList[index] = event.target.value;
    setTodo(tList);
  };

  const handleEditButton = (event:any, index:any) => {
    if (editTODO !== index) {
      setEditTODO(index);
    } else {
      setEditTODO(-1);
    }
  };

  const handleDeleteButton = (event:any, index:any) => {
    const tList = todo;
    const filtered = tList.filter((e:any, pindex:any) => {
      return pindex !== index;
    });
    setTodo(filtered);
  };

  return (
    <div className='flex justify-center h-[60vh] p-20'>
      <div className='w-96'>
       <div style={{ display: "flex", gap: "8px",marginBottom:'16px' }}>
        <input
          value={inputValue}
          onChange={handleOnChange}
          className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
        <button
          className="border-indigo-500 flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          onClick={handleCreateButton}
          disabled={inputValue.length > 0 ? false : true}
        >
          Create
        </button>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        {todo && todo.length > 0 &&
          todo.map((item:any, index:any) => (
            <div key={index} style={{ display: "flex", gap: "8px" }}>
              <input
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                value={item}
                onChange={(e) => handleEditChange(e, index)}
                disabled={editTODO !== index ? true : false}
              />
              <button
                className="border-indigo-500 flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                onClick={(e) => handleEditButton(e, index)}
              >
                {editTODO !== index ? "Edit" : "Update"}
              </button>
              <button
                className="border-indigo-500 flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                onClick={(e) => handleDeleteButton(e, index)}
              >
                Delete
              </button>
            </div>
          ))}
      </div>
      </div>
    </div>
  );
};

export default DashboardPage;
