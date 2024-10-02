import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { CartHeader } from "./cart-header";
import { CartBody } from "./cart-body";

export default function App() {
  const [cardIsOpen, setCardIsOpen] = useState(false);
  const [users, setUsers] = useState<{name: string, email: string, opacity: number}[]>([]) ;

  useEffect(() => {
    if(cardIsOpen == false) {
      setTimeout(() => {
        setUsers([])
      }, 100);
    } 
  }, [cardIsOpen])

  return (
    <section className="h-dvh w-full flex flex-col justify-center items-center">
          
      <motion.article 
        layout
        initial={{ height: 176 }}
        animate={{ height: cardIsOpen ? 'auto' : 176 }}
        transition={{ duration: 0.15 }}
        className={`px-5 w-80 md:w-96 rounded-lg bg-white shadow shadow-gray-300 overflow-hidden`}
      >
        <CartHeader cardIsOpen={cardIsOpen} setCardIsOpen={setCardIsOpen} />
        <CartBody users={users} setUsers={setUsers} />
      </motion.article>
    </section>
  )
}