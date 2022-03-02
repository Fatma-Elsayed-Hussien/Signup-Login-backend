import React, { useState } from 'react';
import { Alert, Button, Stack } from 'react-bootstrap';
import axios from "axios";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //Request Handler
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    const loginHandler = async () => {
        try {
            setError(false);
            setLoading(true);
            setData(null);
            console.log({
                email: email,
                password: password,
            })
            const result = await axios({
                url: "https://learning-task4.herokuapp.com/auth/login",
                method: "POST",
                data: {
                    email: email,
                    password: password,
                },
            });
            console.log(result);
            localStorage.setItem(
                "token",
                result.data.token
            );
            window.location.href = "/UsersMap";
            setData(result);
            setLoading(false);
        } catch (e) {
            console.log(e);
            setError(true);
            setLoading(false);
        }
    };

    return (
        <div >
            <h3 style={{ margin: "10px 0px 25px 0px" }}>Login</h3>
            {loading && <img alt="loading" src="images/gif.gif" style={{ display: "block", margin: "auto", width: "60px", height: "60px" }} />}
            {error && <Alert variant='danger' className='alert'> Something Went Wrong </Alert>}
            {data && <Alert variant='success' className='alert'> Done </Alert>}

            <Stack gap={3} className='form-container'>

                <input
                    placeholder="Email"
                    type={"email"}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    placeholder="Password"
                    type={"password"}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button onClick={() => loginHandler()}>Login</Button>
            </Stack>
        </div>
    )
}