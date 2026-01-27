import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Partnerships from './pages/Partnerships'
import Strategize from './pages/Strategize'
import BecomePartner from './pages/BecomePartner'
import PartnerLanding from './pages/PartnerLanding'
import Contact from './pages/Contact'

// Portal imports
import ProtectedRoute from './components/ProtectedRoute'
import Login from './pages/portal/Login'
import Register from './pages/portal/Register'
import PortalLayout from './pages/portal/PortalLayout'
import Dashboard from './pages/portal/Dashboard'
import Leads from './pages/portal/Leads'
import NewLead from './pages/portal/NewLead'
import Services from './pages/portal/Services'
import NewServiceRequest from './pages/portal/NewServiceRequest'
import ServiceCatalog from './pages/portal/ServiceCatalog'
import Commissions from './pages/portal/Commissions'
import Analytics from './pages/portal/Analytics'
import Profile from './pages/portal/Profile'

// Team Portal imports
import TeamLogin from './pages/team/TeamLogin'
import TeamLayout from './pages/team/TeamLayout'
import TeamDashboard from './pages/team/TeamDashboard'
import TeamPartners from './pages/team/TeamPartners'
import PartnerDetail from './pages/team/PartnerDetail'
import TeamLeads from './pages/team/TeamLeads'
import TeamServices from './pages/team/TeamServices'
import TeamCommissions from './pages/team/TeamCommissions'

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Website Routes */}
        <Route path="/" element={
          <div className="flex min-h-screen flex-col bg-slate-950 text-slate-50">
            <Navbar />
            <main className="flex-1 pt-20">
              <Home />
            </main>
            <Footer />
          </div>
        } />
        <Route path="/about" element={
          <div className="flex min-h-screen flex-col bg-slate-950 text-slate-50">
            <Navbar />
            <main className="flex-1 pt-20">
              <About />
            </main>
            <Footer />
          </div>
        } />
        <Route path="/partnerships" element={
          <div className="flex min-h-screen flex-col bg-slate-950 text-slate-50">
            <Navbar />
            <main className="flex-1 pt-20">
              <Partnerships />
            </main>
            <Footer />
          </div>
        } />
        <Route path="/services" element={
          <div className="flex min-h-screen flex-col bg-slate-950 text-slate-50">
            <Navbar />
            <main className="flex-1 pt-20">
              <Strategize />
            </main>
            <Footer />
          </div>
        } />
        <Route path="/strategize" element={
          <div className="flex min-h-screen flex-col bg-slate-950 text-slate-50">
            <Navbar />
            <main className="flex-1 pt-20">
              <Strategize />
            </main>
            <Footer />
          </div>
        } />
        <Route path="/become-a-partner" element={
          <div className="flex min-h-screen flex-col bg-slate-950 text-slate-50">
            <Navbar />
            <main className="flex-1 pt-20">
              <BecomePartner />
            </main>
            <Footer />
          </div>
        } />
        <Route path="/contact" element={
          <div className="flex min-h-screen flex-col bg-slate-950 text-slate-50">
            <Navbar />
            <main className="flex-1 pt-20">
              <Contact />
            </main>
            <Footer />
          </div>
        } />

        {/* Partner Landing Page - Standalone (no nav/footer for conversion) */}
        <Route path="/sef" element={<PartnerLanding />} />

        {/* Auth Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Partner Portal Login (Alternative routes) */}
        <Route path="/portal/login" element={<Login />} />
        <Route path="/portal/register" element={<Register />} />

        {/* Protected Partner Portal Routes */}
        <Route path="/portal" element={
          <ProtectedRoute>
            <PortalLayout />
          </ProtectedRoute>
        }>
          <Route index element={<Navigate to="/portal/dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="leads" element={<Leads />} />
          <Route path="services/new" element={<NewServiceRequest />} />
          <Route path="services/catalog" element={<ServiceCatalog />} />
          <Route path="leads/new" element={<NewLead />} />
          <Route path="services" element={<Services />} />
          <Route path="commissions" element={<Commissions />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="profile" element={<Profile />} />
        </Route>

        {/* Team Portal Routes */}
        <Route path="/team/login" element={<TeamLogin />} />
        
        {/* Protected Team Portal Routes */}
        <Route path="/team" element={
          <ProtectedRoute>
            <TeamLayout />
          </ProtectedRoute>
        }>
          <Route index element={<Navigate to="/team/dashboard" replace />} />
          <Route path="dashboard" element={<TeamDashboard />} />
          <Route path="partners/:partnerId" element={<PartnerDetail />} />
          <Route path="partners" element={<TeamPartners />} />
          <Route path="leads" element={<TeamLeads />} />
          <Route path="services" element={<TeamServices />} />
          <Route path="commissions" element={<TeamCommissions />} />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  )
}

export default App
