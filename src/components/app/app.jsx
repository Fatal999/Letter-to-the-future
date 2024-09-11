import { HelmetProvider } from "react-helmet-async"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ScrollToTop from "../../components/data/scroll-to-top"
import Path from "../data/path"
import Home from "../../pages/home/home"
import NotFound from "../../pages/not-found/not-found"

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path={Path.Home} element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  )
}
