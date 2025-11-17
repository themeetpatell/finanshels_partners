import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, MapPin, Clock, Briefcase, Users, Target, CheckCircle, Calendar, FileText } from 'lucide-react'
import { Button } from '../../components/ui/Button'
import { Card } from '../../components/ui/Card'
import AnimatedSection from '../../components/AnimatedSection'

export default function FieldSalesExecutive() {
  useEffect(() => {
    const container = document.getElementById("zf_div_BZK-2-ktKxnWHX8ezcNuyr0R96GTpqeuptkWvXjiOBY");
    
    if (container && container.children.length === 0) {
      try {
        const iframe = document.createElement("iframe");
        let ifrmSrc = 'https://forms.zohopublic.com/finanshelsllc/form/FieldSalesExecutive/formperma/BZK-2-ktKxnWHX8ezcNuyr0R96GTpqeuptkWvXjiOBY?zf_rszfm=1';
        
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
        iframe.setAttribute("aria-label", 'Field Sales Executive');
        
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
      <div className="py-16 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content - Left Side */}
            <div className="lg:col-span-2">
          <AnimatedSection animation="fade-up">
            <Link to="/dubai-walkin" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold mb-8 group">
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              Back to Dubai Walk-In
            </Link>

            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-sm font-bold mb-4">
                📞 Field Sales
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
                Field Sales Executive
              </h1>
              <div className="flex flex-wrap gap-4 text-slate-600 font-medium">
                <div className="flex items-center gap-2">
                  <MapPin size={18} className="text-blue-600" />
                  Dubai, UAE
                </div>
                <div className="flex items-center gap-2">
                  <Briefcase size={18} className="text-blue-600" />
                  Full-Time
                </div>
                <div className="flex items-center gap-2">
                  <Users size={18} className="text-blue-600" />
                  Multiple Openings
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={100}>
            <Card className="mb-6 bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200">
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Calendar className="text-blue-600" size={28} />
                  <h3 className="text-2xl font-bold text-slate-900">Walk-In Details</h3>
                </div>
                <div className="space-y-2 text-slate-700 font-medium">
                  <p><strong>Date:</strong> November 23, 2025 (Saturday)</p>
                  <p><strong>Time:</strong> 10:00 AM - 5:00 PM</p>
                  <p><strong>Venue:</strong> 413, Publishing Pavilion, Dubai Production City, Dubai, UAE</p>
                  <p className="text-blue-600 font-bold mt-4">Walk in with your CV and meet our team!</p>
                </div>
              </div>
            </Card>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={200}>
            <Card className="mb-6">
              <div className="p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">About the Role</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  We're looking for motivated sales professionals to join our Dubai team. You'll be responsible for generating new business opportunities, building relationships with potential clients, and driving revenue growth in the MENA region.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  This is a high-energy role perfect for individuals who thrive in a fast-paced fintech environment and are passionate about building relationships with startups and SMBs.
                </p>
              </div>
            </Card>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={300}>
            <Card className="mb-6">
              <div className="p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <Target className="text-blue-600" size={28} />
                  Key Responsibilities
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-slate-700">Identify and reach out to potential clients through cold calling, email campaigns, and LinkedIn outreach</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-slate-700">Generate qualified leads and schedule meetings with decision-makers at startups and SMBs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-slate-700">Present Finanshels' services and value propositions to potential clients</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-slate-700">Build and maintain a robust sales pipeline using CRM tools</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-slate-700">Work closely with the partnerships team to close deals and onboard new clients</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-slate-700">Achieve monthly and quarterly sales targets</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-slate-700">Provide market feedback and insights to help improve our offerings</span>
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
                    <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-slate-700">1-3 years of experience in field sales or business development</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-slate-700">Proven track record of meeting or exceeding sales targets</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-slate-700">Excellent communication and negotiation skills</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-slate-700">Experience with CRM tools (HubSpot, Salesforce, Zoho CRM)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-slate-700">Self-motivated with a strong work ethic</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={20} />
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
                    <span className="text-slate-700">Experience in fintech or B2B SaaS sales</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-slate-700">Knowledge of the MENA startup ecosystem</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-slate-700">Multilingual abilities (Arabic is a plus)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-slate-700">Strong LinkedIn prospecting skills</span>
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
                    <span className="text-slate-700">Competitive base salary + attractive commission structure</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-slate-700">Health insurance and visa sponsorship</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-slate-700">Professional development and growth opportunities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-slate-700">Work with a fast-growing fintech backed by MBRIF and in5 Tech</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-slate-700">Collaborative team environment in Dubai</span>
                  </li>
                </ul>
              </div>
            </Card>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={700}>
            <Card className="mb-8">
              <div className="p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">What We're Looking For</h2>
                <p className="text-slate-700 leading-relaxed">
                  We're seeking driven sales professionals who can build lasting relationships with clients in the MENA region. If you're passionate about fintech, thrive in fast-paced environments, and have a proven track record in sales, we'd love to meet you at our walk-in drive!
                </p>
              </div>
            </Card>
          </AnimatedSection>
            </div>

            {/* Sidebar Form - Right Side */}
            <div className="lg:col-span-1">
              <AnimatedSection>
                <div className="sticky top-24">
                  <Card className="shadow-xl bg-white overflow-hidden">
                    <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-6 text-white">
                      <FileText className="mb-2" size={28} />
                      <h3 className="text-2xl font-bold mb-1">Apply Now</h3>
                      <p className="text-blue-50 text-sm">Join our sales team</p>
                    </div>
                    
                    <div 
                      id="zf_div_BZK-2-ktKxnWHX8ezcNuyr0R96GTpqeuptkWvXjiOBY"
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

