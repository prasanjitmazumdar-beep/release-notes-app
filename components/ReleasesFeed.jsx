"use client"

import React, { useState } from 'react';
import { ChevronDown, Search, Award, Star, Eye } from 'lucide-react';

export default function ReleasesPage() {
  const [expandedRelease, setExpandedRelease] = useState(null);
  const [selectedTeam, setSelectedTeam] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const releases = [
    {
      id: 1,
      team: 'Gen AI',
      title: 'BrightTeacher Bot Now Live for All',
      subtitle: 'AI-powered assistant for teachers',
      summary: 'Simplified workflows with instant support',
      impact: 'High',
      heroImage: '/hero-workflow.png',
      features: [
        { name: 'Class Schedule', description: 'View daily schedule with student names and lesson plans' },
        { name: 'Teacher Profile', description: 'Access personal details, performance metrics, and contact info' },
        { name: 'Earnings Report', description: 'Detailed breakdown including bonuses and net payout' },
        { name: 'Payment Policy', description: 'Clear explanations of payment structures' },
        { name: 'Payout Resolution', description: 'Automated checks to investigate and resolve discrepancies' }
      ],
      owner: 'Priya S.',
      publishedDate: 'July 19, 2026',
      featured: true,
      color: '#7453D7',
      badge: Award
    },
    {
      id: 2,
      team: 'Coding',
      title: 'Code Editor Performance Boost',
      subtitle: '40% faster compilation',
      summary: 'Students get instant feedback on submissions',
      impact: 'Medium',
      heroImage: '/hero-backend.png',
      features: [
        { name: 'Optimized Startup', description: 'Container startup speed improved significantly' },
        { name: 'Reduced Latency', description: 'Cold boot latency decreased for faster responses' },
        { name: 'Better Error Messages', description: 'Clearer debugging information' },
        { name: 'Improved Highlighting', description: 'Enhanced syntax highlighting performance' }
      ],
      owner: 'Dev Team',
      publishedDate: 'July 19, 2026',
      featured: false,
      color: '#33CCFF',
      badge: Star
    },
    {
      id: 3,
      team: 'Robotics',
      title: 'Simulation Gallery Launched',
      subtitle: 'Interactive 3D model viewers',
      summary: 'Showcase student robotics projects',
      impact: 'Medium',
      heroImage: '/hero-analytics.png',
      features: [
        { name: '3D Rendering', description: 'Interactive Three.js model viewing' },
        { name: 'Portfolio Integration', description: 'Connect student portfolios seamlessly' },
        { name: 'Collaboration Tools', description: 'Enable peer feedback and comments' },
        { name: 'Shareable Links', description: 'Easily distribute project links' }
      ],
      owner: 'Alex M.',
      publishedDate: 'July 19, 2026',
      featured: false,
      color: '#FF7B34',
      badge: Star
    }
  ];

  const filteredReleases = releases.filter(release => {
    const matchesTeam = selectedTeam === 'all' || release.team === selectedTeam;
    const matchesSearch = release.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTeam && matchesSearch;
  });

  const teams = ['all', 'Gen AI', 'Coding', 'Robotics'];

  const getTeamColor = (team) => {
    const colors = { 'Gen AI': '#7453D7', 'Coding': '#33CCFF', 'Robotics': '#FF7B34', 'Finance': '#00B67A' };
    return colors[team] || '#722ED1';
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900" style={{fontFamily: 'Nunito Sans'}}>Release Notes</h1>
            <p className="text-gray-600 mt-2" style={{fontFamily: 'Nunito'}}>Product updates from BrightCHAMPS</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 text-gray-400" size={20} />
              <input type="text" placeholder="Search releases..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600" style={{fontFamily: 'Nunito'}} />
            </div>
            <div className="flex gap-2 flex-wrap">
              {teams.map((team) => (
                <button key={team} onClick={() => setSelectedTeam(team)} className={`px-4 py-2 rounded-lg font-medium transition-all ${selectedTeam === team ? 'text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`} style={{backgroundColor: selectedTeam === team ? getTeamColor(team) : undefined, fontFamily: 'Nunito'}}>
                  {team === 'all' ? 'All Teams' : team}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Featured Release with Hero Image */}
      {filteredReleases.find(r => r.featured) && (
        <div className="bg-gradient-to-b from-purple-50 to-white py-12 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-6">
              <span className="text-sm font-bold text-purple-700 uppercase tracking-widest" style={{fontFamily: 'Nunito Sans'}}>Featured This Week</span>
            </div>
            {filteredReleases.filter(r => r.featured).map(release => (
              <div key={release.id} className="bg-white border-2 border-purple-200 rounded-2xl overflow-hidden">
                <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
                  {/* Hero Image */}
                  <div className="flex items-center justify-center">
                    <img src={release.heroImage} alt={release.team} className="w-full h-80 object-cover rounded-xl shadow-lg" />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col justify-center">
                    <div className="mb-6">
                      <span className="inline-block px-4 py-2 rounded-full text-sm font-bold text-white" style={{backgroundColor: release.color, fontFamily: 'Nunito Sans'}}>{release.team}</span>
                      <span className="ml-3 inline-block px-4 py-2 rounded-full text-sm font-bold text-purple-700 bg-purple-100" style={{fontFamily: 'Nunito Sans'}}>{release.impact} Impact</span>
                    </div>

                    <h2 className="text-4xl font-bold text-gray-900 mb-2" style={{fontFamily: 'Nunito Sans'}}>{release.title}</h2>
                    <p className="text-lg text-gray-600 mb-6" style={{fontFamily: 'Nunito'}}>{release.summary}</p>

                    <div className="mb-8 pb-8 border-b border-gray-200">
                      <h3 className="text-sm font-bold text-gray-900 uppercase mb-4" style={{fontFamily: 'Nunito Sans'}}>Key Features</h3>
                      <div className="space-y-2">
                        {release.features.map((feature, idx) => (
                          <div key={idx} className="flex gap-2">
                            <div className="w-5 h-5 rounded flex-shrink-0 flex items-center justify-center text-white text-xs font-bold mt-0.5" style={{backgroundColor: release.color}}>✓</div>
                            <div>
                              <p className="font-semibold text-gray-900 text-sm" style={{fontFamily: 'Nunito Sans'}}>{feature.name}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <div>
                        <p className="text-xs text-gray-500 uppercase font-bold tracking-widest" style={{fontFamily: 'Nunito Sans'}}>Owner</p>
                        <p className="text-gray-900 font-semibold mt-1" style={{fontFamily: 'Nunito'}}>{release.owner}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 uppercase font-bold tracking-widest" style={{fontFamily: 'Nunito Sans'}}>Published</p>
                        <p className="text-gray-900 font-semibold mt-1" style={{fontFamily: 'Nunito'}}>{release.publishedDate}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Recent Releases */}
      <div className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8" style={{fontFamily: 'Nunito Sans'}}>Recent Updates</h2>
          <div className="space-y-6">
            {filteredReleases.filter(r => !r.featured).map((release) => (
              <div key={release.id} className="bg-white border-2 border-gray-200 hover:border-gray-300 rounded-xl overflow-hidden transition-all hover:shadow-lg">
                <div className="grid md:grid-cols-3 gap-6 p-6 md:p-8">
                  {/* Hero Image */}
                  <div className="md:col-span-1">
                    <img src={release.heroImage} alt={release.team} className="w-full h-48 object-cover rounded-lg" />
                  </div>

                  {/* Content */}
                  <div className="md:col-span-2 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <span className="inline-block px-3 py-1 rounded-full text-xs font-bold text-white" style={{backgroundColor: release.color, fontFamily: 'Nunito Sans'}}>{release.team}</span>
                        <span className="text-xs text-gray-500" style={{fontFamily: 'Nunito'}}>{release.publishedDate}</span>
                      </div>

                      <h3 className="text-2xl font-bold text-gray-900 mb-2" style={{fontFamily: 'Nunito Sans'}}>{release.title}</h3>
                      <p className="text-gray-600 mb-4" style={{fontFamily: 'Nunito'}}>{release.summary}</p>

                      <div className="flex flex-wrap gap-2">
                        {release.features.slice(0, 3).map((feature, idx) => (
                          <span key={idx} className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded" style={{fontFamily: 'Nunito'}}>{feature.name}</span>
                        ))}
                      </div>
                    </div>

                    <button onClick={() => setExpandedRelease(expandedRelease === release.id ? null : release.id)} className="mt-4 flex items-center gap-2 text-purple-600 font-bold hover:text-purple-700 transition-all" style={{fontFamily: 'Nunito Sans'}}>
                      <Eye size={16} />
                      View Details
                      <ChevronDown size={16} className={`transition-transform ${expandedRelease === release.id ? 'rotate-180' : ''}`} />
                    </button>
                  </div>
                </div>

                {/* Expanded Content */}
                {expandedRelease === release.id && (
                  <div className="px-6 md:px-8 pb-6 md:pb-8 border-t border-gray-200">
                    <h4 className="text-lg font-bold text-gray-900 mb-4 mt-4" style={{fontFamily: 'Nunito Sans'}}>All Features</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      {release.features.map((feature, idx) => (
                        <div key={idx} className="flex gap-3 p-3 bg-gray-50 rounded-lg">
                          <div className="w-6 h-6 rounded flex-shrink-0 flex items-center justify-center text-white text-xs font-bold" style={{backgroundColor: release.color}}>✓</div>
                          <div>
                            <p className="font-semibold text-gray-900 text-sm" style={{fontFamily: 'Nunito Sans'}}>{feature.name}</p>
                            <p className="text-xs text-gray-600 mt-1" style={{fontFamily: 'Nunito'}}>{feature.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-50 border-t border-gray-200 py-8 px-6">
        <div className="max-w-7xl mx-auto text-center text-sm text-gray-600" style={{fontFamily: 'Nunito'}}>
          <p>© 2026 BrightCHAMPS. Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
}
