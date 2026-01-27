import { useState, useEffect } from 'react'
import { CheckCircle, TrendingUp, Users, DollarSign, Zap, Award, ArrowRight, Globe2, Sparkles } from 'lucide-react'
import SEO from '../components/SEO'

export default function PartnerLanding() {
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    // Inject Zoho UTM tracking script
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.innerHTML = `
function ZFAdvLead(){
}
ZFAdvLead.utmPValObj = ZFAdvLead.utmPValObj || {};

ZFAdvLead.utmPNameArr = new Array('utm_source','utm_medium','utm_campaign','utm_term','utm_content');ZFAdvLead.utmcustPNameArr = new Array();ZFAdvLead.isSameDomain = false;

ZFAdvLead.prototype.zfautm_sC = function( paramName,path,domain,secure ){
  var value = ZFAdvLead.utmPValObj[paramName];
  if ( typeof value !== "undefined" && value !== null ){
    var cookieStr = paramName + "=" + encodeURIComponent( value );
    var exdate=new Date();
    exdate.setDate(exdate.getDate()+7);
    cookieStr += "; expires=" + exdate.toGMTString();
    cookieStr += "; path=/";
    if ( domain ) {
      cookieStr += "; domain=" + encodeURIComponent( domain );
    }
    if ( secure ) {
      cookieStr += "; secure";
    }
    document.cookie = cookieStr;
  }
};
ZFAdvLead.prototype.zfautm_ini = function (){
  this.zfautm_bscPCap();
  var url_search = document.location.search;
  for (var i = 0; i < ZFAdvLead.utmcustPNameArr.length ; i ++){
    var zf_pN = ZFAdvLead.utmcustPNameArr[i];
    var zf_pV;
    if ( zf_pN == 'referrername' ) {
      zf_pV = ( document.URL || '' ).slice( 0, 1500 );
    } else {
      zf_pV = this.zfautm_gP(url_search, zf_pN);
      if (zf_pV == undefined || zf_pV == ''){
          zf_pV = this.zfautm_gC(zf_pN);
      }
    }
    if ( typeof zf_pV !== "undefined" && zf_pV !== null & zf_pV != "" ) {
      ZFAdvLead.utmPValObj[ zf_pN ] = zf_pV;
    }
  }
  for (var pkey in ZFAdvLead.utmPValObj) {
    this.zfautm_sC(pkey);
  }
};
ZFAdvLead.prototype.zfautm_bscPCap = function () {
  var trafSrc = this.zfautm_calcTrafSrc();
  if ( trafSrc.source != "" ) {
    ZFAdvLead.utmPValObj.utm_source = trafSrc.source;
  }
  if ( trafSrc.medium != "" ) {
    ZFAdvLead.utmPValObj.utm_medium = trafSrc.medium;
  }
  if ( trafSrc.campaign != "" ) {
    ZFAdvLead.utmPValObj.utm_campaign = trafSrc.campaign;
  }
  if ( trafSrc.term != "" ) {
    ZFAdvLead.utmPValObj.utm_term = trafSrc.term;
  }
  if ( trafSrc.content != "" ) {
    ZFAdvLead.utmPValObj.utm_content = trafSrc.content;
  }
}
ZFAdvLead.prototype.zfautm_calcTrafSrc = function() {
  var u1='', u2='', u3='', u4='', u5='';
  var search_engines = [['bing', 'q'], ['google', 'q'], ['yahoo', 'q'], ['baidu', 'q'], ['yandex', 'q'], ['ask', 'q']];
  var ref = document.referrer;
  ref = ref.substr(ref.indexOf('//')+2);
  ref_domain = ref;
  ref_path = '/';
  ref_search = '';

  var url_search = document.location.search;
  if(url_search.indexOf('utm_source') > -1 || url_search.indexOf('utm_medium') > -1 || url_search.indexOf('utm_campaign') > -1 || url_search.indexOf('utm_term') > -1 || url_search.indexOf('utm_content') > -1) {
    u1 = this.zfautm_gP(url_search, 'utm_source'); 
    u2 = this.zfautm_gP(url_search, 'utm_medium'); 
    u3 = this.zfautm_gP(url_search, 'utm_campaign'); 
    u4 = this.zfautm_gP(url_search, 'utm_term'); 
    u5 = this.zfautm_gP(url_search, 'utm_content'); 
  } else if ( this.zfautm_gP(url_search, 'gclid')) {
    u1 = 'Google Ads'; 
    u2 = 'cpc'; 
    u3 = '(not set)'; 
    if ( !ZFAdvLead.utmcustPNameArr.includes('gclid') ) {
      ZFAdvLead.utmcustPNameArr.push('gclid');
    }
  } else if(ref) {
    var r_u1 = this.zfautm_gC('utm_source'); 
    var r_u2 = this.zfautm_gC('utm_medium'); 
    var r_u3 = this.zfautm_gC('utm_campaign'); 
    var r_u4 = this.zfautm_gC('utm_term'); 
    var r_u5 = this.zfautm_gC('utm_content'); 
    if ( typeof r_u1 === "undefined" && typeof r_u2 === "undefined" && typeof r_u3 === "undefined" && typeof r_u4 === "undefined" && typeof r_u5 === "undefined") {
      if (ref.indexOf('/') > -1) {
        ref_domain = ref.substr(0,ref.indexOf('/'));
        ref_path = ref.substr(ref.indexOf('/'));
        if (ref_path.indexOf('?') > -1) {
          ref_search = ref_path.substr(ref_path.indexOf('?'));
          ref_path = ref_path.substr(0, ref_path.indexOf('?'));
        }
      }
      u2 = 'referral'; 
      u1 = ref_domain;                    
      for (var i=0; i<search_engines.length; i++){
        if(ref_domain.indexOf(search_engines[i][0]) > -1){
          u2 = 'organic'; 
          u1 = search_engines[i][0];
          u4 = this.zfautm_gP(ref_search, search_engines[i][1]) || '(not provided)';
          break;
        }
      }
    } else {
      if ( typeof r_u1 !== "undefined" ) {
        u1 = r_u1;
      }
      if ( typeof r_u2 !== "undefined" ) {
          u2 = r_u2;
      }
      if ( typeof r_u3 !== "undefined" ) {
        u3 = r_u3;
      }
      if ( typeof r_u4 !== "undefined" ) {
        u4 = r_u4;
      }
      if ( typeof r_u5 !== "undefined" ) {
        u5 = r_u5;
      }
    }
  } else {
    var r_u1 = this.zfautm_gC('utm_source'); 
    var r_u2 = this.zfautm_gC('utm_medium'); 
    var r_u3 = this.zfautm_gC('utm_campaign'); 
    var r_u4 = this.zfautm_gC('utm_term'); 
    var r_u5 = this.zfautm_gC('utm_content'); 
    if ( typeof r_u1 === "undefined" && typeof r_u2 === "undefined" && typeof r_u3 === "undefined" && typeof r_u4 === "undefined" && typeof r_u5 === "undefined") {
      var locRef = document.URL;
      locRef = locRef.substr(locRef.indexOf('//')+2);
      if (locRef.indexOf('/') > -1) {
        locRef = locRef.substr(0,locRef.indexOf('/'));
      }
      u1 = locRef;
      u2 = 'referral'; 
    } else {
      if ( typeof r_u1 !== "undefined" ) {
        u1 = r_u1;
      }
      if ( typeof r_u2 !== "undefined" ) {
        u2 = r_u2;
      }
      if ( typeof r_u3 !== "undefined" ) {
        u3 = r_u3;
      }
      if ( typeof r_u4 !== "undefined" ) {
        u4 = r_u4;
      }
      if ( typeof r_u5 !== "undefined" ) {
        u5 = r_u5;
      }
    }
  }
  return {
    'source'  : u1, 
    'medium'  : u2, 
    'campaign': u3, 
    'term'    : u4, 
    'content' : u5 
  };
}
ZFAdvLead.prototype.zfautm_gP = function(s, q) {
  try{
      var match = s.match('[?&]' + q + '=([^&]+)');
      if ( match ) {
        if ( match[1].length > 199 ) {
          var raw = decodeURIComponent(match[1]);
          raw = raw.replace(/[^A-Za-z0-9_]/g, '');
          return raw.slice( 0, 199 );
        } else {
          return decodeURIComponent(match[1]);
        }
        
      } else {
        return '';
      }
  } catch(e){
    return '';  
  }
}
ZFAdvLead.prototype.zfautm_gC = function( cookieName ){
  var cookieArr = document.cookie.split('; ');
  for ( var i = 0 ; i < cookieArr.length ; i ++ ){
    var cookieVals = cookieArr[i].split('=');
      if ( cookieVals[0] === cookieName && cookieVals[1] ) {
        return decodeURIComponent(cookieVals[1]);
      }
  }
};
ZFAdvLead.prototype.zfautm_gC_enc = function( cookieName ){
  var cookieArr = document.cookie.split('; ');
  for ( var i = 0 ; i < cookieArr.length ; i ++ ){
    var cookieVals = cookieArr[i].split('=');
      if ( cookieVals[0] === cookieName && cookieVals[1] ) {
        return cookieVals[1];
      }
  }
};
ZFAdvLead.prototype.zfautm_iframeSprt = function () {
  var zf_frame = document.getElementsByTagName("iframe");
  for(var i = 0; i < zf_frame.length; ++i){
    if((zf_frame[i].src).indexOf('formperma') > 0 ){
      var zf_src = zf_frame[i].src;
      for( var prmIdx = 0 ; prmIdx < ZFAdvLead.utmPNameArr.length ; prmIdx ++ ) {
        var utmPm = ZFAdvLead.utmPNameArr[ prmIdx ];
        utmPm = ( ZFAdvLead.isSameDomain && ( ZFAdvLead.utmcustPNameArr.indexOf(utmPm) == -1 ) ) ? "zf_" + utmPm : utmPm;
        var utmPmregex = new RegExp("[?&]" + utmPm + "=");
        if ( ! utmPmregex.test(zf_src) ) {
          var utmVal = this.zfautm_gC_enc( ZFAdvLead.utmPNameArr[ prmIdx ] );
          if ( typeof utmVal !== "undefined" ) {
            if ( utmVal != "" ){
              if(zf_src.indexOf('?') > 0){
                zf_src = zf_src+'&'+utmPm+'='+ utmVal;
              }else{
                zf_src = zf_src+'?'+utmPm+'='+ utmVal;
              }
            }
          }
        }
      }
      if ( zf_frame[i].src.length < zf_src.length ) {
        zf_frame[i].src = zf_src;
      }
    }
  }
};
ZFAdvLead.prototype.zfautm_DHtmlSprt = function () {
  var zf_formsArr = document.forms;
  for ( var frmInd = 0 ; frmInd < zf_formsArr.length ; frmInd ++ ) {
    var zf_form_act = zf_formsArr[frmInd].action;
      if ( zf_form_act && zf_form_act.indexOf('formperma') > 0 ){
        for( var prmIdx = 0 ; prmIdx < ZFAdvLead.utmPNameArr.length ; prmIdx ++ ) {
          var utmPm = ZFAdvLead.utmPNameArr[ prmIdx ];
          var utmVal = this.zfautm_gC( ZFAdvLead.utmPNameArr[ prmIdx ] );
          if ( typeof utmVal !== "undefined" ) {
            if ( utmVal != "" ) {
              var fieldObj = zf_formsArr[frmInd][utmPm];
            if ( fieldObj ) {
              fieldObj.value = utmVal;
            }
          }
        }
      }
    }
  }
};
ZFAdvLead.prototype.zfautm_jsEmbedSprt = function ( id ) {
  document.getElementById('zforms_iframe_id').removeAttribute("onload");
  var jsEmbdFrm = document.getElementById("zforms_iframe_id");
  var embdSrc = jsEmbdFrm.src;
  for( var prmIdx = 0 ; prmIdx < ZFAdvLead.utmPNameArr.length ; prmIdx ++ ) {
    var utmPm = ZFAdvLead.utmPNameArr[ prmIdx ];
    utmPm = ( ZFAdvLead.isSameDomain && ( ZFAdvLead.utmcustPNameArr.indexOf(utmPm) == -1 ) ) ? "zf_" + utmPm : utmPm;
    var utmVal = this.zfautm_gC_enc( ZFAdvLead.utmPNameArr[ prmIdx ] );
    if ( typeof utmVal !== "undefined" ) {
      if ( utmVal != "" ) {
        if(embdSrc.indexOf('?') > 0){
                    embdSrc = embdSrc+'&'+utmPm+'='+utmVal;
        }else{
            embdSrc = embdSrc+'?'+utmPm+'='+utmVal;
        }
      }
    }
  }
  jsEmbdFrm.src = embdSrc;
};
var zfutm_zfAdvLead = new ZFAdvLead();
zfutm_zfAdvLead.zfautm_ini();
if( document.readyState == "complete" ){
    zfutm_zfAdvLead.zfautm_iframeSprt();
    zfutm_zfAdvLead.zfautm_DHtmlSprt();
} else {
  window.addEventListener('load', function (){
        zfutm_zfAdvLead.zfautm_iframeSprt();
        zfutm_zfAdvLead.zfautm_DHtmlSprt();
  }, false);
}
    `
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [])

  return (
    <>
      <SEO
        title="Partner with Finanshels - Earn up to AED 1,500 per referral"
        description="Join hundreds partners earning recurring commissions by referring UAE businesses. Fast payouts, live tracking, and dedicated support."
        path="/partner"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        {/* Hero Section */}
        <section className="relative overflow-hidden border-b border-white/10">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))]" style={{background: 'radial-gradient(ellipse at top, rgba(241, 102, 16, 0.2), rgb(2, 6, 23), rgb(2, 6, 23))'}}></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 sm:pt-28 sm:pb-32">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Content */}
              <div className="space-y-8">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-300 text-sm font-semibold">
                  <Sparkles size={16} />
                  <span>100+ Active Partners • AED 5M+ in Partner Commissions Paid</span>
                </div>

                {/* Headline */}
                <div className="space-y-4">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                    Turn Your Network Into
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600" style={{WebkitBackgroundClip: 'text', backgroundClip: 'text'}}>
                      Recurring Revenue
                    </span>
                  </h1>
                  <p className="text-xl text-slate-300 leading-relaxed">
                    Partner with UAE's #1 finance & accounting platform. Earn up to <span className="text-orange-500 font-semibold">AED 1,500 per client</span> or <span className="text-orange-500 font-semibold">up to 40%</span> recurring commissions.
                  </p>
                </div>

                {/* Stats Bar */}
                <div className="grid grid-cols-2 gap-6 pt-4">
                  <div className="space-y-1">
                    <div className="text-3xl sm:text-4xl font-bold text-white">9.4</div>
                    <div className="text-sm text-slate-400">Partner NPS</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-3xl sm:text-4xl font-bold text-white">24-48h</div>
                    <div className="text-sm text-slate-400">First Payout</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-3xl sm:text-4xl font-bold text-white">100+</div>
                    <div className="text-sm text-slate-400">Active Partners</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-3xl sm:text-4xl font-bold text-white">97%</div>
                    <div className="text-sm text-slate-400">Lead Acceptance</div>
                  </div>
                </div>
              </div>

              {/* Right Column - Form */}
              <div className="lg:sticky lg:top-8">
                <form
                  action='https://forms.zohopublic.com/finanshelsllc/form/BecomeAPartner/formperma/d19zcz10OpfXsB8mkqnY9g7FnlXiNS1g9sLUusbUIeQ/htmlRecords/submit'
                  name='form'
                  id='form'
                  method='POST'
                  acceptCharset='UTF-8'
                  encType='multipart/form-data'
                  className="rounded-3xl border-2 border-orange-500/40 bg-white p-8 space-y-5 shadow-2xl"
                >
                  <input type="hidden" name="zf_referrer_name" value="" />
                  <input type="hidden" name="zf_redirect_url" value="" />
                  <input type="hidden" name="zc_gad" value="" />
                  <input type="hidden" name="utm_source" value="" />
                  <input type="hidden" name="utm_medium" value="" />
                  <input type="hidden" name="utm_campaign" value="" />
                  <input type="hidden" name="utm_term" value="" />
                  <input type="hidden" name="utm_content" value="" />

                  <div className="text-center mb-2">
                    <h2 className="text-2xl font-bold text-slate-900 mb-2">Apply Now</h2>
                    <p className="text-sm text-slate-600">Get response within 24 hours</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <label className="flex flex-col gap-1.5">
                      <span className="text-xs font-semibold text-slate-900">
                        First Name <span className="text-orange-600">*</span>
                      </span>
                      <input
                        type="text"
                        maxLength="255"
                        name="Name_First"
                        fieldType={7}
                        placeholder="John"
                        required
                        className="rounded-lg border border-slate-300 bg-slate-50 px-3 py-2.5 text-slate-900 text-sm placeholder:text-slate-400 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/40 transition-all"
                      />
                    </label>

                    <label className="flex flex-col gap-1.5">
                      <span className="text-xs font-semibold text-slate-900">
                        Last Name <span className="text-orange-600">*</span>
                      </span>
                      <input
                        type="text"
                        maxLength="255"
                        name="Name_Last"
                        fieldType={7}
                        placeholder="Doe"
                        required
                        className="rounded-lg border border-slate-300 bg-slate-50 px-3 py-2.5 text-slate-900 text-sm placeholder:text-slate-400 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/40 transition-all"
                      />
                    </label>
                  </div>

                  <label className="flex flex-col gap-1.5">
                    <span className="text-xs font-semibold text-slate-900">
                      Email <span className="text-orange-600">*</span>
                    </span>
                    <input
                      type="text"
                      maxLength="255"
                      name="Email"
                      fieldType={9}
                      placeholder="john@company.com"
                      required
                      className="rounded-lg border border-slate-300 bg-slate-50 px-3 py-2.5 text-slate-900 text-sm placeholder:text-slate-400 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/40 transition-all"
                    />
                  </label>

                  <label className="flex flex-col gap-1.5">
                    <span className="text-xs font-semibold text-slate-900">
                      WhatsApp Number <span className="text-orange-600">*</span>
                    </span>
                    <input
                      type="text"
                      compname="PhoneNumber"
                      name="PhoneNumber_countrycode"
                      phoneFormat="1"
                      isCountryCodeEnabled="false"
                      maxLength="20"
                      fieldType={11}
                      id="international_PhoneNumber_countrycode"
                      placeholder="+971 50 123 4567"
                      required
                      className="rounded-lg border border-slate-300 bg-slate-50 px-3 py-2.5 text-slate-900 text-sm placeholder:text-slate-400 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/40 transition-all"
                    />
                  </label>

                  <label className="flex flex-col gap-1.5">
                    <span className="text-xs font-semibold text-slate-900">
                      Company Name <span className="text-orange-600">*</span>
                    </span>
                    <input
                      type="text"
                      name="SingleLine1"
                      fieldType={1}
                      maxLength="255"
                      placeholder="Acme Consulting"
                      required
                      className="rounded-lg border border-slate-300 bg-slate-50 px-3 py-2.5 text-slate-900 text-sm placeholder:text-slate-400 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/40 transition-all"
                    />
                  </label>

                  <button
                    type="submit"
                    className="w-full rounded-lg bg-[#F16610] hover:bg-[#d95a0d] px-6 py-3 text-base font-semibold text-white shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2"
                    style={{backgroundColor: '#F16610'}}
                  >
                    <span>Submit Application</span>
                    <ArrowRight size={18} />
                  </button>

                  <p className="text-xs text-slate-600 text-center leading-relaxed">
                    By submitting, you agree to our partnership terms. We'll contact you within 1 business day.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 sm:py-24 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                Why Partner with Finanshels?
              </h2>
              <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                Built for consultants, advisors, and businesses who value transparency and results.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {[
                {
                  icon: DollarSign,
                  title: 'High Earning Potential',
                  description: 'Up to AED 1,500 per qualified referral or up to 40% recurring commissions for channel partners.',
                  gradient: 'from-green-500 to-emerald-500',
                },
                {
                  icon: Zap,
                  title: 'Fast Payouts',
                  description: 'Get paid within 24-48 hours of client onboarding. No waiting 30-90 days like other programs.',
                  gradient: 'from-yellow-500 to-orange-500',
                },
                {
                  icon: TrendingUp,
                  title: 'Live Tracking',
                  description: 'See exactly where each lead is in real-time. No black box—full transparency on every referral.',
                  gradient: 'from-orange-500 to-orange-600',
                },
                {
                  icon: Users,
                  title: 'Dedicated Support',
                  description: 'Your own partnerships lead available via WhatsApp. Get answers in minutes, not days.',
                  gradient: 'from-purple-500 to-pink-500',
                },
                {
                  icon: Award,
                  title: 'Partner Rewards',
                  description: 'Top performers get exclusive perks: safaris, trips, investor dinners, and media features.',
                  gradient: 'from-rose-500 to-red-500',
                },
                {
                  icon: Globe2,
                  title: 'Proven Track Record',
                  description: '4.9★ on Trustpilot with 5,000+ happy clients. Your referrals are in expert hands.',
                  gradient: 'from-orange-500 to-orange-600',
                },
              ].map((benefit, idx) => (
                <div
                  key={idx}
                  className="group relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-6 hover:border-white/20 transition-all duration-300 hover:scale-105"
                >
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${benefit.gradient} mb-4`}>
                    <benefit.icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-slate-300 leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 sm:py-24 border-b border-white/10 bg-gradient-to-b from-slate-950 to-slate-900">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                Get Started in 3 Simple Steps
              </h2>
              <p className="text-lg text-slate-300">
                From application to first payout in under one week.
              </p>
            </div>

            <div className="space-y-8">
              {[
                {
                  step: '01',
                  title: 'Apply & Get Approved',
                  description: 'Fill out the form below. Our team reviews and responds within 1 business day with your partner portal access.',
                },
                {
                  step: '02',
                  title: 'Start Referring',
                  description: 'Use your personalized referral link and co-branded materials to introduce UAE businesses to Finanshels.',
                },
                {
                  step: '03',
                  title: 'Track & Earn',
                  description: 'Watch leads move through stages in real-time. Get paid within 24-48h after client onboarding.',
                },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold text-white" style={{background: 'linear-gradient(to bottom right, #F16610, #d95a0d)'}}>
                    {item.step}
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-slate-300 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 sm:py-28 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-orange-600/10 to-orange-500/10"></div>
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Join Hundreds of Partners Earning Today
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Start generating revenue from your network. No upfront costs, no complicated contracts.
            </p>
            <p className="text-sm text-slate-400">
              Questions? Email <a href="mailto:partnership@finanshels.com" className="text-orange-500 hover:text-orange-400 underline">partnership@finanshels.com</a>
            </p>
          </div>
        </section>
      </div>
    </>
  )
}
