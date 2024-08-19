import React, { useState, useEffect } from "react";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import axiosInstance from "@/utils/axiosInstance";

export const UserProfile = () => {

  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState({});
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [passwordMismatchError, setPasswordMismatchError] = useState(false)
  const [apiError, setApiError] = useState(null);
  const [apiSuccess, setApiSuccess] = useState(null);

  useEffect(() => {
    fetchUserProfile();
  }, []);

  const fetchUserProfile = async () => {
    try {
      const token = localStorage.getItem('walletAuthToken');
      const response = await axiosInstance.get('/api/v1/user', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setUser(response.data);
    } catch (error) {
      console.error('Error fetching user profile:', error);
      setApiError('Failed to fetch user profile');
    }
  };

  const handleInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSaveChanges = async () => {
    if (newPassword !== confirmPassword) {
      setPasswordMismatchError(true)
      return
    }
    setPasswordMismatchError(false)

    try {
      const token = localStorage.getItem('walletAuthToken');
      const data = {
        firstName: user.firstName,
        lastName: user.lastName,
        ...(newPassword && { password: newPassword })
      };

      const response = await axiosInstance.put('/api/v1/user', data, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });

      setApiSuccess(response.data.message || 'Profile updated successfully');
      setIsEditing(false);
      setNewPassword("");
      setConfirmPassword("");
    } catch (error) {
      console.error('Error updating profile:', error);
      setApiError(error.response?.data?.message || 'Failed to update profile');
    }

  }
  return (
    <div className="min-h-screen w-full bg-primary flex items-start justify-center pt-2">
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="bg-muted/20 p-6">
        <div className="flex items-center gap-4">
          <Avatar className="h-16 w-16">
            <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
            <AvatarFallback className="uppercase">{user.firstName?.charAt(0)}{user.lastName?.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="grid gap-1">
            <h2 className="text-2xl font-bold">{`${user.firstName} ${user.lastName}`}</h2>
            <p className="text-muted-foreground">{user.username}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-6 grid gap-4">
        {!isEditing ? (
          <div className="grid gap-2">
            <h3 className="text-lg font-semibold">Profile</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <p>{user.firstName}</p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <p>{user.lastName}</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid gap-4">
            <div className="grid gap-2">
              <h3 className="text-lg font-semibold">Profile</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    value={user.firstName}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    value={user.lastName}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
            <Separator />
            <div className="grid gap-2">
              <h3 className="text-lg font-semibold">Security</h3>
              <div className="space-y-2">
                <Label htmlFor="password">New Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              {passwordMismatchError && (
                <Alert variant="destructive">
                  <div />
                  <AlertTitle>Passwords do not match</AlertTitle>
                  <AlertDescription>Please make sure your new password and confirm password match.</AlertDescription>
                </Alert>
              )}
            </div>
          </div>
        )}
        {apiError && (
          <Alert variant="destructive">
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{apiError}</AlertDescription>
          </Alert>
        )}
        {apiSuccess && (
          <Alert variant="success">
            <AlertTitle>Success</AlertTitle>
            <AlertDescription>{apiSuccess}</AlertDescription>
          </Alert>
        )}
        </CardContent>
        <CardFooter className="flex justify-end">
          {!isEditing ? (
            <Button onClick={() => setIsEditing(true)}>Update Profile</Button>
          ) : (
            <div className="flex gap-2">
              <Button variant="outline" onClick={() => setIsEditing(false)}>
                Cancel
              </Button>
              <Button onClick={handleSaveChanges}>Save Changes</Button>
            </div>
          )}
        </CardFooter>
    </Card>
    </div>
  )
}