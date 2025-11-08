import { useParams, Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { MapPin, Briefcase, Users, Calendar, Clock, ArrowLeft, CheckCircle, Upload } from 'lucide-react'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { Input, Textarea } from '../components/ui/Input'
import { VIRTUAL_DRIVE_JOBS } from '../data/virtualDriveJobs'
import AnimatedSection from '../components/AnimatedSection'

export default function VirtualDriveJobDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const job = VIRTUAL_DRIVE_JOBS.find(j => j.id === id)

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    location: '',
    education: '',
    experience: '',
    coverNote: '',
    resume: null
  })

  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  if (!job) {
    return (
      <div className="min-h-screen pt-32 px-6 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Position not found</h2>
          <Button onClick={() => navigate('/virtual-drive')}>
            <ArrowLeft className="mr-2" size={18} />
            Back to Virtual Drive
          </Button>
        </div>
      </div>
    )
  }

  const handleChange = (e) => {
    const { name, value, files } = e.target
    if (name === 'resume') {
      setFormData(prev => ({ ...prev, resume: files[0] }))
    } else {
      setFormData(prev => ({ ...prev, [name]: value }))
    }
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const validateForm = () => {
    const newErrors = {}
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid'
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required'
    else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) newErrors.phone = 'Please enter a valid 10-digit phone number'
    if (!formData.location.trim()) newErrors.location = 'Location is required'
    if (!formData.education.trim()) newErrors.education = 'Education details are required'
    if (!formData.resume) newErrors.resume = 'Please upload your resume'
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateForm()) {
      console.log('Form submitted:', formData)
      setSubmitted(true)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  if (submitted) {
    return (
      <div className="min-h-screen pt-32 pb-20 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 text-white mb-6 animate-scale-in">
              <CheckCircle size={40} />
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Application Submitted Successfully!
          </h1>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed font-medium">
            Thank you for applying to the <span className="text-slate-900 font-bold">{job.title}</span> position. 
            We'll review your application and get back to you soon.
          </p>
          <div className="bg-indigo-50 border-2 border-indigo-200 rounded-2xl p-8 mb-8">
            <h3 className="text-lg font-bold text-slate-900 mb-3">What's Next?</h3>
            <ul className="text-left space-y-3 text-slate-700">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-indigo-600 text-white flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">1</div>
                <span>Our team will review your application within 24-48 hours</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-indigo-600 text-white flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">2</div>
                <span>Shortlisted candidates will receive a screening call invitation</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-indigo-600 text-white flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">3</div>
                <span>Virtual interviews on Nov 15-16, 2025 (9 AM - 8 PM)</span>
              </li>
            </ul>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/virtual-drive">
              <Button size="lg" variant="outline">
                <ArrowLeft className="mr-2" size={20} />
                Back to Virtual Drive
              </Button>
            </Link>
            <Link to="/">
              <Button size="lg" variant="primary">
                Go to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-20 bg-white">
      {/* Hero Section */}
      <section className="py-16 px-6 sm:px-8 lg:px-12 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff15_1px,transparent_1px),linear-gradient(to_bottom,#ffffff15_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <Link to="/virtual-drive" className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors mb-8 font-semibold">
            <ArrowLeft size={20} />
            Back to Virtual Drive
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-sm font-bold mb-6 text-white">
                Virtual Hiring Drive 2025
              </div>
              
              <h1 className="text-5xl sm:text-6xl font-extrabold mb-6 tracking-tight leading-tight text-white">
                {job.title}
              </h1>

              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                  <MapPin size={18} />
                  <span className="font-semibold">{job.location}</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                  <Briefcase size={18} />
                  <span className="font-semibold">{job.type}</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                  <Users size={18} />
                  <span className="font-semibold">{job.openings} {typeof job.openings === 'number' ? 'Openings' : 'Positions'}</span>
                </div>
              </div>

              <p className="text-xl text-white/90 leading-relaxed font-medium">
                {job.description}
              </p>
            </div>

            <div className="lg:col-span-1">
              <Card className="bg-white/95 backdrop-blur-xl border-2 border-white/50">
                <div className="p-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-6">Interview Details</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Calendar className="text-indigo-600 flex-shrink-0 mt-1" size={20} />
                      <div>
                        <div className="font-bold text-slate-900 text-sm">Dates</div>
                        <div className="text-slate-600 text-sm">Nov 15-16, 2025</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="text-indigo-600 flex-shrink-0 mt-1" size={20} />
                      <div>
                        <div className="font-bold text-slate-900 text-sm">Timing</div>
                        <div className="text-slate-600 text-sm">9:00 AM - 8:00 PM</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Users className="text-indigo-600 flex-shrink-0 mt-1" size={20} />
                      <div>
                        <div className="font-bold text-slate-900 text-sm">Format</div>
                        <div className="text-slate-600 text-sm">Virtual (Google Meet)</div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 pt-6 border-t border-slate-200">
                    <div className="text-sm font-bold text-slate-900 mb-2">Interview Stages</div>
                    <ol className="space-y-2 text-sm text-slate-600">
                      <li className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center text-xs font-bold flex-shrink-0">1</span>
                        Screening
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center text-xs font-bold flex-shrink-0">2</span>
                        Technical
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center text-xs font-bold flex-shrink-0">3</span>
                        Final Round
                      </li>
                    </ol>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Job Details */}
      <section className="py-20 px-6 sm:px-8 lg:px-12 bg-gradient-to-b from-white via-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Job Description */}
            <div className="lg:col-span-2 space-y-8">
              <AnimatedSection>
                <Card className="border-2 border-indigo-100 hover:border-indigo-200 hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-white to-indigo-50/30">
                  <div className="p-8 sm:p-10">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/30">
                        <Briefcase className="text-white" size={24} />
                      </div>
                      <h2 className="text-3xl font-extrabold text-slate-900">Responsibilities</h2>
                    </div>
                    <div className="space-y-4">
                      {job.responsibilities.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-white/60 hover:bg-white transition-all duration-300 hover:shadow-md group">
                          <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm shadow-md group-hover:scale-110 transition-transform">
                            {idx + 1}
                          </div>
                          <span className="text-slate-700 leading-relaxed text-base font-medium pt-1">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </AnimatedSection>

              <AnimatedSection delay={100}>
                <Card className="border-2 border-purple-100 hover:border-purple-200 hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-white to-purple-50/30">
                  <div className="p-8 sm:p-10">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center shadow-lg shadow-purple-500/30">
                        <CheckCircle className="text-white" size={24} />
                      </div>
                      <h2 className="text-3xl font-extrabold text-slate-900">Requirements</h2>
                    </div>
                    <div className="grid grid-cols-1 gap-3">
                      {job.requirements.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-white/60 hover:bg-white transition-all duration-300 hover:shadow-md group">
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center mt-0.5 group-hover:scale-110 transition-transform">
                            <CheckCircle className="text-white" size={14} />
                          </div>
                          <span className="text-slate-700 leading-relaxed text-base font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </AnimatedSection>

              <AnimatedSection delay={200}>
                <Card className="border-2 border-pink-100 hover:border-pink-200 hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-white to-pink-50/30">
                  <div className="p-8 sm:p-10">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-pink-500 to-orange-500 flex items-center justify-center shadow-lg shadow-pink-500/30">
                        <Star className="text-white fill-white" size={24} />
                      </div>
                      <h2 className="text-3xl font-extrabold text-slate-900">Nice to Have</h2>
                    </div>
                    <div className="grid grid-cols-1 gap-3">
                      {job.niceToHave.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-white/60 hover:bg-white transition-all duration-300 hover:shadow-md group">
                          <div className="flex-shrink-0">
                            <Star className="text-pink-500 fill-pink-500 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" size={18} />
                          </div>
                          <span className="text-slate-700 leading-relaxed text-base font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </AnimatedSection>

              <AnimatedSection delay={300}>
                <Card className="border-2 border-green-100 hover:border-green-200 hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-white to-green-50/30">
                  <div className="p-8 sm:p-10">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-green-500/30">
                        <CheckCircle className="text-white" size={24} />
                      </div>
                      <h2 className="text-3xl font-extrabold text-slate-900">What You'll Get</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {job.benefits.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-white/60 hover:bg-white transition-all duration-300 hover:shadow-md border border-green-100 group">
                          <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" size={20} />
                          <span className="text-slate-700 leading-relaxed text-sm font-semibold">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </AnimatedSection>
            </div>

            {/* Application Form */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <Card className="border-2 border-slate-200 shadow-xl">
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-slate-900 mb-6">Apply Now</h3>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div>
                        <label className="block text-sm font-semibold text-slate-900 mb-2">
                          Full Name *
                        </label>
                        <Input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="Your full name"
                          className={errors.fullName ? 'border-red-500' : ''}
                        />
                        {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-slate-900 mb-2">
                          Email *
                        </label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your.email@example.com"
                          className={errors.email ? 'border-red-500' : ''}
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-slate-900 mb-2">
                          Phone Number *
                        </label>
                        <Input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 XXXXX XXXXX"
                          className={errors.phone ? 'border-red-500' : ''}
                        />
                        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-slate-900 mb-2">
                          Current Location *
                        </label>
                        <Input
                          type="text"
                          name="location"
                          value={formData.location}
                          onChange={handleChange}
                          placeholder="City, State"
                          className={errors.location ? 'border-red-500' : ''}
                        />
                        {errors.location && <p className="text-red-500 text-sm mt-1">{errors.location}</p>}
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-slate-900 mb-2">
                          Education *
                        </label>
                        <Input
                          type="text"
                          name="education"
                          value={formData.education}
                          onChange={handleChange}
                          placeholder="Degree, Institution"
                          className={errors.education ? 'border-red-500' : ''}
                        />
                        {errors.education && <p className="text-red-500 text-sm mt-1">{errors.education}</p>}
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-slate-900 mb-2">
                          Experience (if any)
                        </label>
                        <Input
                          type="text"
                          name="experience"
                          value={formData.experience}
                          onChange={handleChange}
                          placeholder="Previous roles"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-slate-900 mb-2">
                          Upload Resume *
                        </label>
                        <div className="relative">
                          <input
                            type="file"
                            name="resume"
                            onChange={handleChange}
                            accept=".pdf,.doc,.docx"
                            className="hidden"
                            id="resume-upload"
                          />
                          <label
                            htmlFor="resume-upload"
                            className={`flex items-center justify-center gap-2 px-4 py-3 border-2 border-dashed rounded-xl cursor-pointer transition-all hover:border-indigo-500 hover:bg-indigo-50 ${
                              errors.resume ? 'border-red-500' : 'border-slate-300'
                            }`}
                          >
                            <Upload size={20} className="text-slate-600" />
                            <span className="text-sm font-medium text-slate-700">
                              {formData.resume ? formData.resume.name : 'Choose file'}
                            </span>
                          </label>
                          {errors.resume && <p className="text-red-500 text-sm mt-1">{errors.resume}</p>}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-slate-900 mb-2">
                          Cover Note
                        </label>
                        <Textarea
                          name="coverNote"
                          value={formData.coverNote}
                          onChange={handleChange}
                          rows={4}
                          placeholder="Why are you interested in this position?"
                        />
                      </div>

                      <Button type="submit" variant="primary" className="w-full shadow-xl text-base h-12">
                        Submit Application
                      </Button>
                    </form>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

