import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import bg from '../assets/bg.gif';
import fb from '../assets/fb.png';
import google from '../assets/google.png';

export default function SignIn() {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="h-screen w-full bg-gray-900 p-7 md:p-32  " style={{
      backgroundImage: `url(${bg})`,
    }}>
      <div className=" flex "  >
        <div className="w-96 bg-gray-700   p-6 rounded-xl">
          <h1 className="text-2xl md:text-4xl font-bold mb-6 text-white text-center">
            Sign In
          </h1>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              
              <input
                placeholder='Email'
                id="email"
                className="w-full px-3 py-2 rounded-lg bg-white text-black"
                type="text"
                {...register('email', {
                  required: true,
                  pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                })}
              />
              <p className="text-yellow-400 text-xs mt-1">
                {errors.email?.type === 'required' && 'Email is required'}
                {errors.email?.type === 'pattern' && 'Enter a valid Email'}
              </p>
            </div>

            <div className="mb-4">
              
              <input
                placeholder='Password'
                id="password"
                className="w-full px-3 py-2 rounded-lg bg-white text-black"
                type="password"
                {...register('password', {
                  required: true,
                  pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm,
                })}
              />
              <p className="text-yellow-400 text-xs mt-1">
                {errors.password?.type === 'required' && 'Password is required'}
                {errors.password?.type === 'pattern' &&
                  '8+ chars, 1 digit, 1 lowercase, 1 uppercase.'}
              </p>
            </div>

            <div className="flex justify-between mb-4">
              <label className="flex items-center text-white text-xs">
                <input className="mr-2" type="checkbox" /> Remember Me
              </label>
              <Link to="#" className="text-white hover:text-gray-300 text-xs">
                Forgot Password
              </Link>
            </div>

            <button
              className="w-full py-2 bg-[#84B9D4] hover:bg-white hover:text-[#84B9D4] text-white font-semibold rounded-lg"
              type="submit"
            >
              Sign In
            </button>
          </form>

          <div className="flex items-center justify-center space-x-2 my-5">
            <span className="h-px w-16 bg-gray-300"></span>
            <span className="text-white">OR</span>
            <span className="h-px w-16 bg-gray-300"></span>
          </div>

          <div className="flex justify-center">
            <Link
              className="w-10 hover:w-9 flex items-center justify-center"
              to="#"
            >
              <img src={google} alt="google" />
            </Link>

            <Link
              className="ml-4 w-10 hover:w-9 flex items-center justify-center"
              to="#"
            >
              <img src={fb} alt="facebook" />
            </Link>
          </div>

          <div className="mt-6 text-center">
            <p className="text-white">Don't have an account?</p>
            <Link to="/SignUp" className="text-white hover:text-gray-300">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
