import React, { useState } from 'react'
import '@/assets/css/Login.css'
import loginBg from '@/assets/images/login-bg.png';
import google from '@/assets/images/google.png';
import { Controller, useForm } from "react-hook-form"
import { Input } from "@/components/ui/input"
import { ISignup } from '@/types/signup';
import { Button } from "@/components/ui/button"
import { Link } from 'react-router';
import { Eye, EyeClosed } from 'lucide-react';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { useNavigate } from 'react-router-dom';


const SignUp = () => {

    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState<boolean>(false)

    const { control, handleSubmit, formState } = useForm<ISignup>({
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: ""
        }
    });
    const onSubmit = (data: ISignup) => {
        console.log(data)
        navigate('/company-details');
    }


    return (
        <div className="flex flex-wrap w-full">
            <div className="w-full flex items-center md:w-1/2 md:min-h-screen bg-white login-left p-5 lg:p-20 xl:p-50 2xl:px-52 2xl:py-10">
                <div className='w-full'>
                    <Breadcrumb className='mb-10'>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbPage>Get Started</BreadcrumbPage>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink>Company Details</BreadcrumbLink>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>


                    <h1 className="font-semibold text-3xl text-darkBlue">Sign Up</h1>
                    <div className='mt-2 mb-10 text-darkBlue'>Create your account by entering your details.</div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label className='block mb-1 font-medium text-darkBlue'>First Name</label>
                        <Controller
                            name="firstName"
                            rules={{ required: 'First name is required' }}
                            control={control}
                            render={({ field }) => <Input {...field} placeholder="Enter First Name" type='text' />}
                        />
                        {formState?.errors?.firstName &&
                            <div className="p-1 px-3 text-sm text-red-800 rounded-md bg-red-50">
                                {formState?.errors?.firstName.message}
                            </div>
                        }


                        <label className='block mb-1 font-medium text-darkBlue  mt-8'>Last Name</label>
                        <Controller
                            name="lastName"
                            rules={{ required: 'Last name is required' }}
                            control={control}
                            render={({ field }) => <Input {...field} placeholder="Enter Last Name" type='text' />}
                        />
                        {formState?.errors?.lastName &&
                            <div className="p-1 px-3 text-sm text-red-800 rounded-md bg-red-50">
                                {formState?.errors?.lastName.message}
                            </div>
                        }

                        <label className='block mb-1 font-medium text-darkBlue  mt-8'>Email</label>
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

                        <Button className='w-full bg-blue-700 hover:bg-blue-800 focus:outline-none mt-8' type='submit'>Signup</Button>

                        <div className="relative flex py-5 items-center">
                            <div className="flex-grow border-t border-gray-200"></div>
                            <span className="flex-shrink mx-4 text-gray-400">OR</span>
                            <div className="flex-grow border-t border-gray-200"></div>
                        </div>

                        <Button className='w-full focus:outline-none' variant="outline" type='button'><img src={google} /> Sign up with Google</Button>

                        <div className="w-full text-center mt-6 text-darkBlue">
                            Already have an account? <Link to={`/`} className='underline '>Login</Link>
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

export default SignUp