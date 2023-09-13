import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import toast from "react-hot-toast"
import PropagateLoader from "react-spinners/PropagateLoader";
import { useNavigate } from 'react-router-dom';
import { admin_login, messageClear } from '../../store/reducers/authReducer';
const AdminLogin = () => {
    const navigate = useNavigate()
    const { isLoading, error, successMessage } = useSelector(state => state.auth)
    const dispatch = useDispatch();

    const [state, setState] = useState({
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
        dispatch(admin_login(state))
    }

    const overWriteStyle = {
        display: "flex",
        margin: "0 auto",
        justifyContent: "center",
        AlignItem: "center",
        height: "24px"
    }
    useEffect(() => {
        if (error) {
            toast.error(error);
            dispatch(messageClear())

        }
        if (successMessage) {
            toast.success(successMessage)
            dispatch(messageClear());
            navigate("/")
        }
    }, [error, successMessage])

    return (
        <div className="relative flex flex-col justify-center h-screen overflow-y-scroll">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-md ring-2 ring-gray-800/50 lg:max-w-xl">
                <div className='text-center'>
                    <img src="http://localhost:5173/public/images/logo1.png" alt="image" className='w-20 h-20 mx-auto' />
                </div>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label className="label">
                            <span className="text-base label-text">Email</span>
                        </label>
                        <input name='email' onChange={handleChange} value={state.email} type="text" placeholder="Email Address" className="w-full input input-bordered" />

                    </div>
                    <div>
                        <label className="label">
                            <span className="text-base label-text">Password</span>
                        </label>
                        <input name='password' onChange={handleChange} value={state.password} type="password" placeholder="Enter Password" className="w-full input input-bordered" />
                    </div>

                    <div>
                        <button disabled={isLoading ? true : false} className="btn btn-block text-white capitalize  bg-[#1877f2] hover:bg-[#1877f2]">
                            {
                                isLoading ?


                                    <PropagateLoader cssOverride={overWriteStyle} color="#7ea5d6" size={22} />

                                    : "Log in"
                            }

                        </button>
                    </div>

                </form>


            </div>
        </div>
    )
}

export default AdminLogin