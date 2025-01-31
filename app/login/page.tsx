import React from "react";
import Link from "next/link";

export default function Login() {
  return (
    <div className=" flex flex-col items-center justify-center min-h-screen p-6 bg-gray-50  dark:bg-gray-900">
      <form className="bg-sky-800 p-4 rounded-md w-1/3 mx-auto absolute top-1/2 left-1/2 -translate-y-1/2  -translate-x-1/2">
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
          >
            Votre email
          </label>
          <input
            type="email"
            id="email"
            className=" text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="jeanos@gmail.com"
            required={true}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-black focus:outline-none"
          >
            Votre mot de passe
          </label>
          <input
            type="password"
            id="password"
            className=" text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="********"
            required={true}
          />
        </div>
        <div className="flex items-start mb-5">
          <div className="flex items-center h-5">
            <input
              id="remember"
              type="checkbox"
              defaultValue=""
              className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
              required={true}
            />
          </div>
          <label
            htmlFor="remember"
            className="ms-2 text-sm font-medium text-gray-900 dark:text-black"
          >
            Se souvenir de moi
          </label>
        </div>
        <p>
          <Link
            href=""
            className="ms-2 text-sm font-medium text-gray-900 dark:text-black"
          >
            Mot de passe oublié?
          </Link>
        </p>
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-sky-700 text-white hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-bold rounded-lg text-sm px-5 py-2.5 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 m-4"
          >
            Connexion
          </button>
        </div>
      </form>
    </div>
  );
}
