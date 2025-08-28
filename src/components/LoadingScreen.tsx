const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-black z-[100] flex justify-center items-center">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-white"></div>
    </div>
  );
};

export default LoadingScreen;
