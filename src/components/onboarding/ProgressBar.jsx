import { useOnboarding } from '../../contexts/OnboardingContext'
import { Check, Trophy, Clock, Award } from 'lucide-react'

export default function ProgressBar() {
  const { ONBOARDING_STEPS, currentStep, completedSteps, progress, badges, timeSpent } = useOnboarding()
  
  const currentIndex = ONBOARDING_STEPS.findIndex(s => s.id === currentStep)
  const currentStepInfo = ONBOARDING_STEPS[currentIndex]
  
  return (
    <div className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-lg border-b border-slate-200 shadow-xl z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2">
        {/* Top Stats Row */}
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Progress Percentage */}
            <div className="flex items-center gap-2 bg-gradient-to-r from-blue-50 to-cyan-50 px-3 py-1.5 rounded-lg border border-blue-200">
              <div className="text-xl sm:text-2xl font-extrabold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">{progress}%</div>
              <div className="text-xs text-slate-600 font-semibold">Complete</div>
            </div>
            
            {/* Badges */}
            <div className="flex items-center gap-2 bg-gradient-to-r from-amber-50 to-orange-50 px-3 py-1.5 rounded-lg border border-amber-200">
              <Award className="text-amber-600" size={16} />
              <span className="text-xl sm:text-2xl font-extrabold text-slate-900">{badges.length}</span>
              <span className="text-xs text-slate-600 font-semibold hidden sm:inline">Badges</span>
            </div>
            
            {/* Time */}
            <div className="hidden md:flex items-center gap-2 bg-gradient-to-r from-purple-50 to-pink-50 px-3 py-1.5 rounded-lg border border-purple-200">
              <Clock className="text-purple-600" size={16} />
              <span className="text-xl sm:text-2xl font-extrabold text-slate-900">{timeSpent}</span>
              <span className="text-xs text-slate-600 font-semibold">min</span>
            </div>
          </div>
          
          {/* Step Counter */}
          <div className="flex flex-col items-end">
            <div className="text-xs text-slate-500 font-medium">Your Progress</div>
            <div className="text-sm font-bold text-slate-900">
              Step {currentIndex + 1} of {ONBOARDING_STEPS.length}
            </div>
          </div>
        </div>
        
        {/* Current Step Title */}
        <div className="mb-2 flex items-center gap-2">
          <div className="text-lg">{currentStepInfo?.icon}</div>
          <div>
            <div className="text-xs text-blue-600 font-bold">Currently On:</div>
            <div className="text-base font-extrabold text-slate-900">{currentStepInfo?.title}</div>
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="relative">
          <div className="h-2 bg-slate-200 rounded-full overflow-hidden shadow-inner">
            <div 
              className="h-full bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 rounded-full transition-all duration-700 ease-out shadow-lg"
              style={{ width: `${progress}%` }}
            >
              <div className="h-full w-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
            </div>
          </div>
          
          {/* Mini Step Indicators */}
          <div className="flex justify-between mt-2 px-1">
            {ONBOARDING_STEPS.filter((_, i) => i % 3 === 0).map((step) => {
              const isCompleted = completedSteps.includes(step.id)
              const isCurrent = step.id === currentStep
              
              return (
                <div key={step.id} className="flex flex-col items-center">
                  <div 
                    className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                      isCompleted 
                        ? 'bg-gradient-to-br from-green-500 to-emerald-600 text-white shadow-lg scale-105 ring-2 ring-green-300' 
                        : isCurrent
                        ? 'bg-gradient-to-br from-blue-500 to-cyan-600 text-white shadow-xl scale-110 animate-pulse ring-2 ring-blue-300'
                        : 'bg-slate-200 text-slate-400'
                    }`}
                  >
                    {isCompleted ? <Check size={12} /> : step.icon}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

