import Home from './pages/Home/index'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' index element={<Home />} />
          <Route path='/movie/:id' element={<h1>Chua lam</h1>} />
          <Route path='*' element={<h1>404 Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
