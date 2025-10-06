import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useState, useEffect } from "react";
import { AppContext } from "./context";
import api, { setAuthToken } from "../lib/api";

export const AppProvider = ({ children }) => {
  const navigate = useNavigate();
  const [token, setToken] = useState(null);
  const [blogs, setBlogs] = useState([]);
  const [input, setInput] = useState("");

  const fetchBlogs = async () => {
    try {
      const { data } = await api.get("/api/blog/all");
      data.success ? setBlogs(data.blogs) : toast.error(data.message);
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    const init = async () => {
      const stored = localStorage.getItem("token");
      if (stored) {
        setToken(stored);
        setAuthToken(stored);
      }
      await fetchBlogs();
    };
    init();
    // run once on mount; avoid navigating here and remove `navigate` from deps
  }, []);

  const value = {
    api,
    axios: api,
    navigate,
    token,
    setToken,
    blogs,
    setBlogs,
    input,
    setInput,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

// Re-export the hook so older imports that expect it from this module continue to work.
// export { useAppContext } from "./useAppContext";