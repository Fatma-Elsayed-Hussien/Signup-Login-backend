import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

export default function UsersMap() {
    const [users, setUsers] = useState([]);
    const getUsers = async () => {
        try {
            const result = await axios({
                url: "https://learning-task4.herokuapp.com/users?allowPagination=false",
                method: "GET",
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                },
            });
            console.log(result);
            setUsers(result.data)
        } catch (e) {
            console.log(e);
        }
    };
    useEffect(() => {
        getUsers();
    }, []);

    return (
        <div>
            {users.map((user) => {
                return (
                    <Card style={{ width: '18rem' }} className="card-container" key={user.id}>
                        <Card.Body>
                            <Card.Title>{user.username}</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>

                )
            })}

        </div>
    )
}