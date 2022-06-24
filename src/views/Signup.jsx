import React from "react";
import { Helmet } from "react-helmet";

function Signup() {
  return (
    <div>
      <Helmet>
        <title>Sign up FREE | FreeForm</title>
        <script
          data-who="💎 Made with naker.io 💎"
          src="https://d23jutsnau9x47.cloudfront.net/back/v1.0.9/viewer.js"
          data-option="{|environment|:{|gradient|:|horizontal|,|sensitivity|:0.8,|colorStart|:[28,1,90,1],|colorEnd|:[90,25,101,1]},|particle|:{|life|:5,|power|:0.2,|texture|:|https://res.cloudinary.com/naker-io/image/upload/v1566560053/circle_05.png%7C,%7Cnumber%7C:1294,%7CcolorStart%7C:[223,253,35,0.65],%7CcolorEnd%7C:[142,141,179,0.82],%7CsizeStart%7C:0.54,%7CsizeEnd%7C:1.08,%7Cdirection1%7C:%7B%7Cx%7C:0,%7Cy%7C:0,%7Cz%7C:0%7D,%7Cdirection2%7C:%7B%7Cx%7C:0,%7Cy%7C:0,%7Cz%7C:0%7D%7D,%7CwaterMark%7C:false%7D"
          data-container="bg-interactive"
        ></script>
      </Helmet>
      <div id="bg-star">
        <div class="bg-white py-6 sm:py-8 lg:py-12">
          <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
            <h2 class="text-gray-800 text-3xl lg:text-3xl font-bold text-center">
              Create your new <span className="underline">FreeForm</span>{" "}
              Account
            </h2>
            <p className="text-xl text-center text-gray-500  mb-4 md:mb-8">
              Get better data with conversational forms, surveys, quizzes &
              more.
            </p>

            <div class="max-w-lg border rounded-lg mx-auto">
              <div class="flex flex-col gap-4 p-4 md:p-8">
                <div>
                  <label
                    for="email"
                    class="inline-block text-gray-800 text-sm sm:text-base mb-2"
                  >
                    Email
                  </label>
                  <input
                    name="email"
                    class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                  />
                </div>

                <div>
                  <label
                    for="password"
                    class="inline-block text-gray-800 text-sm sm:text-base mb-2"
                  >
                    Password
                  </label>
                  <input
                    name="password"
                    class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                  />
                </div>

                <button class="block bg-gray-800 hover:bg-gray-700 active:bg-gray-600 focus-visible:ring ring-gray-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">
                  Sign up
                </button>

                <div class="flex justify-center items-center relative">
                  <span class="h-px bg-gray-300 absolute inset-x-0"></span>
                  <span class="bg-white text-gray-400 text-sm relative px-4">
                    Log in with social
                  </span>
                </div>

                <button class="flex justify-center items-center bg-blue-500 hover:bg-blue-600 active:bg-blue-700 focus-visible:ring ring-blue-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 gap-2 px-8 py-3">
                  <svg
                    class="w-5 h-5 shrink-0"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 0C5.37273 0 0 5.37273 0 12C0 18.0164 4.43182 22.9838 10.2065 23.8516V15.1805H7.23764V12.0262H10.2065V9.92727C10.2065 6.45218 11.8996 4.92655 14.7878 4.92655C16.1711 4.92655 16.9025 5.02909 17.2489 5.076V7.82945H15.2787C14.0525 7.82945 13.6244 8.99182 13.6244 10.302V12.0262H17.2178L16.7302 15.1805H13.6244V23.8773C19.4815 23.0825 24 18.0747 24 12C24 5.37273 18.6273 0 12 0Z"
                      fill="white"
                    />
                  </svg>
                  Continue with Facebook
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

              <div class="flex justify-center items-center bg-gray-100 p-4">
                <p class="text-gray-500 text-sm text-center">
                  Don't have an account?{" "}
                  <a
                    href="#"
                    class="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 transition duration-100"
                  >
                    Register
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;