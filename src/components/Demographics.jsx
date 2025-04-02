import { BsArrowRight } from 'react-icons/bs';
import worldMap from '../assets/world.png';

const Demographics = () => {
  const flags = [
    { code: "in", name: "India", color: "bg-blue-600" },
    { code: "us", name: "USA", color: "bg-orange-600" },
    { code: "ca", name: "Canada", color: "bg-yellow-400" },
    { code: "ae", name: "UAE", color: "bg-green-600" },
  ];

  return (
    <div className="rounded-lg p-4 bg-zinc-800 text-white flex flex-col gap-4">
      <p className="text-2xl font-semibold">Demographics</p>
      <div className='relative'>
        <img src={worldMap} alt="world" />
        <div className='p-1 rounded-full border border-orange-600 absolute top-[70px] left-6'>
          <div className='bg-orange-600 size-1 rounded-full'></div>
        </div>
        <div className='p-1 rounded-full border border-orange-600 absolute top-[90px] left-16'>
          <div className='bg-orange-600 size-1 rounded-full'></div>
        </div>
        <div className='p-1 rounded-full border border-yellow-400 absolute top-[75px] left-15'>
          <div className='bg-yellow-400 size-1 rounded-full'></div>
        </div>
        <div className='p-1 rounded-full border border-blue-400 absolute top-[80px] right-24'>
          <div className='bg-blue-400 size-1 rounded-full'></div>
        </div>
        <div className='p-1 rounded-full border border-green-600 absolute top-[78px] right-32'>
          <div className='bg-green-600 size-1 rounded-full'></div>
        </div>
      </div>
      <div className='flex justify-between gap-2 items-center bg-black px-4 py-1 rounded-full border border-white/40'>
        {
          flags.map(({ code, name, color }) => (
            <div key={code} className='flex justify-between items-center gap-2'>
              <div className={`${color} rounded-full size-4`}></div>
              <p>{name}</p>
            </div>
          ))
        }
      </div>
      <div className="flex flex-col gap-4 mt-6 border-b pb-4 border-white/20">
        {flags.map(({ code, name, color }) => (
          <div key={code} className="flex gap-4 w-full justify-between">
            <img
              className="w-1/5 object-cover"
              src={`https://flagcdn.com/w64/${code}.png`}
              srcSet={`https://flagcdn.com/w40/${code}.png 2x`}
              width={64}
              height={64}
              alt={name}
            />
            <div className="w-4/5 flex flex-col gap-2">
              <p>{name}</p>
              <div className={`${color} w-full rounded-full h-4`}></div>
            </div>
          </div>
        ))}

      </div>
      <button className="flex items-center self-end gap-2 tracking-wider font-semibold">View countries <BsArrowRight /> </button>

    </div>
  )
}
export default Demographics
