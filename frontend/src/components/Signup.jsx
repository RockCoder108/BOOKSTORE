import React from 'react'
import { Link } from 'react-router-dom';
import Login from './Login';

export default function Signup() {
  return (
    <>
      <div className="flex h-screen items-center justify-center bg-base-200">
        <div className="w-full max-w-lg bg-base-100 shadow-lg rounded-lg p-8">
          <div className="">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>
            </form>
            <h3 className="font-bold text-2xl text-center mb-6">SignUp</h3>
            <div className="mt-4 space-y-4">
              <span>Name</span>
              <br />
              <input
                type="text"
                placeholder="Fullname"
                className="input input-bordered w-full max-w-xs mt-2 outline none"
              />
            </div>
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
            <div className="flex justify-between items-center mt-6">
              <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700">
                SignUp
              </button>
              <p>
                Have account?
                <button className="underline text-blue-500 cursor-pointer"
                onClick={() => document.getElementById("my_modal_3").showModal()}>
                  Login
                </button>
                <Login />
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
