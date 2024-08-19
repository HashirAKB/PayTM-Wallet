import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { z } from 'zod';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axiosInstance from "../utils/axiosInstance";
import { useAuth } from "@/utils/AuthContext";
import { useNavigate, useLocation } from 'react-router-dom';

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

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

const signInSchema = z.object({
    email: z.string().email('Enter a proper email'),
    password: z.string().nonempty('Password is required'),
  });
  
export const SignIn = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);
    const { isAuthenticated, setIsAuthenticated } = useAuth();
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleNavigateDashboard = () => {
        setIsSuccess(false);
        // Redirect the user
        const origin = location.state?.from?.pathname || '/dashboard';
        navigate(origin);
    }

    const submitAction = (event) => {
        event.preventDefault(); // Add this line to prevent the page from reloading
        const formData = {
            email: event.target.email.value,
            password: event.target.password.value,
          };
        try {
            const validatedData = signInSchema.parse(formData);
            // Perform additional sign-in logic here
            setEmailError('');
            setPasswordError('');
            axiosInstance.post('/api/v1/user/signin', {
                "username": validatedData.email,
                "password": validatedData.password,
              })
              .then(function (response) {
                if(response.status == 200){
                    localStorage.setItem('walletAuthToken', response.data.token);
                    setIsAuthenticated(true);
                    setIsSuccess(true);
                }
              })
              .catch(function (error) {
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    if (error.response.status === 401) {
                      setError("Invalid credentials. Please check your email and password.");
                    } else if (error.response.status === 404) {
                      setError("User not found. Please check your email.");
                    } else {
                      setError(error.response.data.message || "An error occurred during sign in. Please try again.");
                    }
                  } else if (error.request) {
                    // The request was made but no response was received
                    setError("No response from server. Please try again later.");
                  } else {
                    // Something happened in setting up the request that triggered an Error
                    setError("An error occurred. Please try again.");
                  }
                  setIsSuccess(false);
                  setIsAuthenticated(false);
              })
              .finally(function () {
                // Always executed
                setIsLoading(false);
              });
             } catch (error) {
            console.error('Validation error');
            // Handle validation errors here
            setEmailError(error.issues.find((issue) => issue.path[0] === 'email')?.message || '');
            setPasswordError(error.issues.find((issue) => issue.path[0] === 'password')?.message || '');
            setIsSuccess(false);
            setIsAuthenticated(false);
          }
    }
    return(
        <div className="flex items-center justify-center h-screen bg-primary">
            <Card className="w-[350px]">
                <CardHeader>
                    <CardTitle>SignIn</CardTitle>
                    <CardDescription>Enter your credentials to access your wallet.</CardDescription>
                </CardHeader>
                <CardContent>
                <form onSubmit={submitAction}>
                <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" name="email" placeholder="joe87@email.com" />
                        {emailError && (
                            <div className="text-red-500">{emailError}</div>
                        )}
                    </div>
                    <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="password">Password</Label>
                        <Input type="password" id="password" name="password" placeholder="Your password" />
                        {passwordError && (
                            <div className="text-red-500">{passwordError}</div>
                        )}
                    <CardDescription>
                    <a href="#" onClick={(e) => { e.preventDefault(); alert('Forgot Password functionality not implemented yet.'); }}>
                        Forgot Password?
                    </a>
                    </CardDescription>
                    </div>
                    {error && <p className="text-red-500">{error}</p>}
                    <Button type="submit">SignIn</Button>
                </div>
                </form>
                </CardContent>
                <CardFooter>
                    <p>Don't have an account?{' '}
                    <Link to="/signup">SignUp Here</Link></p>
                </CardFooter>
            </Card>
            {isSuccess && (
                <AlertDialog open={isSuccess} onOpenChange={setIsSuccess}>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle>Signin Success</AlertDialogTitle>
                            <AlertDialogDescription>
                                Enjoy hassle free money transfer with paytm wallet.
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogAction onClick={handleNavigateDashboard}>
                                Acess Wallet
                            </AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            )}
        </div>
    )
}