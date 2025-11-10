import { Link } from 'react-router-dom'
import { ArrowRight, Users, MapPin, Zap, Star, Award, TrendingUp, Target, Sparkles, Building } from 'lucide-react'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import StatCard from '../components/StatCard'
import TeamCard from '../components/TeamCard'
import TestimonialCard from '../components/TestimonialCard'
import LeadershipCard from '../components/LeadershipCard'
import AnimatedSection from '../components/AnimatedSection'
import FloatingCard from '../components/FloatingCard'
import AnimatedCounter from '../components/AnimatedCounter'
import { TEAMS } from '../data/jobs'
import { LEADERSHIP_TEAM, TESTIMONIALS, ACHIEVEMENTS, COMPANY_VALUES } from '../data/team'

export default function Home() {

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-40 pb-12 px-6 sm:px-8 lg:px-12 bg-white overflow-hidden">
        {/* Grid pattern background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] pointer-events-none"></div>
        
        {/* Gradient orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-indigo-400/30 to-purple-400/30 rounded-full blur-3xl animate-float"></div>
          <div className="absolute top-20 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <AnimatedSection animation="fade-down">
              <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white border border-slate-200 text-sm font-semibold text-slate-700 mb-10 shadow-sm hover:shadow-md transition-all hover:border-slate-300">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                We're hiring across all teams
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-up" delay={100}>
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-extrabold text-slate-900 mb-8 tracking-tighter leading-[0.95]">
                Build the finance<br/>
                engine for the{' '}
                <span className="relative inline-block">
                  <span className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 blur-2xl opacity-30"></span>
                  <span className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Business world
                  </span>
                </span>
              </h1>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-up" delay={200}>
              <p className="text-xl sm:text-2xl text-slate-600 mb-14 max-w-3xl mx-auto leading-relaxed font-medium">
                Join Finanshels and help <span className="text-slate-900 font-semibold">2M+ startups</span> across MENA automate their financial operations.{' '}
                <span className="text-slate-900 font-semibold">Move fast. Build for founders. Ship excellence.</span>
              </p>
            </AnimatedSection>

            <AnimatedSection animation="scale" delay={300}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
                <Link to="/jobs">
                  <Button size="lg" variant="primary" className="group w-full sm:w-auto text-lg h-14 px-10 shadow-2xl shadow-indigo-500/30 hover:shadow-indigo-500/50">
                    See open roles
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={22} />
                  </Button>
                </Link>
                <Link to="/life">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg h-14 px-10 hover:bg-white hover:text-indigo-600 border-2">
                    Life at Finanshels
                  </Button>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>


      {/* Company Metrics Section */}
      <section className="py-16 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 text-sm font-bold text-indigo-700 mb-6">
                <Sparkles size={16} />
                Trusted by Thousands
              </div>
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <h2 className="text-5xl sm:text-6xl font-extrabold text-slate-900 mb-6 tracking-tighter">
                Building the Future of{' '}
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  MENA Fintech
                </span>
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <p className="text-2xl text-slate-600 max-w-3xl mx-auto font-medium">
                A rapidly growing Accounting and Fintech company backed by <span className="text-slate-900 font-bold">top investors</span> and trusted by thousands
              </p>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <AnimatedSection animation="fade-up" delay={0}>
              <FloatingCard>
                <Card className="h-full hover:shadow-2xl transition-all duration-500 border-2 border-slate-100 hover:border-indigo-200 bg-gradient-to-br from-white to-indigo-50/30">
                  <div className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 mb-3 shadow-lg">
                      <Users className="text-white" size={24} />
                    </div>
                    <div className="text-4xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
                      <AnimatedCounter end={135} duration={2000} />+
                    </div>
                    <div className="text-slate-700 font-bold text-sm">Team Members</div>
                  </div>
                </Card>
              </FloatingCard>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-up" delay={100}>
              <FloatingCard>
                <Card className="h-full hover:shadow-2xl transition-all duration-500 border-2 border-slate-100 hover:border-purple-200 bg-gradient-to-br from-white to-purple-50/30">
                  <div className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 mb-3 shadow-lg">
                      <Building className="text-white" size={24} />
                    </div>
                    <div className="text-4xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                      <AnimatedCounter end={5000} duration={2000} />+
                    </div>
                    <div className="text-slate-700 font-bold text-sm">Active Clients</div>
                  </div>
                </Card>
              </FloatingCard>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-up" delay={200}>
              <FloatingCard>
                <Card className="h-full hover:shadow-2xl transition-all duration-500 border-2 border-slate-100 hover:border-pink-200 bg-gradient-to-br from-white to-pink-50/30">
                  <div className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-indigo-600 mb-3 shadow-lg">
                      <Star className="text-white" size={24} />
                    </div>
                    <div className="text-4xl font-extrabold bg-gradient-to-r from-pink-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                      4.9<span className="text-3xl">/5</span>
                    </div>
                    <div className="text-slate-700 font-bold text-sm">Client Rating</div>
                  </div>
                </Card>
              </FloatingCard>
            </AnimatedSection>
          </div>

          {/* Backed By Section */}
          <div className="mt-16">
            <AnimatedSection>
              <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl border border-slate-200 p-8 shadow-md">
                <div className="text-center">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-bold text-slate-700 mb-6">
                    <Award size={14} className="text-indigo-600" />
                    Backed by leading investors
                  </div>
                  <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16">
                    <div className="group cursor-pointer">
                      <div className="text-2xl md:text-3xl font-black text-slate-300 group-hover:text-slate-900 transition-all duration-300 group-hover:scale-110 transform">
                        MBRIF
                      </div>
                    </div>
                    <div className="w-px h-8 bg-slate-300"></div>
                    <div className="group cursor-pointer">
                      <div className="text-2xl md:text-3xl font-black text-slate-300 group-hover:text-slate-900 transition-all duration-300 group-hover:scale-110 transform">
                        in5 Tech
                      </div>
                    </div>
                    <div className="w-px h-8 bg-slate-300"></div>
                    <div className="group cursor-pointer">
                      <div className="text-2xl md:text-3xl font-black text-slate-300 group-hover:text-slate-900 transition-all duration-300 group-hover:scale-110 transform">
                        Kube VC
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-12 px-6 sm:px-8 lg:px-12 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {ACHIEVEMENTS.map((achievement, idx) => (
              <AnimatedSection key={idx} animation="fade-up" delay={idx * 50}>
                <div className="text-center p-4">
                  <div className="text-3xl mb-2">{achievement.icon}</div>
                  <h3 className="text-sm font-bold text-slate-900 mb-1">
                    {achievement.title}
                  </h3>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 px-6 sm:px-8 lg:px-12 bg-gradient-to-b from-white to-brand-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
              What drives us
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our values aren't just words on a wall - they guide every decision we make
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {COMPANY_VALUES.map((value, idx) => (
              <Card key={idx} className="hover:shadow-xl hover:border-brand-primary/50 transition-all duration-300 group">
                <div className="p-8">
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 px-6 sm:px-8 lg:px-12 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 text-sm font-bold text-indigo-700 mb-6">
                <Users size={16} />
                Leadership Team
              </div>
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <h2 className="text-5xl sm:text-6xl font-extrabold text-slate-900 mb-6 tracking-tighter">
                Meet our leaders
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <p className="text-2xl text-slate-600 max-w-3xl mx-auto font-medium">
                Experienced founders and operators from <span className="text-slate-900 font-bold">world's top companies</span>
              </p>
            </AnimatedSection>
          </div>

          {/* Horizontal Scrolling Leadership Team */}
          <div className="relative">
            <div className="overflow-x-auto scrollbar-hide pb-8" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              <div className="flex gap-6 px-4" style={{ width: 'max-content' }}>
                {LEADERSHIP_TEAM.map((leader, idx) => (
                  <div key={leader.name} className="w-[240px] flex-shrink-0">
                    <Card className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-slate-200 hover:border-indigo-300 overflow-hidden h-full">
                      <div className="p-5 text-center">
                        <div className="relative mb-3 inline-block">
                          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                          <img 
                            src={leader.image} 
                            alt={leader.name}
                            className="w-20 h-20 rounded-2xl mx-auto ring-2 ring-slate-100 group-hover:ring-indigo-200 transition-all duration-500 relative object-cover"
                          />
                          <a
                            href={leader.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="absolute -bottom-1 -right-1 p-1.5 bg-gradient-to-br from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg shadow-indigo-500/30 hover:scale-110"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                            </svg>
                          </a>
                        </div>
                        
                        <h3 className="text-sm font-bold text-slate-900 mb-1 leading-tight">
                          {leader.name}
                        </h3>
                        <div className="text-xs text-indigo-600 font-semibold mb-2">
                          {leader.role}
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                          {leader.bio}
                        </p>
                      </div>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
            {/* Gradient overlays for scroll indication */}
            <div className="absolute left-0 top-0 bottom-8 w-20 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-8 w-20 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 sm:px-8 lg:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 text-sm font-bold text-indigo-700 mb-6">
                <Star size={16} className="fill-indigo-700" />
                What our team says
              </div>
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <h2 className="text-5xl sm:text-6xl font-extrabold text-slate-900 mb-6 tracking-tighter">
                Hear from our people
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto font-medium">
                Real stories from team members who are <span className="text-slate-900 font-bold">building something special</span>
              </p>
            </AnimatedSection>
          </div>

          {/* Horizontal Scrolling Testimonials */}
          <div className="relative">
            <div className="overflow-x-auto scrollbar-hide pb-8" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              <div className="flex gap-6 px-4" style={{ width: 'max-content' }}>
                {TESTIMONIALS.map((testimonial, idx) => (
                  <div key={idx} className="w-[400px] flex-shrink-0">
                    <TestimonialCard testimonial={testimonial} />
                  </div>
                ))}
              </div>
            </div>
            {/* Gradient overlays for scroll indication */}
            <div className="absolute left-0 top-0 bottom-8 w-20 bg-gradient-to-r from-slate-50 to-transparent pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-8 w-20 bg-gradient-to-l from-slate-50 to-transparent pointer-events-none"></div>
          </div>
        </div>
      </section>

      {/* Virtual Drive Banner */}
      <section className="py-24 px-6 sm:px-8 lg:px-12 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff15_1px,transparent_1px),linear-gradient(to_bottom,#ffffff15_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <AnimatedSection animation="scale">
            <Card className="bg-white/95 backdrop-blur-xl hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-white overflow-hidden">
              <div className="p-10 sm:p-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-bold mb-6 animate-pulse shadow-xl">
                      🔥 Happening Soon
                    </div>
                    <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
                      Virtual Hiring Drive
                      <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Nov 15-16, 2025</span>
                    </h2>
                    <p className="text-xl text-slate-600 mb-8 font-medium leading-relaxed">
                      <span className="text-slate-900 font-bold">14+ openings</span> across Accounting & Internships - this is your chance!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-5">
                      <Link to="/virtual-drive">
                        <Button size="lg" variant="primary" className="group w-full sm:w-auto shadow-2xl shadow-indigo-500/40">
                          Register Now
                          <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={22} />
                        </Button>
                      </Link>
                    </div>
                  </div>
                  <div className="hidden lg:block">
                    <div className="grid grid-cols-2 gap-6">
                      <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-3xl border-2 border-indigo-100 hover:border-indigo-200 transition-all hover:scale-105 duration-300">
                        <div className="text-4xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">14+</div>
                        <div className="text-slate-600 font-semibold text-sm">Open Positions</div>
                      </div>
                      <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-3xl border-2 border-purple-100 hover:border-purple-200 transition-all hover:scale-105 duration-300">
                        <div className="text-4xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">2 Days</div>
                        <div className="text-slate-600 font-semibold text-sm">Fast Process</div>
                      </div>
                      <div className="bg-gradient-to-br from-pink-50 to-indigo-50 p-8 rounded-3xl border-2 border-pink-100 hover:border-pink-200 transition-all hover:scale-105 duration-300">
                        <div className="text-4xl font-extrabold bg-gradient-to-r from-pink-600 to-indigo-600 bg-clip-text text-transparent mb-2">Virtual</div>
                        <div className="text-slate-600 font-semibold text-sm">Google Meet</div>
                      </div>
                      <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-3xl border-2 border-indigo-100 hover:border-indigo-200 transition-all hover:scale-105 duration-300">
                        <div className="text-4xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">UAE and India</div>
                        <div className="text-slate-600 font-semibold text-sm">Offices</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 sm:px-8 lg:px-12 bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600 rounded-full blur-3xl opacity-20 animate-float"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600 rounded-full blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <AnimatedSection>
            <h2 className="text-5xl sm:text-6xl font-extrabold mb-8 tracking-tighter leading-tight text-white">
              Ready to make an impact?
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <p className="text-2xl sm:text-3xl text-white/90 mb-12 leading-relaxed font-medium max-w-3xl mx-auto">
              Join Finanshels and help shape the future of finance operations for startups across MENA
            </p>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <Link to="/jobs">
              <Button 
                size="lg" 
                variant="outline" 
                className="group bg-white/10 backdrop-blur-xl text-white border-2 border-white hover:bg-white hover:text-slate-900 shadow-2xl text-lg h-16 px-12"
              >
                View open roles
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={22} />
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
