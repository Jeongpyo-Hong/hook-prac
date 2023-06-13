import React, { useCallback, useContext, useRef } from "react";
import useInput from "../hooks/useInput";
import { UserDispatch } from "../App";

const CreateUser = () => {
  const dispatch = useContext(UserDispatch);
  const [{ username, email }, onChange, reset] = useInput({
    username: "",
    email: "",
  });

  const nextId = useRef(4);

  const onCreate = () => {
    dispatch({
      type: "CREATE_USER",
      user: {
        id: nextId.current,
        username,
        email,
      },
    });
    nextId.current++;
    reset();
  };

  return (
    <div>
      <input
        type="text"
        name="username"
        placeholder="계정명"
        onChange={onChange}
        value={username}
      />
      <input
        type="text"
        name="email"
        placeholder="이메일"
        onChange={onChange}
        value={email}
      />
      <button onClick={onCreate}>등록</button>
    </div>
  );
};

export default React.memo(CreateUser);
