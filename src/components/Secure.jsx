import React, {createContext, useEffect, useState} from 'react';
import axios from "axios";
import {Link, Outlet, useNavigate} from "react-router-dom";

export const Context = createContext(null);

const Secure = () => {
    const navigate = useNavigate()
    const [user, setUser] = useState(null)

    useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get('user')
                setUser(data)
            } catch (e) {
                navigate('/login')
            }
        })();
    }, [navigate]);

    const logout = async () => {
        await axios.post('logout'); 
        localStorage.removeItem('token');
        delete axios.defaults.headers["Authorization"];
        setUser(null);
        navigate('/login');
    };

    return (
        <Context.Provider value={[user, setUser]}>
            <header className="d-flex justify-content-end py-3">
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <Link to="/account" className="nav-link active">
                            {user?.first_name} {user?.last_name}
                        </Link><br></br>
                        <button className="nav-link active btn" onClick={logout}>Logout</button>
                    </li>
                </ul>
            </header>
            <Outlet />
        </Context.Provider>
    );
};

export default Secure;
