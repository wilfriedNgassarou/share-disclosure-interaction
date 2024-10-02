import { motion } from "framer-motion"
import { Dispatch, SetStateAction } from "react"

interface Props {
  cardIsOpen: boolean,
  setCardIsOpen: Dispatch<SetStateAction<boolean>>,
}

export function CartHeader({ cardIsOpen, setCardIsOpen }: Props) {
  
  function handleToogle() {
    setCardIsOpen(!cardIsOpen)
  }

  return (
    <div className="w-full py-3 h-44 flex flex-col justify-between">
      <h1 className="font-bold text-2xl">Share</h1>
      <div className="bg-gray-200 w-full px-2 flex items-center justify-between h-16 rounded-xl">
        <div className="h-12 w-12 rounded-lg bg-white flex justify-center items-center">
          <svg width="36" height="36" className="fill-gray-500" viewBox="0 0 16 16">
            <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855q-.215.403-.395.872c.705.157 1.472.257 2.282.287zM4.249 3.539q.214-.577.481-1.078a7 7 0 0 1 .597-.933A7 7 0 0 0 3.051 3.05q.544.277 1.198.49zM3.509 7.5c.036-1.07.188-2.087.436-3.008a9 9 0 0 1-1.565-.667A6.96 6.96 0 0 0 1.018 7.5zm1.4-2.741a12.3 12.3 0 0 0-.4 2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332M8.5 5.09V7.5h2.99a12.3 12.3 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5c.035.987.176 1.914.399 2.741A13.6 13.6 0 0 1 7.5 10.91V8.5zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741zm-3.282 3.696q.18.469.395.872c.552 1.035 1.218 1.65 1.887 1.855V11.91c-.81.03-1.577.13-2.282.287zm.11 2.276a7 7 0 0 1-.598-.933 9 9 0 0 1-.481-1.079 8.4 8.4 0 0 0-1.198.49 7 7 0 0 0 2.276 1.522zm-1.383-2.964A13.4 13.4 0 0 1 3.508 8.5h-2.49a6.96 6.96 0 0 0 1.362 3.675c.47-.258.995-.482 1.565-.667m6.728 2.964a7 7 0 0 0 2.275-1.521 8.4 8.4 0 0 0-1.197-.49 9 9 0 0 1-.481 1.078 7 7 0 0 1-.597.933M8.5 11.909v3.014c.67-.204 1.335-.82 1.887-1.855q.216-.403.395-.872A12.6 12.6 0 0 0 8.5 11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.96 6.96 0 0 0 14.982 8.5h-2.49a13.4 13.4 0 0 1-.437 3.008M14.982 7.5a6.96 6.96 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008zM11.27 2.461q.266.502.482 1.078a8.4 8.4 0 0 0 1.196-.49 7 7 0 0 0-2.275-1.52c.218.283.418.597.597.932m-.488 1.343a8 8 0 0 0-.395-.872C9.835 1.897 9.17 1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z"/>
          </svg>
        </div>
        <h3 className="flex flex-col justify-center h-full">
          <span className="font-semibold">Anyone</span>
          <span className="text-gray-400 text-sm">Everyone with link can access</span>
        </h3>
        <label
          className={`
            relative h-7 w-12 px-[2px] flex items-center rounded-2xl
            ${cardIsOpen ? 'bg-black justify-end' : 'bg-gray-400 justify-start'}
          `} 
        >
          <motion.div transition={{ duration: 0.1 }} layout className="h-6 w-6 bg-white rounded-full "></motion.div>
          <input
            id="check" 
            type="checkbox"
            checked={cardIsOpen}
            onChange={handleToogle}
            className={`absolute -left-36 -top-36`}
          />
        </label>
      </div>
      <div className="bg-gray-100 relative -top-2 h-9 px-2 rounded-md flex items-center justify-between">
        <span>acme.com/enterprise/note/453</span>
        <svg viewBox="0 0 24 24" width={24} height={24} fill="none" transform="matrix(-1, 0, 0, 1, 0, 0)"><g strokeWidth="0"></g><g strokeLinecap="round" strokeLinejoin="round"></g><g> <path d="M6 11C6 8.17157 6 6.75736 6.87868 5.87868C7.75736 5 9.17157 5 12 5H15C17.8284 5 19.2426 5 20.1213 5.87868C21 6.75736 21 8.17157 21 11V16C21 18.8284 21 20.2426 20.1213 21.1213C19.2426 22 17.8284 22 15 22H12C9.17157 22 7.75736 22 6.87868 21.1213C6 20.2426 6 18.8284 6 16V11Z" stroke="black" strokeWidth="1.5"></path> <path d="M6 19C4.34315 19 3 17.6569 3 16V10C3 6.22876 3 4.34315 4.17157 3.17157C5.34315 2 7.22876 2 11 2H15C16.6569 2 18 3.34315 18 5" stroke="#1C274C" strokeWidth="1.5"></path> </g></svg>
      </div>
    </div>
  )
}