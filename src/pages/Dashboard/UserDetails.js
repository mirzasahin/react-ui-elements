import React, { useEffect, useState } from 'react'
import { Link, useParams, useLocation } from 'react-router-dom'

const UserDetails = () => {
    const { id } = useParams(); // yönlenmdirmeyi yapar.
    const location = useLocation(); // state'deki use verilerini tutar.
    const [user, setUser] = useState(location.state);

 
    useEffect(() => {
        if (!user?.id) { // user undefined, false veya null ise if bloğu çalışmaya başlar.
            fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
                .then((res) => res.json())
                .then((data) => setUser(data));
        }
    }, [id, user]);

    return (
        <div>
            <h2>Users Details</h2>    
            {user && <pre>{JSON.stringify(user, null, 2)}</pre>}
            <Link to={`/users/${Number(id) + 1}`}>Next User</Link>
        </div>
    ) 
}

export default UserDetails
