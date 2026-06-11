import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import ComponentPage from './pages/ComponentPage'
import ButtonPage from './pages/ButtonPage'
import InputPage from './pages/InputPage'
import CardPage from './pages/CardPage'
import BadgePage from './pages/BadgePage'
import ModalPage from './pages/ModalPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/button" element={<ButtonPage />} />
        <Route path="/input" element={<InputPage />} />
        <Route path="/card" element={<CardPage />} />
        <Route path="/badge" element={<BadgePage />} />
        <Route path="/modal" element={<ModalPage />} />
        <Route path="/components/:name" element={<ComponentPage />} />
      </Routes>
    </BrowserRouter>
  )
}
