import { Route, Routes } from 'react-router-dom'
import App from '../pages/App'
import { LayoutDefault } from '../components/Layout/LayoutDefault'
import { New } from '../pages/New'
import { Details } from '../pages/Details'
import { SignIn } from '../pages/SignIn'
import { SignUp } from '../pages/SignUp'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LayoutDefault />}>
        <Route path="/home" element={<App />} />
        <Route path="/" element={<SignIn />} />
        <Route path="/new" element={<New />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/clothes/:id" element={<Details />} />
      </Route>
    </Routes>
  )
}
