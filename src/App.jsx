import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Jobs from './pages/Jobs'
import JobDetail from './pages/JobDetail'
import Life from './pages/Life'
import DubaiWalkIn from './pages/DubaiWalkIn'
import FieldSalesExecutive from './pages/dubaiWalkIn/FieldSalesExecutive'
import BusinessDevelopment from './pages/dubaiWalkIn/BusinessDevelopment'
import PartnershipsManager from './pages/dubaiWalkIn/PartnershipsManager'
import AppointmentSetter from './pages/dubaiWalkIn/AppointmentSetter'

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
            <Route path="/dubai-walkin" element={<DubaiWalkIn />} />
            <Route path="/dubai-walkin/field-sales-executive" element={<FieldSalesExecutive />} />
            <Route path="/dubai-walkin/business-development" element={<BusinessDevelopment />} />
            <Route path="/dubai-walkin/partnerships-manager" element={<PartnershipsManager />} />
            <Route path="/dubai-walkin/appointment-setter" element={<AppointmentSetter />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
