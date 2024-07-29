
import React, { useState } from 'react';

const Signup = () => {
    const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
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
    <div>
        
         <div className="flex items-center justify-center px-16 py-20 bg-white max-md:px-5 ">
      <div className="flex flex-col items-center pt-9 pr-3 pb-5 bg-white rounded-lg max-w-[455px] border rounded-sm">
       <div className="self-center text-3xl font-semibold leading-10 text-black">
        Create an account
      </div>
      
      <div className="self-center font-semibold leading-6 text-black text-1xl">
        Enter your Email to sign up for this app
      </div>
     <div className="px-4 py-2 mt-6 max-w-full text-base font-semibold leading-6 bg-white rounded-lg border border-fuchsia-700 border-solid w-[400px]">
      <input
        type="text"
        placeholder="Full Name"
        className="w-full bg-transparent outline-none"
      />
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

    <div className="px-4 py-2 mt-6 max-w-full text-base font-semibold leading-6 bg-white rounded-lg border border-fuchsia-700 border-solid w-[400px]">
      <input
        type="text"
        placeholder="Password"
        className="w-full bg-transparent outline-none"
      />
    </div>

    <div className="px-4 py-2 mt-6 max-w-full text-base font-semibold leading-6 bg-white rounded-lg border border-fuchsia-700 border-solid w-[400px]">
      <input
        type="text"
        placeholder="ReEnter Password"
        className="w-full bg-transparent outline-none"
      />
    </div>



      <div className="flex   
 gap-4 mt-2.5 ml-3 text-sm leading-5">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
        className="shrink-0 self-start w-6 rounded-sm border-solid border-[3px] border-stone-300 h-[21px] appearance-none focus:outline-none"
      />
      <div className="flex-auto">
        I agree to Rapparel’s{' '}
        <span className="font-medium text-red-600">Terms of Service</span>,{' '}
        <span className="font-medium text-red-600">Privacy Policy</span> and{' '}
        <span className="font-medium text-red-600">Content Policies</span>
      </div>
    </div>

      <button
      type="button"
      className="px-4 py-2 mt-5 w-full text-base font-semibold leading-6 text-white bg-rose-600 rounded-lg max-w-[400px]">
      Create Account
    </button>
    
      <div className="flex items-center self-stretch justify-center gap-2 pr-2 mt-4">
        <div className="self-stretch flex-1 h-px my-auto shrink-0 bg-neutral-200" />
       or continue with
        <div className="self-stretch flex-1 h-px my-auto shrink-0 bg-neutral-200" />
      </div>
      <div className="flex gap-5 self-stretch py-2.5 pr-20 pl-3.5 mt-6 w-full rounded-lg bg-zinc-100">
      <button
  type="button" 
  className="w-5 bg-transparent shrink-0 aspect-square hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500">
  <img
    loading="lazy"
    src="https://cdn.builder.io/api/v1/image/assets/TEMP/98385a4eff0a138d6693ba055be3eeb17f41c3ee60140ef443609cbf6a84b9a4?"
    alt="Button image" 
    className="w-full h-full" // Stretch image to fill button
  />
</button>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a5dca689770f000571af6b99ff92f82b0918585280edcf8927216ef300ca8007?"
          className="shrink-0 self-start mt-1 aspect-[3.57] w-[53px]"
        />
      </div>
      <div className="self-start mt-8 ml-4 text-base leading-6">
        <span className="font-medium">Already have an account?</span>
        <a href="/Login" className="font-medium text-red-600">Sign in</a>

      </div>
    </div>
    </div>
    </div>
  )
}

export default Signup
