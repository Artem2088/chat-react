import { useState } from "react";
import User from "../User/User";
import "./Users.css";

const Users = ({ onGetAllContacts }) => {
  return (
    <div className='users'>
      <ul className='users__list'>
        {onGetAllContacts.map((item) => (
          <User key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default Users;
