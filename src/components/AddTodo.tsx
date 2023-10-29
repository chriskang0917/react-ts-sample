import React, { useState } from 'react'
import toast from 'react-hot-toast'

// TODO: 要講的重點
// 1. interface 的寫法，寫在 props 後面或分開
// 2. event 的 input
// 3. e.preventDefault 和 target.value 為什麼可以自動補齊

interface AddTodoProps {
  onAdd: (todo: string) => void
}

export const AddTodo = ({ onAdd }: AddTodoProps) => {
  // 僅說明 string 的 input 定義
  const [input, setInput] = useState<string>('')

  // 展示 event 是如何得知
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  // 需要講 e 的 preventDefault
  // 新增 todo 後，清空 input 的值
  // AddTodo 完後，問大家的狀況
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
