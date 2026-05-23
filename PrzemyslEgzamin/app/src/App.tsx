import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Quiz from './pages/Quiz'
import Bilans from './pages/Rachunkowosc/Bilans'
import Konta from './pages/Rachunkowosc/Konta'
import RZiS from './pages/Rachunkowosc/RZiS'
import VAT from './pages/Rachunkowosc/VAT'
import SrodkiTrwale from './pages/Rachunkowosc/SrodkiTrwale'
import Leasing from './pages/Rachunkowosc/Leasing'
import WycenaZapasow from './pages/Rachunkowosc/WycenaZapasow'
import Wynagrodzenia from './pages/Wynagrodzenia'
import BCOgolne from './pages/BusinessCentral/Ogolne'
import BCCoding from './pages/BusinessCentral/Coding'
import HurtownieDanych from './pages/HurtownieDanych'
import ERP from './pages/ERP'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="quiz" element={<Quiz />} />
          <Route path="rachunkowosc/bilans" element={<Bilans />} />
          <Route path="rachunkowosc/konta" element={<Konta />} />
          <Route path="rachunkowosc/rzis" element={<RZiS />} />
          <Route path="rachunkowosc/vat" element={<VAT />} />
          <Route path="rachunkowosc/srodki-trwale" element={<SrodkiTrwale />} />
          <Route path="rachunkowosc/leasing" element={<Leasing />} />
          <Route path="rachunkowosc/wycena-zapasow" element={<WycenaZapasow />} />
          <Route path="wynagrodzenia" element={<Wynagrodzenia />} />
          <Route path="bc/ogolne" element={<BCOgolne />} />
          <Route path="bc/coding" element={<BCCoding />} />
          <Route path="hurtownie-danych" element={<HurtownieDanych />} />
          <Route path="erp" element={<ERP />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
