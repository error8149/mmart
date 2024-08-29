import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import bg from '../assets/bg.gif';

export default function SignUp() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm();
  const onSubmit = (data) => console.log(data);
  const passwordValue = watch('password');

  return (
    <div
      className="min-h-screen bg-gray-900 p-7 md:p-32"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <div className="flex ">
        <div className="w-96 bg-gray-700 p-6 rounded-xl">
          <h1 className="text-2xl md:text-4xl font-bold mb-6 text-white text-center">
            Sign Up
          </h1>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-2 text-[#c4e2f1] py-2">
              <div className="flex flex-col pr-2">
                <input
                  className="rounded-xl text-black bg-white mt-2 p-2"
                  type="text"
                  placeholder="First Name"
                  {...register('firstName', { required: true })}
                />
                <p className="text-yellow-400 text-xs mt-1">
                  {errors.firstName?.type === 'required' &&
                    '*Please enter your First Name'}
                </p>
              </div>
              <div className="flex flex-col pl-2">
                <input
                  className="rounded-xl text-black bg-white mt-2 p-2"
                  type="text"
                  placeholder="Last Name"
                  {...register('lastName', { required: true })}
                />
                <p className="text-yellow-400 text-xs mt-1">
                  {errors.lastName?.type === 'required' &&
                    '*Please enter your Last Name'}
                </p>
              </div>
            </div>

            <div className="flex flex-col text-[#c4e2f1] py-2">
              <input
                className="rounded-xl text-black bg-white mt-2 p-2"
                type="text"
                placeholder="Email"
                {...register('email', {
                  required: true,
                  pattern: /^[\w.-]+@[\w-]+\.[\w.-]{2,4}$/g,
                })}
              />
              <p className="text-yellow-400 text-xs mt-1">
                {errors.email?.type === 'required' && '*Email is required'}
                {errors.email?.type === 'pattern' && '*Enter a valid Email'}
              </p>
            </div>

            <div className="flex flex-col text-[#c4e2f1] py-2">
              <input
                className="rounded-xl text-black bg-white mt-2 p-2"
                type="password"
                placeholder="Password"
                {...register('password', {
                  required: true,
                  pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/gm,
                })}
              />
              <p className="text-yellow-400 text-xs mt-1">
                {errors.password?.type === 'required' && '*Password is required'}
                {errors.password?.type === 'pattern' &&
                  '*8+ chars, 1 digit, 1 lowercase, 1 uppercase.'}
              </p>
            </div>

            <div className="flex flex-col text-[#c4e2f1] py-2">
              <input
                className="rounded-xl text-black bg-white mt-2 p-2"
                type="password"
                placeholder="Confirm Password"
                {...register('confirmPassword', {
                  required: true,
                  validate: (value) =>
                    value === passwordValue || '*Passwords do not match!',
                })}
              />
              <p className="text-yellow-400 text-xs mt-1">
                {errors.confirmPassword?.type === 'required' &&
                  '*Confirm Password is required'}
                {errors.confirmPassword?.message}
              </p>
            </div>

            <div className="flex justify-between mb-1">
              <label className="flex items-center text-white text-xs">
                <input className="mr-2" type="checkbox" {...register('checkbox', { required: true })} /> I agree with terms and conditions
              </label>
            </div>

            <div>
              <p className="text-yellow-400 ml-5 text-xs">
                {errors.checkbox?.type === 'required' && '*Please Accept our Terms and Conditions!'}
              </p>
            </div>

            <button className="w-full my-4 py-2 bg-[#84B9D4] shadow-lg hover:bg-white hover:text-[#84B9D4] text-white font-semibold rounded-lg">
              Sign Up
            </button>

            <div className="mt-1 text-center">
              <p className="text-white">Already have an account?</p>
              <Link to="/SignIn" className="text-[#c4e2f1] hover:text-white">
                Sign In
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
