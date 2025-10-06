import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import 'quill/dist/quill.snow.css';
import Layout from "./pages/admin/Layout";
import AddBlog from "./pages/admin/AddBlog";
import Login from "./components/admin/Login";
import ListBlog from "./pages/admin/ListBlog";
import Comments from "./pages/admin/Comments";
import Dashboard from "./pages/admin/Dashboard";
import { useAppContext } from "./context/useAppContext";

const App = () => {
  const {token} = useAppContext();
  
  return (
    <div>
      <Toaster/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<Blog />} />        
        <Route path="/admin" element={token ? <Layout/> : <Login/>}>
          <Route index element={<Dashboard/>} />
          <Route path="addBlog" element={<AddBlog/>}/>
          <Route path="listBlog" element={<ListBlog/>}/>
          <Route path="comments" element={<Comments/>}/>
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
