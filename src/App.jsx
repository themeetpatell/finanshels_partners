import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Jobs from './pages/Jobs'
import JobDetail from './pages/JobDetail'
import Life from './pages/Life'
import VirtualDrive from './pages/VirtualDrive'
import JuniorAccountant from './pages/virtualDrive/JuniorAccountant'
import VirtualDriveJobDetail from './pages/VirtualDriveJobDetail'

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/jobs/:id" element={<JobDetail />} />
            <Route path="/life" element={<Life />} />
            <Route path="/virtual-drive" element={<VirtualDrive />} />
            <Route path="/virtual-drive/vd-junior-accountant" element={<JuniorAccountant />} />
            <Route path="/virtual-drive/:id" element={<VirtualDriveJobDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
