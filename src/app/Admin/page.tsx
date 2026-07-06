"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";

type LoginFormValues = {
  email: string;
  password: string;
};

type LoginResponse = {
  user?: { id: string; email: string };
  token?: string;
};

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? "";

export default function Admin() {
  const { register, handleSubmit } = useForm<LoginFormValues>();
  const [message, setMessage] = useState<string>("");

  const mutation = useMutation<LoginResponse, unknown, LoginFormValues>({
    mutationFn: async (data: LoginFormValues) => {
      const response = await axios.post<LoginResponse>(
        `${API_BASE_URL}/user/login`,
        data
      );
      return response.data;
    },
    onSuccess: (data) => {
      if (data.user || data.token) {
        setMessage("User successfully logged in!");
      } else {
        setMessage("User not found");
      }
    },
    onError: () => {
      setMessage("Login failed. Please try again.");
    },
  });

  const onSubmit: SubmitHandler<LoginFormValues> = (data) => {
    mutation.mutate(data);
  };

  return (
    <div className="bg-gradient-to-b from-[#23453f] via-[#020617] to-[#020617] flex h-screen justify-center items-center px-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-8 bg-[#0C283A] shadow-md rounded-2xl w-full max-w-[350px] text-white"
      >
        <h2 className="text-2xl font-bold mb-4 text-[#3DC3DA]">Admin Login</h2>
        <div className="mb-4">
          <label className="block mb-1">Email</label>
          <input
            type="email"
            {...register("email", { required: true })}
            className="w-full p-2 bg-transparent border border-gray-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3DC3DA]"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Password</label>
          <input
            type="password"
            {...register("password", { required: true })}
            className="w-full p-2 bg-transparent border border-gray-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3DC3DA]"
          />
        </div>
        <button
          type="submit"
          className="w-full p-2 bg-gradient-to-r from-[#3DC3DA] to-[#7EEBB6] text-white font-bold rounded-xl hover:from-[#7EEBB6] hover:to-[#3DC3DA]"
        >
          Login
        </button>
        {message && (
          <div
            className={`mt-4 ${
              message.includes("successfully") ? "text-[#7EEBB6]" : "text-red-400"
            }`}
          >
            {message}
          </div>
        )}
      </form>
    </div>
  );
}
