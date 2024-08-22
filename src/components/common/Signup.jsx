"use client"
import { useState } from "react";

const Signup = () => {
 const [email, setEmail] = useState("");
 const [username, setUsername] = useState("");
 const [password, setPassword] = useState("");
 const [error, setError] = useState("");
 const [isSubmitting, setIsSubmitting] = useState(false);

 const handleSignup = async (e) => {
   e.preventDefault();
   setIsSubmitting(true);

   try {
     const res = await fetch("/api/signup", {
       method: "POST",
       headers: {
         "Content-Type": "application/json",
       },
       body: JSON.stringify({
         email,
         username,
         password,
       }),
     });

     const data = await res.json();

     if (res.ok) {
       console.log("sign suceessfully....")
     } else {
       setError(data.error || "Something went wrong.");
     }
   } catch (err) {
     setError("Something went wrong.");
   } finally {
     setIsSubmitting(false);
   }
 };

 return (
   <div className="min-h-screen flex items-center justify-center bg-gray-100">
     <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
       <h1 className="text-2xl font-semibold text-center">Sign Up</h1>
       <form onSubmit={handleSignup} className="mt-8 space-y-6">
         {error && <p className="text-red-500">{error}</p>}
         <div className="rounded-md shadow-sm -space-y-px">
           <div>
             <label htmlFor="email" className="sr-only">
               Email address
             </label>
             <input
               id="email"
               name="email"
               type="email"
               required
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
               placeholder="Email address"
             />
           </div>
           <div>
             <label htmlFor="username" className="sr-only">
               Username
             </label>
             <input
               id="username"
               name="username"
               type="text"
               value={username}
               onChange={(e) => setUsername(e.target.value)}
               className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
               placeholder="Username"
             />
           </div>
           <div>
             <label htmlFor="password" className="sr-only">
               Password
             </label>
             <input
               id="password"
               name="password"
               type="password"
               required
               value={password}
               onChange={(e) => setPassword(e.target.value)}
               className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
               placeholder="Password"
             />
           </div>
         </div>

         <div>
           <button
             type="submit"
             disabled={isSubmitting}
             className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
           >
             {isSubmitting ? "Signing up..." : "Sign Up"}
           </button>
         </div>
       </form>
     </div>
   </div>
 );
};

export default Signup;
