import { Link } from 'react-router-dom'
import { 
  Zap, Heart, Users, TrendingUp, Target, Lightbulb, 
  DollarSign, Heart as HeartPulse, Home, BookOpen, 
  Baby, Laptop, PartyPopper, 
  Dumbbell, Globe, ArrowRight, Award, Clock, Smile,
  Sparkles, Rocket, Coffee, Check
} from 'lucide-react'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import AnimatedSection from '../components/AnimatedSection'

export default function Life() {
  const cultureValues = [
    {
      icon: Target,
      title: "Mission Driven",
      description: "We're passionate about democratizing finance and making financial services accessible to every startup across MENA."
    },
    {
      icon: Zap,
      title: "High Velocity",
      description: "We move fast, ship often, and iterate constantly. Speed is our competitive advantage in serving founders."
    },
    {
      icon: Heart,
      title: "Founder Empathy",
      description: "We build for founders because we are founders. Every decision starts with understanding their pain points."
    },
    {
      icon: Lightbulb,
      title: "Excellence as Standard",
      description: "Good enough isn't good enough. We set high bars, maintain quality, and continuously raise our standards."
    }
  ]

  const coreValues = [
    {
      number: "01",
      title: "Customer Obsession",
      description: "Start with the customer and work backward.",
      gradient: "from-indigo-500 to-purple-600"
    },
    {
      number: "02",
      title: "Earn Trust",
      description: "Be honest. Ask for and act on feedback. Be reachable.",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      number: "03",
      title: "Learn Fast & Be curious",
      description: "Build a deeper level of subject matter expertise and ask more questions and admit if you don't know.",
      gradient: "from-pink-500 to-indigo-600"
    },
    {
      number: "04",
      title: "Ownership",
      description: "Not waiting for others to act, and take initiatives and bring positive results. Be accountable for the results of your actions.",
      gradient: "from-indigo-600 to-purple-500"
    },
    {
      number: "05",
      title: "Insight on high standards",
      description: "Set exceptionally high demands of yourself and the products and services you work on. Continually self-critique your work to make sure the quality is the best it can be.",
      gradient: "from-purple-600 to-pink-500"
    },
    {
      number: "06",
      title: "Innovate and simplify",
      description: "Make something simpler for customers and find new ways to improve existing services/product.",
      gradient: "from-pink-600 to-indigo-500"
    },
    {
      number: "07",
      title: "Think Big",
      description: "Opportunity to do something much bigger or better than the initial focus.",
      gradient: "from-indigo-500 to-purple-600"
    }
  ]

  const perks = [
    { icon: DollarSign, title: "Competitive salary + equity", description: "Top-of-market compensation" },
    { icon: HeartPulse, title: "Health insurance", description: "Comprehensive coverage" },
    { icon: Home, title: "Hybrid flexibility", description: "Office + remote options" },
    { icon: BookOpen, title: "Learning budget", description: "Annual L&D allowance" },
    { icon: Baby, title: "Parental leave", description: "Paid leave for new parents" },
    { icon: PartyPopper, title: "Team offsites", description: "Quarterly team events" },
    { icon: Dumbbell, title: "Gym membership", description: "Fitness center access" },
    { icon: Globe, title: "Work from anywhere", description: "Remote-friendly culture" }
  ]

  const stats = [
    { number: "200+", label: "Team Members", icon: Users },
    { number: "15+", label: "Countries", icon: Globe },
    { number: "42%", label: "Women in Tech", icon: Award },
    { number: "4.97/5", label: "Employee Rating", icon: Smile }
  ]

  const workingHere = [
    {
      title: "Autonomy & Trust",
      description: "We hire exceptional people and trust them to do exceptional work. You'll own your domain and make real impact from day one.",
      icon: Rocket
    },
    {
      title: "Collaborative Environment",
      description: "Cross-functional collaboration is in our DNA. Work closely with product, engineering, design, and ops teams.",
      icon: Users
    },
    {
      title: "Fast-Paced Growth",
      description: "We're scaling rapidly across MENA. That means more responsibility, faster learning, and accelerated career growth.",
      icon: TrendingUp
    },
    {
      title: "Modern Tech Stack",
      description: "Work with cutting-edge technologies. We use React, Node.js, TypeScript, PostgreSQL, AWS, and the best tools in the industry.",
      icon: Laptop
    }
  ]

  return (
    <div className="min-h-screen relative">
      {/* Onboarding Sidebar */}
      <div className="hidden xl:block fixed right-0 top-1/2 -translate-y-1/2 z-40 w-80">
        <AnimatedSection animation="fade-left">
          <Card className="border-2 border-orange-300 shadow-2xl bg-gradient-to-br from-orange-50 to-amber-50 m-4">
            <div className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="text-orange-600 animate-pulse" size={20} />
                <div className="text-sm font-extrabold text-orange-700 uppercase">New Joiner?</div>
              </div>
              
              <h3 className="text-xl font-extrabold text-slate-900 mb-3 leading-tight">
                Preview Our Digital Onboarding
              </h3>
              
              <p className="text-sm text-slate-700 mb-4 leading-relaxed">
                Experience our interactive onboarding journey with 22 steps, 6 badges, and gamification!
              </p>

              {/* Mini Preview */}
              <div className="mb-4 p-3 rounded-lg bg-white border border-orange-200">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex-1 h-1.5 bg-slate-200 rounded-full overflow-hidden">
                    <div className="h-full w-2/3 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
                  </div>
                  <div className="text-xs font-bold text-blue-600">67%</div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-red-50 to-pink-50 border border-red-100 text-center">
                    <div className="text-xl mb-1">❤️</div>
                    <div className="text-[10px] font-bold text-slate-800">Values</div>
                  </div>
                  <div className="p-2 rounded-lg bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 text-center">
                    <div className="text-xl mb-1">🏆</div>
                    <div className="text-[10px] font-bold text-slate-800">Badges</div>
                  </div>
                </div>
              </div>

              <Link to="/onboarding">
                <Button 
                  size="sm"
                  className="w-full bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white font-bold shadow-xl group"
                >
                  Start Preview
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                </Button>
              </Link>

              {/* Badge Icon */}
              <div className="absolute -top-3 -right-3 w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-xl text-xl ring-2 ring-amber-200 animate-bounce">
                ✨
              </div>
            </div>
          </Card>
        </AnimatedSection>
      </div>

      {/* Hero Section */}
      <section className="relative pt-48 pb-40 px-6 sm:px-8 lg:px-12 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-indigo-500 rounded-full blur-3xl opacity-20 animate-float"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-500 rounded-full blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-bold mb-8">
              <Heart size={16} className="text-pink-300" />
              Life at Finanshels
            </div>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-extrabold mb-8 tracking-tighter leading-[0.95] text-white">
              Where Dreams Meet{' '}
              <span className="bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 bg-clip-text text-transparent">
                Execution
              </span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <p className="text-2xl sm:text-3xl text-white/90 max-w-4xl mx-auto mb-12 leading-relaxed font-medium">
              Join a team that's <span className="text-white font-bold">rewriting the rules</span> of fintech. 
              Where your ideas matter, your growth is unlimited, and your impact is real.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={300}>
            <Link to="/jobs">
              <Button size="lg" className="bg-white/10 backdrop-blur-xl text-white border-2 border-white hover:bg-white hover:text-slate-900 shadow-2xl text-lg h-16 px-12 font-bold group">
                Explore open roles
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={22} />
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Emotional Quote Section */}
      <section className="py-32 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <AnimatedSection>
            <div className="text-6xl mb-8">💜</div>
            <blockquote className="text-4xl sm:text-5xl font-bold text-slate-900 mb-8 leading-tight tracking-tight">
              "We don't just build products.<br />
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                We build futures.
              </span>"
            </blockquote>
            <p className="text-xl text-slate-600 font-medium">
              Every line of code, every customer call, every strategy session - 
              they all contribute to empowering founders across MENA.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Core Values - Bold Statement Cards */}
      <section className="py-32 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <AnimatedSection>
              <h2 className="text-5xl sm:text-6xl font-extrabold text-slate-900 mb-8 tracking-tighter">
                Our Core Values
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <p className="text-2xl text-slate-600 font-medium">
                The <span className="text-slate-900 font-bold">non-negotiable principles</span> that guide everything we do
              </p>
            </AnimatedSection>
          </div>

          <div className="space-y-8">
            {coreValues.map((value, idx) => (
              <AnimatedSection key={idx} animation="fade-up" delay={idx * 100}>
                <Card className="hover:shadow-2xl transition-all duration-500 border-2 border-slate-200 hover:border-transparent group overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-r ${value.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  <div className="p-10 flex items-start gap-8 relative">
                    <div className={`text-8xl font-extrabold bg-gradient-to-r ${value.gradient} bg-clip-text text-transparent leading-none opacity-40 group-hover:opacity-100 transition-opacity duration-500`}>
                      {value.number}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-3xl font-bold text-slate-900 mb-4 group-hover:text-indigo-600 transition-colors">
                        {value.title}
                      </h3>
                      <p className="text-slate-600 text-xl leading-relaxed font-medium">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* What It's Like Working Here */}
      <section className="py-32 px-6 sm:px-8 lg:px-12 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-indigo-200 text-sm font-bold text-indigo-700 mb-6">
                <Coffee size={16} />
                The Experience
              </div>
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <h2 className="text-5xl sm:text-6xl font-extrabold text-slate-900 mb-8 tracking-tighter">
                What it's like{' '}
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  working here
                </span>
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <p className="text-2xl text-slate-600 max-w-3xl mx-auto font-medium">
                Fast-paced, collaborative, and <span className="text-slate-900 font-bold">deeply impactful</span>
              </p>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {workingHere.map((item, idx) => (
              <AnimatedSection key={idx} animation="fade-up" delay={idx * 100}>
                <Card className="h-full hover:shadow-2xl hover:border-transparent transition-all duration-500 border-2 border-slate-200 group">
                  <div className="p-10">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-4 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/30 group-hover:scale-110 transition-transform">
                        <item.icon size={28} />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-slate-600 leading-relaxed text-lg font-medium">
                      {item.description}
                    </p>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Life at Finanshels Gallery */}
      <section className="py-32 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 text-sm font-bold text-indigo-700 mb-6">
                <Sparkles size={16} />
                Life at Finanshels
              </div>
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <h2 className="text-5xl sm:text-6xl font-extrabold text-slate-900 mb-6 tracking-tighter">
                Moments that{' '}
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  matter
                </span>
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <p className="text-2xl text-slate-600 max-w-3xl mx-auto font-medium">
                From team celebrations to everyday wins - see what makes Finanshels special
              </p>
            </AnimatedSection>
          </div>

          {/* Masonry Gallery */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {/* Large Image - Top Left */}
            <AnimatedSection animation="fade-up" delay={0}>
              <div className="col-span-2 row-span-2 relative group overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="aspect-square bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="text-6xl mb-4">🎉</div>
                    <p className="text-slate-600 font-semibold">Team Celebration</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </AnimatedSection>

            {/* Small Image */}
            <AnimatedSection animation="fade-up" delay={100}>
              <div className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="aspect-square bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="text-4xl mb-2">💻</div>
                    <p className="text-slate-600 font-semibold text-sm">Team Work</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Small Image */}
            <AnimatedSection animation="fade-up" delay={150}>
              <div className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="aspect-square bg-gradient-to-br from-pink-100 to-indigo-100 flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="text-4xl mb-2">🚀</div>
                    <p className="text-slate-600 font-semibold text-sm">Launch Day</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Tall Image */}
            <AnimatedSection animation="fade-up" delay={200}>
              <div className="row-span-2 relative group overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="aspect-[3/4] bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="text-5xl mb-4">🏆</div>
                    <p className="text-slate-600 font-semibold">Award Night</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Small Image */}
            <AnimatedSection animation="fade-up" delay={250}>
              <div className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="aspect-square bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="text-4xl mb-2">☕</div>
                    <p className="text-slate-600 font-semibold text-sm">Coffee Breaks</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Wide Image */}
            <AnimatedSection animation="fade-up" delay={300}>
              <div className="col-span-2 relative group overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="aspect-[2/1] bg-gradient-to-br from-pink-100 to-indigo-100 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="text-5xl mb-4">🎂</div>
                    <p className="text-slate-600 font-semibold">Birthday Celebrations</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Small Image */}
            <AnimatedSection animation="fade-up" delay={350}>
              <div className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="aspect-square bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="text-4xl mb-2">🎮</div>
                    <p className="text-slate-600 font-semibold text-sm">Game Night</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Tall Image */}
            <AnimatedSection animation="fade-up" delay={400}>
              <div className="row-span-2 relative group overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="aspect-[3/4] bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="text-5xl mb-4">🌍</div>
                    <p className="text-slate-600 font-semibold">Team Offsite</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Small Image */}
            <AnimatedSection animation="fade-up" delay={450}>
              <div className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="aspect-square bg-gradient-to-br from-pink-100 to-indigo-100 flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="text-4xl mb-2">💡</div>
                    <p className="text-slate-600 font-semibold text-sm">Hackathon</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Wide Image */}
            <AnimatedSection animation="fade-up" delay={500}>
              <div className="col-span-2 relative group overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="aspect-[2/1] bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="text-5xl mb-4">🎤</div>
                    <p className="text-slate-600 font-semibold">All Hands Meeting</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Small Image */}
            <AnimatedSection animation="fade-up" delay={550}>
              <div className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="aspect-square bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="text-4xl mb-2">🍕</div>
                    <p className="text-slate-600 font-semibold text-sm">Team Lunch</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Perks & Benefits */}
      <section className="py-32 px-6 sm:px-8 lg:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 text-sm font-bold text-indigo-700 mb-6">
                <Heart size={16} />
                Benefits
              </div>
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <h2 className="text-5xl sm:text-6xl font-extrabold text-slate-900 mb-8 tracking-tighter">
                We take care of our team
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <p className="text-2xl text-slate-600 font-medium max-w-3xl mx-auto">
                Comprehensive perks and benefits that support your <span className="text-slate-900 font-bold">whole self</span>
              </p>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {perks.map((perk, idx) => (
              <AnimatedSection key={idx} animation="fade-up" delay={idx * 30}>
                <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-slate-200 hover:border-indigo-300 group h-full">
                  <div className="p-6 text-center">
                    <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white mb-4 mx-auto shadow-lg shadow-indigo-500/30 group-hover:scale-110 transition-transform">
                      <perk.icon size={26} />
                    </div>
                    <h4 className="font-bold text-slate-900 mb-2 text-sm leading-tight">
                      {perk.title}
                    </h4>
                    <p className="text-xs text-slate-600 font-medium">
                      {perk.description}
                    </p>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 px-6 sm:px-8 lg:px-12 bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600 rounded-full blur-3xl opacity-20 animate-float"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600 rounded-full blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <AnimatedSection>
            <div className="text-6xl mb-8">🚀</div>
            <h2 className="text-5xl sm:text-6xl font-extrabold mb-8 tracking-tighter leading-tight text-white">
              Ready to make history?
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <p className="text-2xl sm:text-3xl text-white/90 mb-12 leading-relaxed font-medium max-w-3xl mx-auto">
              Join us in building the <span className="text-white font-bold">financial infrastructure</span> for MENA's next generation of startups
            </p>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <Link to="/jobs">
              <Button 
                size="lg" 
                className="bg-white/10 backdrop-blur-xl text-white border-2 border-white hover:bg-white hover:text-slate-900 shadow-2xl text-lg h-16 px-12 font-bold group"
              >
                View open positions
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={22} />
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Mobile Onboarding CTA - Shows on small screens */}
      <section className="xl:hidden py-20 px-6 sm:px-8 lg:px-12 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="max-w-2xl mx-auto">
          <AnimatedSection>
            <Card className="border-2 border-orange-300 shadow-2xl bg-gradient-to-br from-white to-orange-50">
              <div className="p-8">
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="text-orange-600 animate-pulse" size={24} />
                  <div className="text-sm font-extrabold text-orange-700 uppercase">New Joiner Experience</div>
                </div>
                
                <h3 className="text-3xl font-extrabold text-slate-900 mb-4 leading-tight">
                  Experience Our{' '}
                  <span className="bg-gradient-to-r from-orange-500 to-amber-600 bg-clip-text text-transparent">
                    World-Class Onboarding
                  </span>
                </h3>
                
                <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                  Preview our interactive digital onboarding with 22 steps, 6 badges, and gamification!
                </p>

                <div className="grid grid-cols-3 gap-3 mb-6">
                  <div className="text-center p-3 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200">
                    <div className="text-2xl font-extrabold text-blue-600 mb-1">22</div>
                    <div className="text-xs text-slate-600 font-semibold">Steps</div>
                  </div>
                  <div className="text-center p-3 rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200">
                    <div className="text-2xl font-extrabold text-amber-600 mb-1">6</div>
                    <div className="text-xs text-slate-600 font-semibold">Badges</div>
                  </div>
                  <div className="text-center p-3 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200">
                    <div className="text-2xl font-extrabold text-purple-600 mb-1">30m</div>
                    <div className="text-xs text-slate-600 font-semibold">Duration</div>
                  </div>
                </div>

                <Link to="/onboarding">
                  <Button 
                    size="lg"
                    className="w-full bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white font-bold shadow-xl text-lg group"
                  >
                    Preview Onboarding Experience
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                  </Button>
                </Link>
              </div>
            </Card>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
