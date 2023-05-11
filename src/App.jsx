import { Route } from 'wouter'
import './App.css'
import Home from './Views/Home'
import Qr from './Components/QR/Qr'
import Profile from './Components/Profile/Profile'

function App() {
  return (
    <main className='bg-slate-50 min-h-screen overflow-hidden'>
      <Route path='/QR-code'><Qr /></Route>
      <Route path='/Profile-Card'><Profile /></Route>
      <Route path='/'><Home /></Route>
    </main>
  )
}

export default App
