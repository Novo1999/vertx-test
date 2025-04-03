import { BsArrowRight } from 'react-icons/bs';
import canada from '../assets/canada.png';
import india from '../assets/india.png';
import uae from '../assets/uae.png';
import usa from '../assets/usa.png';
import worldMap from '../assets/world.png';

const Demographics = () => {
  const flags = [
    { flag: india, name: "India", color: "bg-blue-600", data: 52 },
    { flag: usa, name: "USA", color: "bg-orange-600", data: 26 },
    { flag: canada, name: "Canada", color: "bg-yellow-400", data: 14 },
    { flag: uae, name: "UAE", color: "bg-green-600", data: 7 },
  ];

  return (
    <div className="rounded-lg p-4 bg-zinc-800 text-white flex flex-col mb-32 xl:max-h-96 2xl:max-h-[28rem] relative">
      <p className="text-2xl font-semibold">Demographics</p>
      <div className='flex flex-col gap-4 xl:flex-row'>
        <div className="relative xl:w-3/4">
          <img src={worldMap} alt="world" className='2xl:max-h-[28rem] relative 2xl:bottom-12' />
          {/* markers */}
          <div className="p-1 rounded-full border border-orange-600 absolute top-[70px] md:top-[150px] left-6 sm:left-10 md:left-20 lg:left-24">
            <div className="bg-orange-600 size-1 rounded-full"></div>
          </div>
          <div className="p-1 rounded-full border border-orange-600 absolute top-[90px] md:top-[170px] left-16 sm:left-20 md:left-32 lg:left-40">
            <div className="bg-orange-600 size-1 rounded-full"></div>
          </div>
          <div className="p-1 rounded-full border border-yellow-400 absolute top-[75px] md:top-[155px] left-15 sm:left-18 md:left-30 lg:left-36">
            <div className="bg-yellow-400 size-1 rounded-full"></div>
          </div>
          <div className="p-1 rounded-full border border-blue-400 absolute top-[80px] md:top-[160px] right-24 sm:right-32 md:right-40 lg:right-48">
            <div className="bg-blue-400 size-1 rounded-full"></div>
          </div>
          <div className="p-1 rounded-full border border-green-600 absolute top-[78px] md:top-[158px] right-32 sm:right-40 md:right-48 lg:right-56">
            <div className="bg-green-600 size-1 rounded-full"></div>
          </div>
        </div>
        <div className="flex justify-between gap-2 items-center bg-black px-4 py-1 rounded-full border border-white/40 md:w-fit md:gap-6 xl:absolute bottom-8">
          {flags.map(({ name, color }) => (
            <div key={name} className="flex justify-between items-center gap-2">
              <div className={`${color} rounded-full size-4`}></div>
              <p>{name}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-4 mt-6 xl:mt-0  pb-4 xl:pb-0 md:gap-6 xl:gap-5 2xl:gap-4 h-fit border-white/20 xl:w-1/3">
          {flags.map(({ name, color, data, flag }) => (
            <div key={name} className="flex gap-4 w-full md:gap-6 justify-between">
              <img
                className="w-1/5 md:w-1/6 object-cover"
                src={flag}
                width={64}
                height={64}
                alt={name}
              />
              <div className="w-4/5 md:w-5/6 flex flex-col gap-2 justify-between">
                <div className='flex justify-between'>
                  <p className='xl:text-lg'>{name}</p>
                  <p>{data}%</p>
                </div>
                <div style={{ width: `${data}%` }} className={`${color} rounded-full h-4`}></div>
              </div>
            </div>
          ))}
          <button className="flex items-center justify-end pt-4 xl:pt-2 border-t border-white/40 mt-4 xl:mt-0 w-full gap-2 tracking-wider font-semibold">
            View countries <BsArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Demographics;
