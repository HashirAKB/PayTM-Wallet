import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { z } from 'zod';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axiosInstance from "../utils/axiosInstance";

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

const signInSchema = z.object({
    email: z.string().email('Enter a proper email'),
    password: z.string().nonempty('Password is required'),
  });
  
export const SignIn = () => {
    const navigate = useNavigate();
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);

    const handleNavigateDashboard = () => {
        setIsSuccess(false);
        navigate('/dashboard');
    }

    const submitAction = (event) => {
        event.preventDefault(); // Add this line to prevent the page from reloading
        console.log("Sign In clicked.");
        const formData = {
            email: event.target.email.value,
            password: event.target.password.value,
          };
        try {
            const validatedData = signInSchema.parse(formData);
            console.log('Validated data:', validatedData);
            // Perform additional sign-in logic here
            setEmailError('');
            setPasswordError('');
            axiosInstance.post('/api/v1/user/signin', {
                "username": validatedData.email,
                "password": validatedData.password,
              })
              .then(function (response) {
                console.log(response.data);
                if(response.status == 200){
                    console.log("Signup successfull");
                    setIsSuccess(true);
                }
              })
            navigate('/dashboard');
          } catch (error) {
            console.error('Validation error:', error);
            // Handle validation errors here
            setEmailError(error.issues.find((issue) => issue.path[0] === 'email')?.message || '');
            setPasswordError(error.issues.find((issue) => issue.path[0] === 'password')?.message || '');
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
                                Opening Dashboard
                            </AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            )}
        </div>
    )
}