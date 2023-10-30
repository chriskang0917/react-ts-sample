import { motion } from 'framer-motion'

// 把 todo 傳入 TodoItem 裡

//  定義 TodoItem 的 props
interface TodoItem {
  todo: string
}

// 用來顯示待辦事項的元件
export const TodoItem = ({ todo }: TodoItem) => {
  // motion 的 layout 屬性可以讓元件在變化時，有動畫效果
  return (
    <motion.li layout className="p-5 rounded-xl bg-zinc-900">
      <motion.span layout>{todo}</motion.span>
    </motion.li>
  )
}
