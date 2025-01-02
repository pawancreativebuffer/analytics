import React, { useState } from 'react'
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
import { ICompanyDetail, ICompanyDetail2, IPlatformDetail } from '@/types/companyDetails';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"


const CompanyDetails = () => {

    const [showForm, setShowForm] = useState<number>(0);

    const form = useForm({
        defaultValues: {
            platformUse: "",
        }
    });

    const form1 = useForm({
        defaultValues: {
            companyName: "",
            websiteUrl: "",
            phoneNumber: "",
            totalClients: "",
        }
    });

    const form2 = useForm({
        defaultValues: {
            companyName2: "",
            websiteUrl2: "",
            phoneNumber2: "",
        }
    });

    const initialSubmit = (data: IPlatformDetail) => {
        if (data.platformUse === "myClients") {
            setShowForm(1);
        } else if (data.platformUse === "mySelf") {
            setShowForm(2);
        }
    }

    const onsubmit = (data: ICompanyDetail) => {
        console.log(data)
    }

    const onsubmit2 = (data: ICompanyDetail2) => {
        console.log(data)
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
                                <BreadcrumbPage>Company Details</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>


                    {/* plan to use this platform */}
                    {showForm == 0 ? (
                        <form onSubmit={form.handleSubmit(initialSubmit)}>
                            <h1 className="font-semibold text-3xl text-darkBlue mb-10">
                                How Do You Plan To Use This Platform?
                            </h1>
                            <RadioGroup
                                value={form.watch("platformUse")}
                                onValueChange={(value) => form.setValue("platformUse", value, { shouldValidate: true })}
                                className="gap-5"
                            >
                                <label className="flex items-center border rounded p-5">
                                    <Controller
                                        name="platformUse"
                                        control={form.control}
                                        rules={{ required: "Please select at least one option." }}
                                        render={({ field }) => (
                                            <RadioGroupItem
                                                {...field}
                                                value="myClients"
                                                checked={form.watch("platformUse") === "myClients"}
                                            />
                                        )}
                                    />
                                    <div className="ml-5">
                                        <h6 className="font-semibold text-1xl text-darkBlue">For my Clients</h6>
                                        <p>I own or work for an agency</p>
                                    </div>
                                </label>

                                <label className="flex items-center border rounded p-5">
                                    <Controller
                                        name="platformUse"
                                        control={form.control}
                                        rules={{ required: "Please select at least one option." }}
                                        render={({ field }) => (
                                            <RadioGroupItem
                                                {...field}
                                                value="mySelf"
                                                checked={form.watch("platformUse") === "mySelf"}
                                            />
                                        )}
                                    />
                                    <div className="ml-5">
                                        <h6 className="font-semibold text-1xl text-darkBlue">For myself</h6>
                                        <p>To manage my own business</p>
                                    </div>
                                </label>

                                {form.formState.errors?.platformUse && (
                                    <div className="p-1 px-3 text-sm text-red-800 rounded-md bg-red-50">
                                        {form.formState.errors.platformUse.message}
                                    </div>
                                )}
                            </RadioGroup>


                            <Button className='w-full bg-blue-700 hover:bg-blue-800 focus:outline-none mt-8' type='submit'>Continue</Button>
                        </form>
                    ) : null}


                    {/* company details */}
                    {showForm == 1 ? (
                        <form onSubmit={form1.handleSubmit(onsubmit)}>
                            <h1 className="font-semibold text-3xl text-darkBlue">Tell Us About Your Company</h1>
                            <div className='mt-2 mb-10 text-darkBlue'>Give us a few more details so we can improve your experience.</div>

                            <label className='block mb-1 font-medium text-darkBlue'>Company Name</label>
                            <Controller
                                name="companyName"
                                rules={{ required: 'Company name is required' }}
                                control={form1.control}
                                render={({ field }) => <Input {...field} placeholder="Enter your company name" type='text' />}
                            />
                            {form1.formState?.errors?.companyName &&
                                <div className="p-1 px-3 text-sm text-red-800 rounded-md bg-red-50">
                                    {form1.formState?.errors?.companyName.message}
                                </div>
                            }


                            <label className='block mb-1 font-medium text-darkBlue mt-8'>Your Website</label>
                            <Controller
                                name="websiteUrl"
                                rules={{ required: 'Website is required' }}
                                control={form1.control}
                                render={({ field }) => <Input {...field} placeholder="Enter your company website" type='text' />}
                            />
                            {form1.formState?.errors?.websiteUrl &&
                                <div className="p-1 px-3 text-sm text-red-800 rounded-md bg-red-50">
                                    {form1.formState?.errors?.websiteUrl.message}
                                </div>
                            }

                            <label className='block mb-1 font-medium text-darkBlue mt-8'>How many clients do you have?</label>
                            <Controller
                                name="totalClients"
                                rules={{ required: 'Field is required' }}
                                control={form1.control}
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
                            {form1.formState?.errors?.totalClients && (
                                <div className="p-1 px-3 text-sm text-red-800 rounded-md bg-red-50">
                                    {form1.formState?.errors?.totalClients.message}
                                </div>
                            )}


                            <label className='block mb-1 font-medium text-darkBlue mt-8'>Phone Number</label>
                            <Controller
                                name="phoneNumber"
                                rules={{ required: 'Phone number is required' }}
                                control={form1.control}
                                render={({ field }) => <Input {...field} placeholder="Enter phone number" type='text' />}
                            />
                            {form1.formState?.errors?.phoneNumber &&
                                <div className="p-1 px-3 text-sm text-red-800 rounded-md bg-red-50">
                                    {form1.formState?.errors?.phoneNumber.message}
                                </div>
                            }

                            <Button className='w-full bg-blue-700 hover:bg-blue-800 focus:outline-none mt-8' type='submit'>Continue</Button>
                        </form>
                    ) : null}


                    {/* myself details*/}
                    {showForm == 2 ? (
                        <form onSubmit={form2.handleSubmit(onsubmit2)}>
                            <h1 className="font-semibold text-3xl text-darkBlue">Tell Us About Yourself</h1>
                            <div className='mt-2 mb-10 text-darkBlue'>Give us a few more details so we can improve your experience.</div>

                            <label className='block mb-1 font-medium text-darkBlue'>Company Name</label>
                            <Controller
                                name="companyName2"
                                rules={{ required: 'Company name is required' }}
                                control={form2.control}
                                render={({ field }) => <Input {...field} placeholder="Enter your company name" type='text' />}
                            />
                            {form2.formState?.errors?.companyName2 &&
                                <div className="p-1 px-3 text-sm text-red-800 rounded-md bg-red-50">
                                    {form2.formState?.errors?.companyName2.message}
                                </div>
                            }


                            <label className='block mb-1 font-medium text-darkBlue mt-8'>Your Website</label>
                            <Controller
                                name="websiteUrl2"
                                rules={{ required: 'Website is required' }}
                                control={form2.control}
                                render={({ field }) => <Input {...field} placeholder="Enter your company website" type='text' />}
                            />
                            {form2.formState?.errors?.websiteUrl2 &&
                                <div className="p-1 px-3 text-sm text-red-800 rounded-md bg-red-50">
                                    {form2.formState?.errors?.websiteUrl2.message}
                                </div>
                            }

                            <label className='block mb-1 font-medium text-darkBlue mt-8'>Phone Number</label>
                            <Controller
                                name="phoneNumber2"
                                rules={{ required: 'Phone number is required' }}
                                control={form2.control}
                                render={({ field }) => <Input {...field} placeholder="Enter phone number" type='text' />}
                            />
                            {form2.formState?.errors?.phoneNumber2 &&
                                <div className="p-1 px-3 text-sm text-red-800 rounded-md bg-red-50">
                                    {form2.formState?.errors?.phoneNumber2.message}
                                </div>
                            }

                            <Button className='w-full bg-blue-700 hover:bg-blue-800 focus:outline-none mt-8' type='submit'>Continue</Button>
                        </form>
                    ) : null}
                </div>
            </div>

            <div className="w-full md:w-1/2 login-right lg:fixed lg:top-0 lg:right-0 lg:bottom-0">
                <img src={loginBg} />
            </div>
        </div>

    )
}

export default CompanyDetails