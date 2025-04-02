import { BsArrowRight } from "react-icons/bs"

const Insights = () => {
  return (
    <div className="rounded-lg p-4 bg-zinc-800 text-white flex flex-col gap-4">
      <p className="text-2xl font-semibold">Insights</p>
      <div className="flex justify-between border-b pb-4 border-white/20">
        <div className="flex gap-2 flex-col items-start tracking-wider">
          <p className="text-xl font-semibold">Founders</p>
          <div className="flex items-center gap-2">
            <p className="text-white font-bold text-4xl">7.4K</p>
            <div className="*:text-xs">
              <p className="text-green-500">+000%</p>
              <p className="text-gray-400">(000)</p>
            </div>
          </div>
        </div>
        <div className="flex gap-2 flex-col items-start tracking-wider">
          <p className="text-xl font-semibold">Investors</p>
          <div className="flex items-center gap-2">
            <p className="text-white font-bold text-4xl">6.09K</p>
            <div className="*:text-xs">
              <p className="text-green-500">+000%</p>
              <p className="text-gray-400">(000)</p>
            </div>
          </div>
        </div>
      </div>
      <button className="flex items-center self-end gap-2 tracking-wider font-semibold">View detailed insights <BsArrowRight /> </button>
    </div>
  )
}
export default Insights
