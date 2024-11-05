import { createContext, useContext, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

// Create context
const UserContext = createContext();

export const UserProvider = ({ children }) => {
  // State to store user data
  const [user, setUser] = useState(null);
  // Authentication status state
  const [isAuth, setIsAuth] = useState(false);
  // Button loading state
  const [btnLoading, setBtnLoading] = useState(false);
  // General loading state (if needed for other components)
  const [loading, setLoading] = useState(true);

  // Function to register a new user
  async function registerUser(name, email, password, navigate) {
    setBtnLoading(true); // Start button loading

    try {
      const response = await axios.post("/api/users/register", {
        name,
        email,
        password,
      });

      // Use response.data to access the response's data object
      const data = response.data;

      // Display success message and update context
      toast.success(data.message);
      setUser(data.user);
      setIsAuth(true);

      // Navigate to home page after successful registration
      navigate("/");
    } catch (error) {
      // Handle error: show error message if response exists, else show default error
      const errorMessage = error.response?.data?.message || "Registration failed";
      toast.error(errorMessage);
    } finally {
      // Stop button loading regardless of success or failure
      setBtnLoading(false);
    }
  }

  return (
    <UserContext.Provider value={{ registerUser, user, isAuth, btnLoading }}>
      {children}
      <Toaster />
    </UserContext.Provider>
  );
};

// Hook to use user data context in other components
export const UserData = () => useContext(UserContext);


// sux ka use kiya h for  fetching url from backend
// react hot toast  success ya error message show krne k liye
