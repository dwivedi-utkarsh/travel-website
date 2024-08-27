import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Profile = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");

  useEffect(() => {
    if (location.state && location.state.data) {
      setPrevLocation(location.state.data);
    }
  }, [location]);

  const [clientName, setClientName] = useState("");
  const [email, setEmail] = useState("");
  const [messages, setMessages] = useState("");

  // Error Messages
  const [errClientName, setErrClientName] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errMessages, setErrMessages] = useState("");

  // Success Message
  const [successMsg, setSuccessMsg] = useState("");

  const handleName = (e) => {
    setClientName(e.target.value);
    setErrClientName("");
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrEmail("");
  };
  const handleMessages = (e) => {
    setMessages(e.target.value);
    setErrMessages("");
  };

  // Email Validation
  const EmailValidation = (email) => {
    return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
  };

  const handlePost = (e) => {
    e.preventDefault();

    let valid = true;

    if (!clientName) {
      setErrClientName("Enter your Name");
      valid = false;
    }

    if (!email) {
      setErrEmail("Enter your Email");
      valid = false;
    } else if (!EmailValidation(email)) {
      setErrEmail("Enter a Valid Email");
      valid = false;
    }

    if (!messages) {
      setErrMessages("Enter your Messages");
      valid = false;
    }

    if (valid) {
      // Save the data in localStorage
      const formData = {
        clientName,
        email,
        messages,
      };
      localStorage.setItem("formData", JSON.stringify(formData));

      setSuccessMsg(
        `Thank you dear ${clientName}, Your message has been received successfully. Further details will be sent to you by email at ${email}.`
      );

      setClientName("");
      setEmail("");
      setMessages("");
    }
  };

  return (
    <div className="container mx-auto p-4 ">
      {successMsg && (
        <p className="pb-4 my-48 text-center text-green-500 text-lg sm:text-xl md:text-2xl lg:text-3xl ">
          {successMsg}
        </p>
      )}
      {!successMsg && (
        <form className="pb-4">
          <h1 className="font-bold text-center text-2xl mb-8 md:mb-16">
            Fill up a Form
          </h1>
          <div className="flex justify-center">
            <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3">
              <div className="mb-4">
                <label className="block font-semibold mb-2">Name</label>
                <input
                  onChange={handleName}
                  value={clientName}
                  className={`w-full p-2 border ${
                    errClientName ? "border-red-500" : "border-gray-300"
                  } rounded focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  type="text"
                  placeholder="Enter your name here"
                />
                {errClientName && (
                  <p className="text-red-500 text-sm mt-1">{errClientName}</p>
                )}
              </div>
              <div className="mb-4">
                <label className="block font-semibold mb-2">Email</label>
                <input
                  onChange={handleEmail}
                  value={email}
                  className={`w-full p-2 border ${
                    errEmail ? "border-red-500" : "border-gray-300"
                  } rounded focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  type="email"
                  placeholder="Enter your email here"
                />
                {errEmail && (
                  <p className="text-red-500 text-sm mt-1">{errEmail}</p>
                )}
              </div>
              <div className="mb-4">
                <label className="block font-semibold mb-2">Messages</label>
                <textarea
                  onChange={handleMessages}
                  value={messages}
                  className={`w-full p-2 border ${
                    errMessages ? "border-red-500" : "border-gray-300"
                  } rounded focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  rows="3"
                  placeholder="Enter your message here"
                ></textarea>
                {errMessages && (
                  <p className="text-red-500 text-sm mt-1">{errMessages}</p>
                )}
              </div>
              <button
                onClick={handlePost}
                className="w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-700 transition duration-300"
              >
                Post
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default Profile;
