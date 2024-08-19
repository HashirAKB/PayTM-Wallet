import { CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useNavigate } from 'react-router-dom';
import axiosInstance from "../utils/axiosInstance";
import React, { useState, useEffect } from 'react';


export const DisplayUsers = () => {
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const token = localStorage.getItem('walletAuthToken');
            const response = await axiosInstance.get('/api/v1/user/bulk', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            setUsers(response.data.user);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    function navigateToSend(userId) {
        navigate('/send', { state: { userId, fromDashboard: true } });
    }

    const filteredUsers = users.filter(user => 
        user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.username.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
      <CardContent>
        <h3 className="text-xl font-semibold mb-4">Users</h3>
        <Input className="mb-4" placeholder="Search users..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="space-y-4">
            {filteredUsers.map(user => (
                        <div key={user._id} className="flex justify-between items-center">
                            <div className="flex items-center space-x-2">
                                <span className="font-medium">{user.firstName}</span>
                                <span>{user.username}</span>
                            </div>
                            <Button onClick={() => navigateToSend(user._id)} variant="secondary">Send Money</Button>
                        </div>
            ))}
        </div>
      </CardContent>
  )
}