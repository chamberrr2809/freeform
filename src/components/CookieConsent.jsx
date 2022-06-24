import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";

export default function CookieConsent() {
  function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    document.cookie = "cookieconsent=true";
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  React.useEffect(() => {
    if (getCookie("cookieconsent") === "") {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, []);

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Cookies Consent
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-md text-gray-500">
                      This website uses cookies to ensure you get the best
                      experience on our website. By continuing to use this
                      website, you agree to our use of cookies.
                    </p>
                    <br />

                    <p className="text-md text-gray-500">
                      Cookies are small text files that are placed on your
                      computer to help us improve your experience. We use
                      cookies to help us understand how you use our website, so
                      that we can improve it for you.
                    </p>
                    <br />
                    <p className="text-md text-gray-500">
                      To learn more about cookies and how to manage them, visit
                      our{" "}
                      <a
                        href="https://www.cookiepolicygenerator.com/live.php?token=oJhI4D7C6CbFBVfKH1CMlqblyxirRk7K"
                        className="underline text-blue-700"
                      >
                        Cookie Policy
                      </a>
                      .
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Accept Cookies
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
