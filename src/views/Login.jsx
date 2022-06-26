import React from "react";
import image from "../assets/logo.png";

function Login() {
  return (
    <div class="2xl:container overflow-hidden bg-white dark:bg-gray-900 h-screen m-auto flex justify-center">
      <div className="absolute top-0 right-0 p-3 flex flex-row space-x-2">
        <p className="text-gray-900 dark:text-white font-semibold text-md hidden sm:block">
          Don't have an account yet?
        </p>
        <a
          href="/signup"
          className="dark:text-white text-gray-900 text-xs dark:border-white border-gray-900 border-2 p-1 hidden sm:block"
        >
          Sign up
        </a>
      </div>
      <div class="relative h-full w-full sm:w-auto min-w-16 lg:w-6/12">
        <div class="m-auto py-12 px-6 sm:p-20 xl:w-10/12">
          <div class="space-y-4">
            <div className="flex flex-row justify-center space-x-3">
              <a href="#">
                <img
                  src={image}
                  class="w-12 self-center flex mx-auto"
                  alt="freeform logo"
                />
              </a>
              <p className="dark:text-white text-black text-center mt-2 font-bold text-2xl">
                FreeForm
              </p>
            </div>
            <p className="text-gray-600 dark:text-white font-light text-center text-2xl ">
              Hello, who's this?
            </p>
            <a
              href="/signup"
              className=" block text-center text-blue-700 sm:hidden"
            >
              Create a new account
            </a>
          </div>

          <div class="mt-6 grid gap-3 sm:grid-cols-2">
            <button class="h-12 px-4 border border-blue-100 rounded-lg bg-blue-50 hover:bg-blue-100 focus:bg-blue-100 active:bg-blue-200 dark:bg-white dark:hover:bg-gray-200 dark:focus:bg-gray-200 dark:active:bg-gray-300">
              <div class="flex items-center space-x-3 justify-center">
                <svg
                  className="w-5"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
                    <path
                      fill="#4285F4"
                      d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z"
                    />
                    <path
                      fill="#34A853"
                      d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z"
                    />
                    <path
                      fill="#EA4335"
                      d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z"
                    />
                  </g>
                </svg>
                <span class="block w-max font-medium tracking-wide text-sm text-blue-700">
                  Continue with Google
                </span>
              </div>
            </button>
            <button class="h-12 px-6 rounded-lg bg-gray-900 dark:bg-[#333] transition hover:bg-gray-800 active:bg-gray-600 focus:bg-gray-700">
              <div class="flex space-x-2 items-center justify-center text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  class="w-5"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
                <span class="block w-max font-medium tracking-wide text-sm text-white">
                  Continue with Github
                </span>
              </div>
            </button>
          </div>

          <div role="hidden" class="mt-6 border-t">
            <span class="block w-max mx-auto -mt-3 px-4 text-center dark:text-white bg-white text-gray-900 dark:bg-gray-900">
              Or
            </span>
          </div>

          <div class="py-3">
            <div class="mb-6">
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@flowbite.com"
                required
              />
            </div>
            <div class="">
              <label
                for="password"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your password
              </label>
              <input
                type="password"
                placeholder="What's the secret text?"
                id="password"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>

            <div class="flex flex-col items-end">
              <button class="w-max p-3 -mr-3">
                <span class="text-sm tracking-wide text-sky-600">
                  Forgot password ?
                </span>
              </button>
            </div>

            <div className="bg-white dark:bg-gray-900">
              <button class="w-full px-6 py-3 rounded-lg bg-sky-500 transition hover:bg-sky-600 focus:bg-sky-600 active:bg-sky-800">
                <span class="font-semibold text-white text-lg">Login</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
