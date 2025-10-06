import { useRef } from "react";
import { assets } from "../assets/assets";
import { useAppContext } from "../context/useAppContext";

const Header = () => {

  const { setInput, input } = useAppContext();
  const inputRef = useRef();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setInput(inputRef.current.value);
  };
  
  const onClear = () => {
    setInput("");
    inputRef.current.value = "";
  };
  
  return (
    <div className="mx-8 sm:mx-16 xl:mx-24 relative">
      <div className="text-center mt-20 mb-8">
        <div className="inline-flex items-center justify-center gap-4 px-6 py-1.5 mb-4 border border-primary/40 bg-primary/10 rounded-full text-sm text-primary">
          <p>AI: Tính năng tích hợp mới</p>
          <img src={assets.star_icon} className="w-2.5" alt="" />
        </div>
        <h1 className="text-3xl sm:text-6xl font-semibold sm:leading-16 text-gray-700">
          Nền tảng <span className="text-primary">viết blog</span> <br /> của
          riêng bạn
        </h1>
        <p className="my-6 sm:my-8 max-w-2xl m-auto max-sm:text-xs">
          Đây là không gian của bạn để suy nghĩ và chia sẻ những gì quan trọng.
          Viết mà không có bộ lọc. Cho dù đó là một từ hay hàng ngàn câu chuyện
          của bạn. Hãy bắt đầu ngay tại đây!
        </p>
        <form
          onSubmit={onSubmitHandler}
          className="flex justify-between max-w-lg max-sm:scale-75 mx-auto border border-gray-300 bg-white rounded overflow-hidden"
        >
          <input
            ref={inputRef}
            type="text"
            placeholder="Tìm kiếm blog"
            required
            className="w-full pl-4 outline-none"
          />
          <button
            type="submit"
            className="bg-primary text-white px-8 py-2 m-1.5 rounded hover:scale-105 transition-all cursor-pointer"
          >
            Tìm kiếm
          </button>
        </form>
      </div>
      <div className="text-center">
        {input && (
          <button
            onClick={onClear}
            className="border font-light text-xs py-1 px-3 rounded-sm shadow-custom-sm cursor-pointer"
          >
            Xóa tìm kiếm
          </button>
        )}
      </div>
      <img
        src={assets.gradientBackground}
        alt=""
        className="absolute -top-50 -z-1 opacity-50"
      />
    </div>
  );
};

export default Header;
