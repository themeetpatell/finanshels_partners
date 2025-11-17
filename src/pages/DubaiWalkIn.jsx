import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Calendar, Clock, MapPin, Users, Building, CheckCircle2, ArrowRight, Briefcase, TrendingUp, UserPlus, Phone } from 'lucide-react'
import { Button } from '../components/ui/Button'
import { Input, Textarea, Label } from '../components/ui/Input'
import { Card } from '../components/ui/Card'
import AnimatedSection from '../components/AnimatedSection'

export default function DubaiWalkIn() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    resume: null,
    coverNote: ''
  })

  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [fileName, setFileName] = useState('')

  const positions = [
    { id: 'dw-field-sales-executive', title: 'Field Sales Executive', openings: 2, category: 'Sales', experience: '1-3 years', link: '/dubai-walkin/field-sales-executive' },
    { id: 'dw-business-development', title: 'Business Development Executive', openings: 2, category: 'Business Development', experience: '2-4 years', link: '/dubai-walkin/business-development' },
    { id: 'dw-partnerships-manager', title: 'Partnerships Manager', openings: 2, category: 'Partnerships', experience: '3-5 years', link: '/dubai-walkin/partnerships-manager' },
    { id: 'dw-appointment-setter', title: 'Appointment Setter', openings: 2, category: 'Partnerships', experience: '1-3 years', link: '/dubai-walkin/appointment-setter' }
  ]

  const processSteps = [
    {
      step: 1,
      title: 'Register',
      description: 'Check in at the venue with your CV and ID',
      duration: '5-10 mins'
    },
    {
      step: 2,
      title: 'Screening Round',
      description: 'Quick assessment of your profile and experience',
      duration: '15-20 mins'
    },
    {
      step: 3,
      title: 'Manager Round',
      description: 'In-depth discussion with hiring manager',
      duration: '30 mins'
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
      <section className="relative py-32 px-6 sm:px-8 lg:px-12 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/20 rounded-full filter blur-3xl opacity-30 animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-500/20 rounded-full filter blur-3xl opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <AnimatedSection animation="fade-down">
            <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-sm font-bold mb-8 shadow-xl">
              <Building size={18} />
              Walk-In Drive - Dubai
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={100}>
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-extrabold mb-8 tracking-tighter leading-[0.95] text-white">
              Dubai Walk-In<br />
              <span className="bg-gradient-to-r from-blue-200 via-cyan-200 to-blue-200 bg-clip-text text-transparent">
                Career Drive 2025
              </span>
            </h1>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={200}>
            <p className="text-2xl sm:text-3xl text-white/90 mb-12 max-w-4xl leading-relaxed font-medium">
              Walk in with your CV! We're hiring for <span className="text-white font-bold">Sales & Business Development roles</span>.{' '}
              Meet our team face-to-face and experience our 3-step interview process.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={300}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <div className="flex items-center gap-3 p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                <Calendar className="text-blue-200" size={24} />
                <div>
                  <div className="text-sm text-gray-200">Date</div>
                  <div className="font-semibold">Nov 23, 2025</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                <Clock className="text-amber-200" size={24} />
                <div>
                  <div className="text-sm text-gray-200">Timing</div>
                  <div className="font-semibold">10 AM - 5 PM</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                <MapPin className="text-emerald-200" size={24} />
                <div>
                  <div className="text-sm text-gray-200">Venue</div>
                  <div className="font-semibold text-xs">Publishing Pavilion, Dubai Production City</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                <Users className="text-indigo-200" size={24} />
                <div>
                  <div className="text-sm text-gray-200">Openings</div>
                  <div className="font-semibold">Multiple Positions</div>
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
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100 text-sm font-medium text-blue-700 mb-6">
                <Briefcase size={16} />
                Open Positions
              </div>
              <h2 className="text-5xl sm:text-6xl font-extrabold text-slate-900 mb-6 tracking-tighter">
                We're Looking For
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto font-medium">
                High-energy sales professionals who can drive growth and build relationships
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {positions.map((position, idx) => (
              <AnimatedSection key={position.id} delay={idx * 100}>
                <Link to={position.link}>
                  <Card className="group hover:shadow-2xl hover:border-blue-300 transition-all duration-500 h-full border-2 border-slate-100 hover:scale-105">
                    <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Briefcase className="text-white" size={24} />
                      </div>
                      <div className="px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold">
                        {position.category}
                      </div>
                    </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {position.title}
                      </h3>
                      <div className="flex items-center gap-3 text-sm text-slate-600 mb-4">
                        <div className="flex items-center gap-2">
                          <Users size={16} />
                          <span className="font-semibold">{position.openings} Openings</span>
                        </div>
                        <span className="text-slate-400">•</span>
                        <span className="font-semibold">{position.experience}</span>
                      </div>
                    </div>
                  </Card>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Interview Process */}
      <section className="py-20 px-6 sm:px-8 lg:px-12 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-100 text-sm font-medium text-amber-700 mb-6">
                <TrendingUp size={16} />
                Selection Process
              </div>
              <h2 className="text-5xl sm:text-6xl font-extrabold text-slate-900 mb-6 tracking-tighter">
                How It Works
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto font-medium">
                Simple, fast, and transparent - from registration to final interview in one day
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {processSteps.map((step, idx) => (
              <AnimatedSection key={step.step} delay={idx * 100}>
                <Card className="relative h-full border-2 border-slate-100 hover:border-blue-300 hover:shadow-xl transition-all duration-500">
                  <div className="p-6">
                    <div className="absolute -top-4 -left-4 w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center text-white font-bold text-xl shadow-xl">
                      {step.step}
                    </div>
                    <div className="mt-4">
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                      <p className="text-slate-600 mb-3 text-sm leading-relaxed">{step.description}</p>
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 text-orange-700 text-xs font-semibold">
                        <Clock size={12} />
                        {step.duration}
                      </div>
                    </div>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-20 px-6 sm:px-8 lg:px-12 bg-gradient-to-br from-orange-50 to-pink-50">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-orange-200 text-sm font-medium text-orange-700 mb-6 shadow-sm">
                <UserPlus size={16} />
                Pre-Register Now
              </div>
              <h2 className="text-5xl sm:text-6xl font-extrabold text-slate-900 mb-6 tracking-tighter">
                Confirm Your Spot
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium">
                Pre-register to fast-track your interview and skip the queue
              </p>
            </div>
          </AnimatedSection>

          {submitted ? (
            <AnimatedSection animation="scale">
              <Card className="border-2 border-green-200 bg-white">
                <div className="p-12 text-center">
                  <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="text-green-600" size={40} />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-4">Registration Successful!</h3>
                  <p className="text-lg text-slate-600 mb-8">
                    We've received your application. See you at the walk-in drive!
                  </p>
                  <div className="space-y-2 text-left max-w-md mx-auto bg-slate-50 p-6 rounded-xl">
                    <p className="text-sm font-semibold text-slate-900">Walk-In Details:</p>
                    <p className="text-sm text-slate-700"><strong>Date:</strong> November 23, 2025</p>
                    <p className="text-sm text-slate-700"><strong>Time:</strong> 10 AM - 5 PM</p>
                    <p className="text-sm text-slate-700"><strong>Venue:</strong> 413, Publishing Pavilion, Dubai Production City, Dubai, UAE</p>
                    <p className="text-sm text-slate-700 mt-4"><strong>Don't forget to bring:</strong> Updated CV, Original ID, and this confirmation</p>
                  </div>
                </div>
              </Card>
            </AnimatedSection>
          ) : (
            <AnimatedSection animation="fade-up" delay={100}>
              <Card className="border-2 border-orange-200 bg-white shadow-2xl">
                <form onSubmit={handleSubmit} className="p-8 sm:p-12">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <Label htmlFor="fullName">Full Name *</Label>
                      <Input
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        error={errors.fullName}
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        error={errors.email}
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        error={errors.phone}
                        placeholder="+971 XX XXX XXXX"
                      />
                    </div>

                    <div>
                      <Label htmlFor="position">Position Applying For *</Label>
                      <select
                        id="position"
                        name="position"
                        value={formData.position}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl border-2 ${
                          errors.position ? 'border-red-300 bg-red-50' : 'border-slate-200 bg-white'
                        } focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all text-slate-900 font-medium`}
                      >
                        <option value="">Select a position</option>
                        {positions.map(pos => (
                          <option key={pos.id} value={pos.id}>{pos.title}</option>
                        ))}
                      </select>
                      {errors.position && <p className="text-red-600 text-sm mt-1">{errors.position}</p>}
                    </div>
                  </div>

                  <div className="mb-6">
                    <Label htmlFor="experience">Relevant Experience *</Label>
                    <Textarea
                      id="experience"
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      error={errors.experience}
                      rows={3}
                      placeholder="Brief description of your relevant experience..."
                    />
                  </div>

                  <div className="mb-6">
                    <Label htmlFor="resume">Upload Resume (PDF) *</Label>
                    <div className="relative">
                      <input
                        type="file"
                        id="resume"
                        name="resume"
                        accept=".pdf"
                        onChange={handleChange}
                        className="hidden"
                      />
                      <label
                        htmlFor="resume"
                        className={`flex items-center justify-center gap-3 w-full px-6 py-4 rounded-xl border-2 ${
                          errors.resume ? 'border-red-300 bg-red-50' : 'border-slate-200 bg-white'
                        } cursor-pointer hover:border-orange-400 hover:bg-orange-50 transition-all`}
                      >
                        <ArrowRight size={20} className="text-orange-600" />
                        <span className="text-slate-700 font-medium">
                          {fileName || 'Choose file to upload'}
                        </span>
                      </label>
                    </div>
                    {errors.resume && <p className="text-red-600 text-sm mt-1">{errors.resume}</p>}
                  </div>

                  <div className="mb-8">
                    <Label htmlFor="coverNote">Additional Notes (Optional)</Label>
                    <Textarea
                      id="coverNote"
                      name="coverNote"
                      value={formData.coverNote}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Any additional information you'd like to share..."
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 shadow-xl"
                  >
                    Pre-Register for Walk-In
                    <ArrowRight className="ml-2" size={20} />
                  </Button>

                  <p className="text-sm text-slate-600 mt-6 text-center">
                    * Registration is optional. You can also walk in directly with your CV.
                  </p>
                </form>
              </Card>
            </AnimatedSection>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 sm:px-8 lg:px-12 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 tracking-tight">
              Questions About The Walk-In Drive?
            </h2>
            <p className="text-xl text-white/80 mb-8 font-medium">
              Contact our recruitment team for more information
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="mailto:talents@finanshels.com">
                <Button size="lg" variant="outline" className="bg-white/10 border-2 border-white text-white hover:bg-white hover:text-slate-900">
                  Email Us
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </a>
              <a href="tel:+971XXXXXXXX">
                <Button size="lg" variant="outline" className="bg-white/10 border-2 border-white text-white hover:bg-white hover:text-slate-900">
                  <Phone className="mr-2" size={20} />
                  Call Us
                </Button>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}

