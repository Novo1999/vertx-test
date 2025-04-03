import vertx from '../../assets/vertx.png';


const Experiences = () => {
  return (
    <div className="rounded-xl text-white border lg:w-1/2 border-white/40 py-4 px-6 lg:mt-6 flex-col flex gap-4 mb-10 lg:mb-0 lg:min-h-96">
      <p className="font-bold text-2xl">Experience</p>
      <p className="text-7xl font-bold">03</p>
      <div className="flex flex-col gap-6 mt-4">
        <div className='flex justify-between gap-2 items-center'>
          <div className='flex gap-4 items-center'>
            <img src={vertx} alt="vertx" className='size-8 relative top-1.5 bg-white rounded-md' />
            <p className='font-semibold'>Company 1</p>
          </div>
          <button className='cursor-pointer text-xs'>View profile</button>
        </div>
        <div className='flex justify-between gap-2 items-center'>
          <div className='flex gap-4 items-center'>
            <img src={vertx} alt="vertx" className='size-8 relative top-1.5 bg-white rounded-md' />
            <p className='font-semibold'>Company 1</p>
          </div>
          <button className='cursor-pointer text-xs'>View profile</button>
        </div>
        <div className='flex justify-between gap-2 items-center'>
          <div className='flex gap-4 items-center'>
            <img src={vertx} alt="vertx" className='size-8 relative top-1.5 bg-white rounded-md' />
            <p className='font-semibold'>Company 1</p>
          </div>
          <button className='cursor-pointer text-xs'>View profile</button>
        </div>

      </div>
    </div>
  )
}
export default Experiences
