import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import axiosInstance from "../utils/axiosInstance";

export const DisplayBalance = () => {
    const [balance, setBalance] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchBalance();
    }, []);

      const fetchBalance = async () => {
        const token = localStorage.getItem('walletAuthToken');
        
        if (!token) {
          setError('No authentication token found');
          return;
        }
    
        try {
          const response = await axiosInstance.get('/api/v1/account/balance', {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          });
          setBalance(response.data.balance); // Adjust this based on your API response structure
        } catch (error) {
          console.error('Error fetching balance:', error);
          setError('Failed to fetch balance');
        }
    };

  return (
      <CardHeader>
        <h2 className="text-2xl font-bold">
        Your Balance{' '}
          {balance !== null ? (
            <span className="font-normal">${balance.toFixed(2)}</span>
          ) : (
            <span className="font-normal">Loading...</span>
          )}
        </h2>
      </CardHeader>
  )
}