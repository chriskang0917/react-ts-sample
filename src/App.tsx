import { useState } from 'react'
import { Toaster } from 'react-hot-toast'
import { AddTodo, TodoList } from './components'

const App = () => {
  // 設定 todos 來儲存待辦事項
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
