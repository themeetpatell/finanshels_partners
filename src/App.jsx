import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// Lazy load pages for code splitting
const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Partnerships = lazy(() => import('./pages/Partnerships'))
const Strategize = lazy(() => import('./pages/Strategize'))
const BecomePartner = lazy(() => import('./pages/BecomePartner'))
const PartnerLanding = lazy(() => import('./pages/PartnerLanding'))
const Contact = lazy(() => import('./pages/Contact'))

// Portal imports - lazy loaded
const ProtectedRoute = lazy(() => import('./components/ProtectedRoute'))
const Login = lazy(() => import('./pages/portal/Login'))
const Register = lazy(() => import('./pages/portal/Register'))
const PortalLayout = lazy(() => import('./pages/portal/PortalLayout'))
const Dashboard = lazy(() => import('./pages/portal/Dashboard'))
const Leads = lazy(() => import('./pages/portal/Leads'))
const NewLead = lazy(() => import('./pages/portal/NewLead'))
const Services = lazy(() => import('./pages/portal/Services'))
const NewServiceRequest = lazy(() => import('./pages/portal/NewServiceRequest'))
const ServiceCatalog = lazy(() => import('./pages/portal/ServiceCatalog'))
const Commissions = lazy(() => import('./pages/portal/Commissions'))
const Analytics = lazy(() => import('./pages/portal/Analytics'))
const Profile = lazy(() => import('./pages/portal/Profile'))

// Team Portal imports - lazy loaded
const TeamLogin = lazy(() => import('./pages/team/TeamLogin'))
const TeamLayout = lazy(() => import('./pages/team/TeamLayout'))
const TeamDashboard = lazy(() => import('./pages/team/TeamDashboard'))
const TeamPartners = lazy(() => import('./pages/team/TeamPartners'))
const PartnerDetail = lazy(() => import('./pages/team/PartnerDetail'))
const TeamLeads = lazy(() => import('./pages/team/TeamLeads'))
const TeamServices = lazy(() => import('./pages/team/TeamServices'))
const TeamCommissions = lazy(() => import('./pages/team/TeamCommissions'))

// Loading component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen bg-slate-950">
    <div className="text-center">
      <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
      <p className="mt-4 text-slate-400">Loading...</p>
    </div>
  </div>
)

function App() {
  return (
    <Router>
      <Suspense fallback={<PageLoader />}>
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
      </Suspense>
    </Router>
  )
}

export default App
