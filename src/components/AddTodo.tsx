import React, { useState } from 'react'
import toast from 'react-hot-toast'

// 1. 設定 input state 來儲存待辦事項
// 2. 處理 handleInput 函式來更新 input state
// 3. 處理傳入的 addTodo 函式
// TODO 練習一下，處理 handleSubmit 函式來新增待辦事項

// TODO: 重點複習
// 1. props 的寫法，可以寫在 interface 或參數內？
// 2. 泛型和型別註解的差異是什麼，可以按 CMD 或 CTRL 檢視原始碼
// 3. event 的 input 要怎麼找到相對應的 interface？

interface AddTodoProps {
  onAdd: (todo: string) => void
}

export const AddTodo = ({ onAdd }: AddTodoProps) => {
  // 定義 useState 的泛型為 string
  const [input, setInput] = useState<string>('')

  // 可以在 onChange 裡寫個小的 function，就可以從 param 找到 interface
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  // 新增 todo 後，清空 input 的值
  // 顯示相對應的提示方框
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (input.trim().length !== 0) {
      onAdd(input)
      setInput('')
      toast.success('新增成功！')
    } else {
      return toast.error('請輸入待辦事項！')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex items-center w-full max-w-lg gap-2 p-5 m-auto">
        <input
          value={input}
          onChange={handleInput}
          type="text"
          className="w-full px-5 py-2 bg-transparent border-2 outline-none border-zinc-600 rounded-xl placeholder:text-zinc-500 focus:border-white"
          placeholder="輸入你的待辦事項 ..."
        />
        <button
          type="submit"
          className="px-5 py-2 text-sm font-normal text-blue-300 bg-blue-900 border-2 border-blue-900 active:scale-95 rounded-xl"
        >
          Submit
        </button>
      </div>
    </form>
  )
}
