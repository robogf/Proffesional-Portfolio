import React from "react";
import { validateEmail } from "../utils/helpers";
function Contact () {
  const [name, setName] = React.useState("");
  
    const [errorMessage, setErrorMessage] = React.useState('');
    const [ message, setMessage] = React.useState('');

   const handleSubmit = (e) => {
        // e.preventDefault();
      if (e.target.name === 'email') {
         const isValid = validateEmail(e.target.value);
         console.log(isValid);
         if (!isValid) {
            setErrorMessage('Your email is invalid.');
         } else {
            setErrorMessage('');
         }
      } else {
         if (!e.target.value.length) {
            setErrorMessage(`${e.target.name} is required.`);
         } else {
            setErrorMessage('');
         }
      }
      if (!errorMessage) {
         setName({ ...name, [e.target.name]: e.target.value });
      };
    }
    const onSubmit = (e) => {
        e.preventDefault();
        console.log(e);
        setMessage('Form submitted');
    }
   
   return (
        <form
        name="contact"
        onSubmit={onSubmit}
        className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
        <h2 className="text-white sm:text-4x1 text-3xl mb-1 font-medium title-font">
            Contact Me
        </h2>
        <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-400">
                Name
            </label>
            <input 
                type="text"
                id="name"
                name="name"
                onChange={handleSubmit}
                defaultValue={name.name}
                className=" bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />

        </div>
        <div className="relative mb-4">
            <label htmlFor="email" className="leading-9 text-sm text-gray-400">
                Email
            </label>
            <input
                type="email"
                id="email"
                name="email"
                onChange={handleSubmit}
                defaultValue={name.email}
                className=" bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
        </div>
        <div className="relative mb-4">
            <label htmlFor="message" className="leading-7 text-sm text-gray-400">
                Message
            </label>
            <textarea
                id="message"
                name="message"
                onChange={handleSubmit}
                defaultValue={name.message}
                className="w-half bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
        </div>
        {errorMessage && (
            <div>
                <p className="error-text">{errorMessage}</p>
            </div>          
        )}
        <button
           
            type="submit"
            className="w-half bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
           >
            Submit
            
        </button>
      
        {message && (
            <div>
                <p className="success-text">{message}</p>
            </div>
        )}
        </form>
   )
}
export default Contact;