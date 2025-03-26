import React, { useState } from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { registerUser, googleSignin } from "../services/authService";
import { useNavigate } from "react-router-dom";
import { Lock, Mail, User, Smartphone, Image } from "lucide-react";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    profile_picture: "",
    phone: "",
  });
  
  const [googleSignedIn, setGoogleSignedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    
    try {
      const response = await registerUser(formData);
      console.log("Registration successful:", response);
      navigate("/login", { state: { message: "Registration successful! Please log in." } });
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSuccess = (credentialResponse) => {
    const credential = credentialResponse.credential;
    const decodedToken = JSON.parse(atob(credential.split(".")[1])); 
    setFormData({
      ...formData,
      name: decodedToken.name,
      email: decodedToken.email,
      profile_picture: decodedToken.picture,
    });
    
    setGoogleSignedIn(true);
  };
  
  const handleCreateAccount = async () => {
    if (!formData.phone || !formData.password) {
      setError("Phone number and password are required");
      return;
    }
    
    setLoading(true);
    setError("");
    
    try {
      const response = await googleSignin(formData);
      console.log("Account created successfully:", response);
      navigate("/dashboard", { state: { user: response.data.user } });
    } catch (err) {
      setError(err.response?.data?.message || "Error creating account. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
      <div className="min-h-screen flex items-center justify-center bg-white p-4">
        <div className="w-full max-w-4xl bg-white shadow-2xl rounded-2xl overflow-hidden flex">
          {/* Left Side - Image Section */}
          <div className="w-1/2 bg-cover bg-center relative max-lg:hidden" style={{
            backgroundImage: "url('/api/placeholder/800/1200')",
            backgroundSize: 'cover'
          }}>
            <div className="absolute inset-0 bg-red-900 opacity-70"></div>
            <div className="relative z-10 flex flex-col justify-center h-full p-12 text-white">
              <h1 className="text-4xl font-bold mb-4">Welcome</h1>
              <p className="text-xl mb-6">
                Create your account and start your journey with us.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Secure Registration</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Quick Setup</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form Section */}
          <div className="w-1/2 p-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Create Account</h2>
            <p className="text-gray-600 mb-6">Enter your details to get started</p>

            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                {error}
              </div>
            )}

            {!googleSignedIn ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div className="relative">
                  <Smartphone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div className="relative">
                  <Image className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    name="profile_picture"
                    placeholder="Profile Picture URL (Optional)"
                    value={formData.profile_picture}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105 disabled:bg-blue-300"
                  disabled={loading}
                >
                  {loading ? "Registering..." : "Create Account"}
                </button>

                <div className="text-center my-4">
                  <div className="flex items-center justify-center">
                    <div className="border-t border-gray-300 flex-grow mr-3"></div>
                    <span className="text-gray-500">or</span>
                    <div className="border-t border-gray-300 flex-grow ml-3"></div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <GoogleLogin
                    onSuccess={handleGoogleSuccess}
                    onError={() => setError("Google Sign-In Failed")}
                  />
                </div>

                <div className="text-center mt-4">
                  <p className="text-gray-600">
                    Already have an account?{" "}
                    <a href="/login" className="text-blue-600 hover:underline">
                      Login
                    </a>
                  </p>
                </div>
              </form>
            ) : (
              <div className="space-y-4">
                <p className="text-green-600 mb-4">Google sign-in successful! Complete your registration:</p>
                <div className="relative">
                  <Smartphone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <button
                  onClick={handleCreateAccount}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105 disabled:bg-blue-300"
                  disabled={loading}
                >
                  {loading ? "Creating Account..." : "Complete Registration"}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </GoogleOAuthProvider>
  );
};

export default Register;