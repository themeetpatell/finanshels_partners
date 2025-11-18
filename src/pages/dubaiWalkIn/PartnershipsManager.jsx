import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, MapPin, Clock, Briefcase, Users, Target, CheckCircle, Calendar, UserPlus, FileText } from 'lucide-react'
import { Button } from '../../components/ui/Button'
import { Card } from '../../components/ui/Card'
import AnimatedSection from '../../components/AnimatedSection'

export default function PartnershipsManager() {
  useEffect(() => {
    const container = document.getElementById("zf_div_SMR_M9LuF2KZv2MIDJ9UdGAx1avIS5hhiSlRyLS537M");
    
    if (container && container.children.length === 0) {
      try {
        const iframe = document.createElement("iframe");
        let ifrmSrc = 'https://forms.zohopublic.com/finanshelsllc/form/PartnershipManager/formperma/SMR_M9LuF2KZv2MIDJ9UdGAx1avIS5hhiSlRyLS537M?zf_rszfm=1';
        
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
        iframe.style.height = "900px";
        iframe.style.width = "100%";
        iframe.style.transition = "all 0.5s ease";
        iframe.style.overflow = "hidden";
        iframe.style.display = "block";
        iframe.setAttribute("aria-label", 'Partnership Manager');
        
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
        
        return () => {
          window.removeEventListener('message', messageHandler);
        };
      } catch (e) {}
    }
  }, []);
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white pt-20">
      <div className="py-12 sm:py-16 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Main Content - Left Side */}
            <div className="lg:col-span-2">
          <AnimatedSection animation="fade-up">
            <Link to="/dubai-walkin" className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 font-semibold mb-6 sm:mb-8 group text-sm sm:text-base">
              <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
              Back to Dubai Walk-In
            </Link>

            <div className="mb-6 sm:mb-8">
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-amber-600 to-orange-600 text-white text-xs sm:text-sm font-bold mb-3 sm:mb-4">
                🤝 Strategic Partnerships
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
                Partnerships Manager
              </h1>
              <div className="flex flex-wrap gap-3 sm:gap-4 text-slate-600 font-medium text-sm sm:text-base">
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-amber-600 flex-shrink-0" />
                  Dubai, UAE
                </div>
                <div className="flex items-center gap-2">
                  <Briefcase size={16} className="text-amber-600 flex-shrink-0" />
                  Full-Time
                </div>
                <div className="flex items-center gap-2">
                  <Users size={16} className="text-amber-600 flex-shrink-0" />
                  2 Openings
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={100}>
            <Card className="mb-6 bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200">
              <div className="p-4 sm:p-6 md:p-8">
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <Calendar className="text-amber-600 flex-shrink-0" size={24} />
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900">Walk-In Details</h3>
                </div>
                <div className="space-y-2 text-slate-700 font-medium text-sm sm:text-base">
                  <p><strong>Date:</strong> November 23, 2025 (Saturday)</p>
                  <p><strong>Time:</strong> 10:00 AM - 5:00 PM</p>
                  <p className="break-words"><strong>Venue:</strong> 413, Publishing Pavilion, Dubai Production City, Dubai, UAE</p>
                  <p className="text-amber-600 font-bold mt-3 sm:mt-4">Walk in with your CV and meet our team!</p>
                </div>
              </div>
            </Card>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={200}>
            <Card className="mb-6">
              <div className="p-4 sm:p-6 md:p-8">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4">About the Role</h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-3 sm:mb-4">
                  We're seeking an experienced Partnerships Manager to build and nurture strategic relationships with key stakeholders in the MENA startup ecosystem. You'll be responsible for identifying partnership opportunities, negotiating agreements, and driving growth through collaborative initiatives.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  This role is ideal for someone with strong relationship-building skills who can navigate complex partnership landscapes and create win-win scenarios with accelerators, VCs, government entities, and corporate partners.
                </p>
              </div>
            </Card>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={300}>
            <Card className="mb-6">
              <div className="p-4 sm:p-6 md:p-8">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 sm:mb-6 flex items-center gap-2">
                  <Target className="text-amber-600 flex-shrink-0" size={24} />
                  Key Responsibilities
                </h2>
                <ul className="space-y-3 sm:space-y-4">
                  <li className="flex items-start gap-2 sm:gap-3">
                    <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={18} />
                    <span className="text-sm sm:text-base text-slate-700">Identify and develop strategic partnerships with accelerators, VCs, government entities, and corporate partners</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-slate-700">Negotiate partnership agreements and manage contract processes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-slate-700">Build and maintain relationships with key decision-makers in the MENA ecosystem</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-slate-700">Develop partnership strategies to drive client acquisition and revenue growth</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-slate-700">Coordinate with internal teams to ensure successful partnership execution</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-slate-700">Track partnership performance metrics and provide regular reports</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-slate-700">Represent Finanshels at industry events and networking functions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-slate-700">Create partnership proposals and presentations for potential partners</span>
                  </li>
                </ul>
              </div>
            </Card>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={400}>
            <Card className="mb-6">
              <div className="p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Required Qualifications</h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-amber-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-slate-700">3-5 years of experience in partnerships, business development, or strategic alliances</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-amber-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-slate-700">Proven track record of building successful partnerships and driving revenue</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-amber-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-slate-700">Excellent negotiation and contract management skills</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-amber-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-slate-700">Strong network in the MENA startup ecosystem</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-amber-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-slate-700">Exceptional communication and presentation skills</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-amber-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-slate-700">Strategic thinking and problem-solving abilities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-amber-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-slate-700">Bachelor's degree in Business, Marketing, or related field</span>
                  </li>
                </ul>
              </div>
            </Card>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={500}>
            <Card className="mb-6">
              <div className="p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Preferred Skills</h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-slate-700">Experience in fintech or B2B SaaS partnerships</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-slate-700">Existing relationships with UAE/MENA accelerators and VCs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-slate-700">MBA or equivalent advanced degree</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-slate-700">Multilingual abilities (Arabic is a strong plus)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-slate-700">Experience with partnership CRM and tracking tools</span>
                  </li>
                </ul>
              </div>
            </Card>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={600}>
            <Card className="mb-8">
              <div className="p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">What We Offer</h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-slate-700">Competitive salary package with performance bonuses</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-slate-700">Health insurance and visa sponsorship</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-slate-700">Opportunity to build partnerships with leading ecosystem players</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-slate-700">Work with a fast-growing fintech backed by MBRIF and in5 Tech</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-slate-700">High-impact role with direct influence on company growth</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-slate-700">Professional development and networking opportunities</span>
                  </li>
                </ul>
              </div>
            </Card>
          </AnimatedSection>
            </div>

            {/* Sidebar Form - Right Side */}
            <div className="lg:col-span-1">
              <AnimatedSection>
                <div className="sticky top-24">
                  <Card className="shadow-xl bg-white overflow-hidden">
                    <div className="bg-gradient-to-r from-amber-600 to-orange-600 p-4 sm:p-6 text-white">
                      <FileText className="mb-2" size={24} />
                      <h3 className="text-xl sm:text-2xl font-bold mb-1">Apply Now</h3>
                      <p className="text-amber-50 text-xs sm:text-sm">Join our partnerships team</p>
                    </div>
                    
                    <div 
                      id="zf_div_SMR_M9LuF2KZv2MIDJ9UdGAx1avIS5hhiSlRyLS537M"
                      className="w-full"
                    />
                  </Card>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

