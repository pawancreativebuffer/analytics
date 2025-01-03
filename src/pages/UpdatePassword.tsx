import React, { useState } from 'react'
import '@/assets/css/Login.css'
import loginBg from '@/assets/images/login-bg.png';
import { Controller, useForm } from "react-hook-form"
import { Input } from "@/components/ui/input"
import { IUpdatePassword } from '@/types/updatePassword';
import { Button } from "@/components/ui/button"
import { Eye, EyeClosed } from 'lucide-react';



const UpdatePassword = () => {

    const [showPassword, setShowPassword] = useState<boolean>(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false)

    const { control, handleSubmit, formState, getValues } = useForm<IUpdatePassword>({
        defaultValues: {
            password: "",
            confirmPassword: ""
        }
    });
    const onSubmit = (data: IUpdatePassword) => { console.log(data); }


    return (
        <div className="flex flex-wrap w-full">
            <div className="w-full flex items-center md:w-1/2 md:min-h-screen bg-white login-left p-5 lg:p-20 xl:p-50 2xl:px-52 2xl:py-10">
                <div className='w-full'>
                    <h1 className="w-full font-semibold text-3xl text-darkBlue">Update Password</h1>
                    <div className='w-full mt-2 mb-10 text-darkBlue'>Please enter your new password and confirm password</div>
                    <form onSubmit={handleSubmit(onSubmit)} className='w-full'>

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


                        <label className='block mb-1 font-medium text-darkBlue mt-8'>Confirm Password</label>
                        <div className="relative">
                            <Controller
                                name="confirmPassword"
                                rules={{
                                    required: 'Confirm Password is required',
                                    validate: (value) =>
                                        value === getValues('password') || 'Passwords must match',
                                }}
                                control={control}
                                render={({ field }) => <Input {...field} placeholder="Confirm Password" type={showConfirmPassword ? 'text' : 'password'} />}
                            />
                            <div
                                className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            >
                                {showConfirmPassword ? (
                                    <Eye size={20} />
                                ) : (
                                    <EyeClosed size={20} />
                                )}
                            </div>
                        </div>
                        {formState?.errors?.confirmPassword &&
                            <div className="p-1 px-3 text-sm text-red-800 rounded-md bg-red-50">
                                {formState?.errors?.confirmPassword.message}
                            </div>
                        }


                        <Button className='w-full bg-blue-700 hover:bg-blue-800 focus:outline-none mt-12' type='submit'>Update Password</Button>
                    </form>
                </div>
            </div>

            <div className="w-full md:w-1/2 login-right lg:fixed lg:top-0 lg:right-0 lg:bottom-0">
                <img src={loginBg} />
            </div>
        </div>

    )
}

export default UpdatePassword