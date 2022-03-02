import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

export default function Profile() {
    const [user, setUser] = useState([]);
    const getUser = async () => {
        try {
            const result = await axios({
                url: "https://learning-task4.herokuapp.com/users/profile",
                method: "GET",
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                },
            });
            console.log(result.data);
            setUser(result.data);
        } catch (e) {
            console.log(e);
        }
    };
    useEffect(() => {
        getUser();
    }, []);

    return (
        <div>
            <Card style={{ width: '18rem' }} className="card-container">
                <Card.Img variant='top' src={user.photo} />
                <Card.Body>
                    <Card.Title>{user.username}</Card.Title>
                    <Card.Text>
                        {user.email}
                        <br />
                        {user.role}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>

        </div>
    )
}