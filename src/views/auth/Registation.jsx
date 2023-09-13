import React, { useState } from 'react'
import { BiLogoFacebookCircle, BiLogoGithub, BiLogoGoogle } from 'react-icons/bi';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Registation = () => {
    const [state, setState] = useState({
        name: "",
        email: "",
        password: ""
    })
    const handleChange = (e) => [
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    ];
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(state)
    }
    return (
        <div className="relative flex flex-col justify-center h-screen overflow-y-s">
            <div className="w-full my-10 p-6 m-auto bg-white rounded-md shadow-md ring-2 ring-gray-800/50 lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-gray-700 mb-6">Wellcome to e-commerce</h1>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>

                        <input name='name' onChange={handleChange} value={state.name} type="text" placeholder="Name" className="w-full input input-bordered" />
                    </div>
                    <div>

                        <input name='email' onChange={handleChange} value={state.email} type="text" placeholder="Email Address" className="w-full input input-bordered" />
                    </div>
                    <div>

                        <input onChange={handleChange} name='password' value={state.password} type="password" placeholder="Enter Password" className="w-full input input-bordered" />
                    </div>
                    <div className='flex gap-2'>
                        <input type="checkbox" name="checkbox" id="checkbox" className='w-5 h-5' />
                        <label htmlFor="checkbox">I agree to privacy police & teams</label>
                    </div>
                    <div>
                        <button className="btn btn-block text-white capitalize  bg-[#1877f2] hover:bg-[#1877f2]">Sign up</button>
                    </div>
                    <span>Already have an account ?
                        <Link to="/login" className="text-blue-600 hover:text-blue-800 hover:underline">Login</Link></span>
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