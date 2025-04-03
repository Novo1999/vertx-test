import { BsArrowRight } from "react-icons/bs"

const Insights = () => {
  return (
    <div className="rounded-lg p-4 w-full xl:w-1/3 bg-zinc-800 text-white flex flex-col gap-4">
      <div className="flex flex-col gap-4 lg:gap-8 xl:gap-4 lg:h-5/6">
        <p className="text-2xl font-semibold xl:text-xl">Insights</p>
        <div className="flex justify-between lg:gap-8 xl:gap-4 lg:flex-col border-b pb-4 lg:pb-12 xl:pb-2 border-white/20">
          <div className="flex gap-2 flex-col items-start tracking-wider">
            <p className="text-xl font-semibold lg:text-2xl xl:text-xl">Founders</p>
            <div className="flex items-center gap-2">
              <p className="text-white font-bold text-4xl lg:text-5xl xl:text-4xl">7.4K</p>
              <div className="*:text-xs *:lg:text-sm">
                <p className="text-green-500">+000%</p>
                <p className="text-gray-400">(000)</p>
              </div>
            </div>
          </div>
          <div className="flex gap-2 flex-col items-start tracking-wider">
            <p className="text-xl font-semibold lg:text-2xl xl:text-xl">Investors</p>
            <div className="flex items-center gap-2">
              <p className="text-white font-bold text-4xl lg:text-5xl xl:text-4xl">6.09K</p>
              <div className="*:text-xs *:lg:text-sm">
                <p className="text-green-500">+000%</p>
                <p className="text-gray-400">(000)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="flex items-center self-end gap-2 tracking-wider font-semibold lg:h-1/6 cursor-pointer">View detailed insights <BsArrowRight /> </button>
    </div>
  )
}
export default Insights
