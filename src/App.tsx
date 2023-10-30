import { useState } from 'react'
import { Toaster } from 'react-hot-toast'
import { AddTodo, TodoList } from './components'

// TODO 練習一下：設定 todos 來儲存待辦事項
// 2. 設定 addTodo 函式來新增待辦事項
// 3. 傳入 addTodo 函式到 AddTodo.tsx
// 4. 傳入 todos 到 TodoList.tsx

const App = () => {
  const [todos, setTodos] = useState<string[]>([])

  const addTodo = (todo: string) => {
    setTodos(prev => [...prev, todo])
  }

  return (
    <section>
      <Toaster position="bottom-center" />
      {/* Toast 是用於顯示加入提示的套件s */}
      <AddTodo onAdd={addTodo} />
      <TodoList todos={todos} />
    </section>
  )
}

export default App
