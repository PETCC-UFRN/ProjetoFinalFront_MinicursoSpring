import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from '../components/Layout/Layout'
import { Home } from '../pages/Home/Home'
import { Menu } from '../pages/Menu/Menu'
import { Cadastro } from '../pages/Cadastro/Cadastro'

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

        <Route element={<Layout />}>
          <Route path="Cadastro" element={<Cadastro />}></Route>
        </Route>

      </Routes>
    </BrowserRouter>
  )
}
