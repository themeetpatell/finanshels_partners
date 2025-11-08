import { TrendingUp, Calculator, Code } from 'lucide-react'
import { Card } from './ui/Card'

const iconMap = {
  TrendingUp,
  Calculator,
  Code,
}

export default function TeamCard({ team }) {
  const Icon = iconMap[team.icon] || Code

  return (
    <Card className="group hover:shadow-2xl hover:border-transparent hover:-translate-y-2 transition-all duration-500 border-2 border-slate-200 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="p-10 relative">
        <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-lg shadow-indigo-500/30">
          <Icon size={32} />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-indigo-600 transition-colors">
          {team.name}
        </h3>
        <p className="text-slate-600 leading-relaxed text-lg">
          {team.description}
        </p>
      </div>
    </Card>
  )
}

