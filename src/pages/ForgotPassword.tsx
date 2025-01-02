import React from 'react'
import '@/assets/css/Login.css'
import loginBg from '@/assets/images/login-bg.png';
import { Controller, useForm } from "react-hook-form"
import { Input } from "@/components/ui/input"
import { IForgot } from '@/types/forgot';
import { Button } from "@/components/ui/button"
import { Link } from 'react-router';
import { MoveLeft } from 'lucide-react';


const ForgotPassword = () => {

    const { control, handleSubmit, formState } = useForm<IForgot>({
        defaultValues: {
            email: "",
        }
    });
    const onSubmit = (data: IForgot) => { console.log(data); }


    return (
        <div className="flex flex-wrap w-full">
            <div className="w-full flex items-center md:w-1/2 md:min-h-screen bg-white login-left p-5 lg:p-20 xl:p-50 2xl:px-52 2xl:py-10">
                <div className='w-full'>
                    <h1 className="w-full font-semibold text-3xl text-darkBlue">Forgot Your Password</h1>
                    <div className='w-full mt-2 mb-10 text-darkBlue'>Please enter the email address you'd like your password reset information sent to</div>
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

                        <Button className='w-full bg-blue-700 hover:bg-blue-800 focus:outline-none mt-6' type='submit'>Request Reset Link</Button>
                    </form>
                    <div className="w-full text-center mt-6 text-darkBlue">
                        <Link to={`/`} className='flex items-center justify-center gap-3'> <MoveLeft size={20} /> Back to login</Link>
                    </div>
                </div>
            </div>

            <div className="w-full md:w-1/2 login-right lg:fixed lg:top-0 lg:right-0 lg:bottom-0">
                <img src={loginBg} />
            </div>
        </div>

    )
}

export default ForgotPassword