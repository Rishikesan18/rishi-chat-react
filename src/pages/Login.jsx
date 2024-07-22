import React from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

    const submit = async (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const inputs = Object.fromEntries(form.entries());

        try {
            const { data } = await axios.post('login', inputs);
            localStorage.setItem('token', data.jwt);
            axios.defaults.headers["Authorization"] = `Bearer ${data.jwt}`;
            await navigate('/');
        } catch (error) {
            if (error.response && error.response.status === 400) {
                // Handle specific error for wrong credentials
                alert('Invalid email or password');
            } else {
                // Handle other errors
                alert('An error occurred. Please try again later.');
            }
        }
    }

    return (
        <main className="form-signin w-100 m-auto">
            <form onSubmit={submit}>
                <h1 className="h3 mb-3 fw-normal">Please Login</h1>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" placeholder="name@example.com" name="email" />
                </div>

                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input id="password" type="password" className="form-control" name="password" />
                </div>

                <button className="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
            </form>
        </main>
    );
};

export default Login;
