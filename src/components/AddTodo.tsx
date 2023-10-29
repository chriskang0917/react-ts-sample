// 1. 設定 input state 來儲存待辦事項
// 2. 處理 handleInput 函式來更新 input state
// 3. 處理傳入的 addTodo 函式
// TODO 練習一下，處理 handleSubmit 函式來新增待辦事項

export const AddTodo = () => {
  const handleInput = () => {}
  const handleSubmit = () => {}

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex items-center w-full max-w-lg gap-2 p-5 m-auto">
        <input
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
