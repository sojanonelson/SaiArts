import React, { useState, useEffect } from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { loginUser, googleLogin } from "../services/authService";
import { useNavigate, useLocation } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Check for messages passed through navigation state
    if (location.state?.message) {
      setMessage(location.state.message);
    }
  }, [location]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    
    try {
      const response = await loginUser(formData);
      console.log("Login successful:", response);
      localStorage.setItem("token", response.data.token);
      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed. Please check your credentials.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSuccess = async (credentialResponse) => {
    setLoading(true);
    setError("");
    
    try {
      const response = await googleLogin(credentialResponse.credential);
      console.log("Google login successful:", response);
      localStorage.setItem("token", response.data.token);
      navigate("/dashboard");
    } catch (err) {
      if (err.response?.status === 404) {
        // User not found, redirect to register with Google info
        const credential = credentialResponse.credential;
        const decodedToken = JSON.parse(atob(credential.split(".")[1])); // Decode JWT
        
        navigate("/register", { 
          state: { 
            googleData: {
              name: decodedToken.name,
              email: decodedToken.email,
              profile_picture: decodedToken.picture,
            },
            googleSignedIn: true 
          } 
        });
      } else {
        setError(err.response?.data?.message || "Google login failed. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <GoogleOAuthProvider clientId="457946645088-d2d1hj0rtv82910plnna1js6kmrr4f73.apps.googleusercontent.com">
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-semibold text-center text-gray-700">
            Login
          </h2>
          
          {message && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mt-4 mb-4">
              {message}
            </div>
          )}
          
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mt-4 mb-4">
              {error}
            </div>
          )}

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="mt-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg mb-3"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg mb-3"
              required
            />
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 disabled:bg-blue-300"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          {/* Google Sign-In Button */}
          <div className="mt-4 text-center">
            <p className="text-gray-600">Or sign in with</p>
            <div className="flex justify-center mt-2">
              <GoogleLogin
                onSuccess={handleGoogleSuccess}
                onError={() => setError("Google Sign-In Failed")}
              />
            </div>
          </div>
          
          
        </div>
      </div>
    </GoogleOAuthProvider>
  );
};

export default Login;