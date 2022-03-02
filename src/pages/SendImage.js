import React, { useState } from 'react';
import axios from "axios";

export default function SendImage() {
    const [image, setImage] = useState(null);
    const sendHandler = async (e) => {
        e.preventDefault();
        try {
            const form = new FormData();
            console.log(image);
            form.append("photo", image, image.name);
            const res = await axios({
                url: "https://learning-task4.herokuapp.com/users/profile",
                method: "PATCH",
                data: form,
                headers: {
                    Authorization:
                        `Bearer ${localStorage.getItem("token")}`
                },
            });
            console.log(res);
        } catch (er) {
            console.log(er)
        }
    };
    return (
        <div style={{ margin: "15px" }}>
            <input type={"file"} onChange={(e) => setImage(e.target.files[0])} />
            <button
                onClick={(e) => sendHandler(e)}
                style={{ border: 'none', backgroundColor: "#1F95A1", padding: "6px", borderRadius: "3px", color: "white" }}>
                Send
            </button>
        </div>
    )
}