import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Calendar, Clock, MapPin, Users, Building, ArrowRight, Briefcase, TrendingUp, UserPlus, Phone } from 'lucide-react'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import AnimatedSection from '../components/AnimatedSection'

export default function DubaiWalkIn() {
  useEffect(() => {
    const container = document.getElementById("zf_div_Nd5iBx1DHYXNsmCcT0cDv18NwH_OrTNqcZIfRTVKcac");
    
    if (container && container.children.length === 0) {
      try {
        const iframe = document.createElement("iframe");
        let ifrmSrc = 'https://forms.zohopublic.com/finanshelsllc/form/RegisterNow/formperma/Nd5iBx1DHYXNsmCcT0cDv18NwH_OrTNqcZIfRTVKcac?zf_rszfm=1';
        
        try {
          if (typeof window.ZFAdvLead !== "undefined" && typeof window.zfutm_zfAdvLead !== "undefined") {
            for (let prmIdx = 0; prmIdx < window.ZFAdvLead.utmPNameArr.length; prmIdx++) {
              let utmPm = window.ZFAdvLead.utmPNameArr[prmIdx];
              utmPm = (window.ZFAdvLead.isSameDomian && (window.ZFAdvLead.utmcustPNameArr.indexOf(utmPm) == -1)) ? "zf_" + utmPm : utmPm;
              const utmVal = window.zfutm_zfAdvLead.zfautm_gC_enc(window.ZFAdvLead.utmPNameArr[prmIdx]);
              if (typeof utmVal !== "undefined" && utmVal != "") {
                ifrmSrc = ifrmSrc + (ifrmSrc.indexOf('?') > 0 ? '&' : '?') + utmPm + '=' + utmVal;
              }
            }
          }
          if (typeof window.ZFLead !== "undefined" && typeof window.zfutm_zfLead !== "undefined") {
            for (let prmIdx = 0; prmIdx < window.ZFLead.utmPNameArr.length; prmIdx++) {
              const utmPm = window.ZFLead.utmPNameArr[prmIdx];
              const utmVal = window.zfutm_zfLead.zfutm_gC_enc(window.ZFLead.utmPNameArr[prmIdx]);
              if (typeof utmVal !== "undefined" && utmVal != "") {
                ifrmSrc = ifrmSrc + (ifrmSrc.indexOf('?') > 0 ? '&' : '?') + utmPm + '=' + utmVal;
              }
            }
          }
        } catch (e) {}
        
        iframe.src = ifrmSrc;
        iframe.style.border = "none";
        iframe.style.height = "100%";
        iframe.style.width = "100%";
        iframe.style.transition = "all 0.5s ease";
        iframe.setAttribute("aria-label", 'Register Now');
        
        container.appendChild(iframe);
        
        const messageHandler = (event) => {
          const evntData = event.data;
          if (evntData && evntData.constructor == String) {
            const zf_ifrm_data = evntData.split("|");
            if (zf_ifrm_data.length == 2 || zf_ifrm_data.length == 3) {
              const zf_perma = zf_ifrm_data[0];
              const zf_ifrm_ht_nw = (parseInt(zf_ifrm_data[1], 10) + 15) + "px";
              const iframeEl = container.getElementsByTagName("iframe")[0];
              
              if (iframeEl && (iframeEl.src).indexOf('formperma') > 0 && (iframeEl.src).indexOf(zf_perma) > 0) {
                const prevIframeHeight = iframeEl.style.height;
                let zf_tout = false;
                
                if (zf_ifrm_data.length == 3) {
                  iframeEl.scrollIntoView();
                  zf_tout = true;
                }
                
                if (prevIframeHeight != zf_ifrm_ht_nw) {
                  if (zf_tout) {
                    setTimeout(() => {
                      iframeEl.style.height = zf_ifrm_ht_nw;
                    }, 500);
                  } else {
                    iframeEl.style.height = zf_ifrm_ht_nw;
                  }
                }
              }
            }
          }
        };
        
        window.addEventListener('message', messageHandler, false);
      } catch (e) {}
    }
  }, [])

  const positions = [
    { id: 'dw-field-sales-executive', title: 'Field Sales Executive', openings: 2, category: 'Sales', experience: '2-4 years', link: '/dubai-walkin/field-sales-executive' },
    { id: 'dw-business-development', title: 'Business Development Executive', openings: 2, category: 'Business Development', experience: '2-4 years', link: '/dubai-walkin/business-development' },
    { id: 'dw-partnerships-manager', title: 'Partnerships Manager', openings: 2, category: 'Partnerships', experience: '2-4 years', link: '/dubai-walkin/partnerships-manager' },
    { id: 'dw-appointment-setter', title: 'Appointment Setter', openings: 2, category: 'Partnerships', experience: '2-4 years', link: '/dubai-walkin/appointment-setter' }
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
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold mb-6 sm:mb-8 tracking-tighter leading-tight sm:leading-[0.95] text-white">
              Dubai Walk-In<br />
              <span className="bg-gradient-to-r from-blue-200 via-cyan-200 to-blue-200 bg-clip-text text-transparent">
                Career Drive 2025
              </span>
            </h1>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={200}>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/90 mb-8 sm:mb-12 max-w-4xl leading-relaxed font-medium">
              Walk in with your CV! We're hiring for <span className="text-white font-bold">Sales & Business Development roles</span>.{' '}
              Meet our team face-to-face and experience our 3-step interview process.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={300}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <div className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                <Calendar className="text-blue-200 flex-shrink-0" size={20} />
                <div>
                  <div className="text-xs sm:text-sm text-gray-200">Date</div>
                  <div className="font-semibold text-sm sm:text-base">Nov 23, 2025</div>
                </div>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                <Clock className="text-amber-200 flex-shrink-0" size={20} />
                <div>
                  <div className="text-xs sm:text-sm text-gray-200">Timing</div>
                  <div className="font-semibold text-sm sm:text-base">10 AM - 5 PM</div>
                </div>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                <MapPin className="text-emerald-200 flex-shrink-0" size={20} />
                <div>
                  <div className="text-xs sm:text-sm text-gray-200">Venue</div>
                  <div className="font-semibold text-xs sm:text-sm">Publishing Pavilion, Dubai Production City</div>
                </div>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                <Users className="text-indigo-200 flex-shrink-0" size={20} />
                <div>
                  <div className="text-xs sm:text-sm text-gray-200">Openings</div>
                  <div className="font-semibold text-sm sm:text-base">Multiple Positions</div>
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
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-4 sm:mb-6 tracking-tighter">
                We're Looking For
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto font-medium">
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
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-4 sm:mb-6 tracking-tighter">
                How It Works
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto font-medium">
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
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-4 sm:mb-6 tracking-tighter">
                Confirm Your Spot
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-medium">
                Pre-register to fast-track your interview and skip the queue
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={100}>
            <Card className="border-2 border-orange-200 bg-white shadow-2xl">
              <div className="p-8 sm:p-12">
                <div 
                  id="zf_div_Nd5iBx1DHYXNsmCcT0cDv18NwH_OrTNqcZIfRTVKcac"
                  className="w-full"
                />
              </div>
              <p className="text-sm text-slate-600 pb-8 text-center">
                * Registration is optional. You can also walk in directly with your CV.
              </p>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 sm:px-8 lg:px-12 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 sm:mb-6 tracking-tight">
              Questions About The Walk-In Drive?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/80 mb-6 sm:mb-8 font-medium">
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

