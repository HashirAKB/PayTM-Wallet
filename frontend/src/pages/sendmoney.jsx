import React from 'react';
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export const SendMoney = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card className="w-96">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">
            Send Money
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center mb-4">
            <Avatar className="h-12 w-12">
              <AvatarFallback className="bg-green-500 text-white">
                A
              </AvatarFallback>
              <AvatarImage src="path-to-image" alt="Friend's Name" />
            </Avatar>
            <div className="ml-4">
              <p className="font-bold text-lg">Friend's Name</p>
              <p className="text-gray-600 text-sm">Amount (in Rs)</p>
            </div>
          </div>
          <Input
            type="number"
            placeholder="Enter amount"
            className="mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <Button className="w-full bg-green-500 hover:bg-green-600">
            Initiate Transfer
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
