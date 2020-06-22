import React, { useState, useEffect } from 'react'
import axios from 'axios';
const UserList = () => {
    
  const [listOfUser, setlistOfUser] = useState([ ]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setlistOfUser(result.data);
      
    };
    fetchData();
    
  }, []);
  return (
      <div className="container">
           {console.log(listOfUser)}
      <table className="table-bordered table-striped ">
        <thead style={{backgroundColor:"blue"}}>
          <tr>
               <th>#</th>   
               <th className="text-center">Name</th>
               <th className="text-center">Username</th>   
               <th className="text-center">E-mail</th>
               <th className="text-center">Address</th>
               <th className="text-center">Phone</th>   
               <th className="text-center">Website</th>   
               <th className="text-center">Company</th>   
          </tr>
      </thead>
      
      <tbody>
          {listOfUser.map(item => (
          <tr key={item.id}>
               <td>{item.id}</td>
               <td className="text-center">  {item.name} </td>
               <td className="text-center">{item.username}</td>
               <td className="text-center">{item.email}</td>
               <td className="text-center">{item.address.street+" "+item.address.suit+" "+item.address.city+" "+item.address.zipcode}</td>
               <td className="text-center">{item.phone}</td>
               <td className="text-center">{item.website}</td>
               <td className="text-center">{`${item.company.name}  , CatchPhrase :${item.company.catchPhrase} `}</td>
          </tr> 
      )
      )}
     
    </tbody>
    </table>
    </div>
  );
 }

export default UserList