import { motion } from 'framer-motion'

//  定義 TodoItem 的 props
interface TodoItem {
  todo: string
}

export const TodoItem = ({ todo }: TodoItem) => {
  // 用來顯示待辦事項的元件

  // motion 的 layout 屬性可以讓元件在變化時，有動畫效果
  return (
    <motion.li layout className="p-5 rounded-xl bg-zinc-900">
      <motion.span layout>{todo}</motion.span>
    </motion.li>
  )
}
