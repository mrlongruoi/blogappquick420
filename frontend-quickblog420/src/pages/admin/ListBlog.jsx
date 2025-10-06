import toast from "react-hot-toast";
import { useEffect, useState, useCallback } from "react";
import { useAppContext } from "../../context/useAppContext";
import BlogTableItem from "../../components/admin/BlogTableItem";

const ListBlog = () => {
  const [blogs, setBlogs] = useState([]);
  const { axios } = useAppContext();

  const fetchBlogs = useCallback(async () => {
    try {
      const { data } = await axios.get("/api/admin/blogs");
      if (data.success) {
        setBlogs(data.blogs);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  }, [axios]);

  useEffect(() => {
    fetchBlogs();
  }, [fetchBlogs]);

  return (
    <div className="flex-1 pt-5 px-5 sm:pt-12 sm:pl-16 bg-blue-50/50">
      <h1>Tất cả các blog</h1>
      <div className="relative h-4/5 mt-4 max-w-4xl overflow-x-auto shadow rounded-lg scrollbar-hide bg-white">
        <table className="w-full text-sm text-gray-500">
          <thead className="text-xs text-gray-600 text-left uppercase">
            <tr>
              <th scope="col" className="px-2 py-4 xl:px-6">
                {" "}
                #{" "}
              </th>
              <th scope="col" className="px-2 py-4">
                {" "}
                Tiêu đề blog{" "}
              </th>
              <th scope="col" className="px-2 py-4 max-sm:hidden">
                {" "}
                Ngày{" "}
              </th>
              <th scope="col" className="px-2 py-4 max-sm:hidden">
                {" "}
                Trạng thái{" "}
              </th>
              <th scope="col" className="px-2 py-4">
                {" "}
                Hành động{" "}
              </th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog, index) => {
              return (
                <BlogTableItem
                  key={blog._id}
                  blog={blog}
                  fetchBlogs={fetchBlogs}
                  index={index + 1}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListBlog;
