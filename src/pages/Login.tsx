import React, { useState } from 'react'
import '@/assets/css/Login.css'
import loginBg from '@/assets/images/login-bg.png';
import google from '@/assets/images/google.png';
import { Controller, useForm } from "react-hook-form"
import { Input } from "@/components/ui/input"
import { ILogin } from '@/types/login';
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Link } from 'react-router';
import { Eye, EyeClosed } from 'lucide-react';



const Login = () => {

    const [showPassword, setShowPassword] = useState<boolean>(false)

    const { control, handleSubmit, formState } = useForm({
        defaultValues: {
            email: "",
            password: ""
        }
    });
    const onSubmit = (data: ILogin) => { console.log(data); }


    return (
        <div className="flex flex-wrap w-full">
            <div className="w-full flex items-center md:w-1/2 md:min-h-screen bg-white login-left p-5 lg:p-20 xl:p-50 2xl:px-52 2xl:py-10">
                <div className='w-full'>
                    <h1 className="w-full font-semibold text-3xl text-darkBlue">Login</h1>
                    <div className='w-full mt-2 mb-10 text-darkBlue'>Enter your credentials to access your account</div>
                    <form onSubmit={handleSubmit(onSubmit)} className='w-full'>
                        <label className='block mb-1 font-medium text-darkBlue'>Email</label>
                        <Controller
                            name="email"
                            rules={{ required: 'Email is required' }}
                            control={control}
                            render={({ field }) => <Input {...field} placeholder="Enter Email" type='email' />}
                        />
                        {formState?.errors?.email &&
                            <div className="p-1 px-3 text-sm text-red-800 rounded-md bg-red-50">
                                {formState?.errors?.email.message}
                            </div>
                        }

                        <label className='block mb-1 font-medium text-darkBlue mt-8'>Password</label>
                        <div className="relative">
                            <Controller
                                name="password"
                                rules={{ required: 'Password is required' }}
                                control={control}
                                render={({ field }) => <Input {...field} placeholder="Enter Password" type={showPassword ? 'text' : 'password'} />}
                            />
                            <div
                                className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? (
                                    <Eye size={20} />
                                ) : (
                                    <EyeClosed size={20} />
                                )}
                            </div>
                        </div>
                        {formState?.errors?.password &&
                            <div className="p-1 px-3 text-sm text-red-800 rounded-md bg-red-50">
                                {formState?.errors?.password.message}
                            </div>
                        }

                        <div className='flex flex-nowrap w-full mt-5 items-center'>
                            <div className="w-full md:w-1/2">
                                <div className="flex items-center space-x-2">
                                    <Checkbox id="remember" />
                                    <Label htmlFor="remember" className='text-sm text-darkBlue'>Remember me</Label>
                                </div>
                            </div>

                            <div className="w-full md:w-1/2 text-end">
                                <Link to={`#`} className='text-sm underline text-darkBlue'>Forgot Password</Link>
                            </div>
                        </div>

                        <Button className='w-full bg-blue-700 hover:bg-blue-800 focus:outline-none mt-12' type='submit'>Login</Button>

                        <div className="relative flex py-5 items-center">
                            <div className="flex-grow border-t border-gray-200"></div>
                            <span className="flex-shrink mx-4 text-gray-400">OR</span>
                            <div className="flex-grow border-t border-gray-200"></div>
                        </div>

                        <Button className='w-full focus:outline-none' variant="outline" type='button'><img src={google} /> Sign in with Google</Button>

                        <div className="w-full text-center mt-6 text-darkBlue">
                            Don't have an account? <Link to={'/signup'} className='underline '>Signup</Link>
                        </div>
                    </form>
                </div>
            </div>

            <div className="w-full md:w-1/2 login-right lg:fixed lg:top-0 lg:right-0 lg:bottom-0">
                <img src={loginBg} />
            </div>
        </div>

    )
}

export default Login