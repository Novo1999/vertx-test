import vertx from '../../assets/vertx.png';


const FoundedCompanies = () => {
  return (
    <div className="rounded-xl text-white border lg:w-1/2 border-white/40 py-4 px-6 mt-6 flex-col flex gap-4">
      <p className="font-bold text-2xl">Founded Companies</p>
      <p className="text-7xl font-bold">02</p>
      <div className="flex flex-col gap-6 mt-4">
        <div className='flex justify-between gap-2 items-start'>
          <div className='flex gap-4'>
            <img src={vertx} alt="vertx" className='size-8 relative top-1.5 bg-white rounded-md' />
            <div>
              <div className='flex gap-2 items-center'>
                <p className='font-semibold'>Vertx</p>
                <p className='bg-green-700 px-2 text-xs text-black'>CEO</p>
              </div>
              <p className='text-xs'>Founded in 2025, in <span className='font-bold'>Fintech</span></p>
            </div>
          </div>
          <button className='cursor-pointer text-xs'>View profile</button>
        </div>
        <div className='flex justify-between gap-2 items-start'>
          <div className='flex gap-4'>
            <img src={vertx} alt="vertx" className='size-8 relative top-1.5 bg-white rounded-md' />
            <div>
              <div className='flex gap-2 items-center'>
                <p className='font-semibold'>Comp 1</p>
                <p className='bg-violet-400 px-2 text-xs text-black'>PROPRIETOR</p>
              </div>
              <p className='text-xs'>Founded in 2025, Acquired by abc. in<span className='font-bold'>QuickCommerce</span></p>
            </div>
          </div>
          <button className='cursor-pointer text-xs whitespace-nowrap'>View profile</button>
        </div>
      </div>
    </div>
  )
}
export default FoundedCompanies
