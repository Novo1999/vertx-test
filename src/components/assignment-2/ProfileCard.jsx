import { LuBadgeCheck } from "react-icons/lu";
import gmail from '../../assets/gmail.png';
import linkedIn from '../../assets/linkedin.png';
import png from '../../assets/png.png';
import vertx from '../../assets/vertx.png';
import xTwitter from '../../assets/xTwitter.png';

const ProfileCard = () => {
  return (
    <div className='rounded-xl border border-white/40 p-4 mt-6 sm:mt-10 lg:mt-0 flex-col flex md:flex-row gap-4'>
      <img src={png} alt="png" className="rounded-lg size-32 lg:size-40 object-cover" />
      <div className='text-white flex flex-col gap-1 lg:justify-between'>
        <div className="flex flex-col gap-2 items-start">
          <div className='flex justify-between gap-16'>
            <p className='text-3xl font-semibold'>Mr.ABC</p>
            <LuBadgeCheck fill="oklch(68.5% 0.169 237.323)" stroke="#333" size={24} />
          </div>
          <div className='flex gap-2 items-center'>
            <p className='text-sm'>Co-Founder & CEO Vertx </p>
            <img src={vertx} alt="vertx" className='size-3 bg-white' />
          </div>
          <p className='bg-white text-black text-xs font-semibold px-2 py-0.5'>Entrepreneur</p>
        </div>
        <div className='flex justify-between lg:flex-col lg:items-start lg:gap-4 mt-4'>
          <div className="flex gap-1 *:size-5 *:object-cover lg:*:size-10">
            <img src={linkedIn} alt="linkedin" />
            <img src={xTwitter} alt="twitter" />
            <img src={gmail} alt="gmail" />
          </div>
        </div>
      </div>
    </div>
  )
}
export default ProfileCard
