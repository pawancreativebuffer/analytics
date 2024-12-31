import { Route, Routes } from 'react-router'
import './App.css'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import SignUp from './pages/SignUp'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="dashboard" element={<Dashboard />}>
          {/* <Route index element={<RecentActivity />} />
          <Route path="project/:id" element={<Project />} /> */}
        </Route>
      </Routes>

    </>
  )
}

export default App
