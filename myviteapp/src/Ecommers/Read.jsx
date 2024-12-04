// 

// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

// const Read = () => {
//     const [data, setData] = useState({});
//     const { id } = useParams();

//     useEffect(() => {
//         axios.get(`http://localhost:5000/user/${id}`).then((val) => {
//             setData(val.data);
//         });
//     }, []);

//     return (
//         <div className='d-flex flex-column justify-content-center text-center align-items-center bg-light vh-100'>
//             <div className='bg-white w-50 border shadow px-5 pt-3 pb-5 rounded'>
//                 <h3>Details</h3>
//                 <div className='mb-2'>
//                     <strong>Name: {data.name}</strong>
//                 </div>
//                 <div className='mb-2'>
//                     <strong>Email: {data.email}</strong>
//                 </div>
//                 <div className='mb-2'>
//                     <strong>Phone: {data.phone}</strong>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Read;
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Read = () => {
    const [data, setData] = useState(null); // Start with null
    const [loading, setLoading] = useState(true); // Loading state
    const [error, setError] = useState(null); // Error state
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/user/${id}`);
                setData(response.data);
            } catch (err) {
                console.error("Error fetching data:", err);
                setError("Failed to fetch user data.");
            } finally {
                setLoading(false); // Set loading to false after the fetch
            }
        };

        fetchData(); // Call the fetch function
    }, [id]); // Add id to the dependency array

    if (loading) {
        return <div>Loading...</div>; // Show loading state
    }

    if (error) {
        return <div>{error}</div>; // Show error message
    }

    return (
        <div className='d-flex flex-column justify-content-center text-center align-items-center bg-light vh-100'>
            <div className='bg-white w-50 border shadow px-5 pt-3 pb-5 rounded'>
                <h3>Details</h3>
                <div className='mb-2'>
                    <strong>Name: </strong>{data.name || 'N/A'}
                </div>
                <div className='mb-2'>
                    <strong>Email: </strong>{data.email || 'N/A'}
                </div>
                <div className='mb-2'>
                    <strong>Phone: </strong>{data.phone || 'N/A'}
                </div>
            </div>
        </div>
    );
};

export default Read;
