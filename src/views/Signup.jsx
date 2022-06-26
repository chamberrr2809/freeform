import React from "react";
import { Helmet } from "react-helmet";

function Signup() {
  return (
    <div>
      <Helmet>
        <title>Sign up FREE | FreeForm</title>
      </Helmet>
      <div class="bg-white h-screen dark:bg-gray-900 py-6 sm:py-8 lg:py-12">
        <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <h2 class="text-gray-800 dark:text-white text-2xl lg:text-3xl font-bold text-center">
            Create your new <span className="underline">FreeForm</span> Account
          </h2>
          <p className="text-md lg:text-xl text-center text-gray-500 dark:text-gray-300  mb-4 md:mb-8">
            Get better data with conversational forms, surveys, quizzes & more.
          </p>

          <div class="max-w-lg border rounded-lg mx-auto">
            <div class="flex flex-col gap-4 p-4 md:p-8">
              <div>
                <label
                  for="email"
                  class="inline-block text-gray-800 dark:text-gray-300 text-sm sm:text-base mb-2"
                >
                  Your Email
                </label>
                <input
                  name="email"
                  placeholder="you@yourcompany.com"
                  class="w-full bg-gray-50 dark:bg-gray-700 dark:text-gray-200 text-gray-800 focus:ring dark:focus:ring-0  rounded outline-none transition duration-100 px-3 py-2"
                />
              </div>

              <div>
                <label
                  for="password"
                  class="inline-block text-gray-800 dark:text-gray-300 text-sm sm:text-base mb-2"
                >
                  Your Password
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="The secret word"
                  class="w-full bg-gray-50 dark:bg-gray-700 dark:text-white text-gray-800 dark:focus:ring-0 focus:ring rounded outline-none transition duration-100 px-3 py-2"
                />
              </div>

              <button class="block bg-sky-500 hover:bg-sky-700 active:bg-sky-600 focus-visible:ring ring-gray-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">
                Sign up
              </button>

              <div class="flex justify-center items-center relative">
                <span class="h-px bg-gray-300 absolute inset-x-0"></span>
                <span class="bg-white dark:bg-gray-900 dark:text-white text-gray-400 text-sm relative px-4">
                  Log in with social
                </span>
              </div>

              <button class="flex justify-center items-center bg-[#333] hover:bg-gray-800 active:bg-gray-900 focus-visible:ring text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 gap-2 px-8 py-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  class="w-5"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
                Continue with Github
              </button>

              <button class="flex justify-center items-center bg-white hover:bg-gray-100 active:bg-gray-200 border border-gray-300 focus-visible:ring ring-gray-300 text-gray-800 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 gap-2 px-8 py-3">
                <svg
                  class="w-5 h-5 shrink-0"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.7449 12.27C23.7449 11.48 23.6749 10.73 23.5549 10H12.2549V14.51H18.7249C18.4349 15.99 17.5849 17.24 16.3249 18.09V21.09H20.1849C22.4449 19 23.7449 15.92 23.7449 12.27Z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12.2549 24C15.4949 24 18.2049 22.92 20.1849 21.09L16.3249 18.09C15.2449 18.81 13.8749 19.25 12.2549 19.25C9.12492 19.25 6.47492 17.14 5.52492 14.29H1.54492V17.38C3.51492 21.3 7.56492 24 12.2549 24Z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.52488 14.29C5.27488 13.57 5.14488 12.8 5.14488 12C5.14488 11.2 5.28488 10.43 5.52488 9.71V6.62H1.54488C0.724882 8.24 0.254883 10.06 0.254883 12C0.254883 13.94 0.724882 15.76 1.54488 17.38L5.52488 14.29Z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12.2549 4.75C14.0249 4.75 15.6049 5.36 16.8549 6.55L20.2749 3.13C18.2049 1.19 15.4949 0 12.2549 0C7.56492 0 3.51492 2.7 1.54492 6.62L5.52492 9.71C6.47492 6.86 9.12492 4.75 12.2549 4.75Z"
                    fill="#EA4335"
                  />
                </svg>
                Continue with Google
              </button>
            </div>

            <div class="flex justify-center items-center bg-gray-100 dark:bg-gray-800 p-4">
              <p class="text-gray-500 dark:text-white text-sm text-center">
                Already have an Account?{" "}
                <a
                  href="/login"
                  class="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 transition duration-100"
                >
                  Login
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
