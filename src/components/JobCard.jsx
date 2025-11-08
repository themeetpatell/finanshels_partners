import { Link } from 'react-router-dom'
import { MapPin, Clock, Briefcase } from 'lucide-react'
import { Card } from './ui/Card'
import { getDaysAgo } from '../lib/utils'

export default function JobCard({ job }) {
  return (
    <Link to={`/jobs/${job.id}`}>
      <Card className="group hover:shadow-2xl hover:border-transparent transition-all duration-500 hover:-translate-y-2 border-2 border-slate-200 overflow-hidden relative h-full">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 to-purple-500/0 group-hover:from-indigo-500/5 group-hover:to-purple-500/5 transition-all duration-500"></div>
        <div className="p-8 relative">
          <div className="flex items-start justify-between mb-6">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">
                {job.title}
              </h3>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold text-sm shadow-lg shadow-indigo-500/30 group-hover:shadow-xl group-hover:scale-105 transition-all">
                {job.team}
              </div>
            </div>
          </div>

          <p className="text-slate-600 mb-6 line-clamp-2 leading-relaxed text-base font-medium">
            {job.intro}
          </p>

          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600 font-medium">
            <div className="flex items-center gap-2">
              <MapPin size={18} className="text-indigo-500" />
              <span>{job.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Briefcase size={18} className="text-indigo-500" />
              <span>{job.type}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} className="text-indigo-500" />
              <span className="font-semibold">{getDaysAgo(job.posted)}</span>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  )
}
