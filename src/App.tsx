import { Routes, Route } from 'react-router'

import Home from './Home'

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
    </Routes>
  )
}

export default App
