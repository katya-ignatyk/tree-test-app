const Skeleton = () => {
  return (
    <div role="status" className="max-w-sm animate-pulse p-8">
      <div className="h-7 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
      <div className="h-7 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
      <div className="h-7 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
      <div className="h-7 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
      <div className="h-7 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
      <div className="h-7 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
    </div>
  );
};

export default Skeleton;
