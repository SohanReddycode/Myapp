import React, { useState } from 'react';
import axios from 'axios';
import ListingPage from './ListingPage';
import { useNavigate } from 'react-router-dom';
import './Styles.css';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [enableListing, setEnableListing] = useState(false);
    const [loginDisable, setLoginDisable] = useState(true);

    const navigate = useNavigate();
    const [users, setUsers] = useState([]);


    const fetchData = async () => {
        try {
            const response = await axios.get('https://assignment.8848digitalerp.com/api/method/assignment.API.all_users_api.get_user', {
                headers: {
                    Authorization: 'token eb33bed41ebc137:348f33df4a5e962'
                }
            });
            console.log('Data : ===================.', response.data.message.data);
            setLoginDisable(false);
            setUsers(response.data.message.data);
            setEnableListing(true)
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };
    const handleLogin = async () => {
        try {
            const response = await axios.get(
                `https://assignment.8848digitalerp.com/api/method/assignment.API.access_token.get_access_token?usr=${email}&pwd=${password}`
            );
            const token = response.data.message.access_token;
            fetchData();
            console.log("listingpage");
        } catch (error) {
            // Handle error (e.g., display an error message)
            console.error('Error logging in:', error);
        }
    };



    return (
        <>

            {loginDisable && (
                <div>
                    <h1>Login Page</h1>
                    <input id='button_1'
                        type="text"
                        name='option'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="User Email ID"
                    />
                    <input id='button_2'
                        type="password"
                        name='option'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="User Password"
                    />
                    <button onClick={handleLogin}>Submit</button>
                </div>
            )}
            {enableListing && (
                <ListingPage
                    users={users}
                />
            )}
        </>
    );
};

export default LoginPage;