import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/24/outline'
import { useSessionContext, useUser } from '@supabase/auth-helpers-react';
import { useFormik } from "formik";

import { addPhoto, createUSer } from '../utils/Api';
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs';

const SignUpFormik = () => {
    const { supabaseClient } = useSessionContext();
    const user = useUser();
    const formik = useFormik({
        initialValues: {
            id: '',
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            image: '',
            type: "",
            phone: ""
        },
     
        onSubmit: async (values) => {
            await createUSer(values, supabaseClient)
            formik.resetForm();
        },
    });
 
    return formik;
}
export default function UserForm({ open, setOpen }: any) {
    const formik = SignUpFormik();
    const [supabaseClient] = useState(() => createBrowserSupabaseClient());

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={setOpen}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>
                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                            <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-8 pt-8 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full  sm:max-w-lg sm:p-6">
                                <form className='py-8' onSubmit={formik.handleSubmit}>
                                    <div className="grid md:grid-cols-2 md:gap-6">
                                        <div className="relative z-0 mb-6 w-full group">
                                            <input type="text"
                                                value={formik.values.firstName}
                                                onBlur={formik.handleBlur}
                                                onChange={formik.handleChange}
                                                name="firstName" id="firstName" className="block py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none text-gray-900 dark:text-gray-900 dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="first name" />
                                            <label htmlFor="firstName" className="peer-focus:font-medium absolute text-xl text-gray-900 dark:text-gray-900 duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
                                        </div>
                                        <div className="relative z-0 mb-6 w-full group">
                                            <input type="text" name="lastName"
                                                value={formik.values.lastName}
                                                onBlur={formik.handleBlur}
                                                onChange={formik.handleChange} id="floating_last_name" className="block py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                                            <label htmlFor="floating-last-name" className="peer-focus:font-medium absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
                                        </div>
                                    </div>
                                    <div className="grid md:grid-cols-1 md:gap-6">
                                        <div className="relative z-0 mb-6 w-full group">
                                            <input type="tel"
                                                value={formik.values.phone}
                                                onBlur={formik.handleBlur}
                                                onChange={formik.handleChange}
                                                name="phone" id="floating_phone" className="block py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                                            <label htmlFor="floating_phone" className="peer-focus:font-medium absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number</label>
                                        </div>
                                    </div>
                                    <div className="relative z-0 mb-6 w-full group">
                                        <input type="email" name="email"
                                            value={formik.values.email}
                                            onBlur={formik.handleBlur}
                                            onChange={formik.handleChange}
                                            id="floating_email" className="block py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" />
                                        <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                                    </div>
                                    <div className="relative z-0 mb-6 w-full group">
                                        <input type="password" name="password"
                                            value={formik.values.password}
                                            onBlur={formik.handleBlur}
                                            onChange={formik.handleChange}
                                            id="floating_password" className="block py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                                        <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                                    </div>
                                    <div className="form-group">
                                        <div className="flex justify-center items-center w-full">
                                            <label htmlFor="image" className="block h-16 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer">
                                                <div className="flex  justify-center items-center  ">
                                                    <svg aria-hidden="true" className=" w-10  text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                                    <span className=" text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload photo </span></span>
                                                </div>
                                                <input id="image" type="file" name="image"
                                                    value={formik.values.image}
                                                    onBlur={formik.handleBlur}
                                                    className=" opacity-0"
                                                    onChange={async (e) => {
                                                        if (e.target.files !== null) {
                                                          await addPhoto("8d65258c-bc8b-4440-a544-10f0cb6d0631", e.target.files[0],supabaseClient);
                                                        }
                                                      }}
                                                />
                                            </label>
                                        </div>
                                    </div>
                                    <fieldset className="py-4 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600">
                                        <legend className="text-base font-medium text-gray-900"></legend>
                                        <div className="my-4  flex justify-evenly ">
                                            <div>
                                                <div className="flex items-center">
                                                    <input
                                                        id="push-everything"
                                                        name="admin"
                                                        type="radio"
                                                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                        value={formik.values.type}
                                                        onBlur={formik.handleBlur}
                                                        onChange={formik.handleChange}
                                                    />
                                                    <label htmlFor="push-everything" className="ml-3">
                                                        <span className="block text-sm font-medium text-gray-700">Admin</span>
                                                    </label>
                                                </div>
                                                <div className="flex items-center">
                                                    <input
                                                        id="push-accountant"
                                                        name="accountant"
                                                        type="radio"
                                                        value={formik.values.type}
                                                        onBlur={formik.handleBlur}
                                                        onChange={formik.handleChange}
                                                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                    />
                                                    <label htmlFor="push-accountant" className="ml-3">
                                                        <span className="block text-sm font-medium text-gray-700">accountant</span>
                                                    </label>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="flex items-center">
                                                    <input
                                                        id="push-nothing"
                                                        name="engineer"
                                                        type="radio"
                                                        value={formik.values.type}
                                                        onBlur={formik.handleBlur}
                                                        onChange={formik.handleChange}
                                                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                    />
                                                    <label htmlFor="push-nothing" className="ml-3">
                                                        <span className="block text-sm font-medium text-gray-700">Engineer</span>
                                                    </label>
                                                </div>
                                                <div className="flex items-center">
                                                    <input
                                                        id="push-worker"
                                                        name="worker"
                                                        type="radio"
                                                        value={formik.values.type}
                                                        onBlur={formik.handleBlur}
                                                        onChange={formik.handleChange}
                                                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                    />
                                                    <label htmlFor="push-worker" className="ml-3">
                                                        <span className="block text-sm font-medium text-gray-700">Worker</span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </fieldset>
                                    <button type="submit" className=" mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                                </form>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}