import { SiStarship } from 'react-icons/si'
import { TodoItem } from '.'

// 讓大家練習一下，要怎麼把 todos 傳進來

// 定義輸入進來的 props 的型別
interface TodoListProps {
  todos: string[]
}

export const TodoList = ({ todos }: TodoListProps) => {
  // 如果沒有任何待辦事項，顯示提示訊息。

  // 在新增 todos 前， uncomment 下面的程式碼：

  if (!todos.length) {
    return (
      <div className="max-w-lg px-5 m-auto">
        <h1 className="flex flex-col items-center gap-5 px-5 py-10 text-xl font-bold text-center rounded-xl bg-zinc-900">
          <SiStarship className="text-5xl" />
          現在的你非常悠閒，沒有任何事情要做！
        </h1>
      </div>
    )
  }

  return (
    <ul className="grid max-w-lg gap-2 px-5 m-auto">
      {todos.map((todo: string) => (
        <TodoItem todo={todo} />
      ))}
    </ul>
  )
}
