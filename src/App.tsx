import { Toaster } from 'react-hot-toast'
import { AddTodo, TodoList } from './components'

// TODO 注意事項
// 跟大家說盡量跟著聽，以理解為主
// 會提供完整的註解和程式碼給大家參考
// 每一個任務，都會有 TODO 1. 2. 3. ... 這樣的註解，代表這個任務的步驟

// TODO 5. 練習一下：設定 todos 來儲存待辦事項
// 6. 設定 addTodo 函式來新增待辦事項
// 7. 傳入 addTodo 函式到 AddTodo.tsx
// 10. 傳入 todos 到 TodoList.tsx

function App() {
  return (
    <section>
      <Toaster position="bottom-center" />
      {/* Toast 是用於顯示加入提示的套件s */}
      <AddTodo />
      <TodoList />
    </section>
  )
}

export default App
