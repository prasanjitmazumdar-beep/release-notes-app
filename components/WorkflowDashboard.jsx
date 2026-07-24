"use client"

import React, { useState, useEffect } from 'react';
import { CheckCircle } from 'lucide-react';

export default function ReleaseNotesWorkflowDashboard() {
  const [currentDay, setCurrentDay] = useState('monday');
  const [submissions, setSubmissions] = useState({
    genAI: false,
    coding: false,
    robotics: false
  });
  const [isPublished, setIsPublished] = useState(false);
  const [floatingIcons, setFloatingIcons] = useState([]);

  useEffect(() => {
    const icons = Array.from({ length: 8 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: 3 + Math.random() * 2,
      delay: Math.random() * 0.5
    }));
    setFloatingIcons(icons);
  }, []);

  const workflow = [
    { day: 'monday', dayName: 'Monday', time: '9:00 AM', action: 'Send Form Notification', icon: '📝', color: 'from-blue-500 to-purple-500', description: 'Teams receive form link', completed: true },
    { day: 'wednesday', dayName: 'Wednesday', time: '5:00 PM', action: 'Check Submissions', icon: '✅', color: 'from-purple-500 to-pink-500', description: 'Verify who submitted', completed: currentDay !== 'monday' },
    { day: 'thursday', dayName: 'Thursday', time: '2:00 PM', action: 'Get Missing List', icon: '🚨', color: 'from-pink-500 to-red-500', description: 'Missing submissions', completed: currentDay === 'thursday' || currentDay === 'friday' },
    { day: 'friday', dayName: 'Friday', time: '8:00 AM', action: 'Review & Go Live', icon: '🚀', color: 'from-green-500 to-emerald-500', description: 'Approve & publish', completed: isPublished }
  ];

  const teams = [
    { id: 'genAI', name: 'Gen AI Team', color: 'from-purple-400 to-purple-600' },
    { id: 'coding', name: 'Coding Team', color: 'from-cyan-400 to-blue-600' },
    { id: 'robotics', name: 'Robotics Team', color: 'from-orange-400 to-red-600' }
  ];

  const handlePublish = () => {
    setIsPublished(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-900 to-slate-900 overflow-hidden relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingIcons.map(icon => (
          <div key={icon.id} className="absolute text-3xl opacity-10" style={{ left: `${icon.x}%`, top: `${icon.y}%`, animation: `float ${icon.duration}s ease-in-out infinite`, animationDelay: `${icon.delay}s` }}>
            {['🚀', '📊', '💡', '⚙️', '🎯', '✨', '🔄', '📈'][icon.id % 8]}
          </div>
        ))}
      </div>

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 py-20">
        <div className="max-w-6xl w-full">
          <div className="text-center mb-16">
            <h1 className="text-6xl font-black text-white mb-4">Automate Your Release Notes</h1>
            <p className="text-xl text-slate-300">Monday → Friday workflow automation</p>
            <a href="/releases" className="inline-block mt-6 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-xl hover:shadow-2xl transition-all">
              View Releases
            </a>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {workflow.map((step) => (
              <button key={step.day} onClick={() => setCurrentDay(step.day)} className={`p-6 rounded-2xl backdrop-blur-xl border-2 transition-all transform hover:scale-105 ${currentDay === step.day ? `bg-gradient-to-br ${step.color} border-white shadow-2xl` : step.completed ? 'bg-slate-800/50 border-slate-700 hover:border-purple-400' : 'bg-slate-800/30 border-slate-700/50'}`}>
                <div className="text-center">
                  <div className="text-5xl mb-2">{step.icon}</div>
                  <p className={`text-lg font-bold ${currentDay === step.day ? 'text-white' : 'text-slate-300'}`}>{step.dayName}</p>
                  <p className={`text-sm ${currentDay === step.day ? 'text-white/80' : 'text-slate-400'}`}>{step.time}</p>
                  <p className={`text-xs mt-3 ${currentDay === step.day ? 'text-white/80' : 'text-slate-400'}`}>{step.action}</p>
                </div>
              </button>
            ))}
          </div>

          {currentDay === 'friday' && (
            <div className="max-w-2xl mx-auto mt-12">
              <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Friday 8:00 AM - Review & Go Live</h3>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {teams.map(team => (
                    <div key={team.id} className="p-4 rounded-xl bg-slate-800/50 border border-slate-700">
                      <p className="font-bold text-slate-300 mb-2">{team.name}</p>
                      <p className="text-sm text-slate-400">Ready to publish</p>
                    </div>
                  ))}
                </div>
                <button onClick={handlePublish} className={`w-full py-6 rounded-xl font-bold text-lg transition-all ${isPublished ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-2xl' : 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-2xl'}`}>
                  {isPublished ? '✅ Published to Vercel!' : '🚀 Go Live on Vercel'}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </div>
  );
}
