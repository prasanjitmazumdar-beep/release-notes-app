"use client"

import React, { useState } from 'react';
import { Search, ChevronDown, Calendar, User } from 'lucide-react';

export default function ReleaseNotesWebpage() {
  const [selectedTeam, setSelectedTeam] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedRelease, setExpandedRelease] = useState(null);

  const releases = [
    {
      id: 1,
      team: 'Gen AI',
      title: '🚀 BrightTeacher Bot Now Live',
      summary: 'AI-powered assistant for teachers',
      content: 'Features:\n• Class Schedule\n• Teacher Profile\n• Earnings Report\n• Payment Info\n\nImpact: Better teacher experience',
      owner: 'Priya S.',
      publishedDate: 'July 19, 2026',
      featured: true,
      type: 'feature'
    },
    {
      id: 2,
      team: 'Coding',
      title: 'Code Editor Performance Boost',
      summary: 'Reduced compilation time by 40%',
      content: 'Improvements:\n• Optimized container startup\n• Reduced latency\n• Better error messages\n\nImpact: Faster feedback for students',
      owner: 'Dev Team',
      publishedDate: 'July 19, 2026',
      featured: false,
      type: 'improvement'
    },
    {
      id: 3,
      team: 'Robotics',
      title: 'Simulation Gallery Launched',
      summary: 'Interactive 3D model viewers',
      content: 'Features:\n• 3D rendering\n• Portfolio integration\n• Collaboration tools\n\nImpact: Increased engagement by 35%',
      owner: 'Alex M.',
      publishedDate: 'July 19, 2026',
      featured: false,
      type: 'feature'
    }
  ];

  const filteredReleases = releases.filter(release => {
    const matchesTeam = selectedTeam === 'all' || release.team === selectedTeam;
    const matchesSearch = release.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTeam && matchesSearch;
  });

  const featuredRelease = filteredReleases.find(r => r.featured);
  const recentReleases = filteredReleases.filter(r => !r.featured);
  const teams = ['all', 'Gen AI', 'Coding', 'Robotics', 'Finance'];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <div className="sticky top-0 z-40 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-slate-900">Release Notes</h1>
              <p className="text-slate-600 mt-1">What's new at BrightCHAMPS</p>
            </div>
            <div className="text-right text-sm text-slate-500">
              <p>Last updated: Today</p>
              <p className="mt-1"><strong>{filteredReleases.length}</strong> releases</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 text-slate-400" size={20} />
              <input type="text" placeholder="Search releases..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" />
            </div>
            <div className="flex gap-2 flex-wrap">
              {teams.map((team) => (
                <button key={team} onClick={() => setSelectedTeam(team)} className={`px-4 py-2 rounded-lg font-medium transition-all ${selectedTeam === team ? 'bg-purple-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}>
                  {team === 'all' ? '📊 All' : team}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        {featuredRelease && (
          <div className="mb-16">
            <h2 className="text-sm font-bold text-purple-600 uppercase tracking-widest mb-4">📌 Featured This Week</h2>
            <div className="bg-gradient-to-br from-purple-50 to-slate-50 border-2 border-purple-200 rounded-2xl p-8">
              <h3 className="text-4xl font-black text-slate-900 mb-4">{featuredRelease.title}</h3>
              <p className="text-xl text-slate-700 mb-6">{featuredRelease.summary}</p>
              <div className="grid sm:grid-cols-3 gap-6 mb-8 pt-6 border-t border-purple-200">
                <div>
                  <span className="text-xs text-slate-600 uppercase font-bold">Team</span>
                  <p className="font-semibold text-slate-900 mt-1">{featuredRelease.team}</p>
                </div>
                <div>
                  <span className="text-xs text-slate-600 uppercase font-bold">Owner</span>
                  <p className="font-semibold text-slate-900 mt-1">{featuredRelease.owner}</p>
                </div>
                <div>
                  <span className="text-xs text-slate-600 uppercase font-bold">Published</span>
                  <p className="font-semibold text-slate-900 mt-1">{featuredRelease.publishedDate}</p>
                </div>
              </div>
              <button onClick={() => setExpandedRelease(expandedRelease === featuredRelease.id ? null : featuredRelease.id)} className="text-purple-600 font-bold hover:text-purple-700">
                {expandedRelease === featuredRelease.id ? 'Show Less' : 'Read More'}
              </button>
              {expandedRelease === featuredRelease.id && (
                <div className="mt-6 pt-6 border-t border-purple-200 text-slate-700 whitespace-pre-wrap">{featuredRelease.content}</div>
              )}
            </div>
          </div>
        )}

        <div className="mb-16">
          <h2 className="text-sm font-bold text-slate-600 uppercase tracking-widest mb-4">📰 Latest Releases</h2>
          <div className="space-y-6">
            {recentReleases.length > 0 ? (
              recentReleases.map((release) => (
                <div key={release.id} className="bg-white border-2 border-slate-200 hover:border-purple-300 rounded-xl p-6 transition-all hover:shadow-lg cursor-pointer" onClick={() => setExpandedRelease(expandedRelease === release.id ? null : release.id)}>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-xs font-bold text-slate-500 uppercase">{release.team}</span>
                        <span className="text-xs text-slate-400">•</span>
                        <span className="text-xs text-slate-500">{release.publishedDate}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">{release.title}</h3>
                      <p className="text-slate-700">{release.summary}</p>
                    </div>
                    <ChevronDown size={24} className={`text-slate-400 flex-shrink-0 transition-transform ${expandedRelease === release.id ? 'rotate-180' : ''}`} />
                  </div>
                  {expandedRelease === release.id && (
                    <div className="mt-6 pt-6 border-t border-slate-200">
                      <div className="text-slate-700 whitespace-pre-wrap mb-6">{release.content}</div>
                      <div className="flex gap-4 text-sm text-slate-600">
                        <div><User size={16} className="inline mr-2" />Owner: {release.owner}</div>
                        <div><Calendar size={16} className="inline mr-2" />Published: {release.publishedDate}</div>
                      </div>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div className="text-center py-12 bg-slate-50 rounded-lg"><p className="text-slate-600">No releases found</p></div>
            )}
          </div>
        </div>
      </div>

      <div className="bg-slate-100 border-t border-slate-200 mt-16">
        <div className="max-w-6xl mx-auto px-6 py-12 text-center text-sm text-slate-600">
          <p>© 2026 BrightCHAMPS Release Notes</p>
        </div>
      </div>
    </div>
  );
}
