import { Route } from 'wouter'
import './App.css'
import Home from './Views/Home'
import Qr from './Components/QR/Qr'

function App() {
  return (
    <main className='bg-slate-50 min-h-screen overflow-hidden'>
      <Route path='/QR-code'><Qr /></Route>
      <Home />
    </main>
  )
}

export default App
