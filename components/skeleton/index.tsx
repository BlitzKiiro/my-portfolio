const Skeleton = () => {
  return (
    <div className='animate-pulse mx-auto w-[90%] xl:w-[1036px]'>
      <div className='h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-4'></div>
      <div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[90%] mb-2.5'></div>
      <div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5'></div>
      <div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[80%] mb-2.5'></div>
      <div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700  mb-2.5'></div>
      <div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[75%] mb-4'></div>
      <div className='h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-4'></div>
      <div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[90%] mb-2.5'></div>
      <div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5'></div>
      <div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[80%] mb-2.5'></div>
      <div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700  mb-2.5'></div>
      <div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[75%]'></div>
      <span className='sr-only'>Loading...</span>
    </div>
  );
};

export default Skeleton;
