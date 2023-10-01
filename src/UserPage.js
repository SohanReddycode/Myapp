import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './Styles.css';

const UserPage = ({ match }) => {
    const [user, setUser] = useState(null);
    const { name } = useParams();
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        gender: '',
        companyName: '',
    });

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get(`https://assignment.8848digitalerp.com/api/method/assignment.API.specific_user.get_specific?name1=${name}`, {
                    headers: {
                        Authorization: 'token eb33bed41ebc137:348f33df4a5e962'
                    }
                });
                console.log('API Response:', response.data);
                setUser(response.data.message);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };
        fetchUserData();
    }, [name]);


    const handleSave = async () => {
        if (!user || !user.name) {
            console.error(user);
            return;
        }

        try {
            const response = await axios.put(
                `https://assignment.8848digitalerp.com/api/resource/Assignment/${user.name}`,
                {
                    designation: formData.designation
                },
                {
                    headers: {
                        Authorization: 'token eb33bed41ebc137:348f33df4a5e962'
                    }
                }
            );
            console.log('User data updated:', response.data);
        } catch (error) {
            console.error('Error updating user data:', error);
        }
    };

    if (!user) return <div>Loading...</div>;

    return (
        <div>
            <h1>User Page</h1>
            <div>
                <label>Name:</label>
                <input
                    type="text"
                    value={user.name}
                />
            </div>
            <div>
                <label>Age:</label>
                <input
                    type="text"
                    value={user.age}
                />
            </div>
            <div>
                <label>Gender:</label>
                <input
                    type="text"
                    value={user.gender}
                />
            </div>
            <div>
                <label>Company Name:</label>
                <input
                    type="text"
                    value={user.company_name}
                />
            </div>
            <div>
                <label>Designation:</label>
                <input
                    type="text"
                    value={formData.designation}
                    onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                />
            </div>
            <button onClick={handleSave}>Save</button>
        </div>
    );
};

export default UserPage;