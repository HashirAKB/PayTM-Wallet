import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axiosInstance from "../utils/axiosInstance";

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";

export const SendMoney = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const { userId } = location.state || {}; // Get the userId from navigation state

  const [recipient, setRecipient] = useState([]);
  const [avatar, setAvatar] = useState('');
  const [amount, setAmount] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleNavigateDashboard = () => {
    setIsSuccess(false);
    navigate('/dashboard');
  }

  useEffect(() => {
    if (location.state?.fromDashboard) {
      fetchRecipient();
    }
    else{
      navigate('/dashboard');
    }

  }, [location, navigate]);

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const token = localStorage.getItem('walletAuthToken');
      const response = await axiosInstance.post(
        '/api/v1/account/transfer',
        JSON.stringify({ amount: parseFloat(amount), to: userId }),
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        }
      );
      setMessage(response.data.message);
      setIsSuccess(true);
    } catch (error) {
      console.error('Error during transfer:', error);
      setMessage(error.response?.data?.message || 'Error during transfer');
    } finally {
      setLoading(false);
    }
  };

  const fetchRecipient = async () => {
    if (userId) {
      try{
        const token = localStorage.getItem('walletAuthToken');
        const response = await axiosInstance.get(`/api/v1/user/bulk?filter=${userId}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        const user = response.data.user[0]; // Get the first user
        setRecipient(user);

        // Set avatar directly from user data
        const avatarInitials = `${user.firstName[0]} ${user.lastName[0]}`;
        setAvatar(avatarInitials);
      }
      catch (error) {
      console.error('Error fetching users:', error);
      setMessage('Error fetching recipient details');
      }
  }};

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card className="w-96">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">
            Send Money
          </CardTitle>
        </CardHeader>
        <CardContent>
        {recipient && (
          <div className="flex items-center mb-4">
            <Avatar className="h-12 w-12">
              <AvatarFallback className="bg-green-500 text-white uppercase">
              {avatar}
              </AvatarFallback>
              <AvatarImage src="path-to-image" alt="Friend's Name" />
            </Avatar>
            <div className="ml-4">
              <p className="font-bold text-lg">{recipient.firstName} {recipient.lastName}</p>
              <p className="text-gray-600 text-sm">{recipient.username}</p>
            </div>
          </div>
        )}
        <form onSubmit={handleSubmit}>
            <Input
              type="number"
              placeholder="Enter amount"
              value={amount}
              onChange={handleAmountChange}
              className="mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
            <Button 
              type="submit" 
              className="w-full bg-green-500 hover:bg-green-600"
              disabled={loading}
            >
              {loading ? 'Processing...' : 'Initiate Transfer'}
            </Button>
          </form>
          {message && (
            <p className={`mt-4 text-center ${message.includes('Error') ? 'text-red-500' : 'text-green-500'}`}>
              {message}
            </p>
          )}
        </CardContent>
      </Card>
      {isSuccess && (
                <AlertDialog open={isSuccess} onOpenChange={setIsSuccess}>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle>Transfer Successfull</AlertDialogTitle>
                            <AlertDialogDescription>
                                {`Amount ${amount} transferred to ${recipient.firstName}`}
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogAction onClick={handleNavigateDashboard}>
                                New Transaction
                            </AlertDialogAction>
                            <AlertDialogAction onClick={handleNavigateDashboard}>
                                View Transactions
                            </AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            )}
    </div>
  );
};
