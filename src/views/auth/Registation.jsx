import React from 'react'
import { BiLogoFacebookCircle, BiLogoGithub, BiLogoGoogle } from 'react-icons/bi';
import { FcGoogle } from 'react-icons/fc';
import { AiFillTwitterCircle } from 'react-icons/ai';

const Registation = () => {
    return (
        <div className="relative flex flex-col justify-center h-screen overflow-y-scroll">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-md ring-2 ring-gray-800/50 lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-gray-700">Wellcome to e-commerce</h1>
                <form className="space-y-4">
                    <div>
                        <label className="label">
                            <span className="text-base label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Name" className="w-full input input-bordered" />
                    </div>
                    <div>
                        <label className="label">
                            <span className="text-base label-text">Email</span>
                        </label>
                        <input type="text" placeholder="Email Address" className="w-full input input-bordered" />
                    </div>
                    <div>
                        <label className="label">
                            <span className="text-base label-text">Password</span>
                        </label>
                        <input type="password" placeholder="Enter Password" className="w-full input input-bordered" />
                    </div>
                    <div className='flex gap-2'>
                        <input type="checkbox" name="checkbox" id="checkbox" className='w-5 h-5' />
                        <label htmlFor="checkbox">I agree to privacy police & teams</label>
                    </div>
                    <div>
                        <button className="btn btn-block">Sign Up</button>
                    </div>
                    <span>Already have an account ?
                        <a href="#" className="text-blue-600 hover:text-blue-800 hover:underline">Login</a></span>
                </form>
                <div className="flex items-center w-full my-4">
                    <hr className="w-full" />
                    <p className="px-3 ">OR</p>
                    <hr className="w-full" />
                </div>
                <div className="my-6 flex justify-center gap-3">
                    <div className="group">
                        <div className="p-2 rounded-full bg-gradient-to-br from-gray-300 to-gray-500 hover:from-gray-400 hover:to-gray-600 transform hover:scale-110 transition-transform">
                            <BiLogoGoogle size={30} className="text-gray-800 group-hover:text-white" />
                        </div>

                    </div>

                    <div className="group">
                        <div className="p-2 rounded-full bg-gradient-to-br from-gray-300 to-gray-500 hover:from-gray-400 hover:to-gray-600 transform hover:scale-110 transition-transform">
                            <BiLogoFacebookCircle size={30} className="text-gray-800 group-hover:text-white" />
                        </div>

                    </div>

                    <div className="group">
                        <div className="p-2 rounded-full bg-gradient-to-br from-gray-300 to-gray-500 hover:from-gray-400 hover:to-gray-600 transform hover:scale-110 transition-transform">
                            <BiLogoGithub size={30} className="text-gray-800 group-hover:text-white" />
                        </div>

                    </div>

                    <div className="group">
                        <div className="p-2 rounded-full bg-gradient-to-br from-gray-300 to-gray-500 hover:from-gray-400 hover:to-gray-600 transform hover:scale-110 transition-transform">
                            <AiFillTwitterCircle size={30} className="text-gray-800 group-hover:text-white" />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Registation