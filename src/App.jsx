import React, { useRef, useState } from "react";
import UserList from "./components/UserList";
import CreateUser from "./components/CreateUser";

const App = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
  });

  const { username, email } = inputs;
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const [users, setUsers] = useState([
    {
      id: 1,
      username: "velopert",
      email: "public.velopert@gmail.com",
      active: true,
    },
    {
      id: 2,
      username: "tester",
      email: "tester@example.com",
      active: false,
    },
    {
      id: 3,
      username: "liz",
      email: "liz@example.com",
      active: false,
    },
  ]);

  // useRef의 파라미터를 넣으면 이 값이 기본 값이 됨
  const nextId = useRef(4);
  const onCreate = () => {
    if (!username || !email) return;

    const user = {
      id: nextId.current,
      username,
      email,
    };

    /**
     * 배열에 새 항목을 추가할 때,
     *  스프레드 연산자(...) 또는 concat() 사용
     */
    setUsers([...users, user]);
    // setUsers(users.concat(user));

    setInputs({
      username: "",
      email: "",
    });

    nextId.current++;
  };

  const onRemove = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const fontColorHandler = (id) => {
    setUsers(
      users?.map((user) =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  };

  return (
    <div>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList
        users={users}
        onRemove={onRemove}
        fontColorHandler={fontColorHandler}
      />
    </div>
  );
};

export default App;