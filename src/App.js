import React, { useRef } from "react";
import UserList from "./components/UserList";

const App = () => {
  const users = [
    {
      id: 1,
      username: "velopert",
      email: "public.velopert@gmail.com",
    },
    {
      id: 2,
      username: "tester",
      email: "tester@example.com",
    },
    {
      id: 3,
      username: "liz",
      email: "liz@example.com",
    },
  ];

  // useRef의 파라미터를 넣으면 이 값이 기본 값이 됨
  const nextId = useRef(4);
  const onCreate = () => {
    // 나중에 구현 할 배열에 항목 추가하는 로직

    nextId.current += 1;
  };

  return <UserList users={users} />;
};

export default App;
