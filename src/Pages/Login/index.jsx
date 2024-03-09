import { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import imagemLogo from "../../Assets/image 1.svg";
import arrowLogo from "../../Assets/arrow.svg";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../Services/firebaseConfig";
import "./styles.css";

export default function Login() {
    const navigate = useNavigate(); 
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const [signInWithEmailAndPassword, user, loading] =
      useSignInWithEmailAndPassword(auth);
  
    async function handleSignIn(e) {
      e.preventDefault();
      try {
       const user =  await signInWithEmailAndPassword(email, password); 
       console.log(user)
        
          localStorage.setItem('auth', user.user.uid ) 

        navigate("/homescreen");
      } catch (error) {
        console.error("Error signing in:", error);
      }
    }
  
    if (loading) {
      return <p>Carregando...</p>;
    }
    if (user) {
      return console.log(user);
    }
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-md">
        <header className="text-center">
          <img src={imagemLogo} alt="Workflow" className="w-16 h-16 mx-auto mb-4" />
          <h1 className="text-2xl font-semibold">Please enter your login information</h1>
        </header>

        <form>
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-mail</label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Enter your Email here!"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Senha</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="*******"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <a href="http://localhost:3000/" className="text-green-500 text-sm">Forgot your password?</a>

            <button className="w-full bg-green-400 text-white text-sm font-semibold py-2 rounded-md hover:bg-green-600 transition duration-300" onClick={handleSignIn}>
            To enter <img src={arrowLogo} alt="->" className="inline-block w-4 h-4 ml-1" />
            </button>

            <div className="mt-2 text-center text-gray-600 text-sm">
              <p>Don't have an account?</p>
              <Link to="/register" className="text-green-500">Create your account here</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
