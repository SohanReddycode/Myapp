import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Styles.css';

const ListingPage = ({ users }) => {
    return (
        <div>
            <h1>Listing Page</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.name1}>
                        <a href={`/user/${user.name1}`}>{user.name1}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListingPage;