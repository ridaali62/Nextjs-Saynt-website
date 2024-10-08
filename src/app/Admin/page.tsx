"use client";
import { useForm, SubmitHandler } from 'react-hook-form';
import axios from 'axios';
import { useMutation } from '@tanstack/react-query';
import React, { useState } from 'react';

// Define types for form data and API response
type LoginFormValues = {
  email: string;
  password: string;
};

type LoginResponse = {
  user?: any; // Adjust type as needed based on actual response
  token?: string;
};

export default function Admin() {
  const { register, handleSubmit } = useForm<LoginFormValues>();
  const [message, setMessage] = useState<string>('');

  const mutation = useMutation<LoginResponse, unknown, LoginFormValues>({
    mutationFn: async (data: LoginFormValues) => {
      const response = await axios.post<LoginResponse>('http://localhost:3000/user/login', data);
      return response.data;
    },
    onSuccess: (data) => {
      // Assuming data.user or data.token indicates a successful login
      if (data.user || data.token) {
        setMessage('User successfully logged in!');
      } else {
        setMessage('User not found');
      }
    },
    onError: () => {
      setMessage('Login failed. Please try again.');
    },
  });

  const onSubmit: SubmitHandler<LoginFormValues> = (data) => {
    mutation.mutate(data);
  };

  return (
    <div className="bg-gradient-to-b from-[#23453f] via-[#020617] to-[#020617] flex h-screen justify-center items-center">
      <form onSubmit={handleSubmit(onSubmit)} className="p-6 bg-white shadow-md rounded">
        <h2 className="text-2xl font-bold mb-4">Admin Login</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            {...register('email', { required: true })}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            {...register('password', { required: true })}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <button
          type="submit"
          className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Login
        </button>
        {message && (
          <div className={`mt-4 ${message.includes('successfully') ? 'text-green-600' : 'text-red-600'}`}>
            {message}
          </div>
        )}
      </form>
    </div>
  );
}
