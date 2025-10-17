import './App.css'
import MemoExample from './components/reactMemo'
import HeavySum from './components/heavySum'
import ShoppingCartSimple from './components/cartShopping'
import LazyNavWithHook from './components/lazyPages'
import ProfilingSimple from './components/devTool'

function App() {

  return (
    <>
    <LazyNavWithHook/>
      <MemoExample/>
      <HeavySum/>
      <ShoppingCartSimple/>
      <ProfilingSimple/>
    </>
  )
}

export default App
