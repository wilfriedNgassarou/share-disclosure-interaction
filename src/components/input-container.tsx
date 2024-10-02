// export function InputContainer() {
//   return (
//     <div>
//       <h2>Invite</h2>
//       <div className="h-10 shadow rounded-lg px-1 shadow-gray-200 flex items-center border-2 border-white  focus-within:border-black relative" >
//         <label className="h-full w-full flex items-center z-20">
//           <svg xmlns="http://www.w3.org/2000/svg" width="29px" height="29px" fill="currentColor" viewBox="0 0 16 16">
//             <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0m-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4"/>
//             <path d="M8.256 14a4.5 4.5 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10q.39 0 .74.025c.226-.341.496-.65.804-.918Q8.844 9.002 8 9c-5 0-6 3-6 4s1 1 1 1z"/>
//           </svg>
//           <input
//             className={`
//               outline-none border-none h-full px-1 w-full transition-all duration-500 bg-transparent
//               ${inputContainerState == 'confirm' ? ' translate-x-24 opacity-0' : 'translate-x-0 opacity-100'}
//             `} 
//             type="text" 
//             value={inputValue}
//             onChange={(e) => setInputValue(e.target.value)}
//           />
//           <button
//             onClick={() => {
//               setInputValue('')
//               setUsers([...users, 1])
//               setInputContainerState('validated')
//             }} 
//             className="bg-black cursor-pointer z-10 text-white rounded-lg px-2 h-8 flex items-center"
//           >
//             <svg width="29px" height="29px" viewBox="0 0 24.00 24.00" fill="white" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M11.5003 12H5.41872M5.24634 12.7972L4.24158 15.7986C3.69128 17.4424 3.41613 18.2643 3.61359 18.7704C3.78506 19.21 4.15335 19.5432 4.6078 19.6701C5.13111 19.8161 5.92151 19.4604 7.50231 18.7491L17.6367 14.1886C19.1797 13.4942 19.9512 13.1471 20.1896 12.6648C20.3968 12.2458 20.3968 11.7541 20.1896 11.3351C19.9512 10.8529 19.1797 10.5057 17.6367 9.81135L7.48483 5.24303C5.90879 4.53382 5.12078 4.17921 4.59799 4.32468C4.14397 4.45101 3.77572 4.78336 3.60365 5.22209C3.40551 5.72728 3.67772 6.54741 4.22215 8.18767L5.24829 11.2793C5.34179 11.561 5.38855 11.7019 5.407 11.8459C5.42338 11.9738 5.42321 12.1032 5.40651 12.231C5.38768 12.375 5.34057 12.5157 5.24634 12.7972Z" stroke="#000000" strokeWidth="0.648" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
//             <span>Invite</span>
//           </button>
//         </label>
//         {/* avatar */}
//         <motion.div
//           initial={{ 
//             transform: 'translate(128px, 0px)', 
//             zIndex: 10, 
//             opacity: 1, 
//             width: 112, 
//             height: 32,
//             paddingLeft: 2,
//             borderRadius: 16, 
//           }} 
//           animate={{ 
//             transform: inputContainerState == 'validated' ? 'translate(0px, 60px)' : inputContainerState == 'confirm' ? 'translate(24px, 0px)' : 'translate(128px, 0px)',
//             // zIndex: inputContainerState == 'type' ? 10 : 30, 
//             opacity: inputContainerState == 'type' ? 0 : 1,
//             width: inputContainerState == 'validated' ? '100%' : 112,
//             height: inputContainerState == 'validated' ? 56 : 32,
//             // paddingLeft: inputContainerState == 'validated' ? 6 : 2,
//             borderRadius: inputContainerState == 'validated' ? 8 : 16,
//             transformOrigin: inputContainerState == 'validated' ? 'center' : 'left'
//           }}
//           transition={{ duration: 0.2 }}
//           className="absolute h-8 bg-red-200 flex gap-1 items-center pr-6"
//         >
//           <motion.div
//             initial={{ width: 28, height: 28}}
//             animate={{
//               width: inputContainerState == 'validated' ? 45 : 28,
//               height: inputContainerState == 'validated' ? 45 : 28,
//             }} 
//             transition={{ duration: 0.3 }}
//             className="bg-blue-500 rounded-full"
//           ></motion.div>
//           <h4 className="font-medium text-gray-700">Chloe</h4>
//           <span
//             onClick={() => {
//               setInputContainerState('type')
//             }} 
//             className="absolute right-2 top-2"
//           >
//             <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 16 16">
//               <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
//             </svg>
//           </span>
//         </motion.div>
//       </div>
//     </div>
//   )
// }