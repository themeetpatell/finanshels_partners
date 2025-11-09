import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Calendar, Clock, MapPin, Users, Video, CheckCircle2, ArrowRight, Briefcase, TrendingUp, UserPlus } from 'lucide-react'
import { Button } from '../components/ui/Button'
import { Input, Textarea, Label } from '../components/ui/Input'
import { Card } from '../components/ui/Card'
import AnimatedSection from '../components/AnimatedSection'

export default function VirtualDrive() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    location: '',
    position: '',
    experience: '',
    resume: null,
    coverNote: ''
  })

  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [fileName, setFileName] = useState('')

  const positions = [
    { id: 'vd-junior-accountant', title: 'Junior Accountant', openings: 6, category: 'Accounting' },
    { id: 'vd-senior-accountant', title: 'Senior Accountant', openings: 3, category: 'Accounting' },
    { id: 'vd-content-writer-intern', title: 'Content Writer Intern', openings: 2, category: 'Internship' },
    { id: 'vd-web-developer-intern', title: 'Web Developer Intern', openings: 'Multiple', category: 'Internship' },
    { id: 'vd-recruiter-intern', title: 'Junior Recruiter', openings: 'Multiple', category: 'Internship' },
    { id: 'vd-business-development-intern', title: 'Business Development Intern', openings: 'Multiple', category: 'Internship' }
  ]

  const processSteps = [
    {
      step: 1,
      title: 'Screening Round',
      description: 'Initial assessment of your profile and fitment',
      duration: '15-20 mins',
      day: 'Day 1'
    },
    {
      step: 2,
      title: 'Technical Round',
      description: 'Role-specific technical evaluation',
      duration: '30-45 mins',
      day: 'Day 1'
    },
    {
      step: 3,
      title: 'Final Round',
      description: 'Discussion with leadership team',
      duration: '30 mins',
      day: 'Day 2'
    },
    {
      step: 4,
      title: 'Offer',
      description: 'Immediate offer for selected candidates',
      duration: 'Same day',
      day: 'Day 2'
    }
  ]

  const handleChange = (e) => {
    const { name, value, files } = e.target
    if (name === 'resume' && files) {
      setFormData(prev => ({ ...prev, resume: files[0] }))
      setFileName(files[0].name)
      setErrors(prev => ({ ...prev, resume: '' }))
    } else {
      setFormData(prev => ({ ...prev, [name]: value }))
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const validate = () => {
    const newErrors = {}
    
    if (!formData.fullName.trim()) newErrors.fullName = 'Name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required'
    if (!formData.location.trim()) newErrors.location = 'Location is required'
    if (!formData.position) newErrors.position = 'Position is required'
    if (!formData.experience.trim()) newErrors.experience = 'Experience details are required'
    if (!formData.resume) newErrors.resume = 'Resume is required'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validate()) {
      setSubmitted(true)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-brand-light to-white">
      {/* Hero Section */}
      <section className="relative py-32 px-6 sm:px-8 lg:px-12 bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <AnimatedSection animation="fade-down">
            <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-sm font-bold mb-8 shadow-xl">
              <Video size={18} />
              Virtual Hiring Drive
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={100}>
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-extrabold mb-8 tracking-tighter leading-[0.95] text-white">
              Join Finanshels<br />
              <span className="bg-gradient-to-r from-purple-300 via-pink-300 to-purple-300 bg-clip-text text-transparent">
                Virtual Hiring Drive 2025
              </span>
            </h1>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={200}>
            <p className="text-2xl sm:text-3xl text-white/90 mb-12 max-w-4xl leading-relaxed font-medium">
              We're hiring across multiple roles! Join us for a <span className="text-white font-bold">2-day virtual hiring drive</span>{' '}
              and fast-track your career with UAE's fastest-growing fintech.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={300}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              <div className="flex items-center gap-3 p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                <Calendar className="text-purple-300" size={24} />
                <div>
                  <div className="text-sm text-gray-300">Dates</div>
                  <div className="font-semibold">Nov 15-16, 2025</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                <Clock className="text-purple-300" size={24} />
                <div>
                  <div className="text-sm text-gray-300">Timing</div>
                  <div className="font-semibold">9 AM - 8 PM</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                <Users className="text-purple-300" size={24} />
                <div>
                  <div className="text-sm text-gray-300">Openings</div>
                  <div className="font-semibold">14+ Positions</div>
                </div>
              </div>
            </div>
          </AnimatedSection>

        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-100 text-sm font-medium text-brand-primary mb-6">
                <Briefcase size={16} />
                Open Positions
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
                We're hiring for multiple roles
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                From accounting to internships - find your perfect role
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {positions.map((position, idx) => (
              <AnimatedSection key={position.id} animation="fade-up" delay={idx * 80}>
                <Card className="h-full hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-slate-200 hover:border-indigo-400 group">
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-bold bg-indigo-50 text-indigo-700 border border-indigo-100 mb-3">
                          {position.category}
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-3">
                          {position.title}
                        </h3>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-indigo-600 font-bold mb-6">
                      <UserPlus size={20} />
                      <span>{position.openings} {typeof position.openings === 'number' ? 'Openings' : 'Positions'}</span>
                    </div>
                    <div className="space-y-3">
                      <Link to={`/virtual-drive/${position.id}`} className="block">
                        <Button variant="primary" className="w-full shadow-lg">
                          Apply Now
                        </Button>
                      </Link>
                      <Link to={`/virtual-drive/${position.id}`} className="block">
                        <button className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm text-slate-600 font-semibold hover:text-indigo-600 transition-colors group/btn">
                          <span>View Details</span>
                          <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                        </button>
                      </Link>
                    </div>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Selection Process */}
      <section className="py-20 px-6 sm:px-8 lg:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 text-sm font-bold text-indigo-700 mb-6">
                <TrendingUp size={16} />
                Selection Process
              </div>
              <h2 className="text-5xl sm:text-6xl font-extrabold text-slate-900 mb-6 tracking-tighter">
                Fast-track hiring process
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto font-medium">
                Get hired in just 2 days through our streamlined virtual process
              </p>
            </div>
          </AnimatedSection>

          <div className="max-w-6xl mx-auto">
            <div className="relative">
              {/* Connection Line */}
              <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-20" style={{ top: '96px' }}></div>

              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                {processSteps.map((step, idx) => (
                  <AnimatedSection key={step.step} animation="fade-up" delay={idx * 100}>
                    <Card className="relative hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-slate-200 hover:border-indigo-300 h-full">
                      <div className="p-8">
                        <div className="flex flex-col items-center text-center">
                          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-white font-extrabold text-2xl mb-4 shadow-xl shadow-indigo-500/30 relative z-10">
                            {step.step}
                          </div>
                          <div className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-bold bg-indigo-50 text-indigo-700 border border-indigo-200 mb-4">
                            {step.day}
                          </div>
                          <h3 className="text-xl font-bold text-slate-900 mb-3">
                            {step.title}
                          </h3>
                          <p className="text-slate-600 text-sm mb-3 leading-relaxed font-medium">
                            {step.description}
                          </p>
                          <div className="text-indigo-600 text-sm font-bold">
                            ⏱️ {step.duration}
                          </div>
                        </div>
                      </div>
                    </Card>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

