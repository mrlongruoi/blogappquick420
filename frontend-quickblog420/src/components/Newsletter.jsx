const Newsletter = () => {
  
  return (
    <div className="flex flex-col items-center justify-center text-center space-y-2 my-32">
      <h1 className="md:text-4xl text-2xl font-semibold">
        Không bao giờ bỏ lỡ tin tức mới
      </h1>
      <p className="md:text-lg text-gray-500/70 pb-8">
        Đăng ký để có được blog mới nhất, công nghệ mới và tin tức độc quyền.
      </p>
      <form className="flex items-center max-w-2xl w-full h-12">
        <input
          type="text"
          placeholder="Nhập ID email của bạn"
          required
          className="flex-grow h-full px-4 border border-gray-300 rounded-md rounded-r-none focus:outline-none"
        />
        <button
          type="submit"
          className="md:px-12 px-8 h-full text-white bg-primary/80 hover:bg-primary transition-all cursor-pointer rounded-md rounded-l-none"
        >
          Đăng ký
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
