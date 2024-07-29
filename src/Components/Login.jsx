


import React, { useState } from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
const clientId = 'YOUR_GOOGLE_CLIENT_ID'; 

function Login() {
    
    const onSuccess = (response) => {
        console.log('Logged in with Google:', response);};

        const onFailure = (error) => {
            console.error('Google Sign-in failed:', error);
            // Handle login failure here (e.g., display an error message to the user)
          };


          const [email, setEmail] = useState('');
          const [emailError, setEmailError] = useState('');
        
          const handleEmailChange = (event) => {
            const emailValue = event.target.value;
            setEmail(emailValue);   
        // Basic email validation using a regular expression
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(emailValue)) {
              setEmailError('Invalid email format');
            } else {
              setEmailError('');
            }
        };
        
         

  return (
    <div className="flex items-center justify-center px-16 py-20 bg-white max-md:px-5">
    <div className="flex flex-col px-16 py-14 mt-36 max-w-full bg-white shadow-sm w-[538px] max-md:px-5 max-md:mt-10 border rounded-sm">
      <div className="self-center text-3xl font-semibold leading-10 text-black">
        Sign in
      </div>
      
 <div className="self-center font-semibold leading-6 text-black text-1xl">
        Enter your Email to sign in for this app
      </div>

      <div className="px-4 py-2 mt-4 max-w-full text-base font-semibold leading-6 whitespace-nowrap bg-white rounded-lg border border-fuchsia-700 border-solid text-zinc-500 w-[400px]">
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={handleEmailChange}
        className={`w-full bg-transparent outline-none ${emailError ? 'border-red-500' : ''}`}
      />
       {emailError && <div className="text-sm text-red-500">{emailError}</div>}
     
      </div>

      <button
      type="button"
      className="px-4 py-2 text-base font-semibold leading-6 text-white rounded-lg mt-7 bg-rose-600 max-md:px-5">
      Send One Time Password
    </button>

      <div className="flex gap-2 justify-center items-center mt-3.5">
        <div className="self-stretch flex-1 h-px my-auto shrink-0 bg-neutral-200" />
        or Continue with
        <div className="self-stretch flex-1 h-px my-auto shrink-0 bg-neutral-200" />
      </div>

      <div className="flex justify-center items-center px-16 py-2.5 mt-5 w-full text-base font-semibold leading-6 text-black bg-white rounded-lg border border-black border-solid max-md:px-5">
      <img
            loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/b07f246bb616da2750a458e181ba9b750f81a634907e213707916fca49f5e29d?"
            className="shrink-0 aspect-square w-[23px]"
          />
      <GoogleOAuthProvider
        clientId={clientId}
        buttonText="Sign in with Google" 
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy="single_host_origin" 
        className="flex items-center gap-2 px-4 py-2 font-semibold text-white rounded-lg bg-rose-600" // Customize button styles
        
      />Sign in with Google
    </div>

      <div className="flex justify-center items-center px-16 py-2.5 mt-4 w-full text-base font-semibold leading-6 text-black bg-white rounded-lg border border-black border-solid max-md:px-5">
        <div className="flex gap-1.5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/bd9ec83a359f7542b386c5c0222c689315173f82a1b407951481ec4ccd79d99b?"
            className="shrink-0 aspect-square w-[23px]"
          />
          <div className="flex-auto my-auto">Continue with Email</div>
        </div>
      </div>
      <div className="mt-20 text-base leading-6 max-md:mt-10">
        <span className="font-medium">Don’t have an account?</span>
        <a href="/create-account" className="font-medium text-red-600">Create an account</a>

      </div>
    </div>
    </div>
  );
}


export default Login
