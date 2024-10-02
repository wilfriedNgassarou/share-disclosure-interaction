import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { AnimationDefinition, motion } from "framer-motion"

interface Props {
  users: { email: string, name: string, opacity: number }[],
  setUsers: Dispatch<SetStateAction<{ email: string, name: string, opacity: number }[]>>
}

export function CartBody({ users, setUsers }: Props) {
  const [inputContainerState, setInputContainerState] = useState<'type' | 'confirm' | 'validated' | 'hidden'>('type')
  const [inputValue, setInputValue] = useState('')
  const [nameValue, setNameValue] = useState('')

  function getYValue() {
    const numbersOfUser = users.length ;

    if(numbersOfUser == 0) return 0

    const usersHeight = 56 * numbersOfUser;
    const gapHeight = numbersOfUser > 1 ? 8 * (numbersOfUser - 1) : 0;
    const marginTop = 8 ;

    return (usersHeight + gapHeight + marginTop) ;
  }

  useEffect(() => {
    setTimeout(() => {
      if(inputContainerState == 'confirm') return 
      if(inputValue == '') return
      if(!inputValue.includes('@gmail.com')) return

      setInputContainerState('confirm')
      setNameValue(inputValue.slice(0, -10))
    }, 500);
  }, [inputValue])

  const yValue = getYValue()

  function handleValidate() {
    if(inputValue == '') return ;

    const user = {
      name: inputValue.slice(0 ,-10),
      email: inputValue,
      opacity: 0
    }

    setInputValue('')
    setUsers([...users, user])
    setInputContainerState('validated')
  }

  const variants = {
    type: {
      transform: 'translate(128px, 0px)',
      zIndex: 10, 
      opacity: 0,
      width: 112,
      height: 32,
      paddingLeft: 2,
      borderRadius: 16,
      transformOrigin: 'left'
    }, 
    confirm: {
      transform: 'translate(24px, 0px)',
      zIndex: 30, 
      opacity: 1,
      width: 112,
      height: 32,
      left: 4,
      paddingLeft: 2,
      borderRadius: 16,
      transformOrigin: 'left'
      
    }, 
    validated: {
      transform: `translate(0px, ${yValue}px)`,
      zIndex: 30, 
      opacity: 1,
      width: 'calc(100% + 4px)',
      left: -2,
      height: 56,
      paddingLeft: 6,
      borderRadius: 8,
      transformOrigin: 'center'
    }, 
    hidden: {
      transform: `translate(0px, ${yValue}px)`,
      zIndex: 30, 
      opacity: 0,
      width: '100%',
      height: 56,
      paddingLeft: 6,
      borderRadius: 8,
      transformOrigin: 'center'
    },
  }

  function handleAnimationComplete(name:AnimationDefinition) {
    if(inputContainerState == 'hidden') return setInputContainerState('type') 
    if(name != 'validated') return 

    const newArray = users.map((item, index, array) => {
      if(index != (array.length - 1)) return item

      return {
        name: item.name,
        email: item.email,
        opacity: 1
      }
    })

    setInputContainerState('hidden')
    setUsers(newArray)
    setNameValue('')
  }

  return (
    <section className="pb-4">
      <div>
        <h2>Invite</h2>
        <div className="h-10 shadow rounded-lg shadow-gray-200 flex items-center border-2 border-white  focus-within:border-black relative" >
          <label className="h-full w-full px-1 flex items-center z-20">
            <svg xmlns="http://www.w3.org/2000/svg" width="29px" height="29px" fill="currentColor" viewBox="0 0 16 16">
              <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0m-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4"/>
              <path d="M8.256 14a4.5 4.5 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10q.39 0 .74.025c.226-.341.496-.65.804-.918Q8.844 9.002 8 9c-5 0-6 3-6 4s1 1 1 1z"/>
            </svg>
            <input
              className={`
                outline-none border-none placeholder:font-light h-full px-1 w-full transition-all duration-500 bg-transparent
                ${inputContainerState == 'confirm' ? ' translate-x-24 opacity-0' : 'translate-x-0 opacity-100'}
              `} 
              type="text" 
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Enter email to share"
            />
            <button
              onClick={handleValidate} 
              className="bg-black cursor-pointer z-10 text-white rounded-lg px-2 h-8 flex items-center"
            >
              <svg width="29px" height="29px" viewBox="0 0 24.00 24.00" fill="white" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M11.5003 12H5.41872M5.24634 12.7972L4.24158 15.7986C3.69128 17.4424 3.41613 18.2643 3.61359 18.7704C3.78506 19.21 4.15335 19.5432 4.6078 19.6701C5.13111 19.8161 5.92151 19.4604 7.50231 18.7491L17.6367 14.1886C19.1797 13.4942 19.9512 13.1471 20.1896 12.6648C20.3968 12.2458 20.3968 11.7541 20.1896 11.3351C19.9512 10.8529 19.1797 10.5057 17.6367 9.81135L7.48483 5.24303C5.90879 4.53382 5.12078 4.17921 4.59799 4.32468C4.14397 4.45101 3.77572 4.78336 3.60365 5.22209C3.40551 5.72728 3.67772 6.54741 4.22215 8.18767L5.24829 11.2793C5.34179 11.561 5.38855 11.7019 5.407 11.8459C5.42338 11.9738 5.42321 12.1032 5.40651 12.231C5.38768 12.375 5.34057 12.5157 5.24634 12.7972Z" stroke="#000000" strokeWidth="0.648" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
              <span>Invite</span>
            </button>
          </label>
          {/* avatar */}
          <motion.div
            initial={'type'} 
            animate={inputContainerState}
            variants={variants}
            onAnimationComplete={handleAnimationComplete}
            transition={{ 
              duration: 0.3,
              opacity: { duration: inputContainerState == 'hidden' ? 0 : 0.3 },
              zIndex: { duration: 0 },
              height: { duration: 0.5 } 
            }}
            className="absolute no-underline left-0 h-8 bg-white shadow flex gap-1 overflow-hidden items-center pr-6"
          >
            <motion.div
              initial={{ width: 28, height: 28}}
              animate={{
                width: inputContainerState == 'validated' ? 45 : 28,
                height: inputContainerState == 'validated' ? 45 : 28,
              }} 
              transition={{ duration: 0.3 }}
              className="bg-blue-500 rounded-full flex justify-center items-end overflow-hidden"
            >
              <img 
                src="/avatar.png" 
                className="w-5/6 h-5/6 object-cover" alt="" 
              />
            </motion.div>
            <h4 className="font-medium flex items-center relative">
              <motion.span
                initial={{ transform: 'translateY(-8px)' }}
                animate={{
                  transform: inputContainerState == 'validated' ? 'translateY(-8px)' : 'translateY(0px)'
                }} 
                className="absolute capitalize"
              >
                {nameValue}
              </motion.span>
              <motion.span 
                className="absolute font-light lowercase text-sm text-gray-400"
                initial={{ opacity: 0, transform: 'translateY(0)px' }}
                animate={{
                  opacity: inputContainerState == 'validated' ? 1 : 0,
                  transform: inputContainerState == 'validated' ? 'translateY(12px)' : 'translateY(0px)'
                }}
              >
                {nameValue + '@gmail.com'}
              </motion.span>
            </h4>
            <motion.div
              onClick={() => setInputContainerState('type') } 
              initial={{ opacity: 0 }}
              animate={{ opacity: inputContainerState == 'validated' ? 0 : 1 }}
              transition={{ delay: 0.03 }}
              className="absolute right-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 16 16">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
              </svg>
            </motion.div>
            <motion.div
              className="absolute right-2"
              initial={{ opacity: 0, right: -30 }}
              animate={{ 
                opacity: inputContainerState == 'validated' ? 1 : 0,
                right: inputContainerState == 'validated' ? 4 : -30
              }}
              transition={{ delay: 0.05, right: { duration: 0 }, }}
            >
              <span className="text-red-600 text-sm cursor-pointer">Remove</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
      {/* items container  */}
      <section className={`mt-4 flex flex-col gap-2`}>
        { users.map((user, index) => (
          <div
            style={{ opacity: user.opacity }} 
            key={index} 
            className={`h-14 pl-[6px] relative rounded-lg flex gap-1 items-center w-full shadow`}
          >
            <div className="w-[45px] h-[45px] flex justify-center items-end overflow-hidden bg-blue-500 rounded-full">
              <img 
                src="/avatar.png" 
                className="w-5/6 h-5/6 object-cover" alt="" 
              />
            </div>
            <h4 className="font-medium flex items-center relative">
              <span className="absolute capitalize -translate-y-2">{user.name}</span>
              <span className="absolute font-light lowercase translate-y-3 text-sm text-gray-400">
                {user.email}
              </span>
            </h4>
            <div className="absolute right-2">
              <span className="text-red-600 text-sm cursor-pointer">Remove</span>
            </div>
          </div>
        )) }
      </section>
    </section>
  )
}