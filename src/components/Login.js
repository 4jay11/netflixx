import { useState ,useRef} from "react";
import Header from "./Header";
import  { checkValidData } from "../utils/validate";
import { signInWithEmailAndPassword , createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";

function Login() {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const name =useRef(null);
  const email =useRef(null);
  const password =useRef(null);
 

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;
    
    if (isSignInForm) {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
    }
    else{
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
    }
    console.log(email.current.value);
    console.log(password.current.value);
  };


 
  return (
    <div className="">
      <Header />
      <div className="absolute">
        <img
          className=""
          src="https://assets.nflxext.com/ffe/siteui/vlv3/335ddde7-3955-499c-b4cc-ca2eb7e1ae71/a7d20bc1-831c-4f9d-8153-11bdf7a08d23/IN-en-20240624-POP_SIGNUP_TWO_WEEKS-perspective_WEB_13cda806-d858-493e-b4aa-f2792ff965dc_large.jpg"
          alt="background"
        />
      </div>
      <form  onClick={(e)=>e.preventDefault()} className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-85">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "SignIn" : "SignUp"}
        </h1>
        {!isSignInForm && (
          <input ref={name}
            type="text"
            placeholder="Enter Name"
            className="p-4 my-2 w-full bg-gray-800"
          />
        )}
        <input ref={email}
          type="email"
          placeholder="Enter Email"
          className="p-4 my-2 w-full bg-gray-800"
        />
        <input ref={password}
          type="password"
          placeholder="Enter Password"
          className="p-4 my-2 w-full bg-gray-800"
        />
        <p className="text-red-500">{errorMessage}</p>

        <button onClick={handleButtonClick} type="submit" className="p-4 my-6 bg-red-700 w-full">
          {isSignInForm ? "SignIn" : "SignUp"}
        </button>
        <p className="flex">
          {isSignInForm ? "New to Netflix?" : "Already have an account?"}
          <p
            onClick={toggleSignInForm}
            className="cursor-pointer px-1 text-red-400 "
          >
            {!isSignInForm ? "SignIn" : "SignUp"}
          </p>
        </p>
      </form>
    </div>
  );
}

export default Login;
