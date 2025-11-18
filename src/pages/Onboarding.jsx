import { OnboardingProvider, useOnboarding } from '../contexts/OnboardingContext'
import ProgressBar from '../components/onboarding/ProgressBar'
import ConfettiEffect from '../components/onboarding/ConfettiEffect'
import BadgeNotification from '../components/onboarding/BadgeNotification'
import Sidebar from '../components/onboarding/Sidebar'

import WelcomeStep from '../components/onboarding/steps/WelcomeStep'
import PersonalizeStep from '../components/onboarding/steps/PersonalizeStep'
import FounderMessageStep from '../components/onboarding/steps/FounderMessageStep'
import RoadmapStep from '../components/onboarding/steps/RoadmapStep'
import CompanyOverviewStep from '../components/onboarding/steps/CompanyOverviewStep'
import VisionMissionStep from '../components/onboarding/steps/VisionMissionStep'
import ValuesStep from '../components/onboarding/steps/ValuesStep'
import CustomerObsessionStep from '../components/onboarding/steps/CustomerObsessionStep'
import EarnTrustStep from '../components/onboarding/steps/EarnTrustStep'
import LearnFastStep from '../components/onboarding/steps/LearnFastStep'
import OwnershipStep from '../components/onboarding/steps/OwnershipStep'
import HighStandardsStep from '../components/onboarding/steps/HighStandardsStep'
import InnovateStep from '../components/onboarding/steps/InnovateStep'
import ThinkBigStep from '../components/onboarding/steps/ThinkBigStep'
import OKRSystemStep from '../components/onboarding/steps/OKRSystemStep'
import ServicesStep from '../components/onboarding/steps/ServicesStep'
import TeamStep from '../components/onboarding/steps/TeamStep'
import PoliciesStep from '../components/onboarding/steps/PoliciesStep'
import ToolsStep from '../components/onboarding/steps/ToolsStep'
import TestimonialsStep from '../components/onboarding/steps/TestimonialsStep'
import QuizStep from '../components/onboarding/steps/QuizStep'
import CompletionStep from '../components/onboarding/steps/CompletionStep'

function OnboardingContent() {
  const { currentStep, showConfetti } = useOnboarding()

  const renderStep = () => {
    switch (currentStep) {
      case 'welcome': return <WelcomeStep />
      case 'personalize': return <PersonalizeStep />
      case 'founder-message': return <FounderMessageStep />
      case 'roadmap': return <RoadmapStep />
      case 'company': return <CompanyOverviewStep />
      case 'vision-mission': return <VisionMissionStep />
      case 'values': return <ValuesStep />
      case 'customer-obsession': return <CustomerObsessionStep />
      case 'earn-trust': return <EarnTrustStep />
      case 'learn-fast': return <LearnFastStep />
      case 'ownership': return <OwnershipStep />
      case 'high-standards': return <HighStandardsStep />
      case 'innovate': return <InnovateStep />
      case 'think-big': return <ThinkBigStep />
      case 'okr-system': return <OKRSystemStep />
      case 'services': return <ServicesStep />
      case 'team': return <TeamStep />
      case 'policies': return <PoliciesStep />
      case 'tools': return <ToolsStep />
      case 'testimonials': return <TestimonialsStep />
      case 'quiz': return <QuizStep />
      case 'completion': return <CompletionStep />
      default: return <WelcomeStep />
    }
  }

  const showProgressBar = currentStep !== 'welcome' && currentStep !== 'completion'
  const showSidebar = currentStep !== 'welcome' && currentStep !== 'completion'

  return (
    <div className="min-h-screen bg-slate-50">
      {showProgressBar && <ProgressBar />}
      <div className={`${showProgressBar ? 'pt-36 sm:pt-40' : ''}`}>
        {renderStep()}
      </div>
      <ConfettiEffect show={showConfetti} />
      <BadgeNotification />
    </div>
  )
}

export default function Onboarding() {
  return (
    <OnboardingProvider>
      <OnboardingContent />
    </OnboardingProvider>
  )
}

