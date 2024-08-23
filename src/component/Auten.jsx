import React, {useState, useEffect} from "react";
import { auth, googleProvider } from "../firebaseConfig";
import { createUserWithEmailAndPassword, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import MovieList from "./Movielist";

export default function Auten(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) =>{
          setUser(user);
        });
        return () => unsubscribe();
    },[]
  ); 


    const signIn = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
        } catch (error) {
            console.error(error);
        }
        
    };
    const logOut = async () => {
        try {
            await signOut(auth);
        } catch (error) {
            console.error(error);
        }
    };

    return(<>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src="https://fbi.cults3d.com/uploaders/24218162/illustration-file/bc56feb5-1b8e-4e7e-b66d-e066a384b8a2/Pokebola-0001.gif"
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="">
          {user ? (
            <>
            <button onClick={logOut}>sign out</button>
            <MovieList/>
            </>
              
          ) : (
          <form action="#" method="POST" className="space-y-6 mt-10 sm:mx-auto sm:w-full sm:max-w-sm" onSubmit={e => e.preventDefault()}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={e => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>

              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={e => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={signIn}
              >
                Sign in
                
              </button>
            </div>
          </form>
          )}
        </div>
      </div>
    </>);
}