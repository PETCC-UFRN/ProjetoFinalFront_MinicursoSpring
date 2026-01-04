import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from '../components/Layout/Layout'
import { Home } from '../pages/Home/Home'
import { Menu } from '../pages/Menu/Menu'

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route>

        <Route element={<Layout />}>
          <Route path="Menu" element={<Menu />} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}
