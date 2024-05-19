import React, { useCallback, useEffect, useState } from "react";
import Search from "./Search";

const allUsers = ["Aman", "Yash", "Vaibhav", "Jhon"];

const Demo = () => {
  const [User, setUser] = useState(allUsers);

  useEffect(()=>{
    console.log("when it will run let's run")

    return (()=>{
      console.log("Unmounting")
    })

  },[])
  const handleSearch = useCallback((value: string) => {
    // console.log(User[0])
    const filteredUsers = allUsers.filter((user) => {
        return user.toLowerCase().includes(value.toLowerCase());
    },[]);

    setUser(filteredUsers);
  },[]) 
  return (
    <div>

      <Search OnChange={handleSearch} />
      <ul>
        {User.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>
    </div>
  );
};

export default Demo;
