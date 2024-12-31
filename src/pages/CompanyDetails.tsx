import React from 'react'
import '@/assets/css/Login.css'
import loginBg from '@/assets/images/login-bg.png';
import { Controller, useForm } from "react-hook-form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { ICompanyDetail } from '@/types/companyDetails';


const CompanyDetails = () => {

    const { control, handleSubmit, formState } = useForm({
        defaultValues: {
            companyName: "",
            websiteUrl: "",
            phoneNumber: "",
            totalClients: "",
        }
    });

    const onSubmit = (data: ICompanyDetail) => { console.log(data); }


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
                                <BreadcrumbPage>Company Details</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>


                    <h1 className="font-semibold text-3xl text-darkBlue">Tell Us About Your Company</h1>
                    <div className='mt-2 mb-10 text-darkBlue'>Give us a few more details so we can improve your experience.</div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label className='block mb-1 font-medium text-darkBlue'>Company Name</label>
                        <Controller
                            name="companyName"
                            rules={{ required: 'Company name is required' }}
                            control={control}
                            render={({ field }) => <Input {...field} placeholder="Enter your company name" type='text' />}
                        />
                        {formState?.errors?.companyName &&
                            <div className="p-1 px-3 text-sm text-red-800 rounded-md bg-red-50">
                                {formState?.errors?.companyName.message}
                            </div>
                        }


                        <label className='block mb-1 font-medium text-darkBlue mt-8'>Your Website</label>
                        <Controller
                            name="websiteUrl"
                            rules={{ required: 'Website is required' }}
                            control={control}
                            render={({ field }) => <Input {...field} placeholder="Enter your company website" type='text' />}
                        />
                        {formState?.errors?.websiteUrl &&
                            <div className="p-1 px-3 text-sm text-red-800 rounded-md bg-red-50">
                                {formState?.errors?.websiteUrl.message}
                            </div>
                        }

                        <label className='block mb-1 font-medium text-darkBlue mt-8'>How many clients do you have?</label>
                        <Controller
                            name="totalClients"
                            rules={{ required: 'Field is required' }}
                            control={control}
                            render={({ field }) => (
                                <select
                                    {...field}
                                    className="block w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                >
                                    <option value="">Select an option</option>
                                    <option value="1-10">1-10</option>
                                    <option value="11-50">11-50</option>
                                    <option value="51-100">51-100</option>
                                    <option value="100+">100+</option>
                                </select>
                            )}
                        />
                        {formState?.errors?.totalClients && (
                            <div className="p-1 px-3 text-sm text-red-800 rounded-md bg-red-50">
                                {formState?.errors?.totalClients.message}
                            </div>
                        )}


                        <label className='block mb-1 font-medium text-darkBlue mt-8'>Phone Number</label>
                        <Controller
                            name="phoneNumber"
                            rules={{ required: 'Phone number is required' }}
                            control={control}
                            render={({ field }) => <Input {...field} placeholder="Enter phone number" type='text' />}
                        />
                        {formState?.errors?.phoneNumber &&
                            <div className="p-1 px-3 text-sm text-red-800 rounded-md bg-red-50">
                                {formState?.errors?.phoneNumber.message}
                            </div>
                        }

                        <Button className='w-full bg-blue-700 hover:bg-blue-800 focus:outline-none mt-8' type='submit'>Continue</Button>
                    </form>
                </div>
            </div>

            <div className="w-full md:w-1/2 login-right lg:fixed lg:top-0 lg:right-0 lg:bottom-0">
                <img src={loginBg} />
            </div>
        </div>

    )
}

export default CompanyDetails