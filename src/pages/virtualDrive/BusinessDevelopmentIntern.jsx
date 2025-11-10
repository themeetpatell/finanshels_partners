import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { MapPin, Briefcase, Users, Calendar, Clock, ArrowLeft, CheckCircle, Star } from 'lucide-react'
import { Card } from '../../components/ui/Card'
import AnimatedSection from '../../components/AnimatedSection'

export default function BusinessDevelopmentIntern() {
  const job = {
    title: "Business Development Intern",
    category: "Internship",
    openings: "Multiple",
    location: "Ahmedabad/Hybrid",
    type: "Internship - 3 months",
    description: "Drive business growth through lead generation, partnership outreach, and appointment setting for our fintech platform.",
    responsibilities: [
      "Research and identify potential clients and partners",
      "Conduct outbound calls and emails for lead generation",
      "Schedule appointments for the sales team",
      "Maintain CRM database with accurate lead information",
      "Qualify leads based on established criteria",
      "Support partnership development initiatives",
      "Create outreach email templates and scripts",
      "Track and report on outreach metrics",
      "Assist with sales presentations and proposals"
    ],
    requirements: [
      "Currently pursuing or completed degree in Business, Marketing, or related field",
      "Excellent communication skills (verbal and written)",
      "Confident and persuasive personality",
      "Strong research and analytical skills",
      "Proficiency in MS Office and Google Suite",
      "Self-motivated and target-oriented",
      "Ability to handle rejection positively",
      "Interest in sales and business development"
    ],
    niceToHave: [
      "Previous sales or business development experience",
      "Experience with CRM tools (Salesforce, HubSpot)",
      "Knowledge of B2B sales processes",
      "Understanding of fintech or SaaS industry",
      "LinkedIn prospecting skills",
      "Cold calling experience",
      "Bilingual capabilities (English + Hindi/Gujarati)"
    ],
    benefits: [
      "Performance-based bonuses",
      "Sales training and mentorship",
      "Certificate and letter of recommendation",
      "Potential for full-time sales role",
      "Learn B2B sales and partnerships",
      "Fast-paced startup environment"
    ]
  }

  useEffect(() => {
    const container = document.getElementById("zf_div_51jMQGnCCjcuYrT-31JGEpYe70jVv76IHR9k9m5eNag")
    
    if (container && container.querySelector('iframe')) {
      return
    }
    
    const loadForm = () => {
      try {
        const iframe = document.createElement("iframe")
        const ifrmSrc = 'https://forms.zohopublic.com/finanshelsllc/form/BusinessDevelopmentIntern/formperma/51jMQGnCCjcuYrT-31JGEpYe70jVv76IHR9k9m5eNag?zf_rszfm=1'
        
        iframe.src = ifrmSrc
        iframe.style.border = "none"
        iframe.style.height = "1053px"
        iframe.style.width = "100%"
        iframe.style.transition = "all 0.5s ease"
        iframe.setAttribute("aria-label", 'Business Development Intern')
        
        const container = document.getElementById("zf_div_51jMQGnCCjcuYrT-31JGEpYe70jVv76IHR9k9m5eNag")
        if (container) {
          container.innerHTML = ''
          container.appendChild(iframe)
        }
        
        const handleMessage = (event) => {
          const evntData = event.data
          if (evntData && evntData.constructor === String) {
            const zf_ifrm_data = evntData.split("|")
            if (zf_ifrm_data.length === 2 || zf_ifrm_data.length === 3) {
              const zf_perma = zf_ifrm_data[0]
              const zf_ifrm_ht_nw = (parseInt(zf_ifrm_data[1], 10) + 15) + "px"
              const container = document.getElementById("zf_div_51jMQGnCCjcuYrT-31JGEpYe70jVv76IHR9k9m5eNag")
              if (container) {
                const iframe = container.getElementsByTagName("iframe")[0]
                if (iframe && iframe.src.indexOf('formperma') > 0 && iframe.src.indexOf(zf_perma) > 0) {
                  const prevIframeHeight = iframe.style.height
                  if (prevIframeHeight !== zf_ifrm_ht_nw) {
                    iframe.style.height = zf_ifrm_ht_nw
                  }
                }
              }
            }
          }
        }
        
        window.addEventListener('message', handleMessage)
        
        return () => {
          window.removeEventListener('message', handleMessage)
        }
      } catch(e) {
        console.error('Error loading Zoho form:', e)
      }
    }
    
    const cleanup = loadForm()
    
    return () => {
      if (cleanup) cleanup()
      const container = document.getElementById("zf_div_51jMQGnCCjcuYrT-31JGEpYe70jVv76IHR9k9m5eNag")
      if (container) {
        container.innerHTML = ''
      }
    }
  }, [])

  return (
    <div className="min-h-screen pt-20 bg-white">
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
                  <span className="font-semibold">{job.openings} Openings</span>
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
                        <div className="text-slate-600 text-sm">9:00 AM - 6:00 PM</div>
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

      <section className="py-20 px-6 sm:px-8 lg:px-12 bg-gradient-to-b from-white via-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
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

            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <Card className="border-2 border-slate-200 shadow-xl overflow-hidden bg-white">
                  <div 
                    id="zf_div_51jMQGnCCjcuYrT-31JGEpYe70jVv76IHR9k9m5eNag"
                    className="w-full"
                  />
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

