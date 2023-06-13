import React from "react";

const User = ({ user, onRemove, fontColorHandler }) => {
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
