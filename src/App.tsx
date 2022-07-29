import { Route, Routes } from '@solidjs/router'

import { Home } from './pages/Home'

export const App = () => (
  <Routes>
    <Route path="/" component={Home} />
  </Routes>
)
