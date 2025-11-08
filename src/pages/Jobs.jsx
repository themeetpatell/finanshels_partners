import { useEffect } from 'react'

export default function Jobs() {

  useEffect(() => {
    // Load Keka HR job embed script
    window.khConfig = {
      identifier: 'ed753af8-2c74-47e0-928f-d94cfa880223',
      domain: 'https://dropxcelllp.keka.com/careers/',
      targetContainer: '#khembedjobs'
    }

    const script = document.createElement('script')
    script.src = 'https://dropxcelllp.keka.com/careers/api/embedjobs/js/ed753af8-2c74-47e0-928f-d94cfa880223'
    script.defer = true
    document.body.appendChild(script)

    return () => {
      // Cleanup script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
      delete window.khConfig
    }
  }, [])

  return (
    <div className="min-h-screen pt-20 bg-white">
      {/* Hero Section */}
      <section className="py-32 px-6 sm:px-8 lg:px-12 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-extrabold text-slate-900 mb-8 tracking-tighter leading-[0.95]">
            Open Positions
          </h1>
          <p className="text-2xl sm:text-3xl text-slate-600 max-w-4xl mx-auto mb-8 leading-relaxed font-medium">
            Join our <span className="text-slate-900 font-bold">world-class team</span> and help build the future of finance operations
          </p>
        </div>
      </section>

      {/* Keka HR Job Embed */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-20">
        <div id="khembedjobs" className="keka-jobs-embed"></div>
      </div>
    </div>
  )
}
