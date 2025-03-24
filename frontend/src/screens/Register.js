import React, { useState } from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { registerUser, googleSignin } from "../services/authService";
import { useNavigate } from "react-router-dom";

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
    const decodedToken = JSON.parse(atob(credential.split(".")[1])); // Decode JWT
    console.log("Google Sign-In Data:", decodedToken);

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

      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-semibold text-center text-gray-700">
            Register
          </h2>
          
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mt-4 mb-4">
              {error}
            </div>
          )}

          {!googleSignedIn ? (
            <>
              {/* Manual Sign-Up Form */}
              <form onSubmit={handleSubmit} className="mt-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg mb-3"
                  required
                />
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
                <input
                  type="text"
                  name="profile_picture"
                  placeholder="Profile Picture URL"
                  value={formData.profile_picture}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg mb-3"
                />
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg mb-3"
                />
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 disabled:bg-blue-300"
                  disabled={loading}
                >
                  {loading ? "Registering..." : "Register"}
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
              
              {/* Login Link */}
              <div className="mt-4 text-center">
                <p className="text-gray-600">
                  Already have an account?{" "}
                  <a href="/login" className="text-blue-500 hover:underline">
                    Login
                  </a>
                </p>
              </div>
            </>
          ) : (
            /* Phone and Password form after Google Sign-in */
            <div className="mt-4">
              <p className="text-green-600 mb-4">Google sign-in successful! Please complete your registration:</p>
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
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
                onClick={handleCreateAccount}
                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 disabled:bg-blue-300"
                disabled={loading}
              >
                {loading ? "Creating Account..." : "Create Account"}
              </button>
            </div>
          )}
        </div>
      </div>
    </GoogleOAuthProvider>
  );
};

export default Register;