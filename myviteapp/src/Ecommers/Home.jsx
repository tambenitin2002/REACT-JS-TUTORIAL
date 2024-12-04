// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// const Home = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     axios.get("http://localhost:5000/user")
//       .then(res => setUsers(res.data))  // Correct setUsers instead of setData
//       .catch(err => console.log(err));
//   }, []);

//   const handleDelete = (id) => {
//     const confirm = window.confirm("Are you sure you want to delete?");
//     if (confirm) {
//       axios.delete(`http://localhost:5000/user/${id}`)
//         .then(() => {
//           // Remove the deleted user from the state without reloading the page
//           setUsers(users.filter(user => user.id !== id));
//         })
//         .catch(err => console.log(err));
//     }
//   };

//   return (
//     <div className='d-flex flex-column justify-content-center text-center align-items-center bg-light vh-100'>
//       <h1>Employee Details</h1>
//       <div className='w-75 rounded bg-white border shadow p-4'>
//         <div className='d-flex justify-content-end'>
//           <Link to="/create" className="btn btn-success btn-sm">Add ++</Link>
//         </div>
//         <table className='table table-striped'>
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Email</th>
//               <th>Phone</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {users.map((user) => (
//               <tr key={user.id}>
//                 <td className="text-center">{user.name}</td>
//                 <td className="text-center">{user.email}</td>
//                 <td className="text-center">{user.phone}</td>
//                 <td className="d-flex align-items-center justify-content-evenly">
//                   <Link to={`/read/${user.id}`} className="btn btn-info btn-sm w-100 m-1">Read</Link>
//                   <Link to={`/update/${user.id}`} className="btn btn-primary btn-sm w-100 m-1">Update</Link>
//                   <button className="btn btn-danger btn-sm w-100 m-1" onClick={() => handleDelete(user.id)}>Delete</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default Home;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// const Home = () => {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true); // Added loading state
//   const [error, setError] = useState(''); // Added error state

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const res = await axios.get("http://localhost:5000/user");
//         setUsers(res.data);  // Set users from API response
//       } catch (err) {
//         console.error(err);
//         setError('Failed to fetch users'); // Set error message
//       } finally {
//         setLoading(false); // Set loading to false after fetch
//       }
//     };

//     fetchUsers();
//   }, []);

//   const handleDelete = async (id) => {
//     const confirm = window.confirm("Are you sure you want to delete?");
//     if (confirm) {
//       try {
//         await axios.delete(`http://localhost:5000/user/${id}`);
//         // Remove the deleted user from the state without reloading the page
//         setUsers(users.filter(user => user.id !== id));
//       } catch (err) {
//         console.error(err);
//         setError('Failed to delete user'); // Set error message for deletion
//       }
//     }
//   };

//   // Loading state indication
//   if (loading) {
//     return <div className='text-center'>Loading...</div>;
//   }

//   // Error state indication
//   if (error) {
//     return <div className='alert alert-danger text-center'>{error}</div>;
//   }

//   return (
//     <div className='d-flex flex-column justify-content-center text-center align-items-center bg-light vh-100'>
//       <h1>Employee Details</h1>
//       <div className='w-75 rounded bg-white border shadow p-4'>
//         <div className='d-flex justify-content-end'>
//           <Link to="/create" className="btn btn-success btn-sm">Add ++</Link>
//         </div>
//         <table className='table table-striped'>
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Email</th>
//               <th>Phone</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {users.map((user) => (
//               <tr key={user.id}>
//                 <td className="text-center">{user.name}</td>
//                 <td className="text-center">{user.email}</td>
//                 <td className="text-center">{user.phone}</td>
//                 <td className="d-flex align-items-center justify-content-evenly">
//                   <Link to={`/read/${user.id}`} className="btn btn-info btn-sm w-100 m-1">Read</Link>
//                   <Link to={`/update/${user.id}`} className="btn btn-primary btn-sm w-100 m-1">Update</Link>
//                   <button className="btn btn-danger btn-sm w-100 m-1" onClick={() => handleDelete(user.id)}>Delete</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default Home;


// Home.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get('http://localhost:5000/user');
        setUsers(res.data);
      } catch (err) {
        setError('Failed to fetch users');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    const confirm = window.confirm('Are you sure you want to delete?');
    if (confirm) {
      try {
        await axios.delete(`http://localhost:5000/user/${id}`);
        setUsers(users.filter((user) => user.id !== id));
      } catch (err) {
        setError('Failed to delete user');
      }
    }
  };

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div className="alert alert-danger text-center">{error}</div>;
  }

  return (
    <div className="d-flex flex-column justify-content-center text-center align-items-center bg-light vh-100">
      <h1>Employee Details</h1>
      <div className="w-75 rounded bg-white border shadow p-4">
        <div className="d-flex justify-content-end">
          <Link to="/create" className="btn btn-success btn-sm">
            Add ++
          </Link>
        </div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td className="text-center">{user.name}</td>
                <td className="text-center">{user.email}</td>
                <td className="text-center">{user.phone}</td>
                <td className="d-flex align-items-center justify-content-evenly">
                  <Link to={`/read/${user.id}`} className="btn btn-info btn-sm w-100 m-1">
                    Read
                  </Link>
                  <Link to={`/update/${user.id}`} className="btn btn-primary btn-sm w-100 m-1">
                    Update
                  </Link>
                  <button
                    className="btn btn-danger btn-sm w-100 m-1"
                    onClick={() => handleDelete(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
