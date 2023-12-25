import './App.css';
import Background from './components/background';
import Foreground from './components/foreground';

function App() {

  return (
    <>
      <main className='relative w-full h-screen bg-zinc-300 dark:bg-zinc-800'>
       <Background/>   
       <Foreground/>       
      </main>
    </>
  )
}

export default App
