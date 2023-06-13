import React, { useEffect } from "react";

const User = ({ user, onRemove, fontColorHandler }) => {
  // useEffect(() => {
  //   console.log("컴포넌트가 화면에 나타남");
  //   console.log(user);
  //   return () => {
  //     console.log("컴포넌트가 화면에서 사라짐");
  //     console.log(user);
  //   };
  // }, [user]);

  return (
    <div>
      <b
        style={{
          color: user.active ? "green" : "black",
          cursor: "pointer",
        }}
        onClick={() => fontColorHandler(user.id)}
      >
        {user.username}
      </b>
      <span>({user.email})</span>
      <button onClick={() => onRemove(user.id)}>삭제</button>
    </div>
  );
};

const UserList = ({ users, onRemove, fontColorHandler }) => {
  return (
    <div>
      {users?.map((user) => (
        <User
          key={user.id}
          user={user}
          onRemove={onRemove}
          fontColorHandler={fontColorHandler}
        />
      ))}
    </div>
  );
};

export default UserList;
