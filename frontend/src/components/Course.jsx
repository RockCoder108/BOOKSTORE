import React from 'react'
import Cards from './Cards';
import list from '../data/list.json';
import { Link } from 'react-router-dom';

export default function Course() {
  return (
    <>
      <div className="w-full mx-auto md:px-20 px-4 dark:bg-slate-700 dark:text-white">
        <div className="mt-28 items-center justify-center text-center ">
          <h1 className="text-2xl md:text-4xl">
            We're delighted to have ypu{" "}
            <span className="text-pink-500">Here! :)</span>
          </h1>
          <p className="mt-12">
            Explore our wide range of free courses designed to help you grow
            personally and professionally without any cost. Whether you're just
            starting your journey or looking to upgrade your skills, these
            courses cover everything from self-development and business
            fundamentals to creative storytelling and technology. Each course is
            thoughtfully created to be accessible, engaging, and
            practical—perfect for learners at any stage. Start learning at your
            own pace and unlock new opportunities for your future.
          </p>
          <Link className="flex justify-center" to="/">
            <button className="mt-6 bg-pink-500 text-white  px-4 py-2 rounded-md hover:bg-pink-700">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {list.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}
