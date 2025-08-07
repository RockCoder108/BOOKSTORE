import React from 'react'
import { Link } from 'react-router-dom';  

export default function Login() {
  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box ">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </Link>
          </form>
          <h3 className="font-bold text-lg">Login</h3>
          {/* Form for Email */}
          <div className="mt-4 space-y-4">
            <span>Email</span>
            <br />
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered w-full max-w-xs mt-2 outline none"
            />
          </div>
          {/* password */}
          <div className="mt-4 space-y-4">
            <span>Password</span>
            <br />
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered w-full max-w-xs mt-2 outline none"
            />
          </div>
          <div className='flex justify-between items-center mt-6'> 
            <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700'>Login</button>
            <p>Not registered? 
                <Link to="/signup" className='underline text-blue-500 cursor-pointer'>Sigup</Link></p>
          </div>
        </div>
      </dialog>
    </div>
  );
}
