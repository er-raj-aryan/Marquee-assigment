import React, { createContext, useState } from 'react';

interface User {
  username: string;
}

interface Todo {
  todo: any;
}

interface UserContextProps {
  user: User | any;
  todo: Todo | any;
  setUser: React.Dispatch<React.SetStateAction<User | any>>;
  setTodo: React.Dispatch<React.SetStateAction<Todo | any>>;
}

export const UserContext = createContext<UserContextProps>({
  user: "",
  todo: [],
  setTodo: () => {},
  setUser: () => {},
});

interface IUserProvider {
    children: React.ReactNode;
}

export const UserProvider: React.FC<IUserProvider> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [todo, setTodo] = useState<Todo | any>([]);

  return (
    <UserContext.Provider value={{ user, setUser , todo, setTodo}}>
      {children}
    </UserContext.Provider>
  );
};
