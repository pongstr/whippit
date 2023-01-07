import Counter from '@/components/Counter'
import '@/App.css'

function App() {
  return (
    <div className="App">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-black dark:text-gray-500 sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
          <span className="block">Prototype ideas</span>
          <span className="block -mt-1 pb-3 text-indigo-500 sm:pb-5">
            just like the pros
          </span>
        </h1>
        <p className="-mt-3 text-xl text-gray-500">
          Quickly whip out app ideas in React+TailwindCSS.
        </p>

        <Counter />
      </div>
    </div>
  )
}

export default App
