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
    AlertDialog,
    AlertDialogTrigger,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogFooter,
    AlertDialogTitle,
    AlertDialogDescription,
    AlertDialogAction,
  } from "@/components/ui/alert-dialog";

const signUpSchema = z.object({
    firstname: z.string().nonempty('First Name is required'),
    lastname: z.string().nonempty('Last Name is required'),
    email: z.string().email('Enter a proper email'),
    password: z.string().min(6,'Password of length 6 is required'),
  });
  
export const SignUp = () => {
    const navigate = useNavigate();
    const [emailError, setEmailError] = useState('');
    const [firstNameError, setfirstNameError] = useState('');
    const [lastNameError, setlastNameError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);

    const handleNavigateToSignin = () => {
        setIsSuccess(false);
        navigate('/signin');
    }

    const submitAction = (event) => {
        event.preventDefault(); // Add this line to prevent the page from reloading
        const formData = {
            firstname: event.target.firstname.value,
            lastname: event.target.lastname.value,
            email: event.target.email.value,
            password: event.target.password.value,
          };
        try {
            const validatedData = signUpSchema.parse(formData);
            // Perform additional sign-in logic here
            setEmailError('');
            setPasswordError('');
            setlastNameError('');
            setfirstNameError('');
            axiosInstance.post('/api/v1/user/signup', {
                "username": validatedData.email,
                "password": validatedData.password,
                "firstName": validatedData.firstname,
                "lastName": validatedData.lastname,
              })
              .then(function (response) {
                if(response.status == 200){
                    console.log("Signup successfull");
                    setIsSuccess(true);
                }
              })
              .catch(function (error) {
                console.log(error);
                navigate('/');
              });

          } catch (error) {
            // Handle validation errors here
            setEmailError(error.issues.find((issue) => issue.path[0] === 'email')?.message || '');
            setPasswordError(error.issues.find((issue) => issue.path[0] === 'password')?.message || '');
            setfirstNameError(error.issues.find((issue) => issue.path[0] === 'firstname')?.message || '');
            setlastNameError(error.issues.find((issue) => issue.path[0] === 'lastname')?.message || '');
          }
    }
    return(
        <div className="flex items-center justify-center h-screen bg-primary">
            <Card className="w-[350px]">
                <CardHeader>
                    <CardTitle>SignUp</CardTitle>
                    <CardDescription>Create an account with your credentials to use the wallet.</CardDescription>
                </CardHeader>
                <CardContent>
                <form onSubmit={submitAction}>
                <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="firstname">First Name</Label>
                        <Input id="firstname" name="firstname" placeholder="Joe" />
                        {firstNameError && (
                            <div className="text-red-500">{firstNameError}</div>
                        )}
                    </div>
                    <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="lastname">Last Name</Label>
                        <Input id="lastname" name="lastname" placeholder="Doegan" />
                        {lastNameError && (
                            <div className="text-red-500">{lastNameError}</div>
                        )}
                    </div>
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
                    </div>
                    <Button type="submit">SignIn</Button>
                </div>
                </form>
                </CardContent>
                <CardFooter>
                    <p>Already have an account?{' '}
                    <Link to="/signin">SignIn Here</Link></p>
                </CardFooter>
            </Card>
            {isSuccess && (
                <AlertDialog open={isSuccess} onOpenChange={setIsSuccess}>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle>Account Created</AlertDialogTitle>
                            <AlertDialogDescription>
                                Your account has been created successfully.
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogAction onClick={handleNavigateToSignin}>
                                Continue to SignIn
                            </AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            )}
        </div>
    )
}