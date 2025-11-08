import { useState } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { ArrowLeft, MapPin, Briefcase, Users, Calendar, CheckCircle2, Upload } from 'lucide-react'
import { Button } from '../components/ui/Button'
import { Input, Textarea, Label } from '../components/ui/Input'
import { Card } from '../components/ui/Card'
import { JOBS } from '../data/jobs'
import { formatDate } from '../lib/utils'

export default function JobDetail() {
  const { id } = useParams()
  const job = JOBS.find(j => j.id === id)

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    linkedin: '',
    location: '',
    coverNote: '',
    resume: null
  })

  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [fileName, setFileName] = useState('')

  if (!job) {
    return <Navigate to="/jobs" replace />
  }

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
    
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required'
    if (!formData.location.trim()) newErrors.location = 'Location is required'
    if (!formData.coverNote.trim()) newErrors.coverNote = 'Cover note is required'
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
    <div className="min-h-screen pt-20 bg-brand-grey">
      {/* Hero Banner with Application Form */}
      <section className="bg-gradient-to-br from-brand-dark via-indigo-950 to-brand-dark text-white py-16 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <Link to="/jobs" className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors group">
            <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to all jobs
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Job Info */}
            <div className="animate-fade-in">
              <h1 className="text-4xl sm:text-5xl font-bold mb-6 tracking-tight">
                {job.title}
              </h1>

              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm">
                  <Users size={18} />
                  <span>{job.team}</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm">
                  <MapPin size={18} />
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm">
                  <Briefcase size={18} />
                  <span>{job.type}</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm">
                  <Calendar size={18} />
                  <span>Posted {formatDate(job.posted)}</span>
                </div>
              </div>

              <p className="text-xl text-gray-300 leading-relaxed">
                {job.intro}
              </p>
            </div>

            {/* Application Form */}
            <div className="animate-slide-up">
              <Card className="bg-white shadow-2xl">
                {!submitted ? (
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">
                      Quick Apply
                    </h3>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div>
                        <Label htmlFor="fullName">Full Name *</Label>
                        <Input
                          id="fullName"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          error={errors.fullName}
                          placeholder="John Doe"
                        />
                        {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
                      </div>

                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          error={errors.email}
                          placeholder="john@example.com"
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                      </div>

                      <div>
                        <Label htmlFor="phone">Phone *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          error={errors.phone}
                          placeholder="+971 50 123 4567"
                        />
                        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                      </div>

                      <div>
                        <Label htmlFor="linkedin">LinkedIn URL</Label>
                        <Input
                          id="linkedin"
                          name="linkedin"
                          type="url"
                          value={formData.linkedin}
                          onChange={handleChange}
                          placeholder="https://linkedin.com/in/johndoe"
                        />
                      </div>

                      <div>
                        <Label htmlFor="location">Current Location *</Label>
                        <Input
                          id="location"
                          name="location"
                          value={formData.location}
                          onChange={handleChange}
                          error={errors.location}
                          placeholder="Dubai, UAE"
                        />
                        {errors.location && <p className="text-red-500 text-sm mt-1">{errors.location}</p>}
                      </div>

                      <div>
                        <Label htmlFor="coverNote">Cover Note *</Label>
                        <Textarea
                          id="coverNote"
                          name="coverNote"
                          value={formData.coverNote}
                          onChange={handleChange}
                          error={errors.coverNote}
                          placeholder="Tell us why you're a great fit for this role..."
                        />
                        {errors.coverNote && <p className="text-red-500 text-sm mt-1">{errors.coverNote}</p>}
                      </div>

                      <div>
                        <Label htmlFor="resume">CV / Resume *</Label>
                        <label className={`flex items-center justify-center h-12 w-full rounded-xl border-2 ${errors.resume ? 'border-red-500' : 'border-gray-200'} bg-white cursor-pointer hover:border-brand-blue transition-colors`}>
                          <Upload size={18} className="mr-2 text-gray-400" />
                          <span className="text-gray-600">
                            {fileName || 'Upload PDF, DOC, DOCX (Max 5MB)'}
                          </span>
                          <input
                            id="resume"
                            name="resume"
                            type="file"
                            onChange={handleChange}
                            accept=".pdf,.doc,.docx"
                            className="hidden"
                          />
                        </label>
                        {errors.resume && <p className="text-red-500 text-sm mt-1">{errors.resume}</p>}
                      </div>

                      <Button type="submit" variant="primary" className="w-full" size="lg">
                        Submit Application
                      </Button>
                    </form>
                  </div>
                ) : (
                  <div className="p-12 text-center">
                    <div className="flex justify-center mb-6">
                      <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
                        <CheckCircle2 className="text-green-600" size={40} />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      Application Submitted!
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Thank you for applying to Finanshels. We'll review your application 
                      and get back to you within 5-7 business days.
                    </p>
                    <Link to="/jobs">
                      <Button variant="outline">
                        View other positions
                      </Button>
                    </Link>
                  </div>
                )}
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Job Description */}
      <section className="py-20 px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto">
          {job.jd.map((section, idx) => (
            <div key={idx} className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {section.h}
              </h2>
              <ul className="space-y-4">
                {section.bullets.map((bullet, bulletIdx) => (
                  <li key={bulletIdx} className="flex items-start gap-3">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-primary flex-shrink-0" />
                    <span className="text-gray-700 text-lg leading-relaxed">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Benefits */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              What we offer
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {job.benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-3 p-4 rounded-xl bg-indigo-50 border border-indigo-100">
                  <CheckCircle2 className="text-brand-primary flex-shrink-0" size={20} />
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Apply CTA */}
          {!submitted && (
            <div className="mt-16 p-8 rounded-2xl bg-gradient-brand text-white text-center">
              <h3 className="text-2xl font-bold mb-3">
                Ready to join our team?
              </h3>
              <p className="text-gray-300 mb-6">
                Submit your application and let's build something great together
              </p>
              <Button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="bg-white text-brand-primary hover:bg-gray-100"
                size="lg"
              >
                Apply now
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
