"use client"

import React, { useState } from 'react';
import { Check, X, Eye, Award } from 'lucide-react';

export default function AdminDashboard() {
  const [expandedRelease, setExpandedRelease] = useState(null);
  const [approvedItems, setApprovedItems] = useState({});

  const submissions = [
    {
      id: 1,
      team: 'Gen AI',
      title: 'BrightTeacher Bot Now Live for All',
      summary: 'AI-powered assistant for teachers',
      owner: 'Priya S.',
      submittedDate: 'July 18, 2026',
      color: '#7453D7',
      heroImage: '/hero-workflow.png',
      features: ['Class Schedule', 'Teacher Profile', 'Earnings Report', 'Payment Policy', 'Payout Resolution']
    },
    {
      id: 2,
      team: 'Coding',
      title: 'Code Editor Performance Boost',
      summary: 'Students get instant feedback on submissions',
      owner: 'Dev Team',
      submittedDate: 'July 18, 2026',
      color: '#33CCFF',
      heroImage: '/hero-backend.png',
      features: ['Optimized Startup', 'Reduced Latency', 'Better Error Messages', 'Improved Highlighting']
    },
    {
      id: 3,
      team: 'Robotics',
      title: 'Simulation Gallery Launched',
      summary: 'Showcase student robotics projects',
      owner: 'Alex M.',
      submittedDate: 'July 18, 2026',
      color: '#FF7B34',
      heroImage: '/hero-analytics.png',
      features: ['3D Rendering', 'Portfolio Integration', 'Collaboration Tools', 'Shareable Links']
    }
  ];

  const handleApprove = (id) => {
    setApprovedItems(prev => ({ ...prev, [id]: prev[id] === 'approved' ? null : 'approved' }));
  };

  const handleReject = (id) => {
    setApprovedItems(prev => ({ ...prev, [id]: prev[id] === 'rejected' ? null : 'rejected' }));
  };

  const approvedCount = Object.values(approvedItems).filter(v => v === 'approved').length;
  const rejectedCount = Object.values(approvedItems).filter(v => v === 'rejected').length;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="mb-6">
            <h1 className="text-4xl font-bold text-gray-900" style={{fontFamily: 'Nunito Sans'}}>Admin Dashboard</h1>
            <p className="text-gray-600 mt-2" style={{fontFamily: 'Nunito'}}>Review and approve release notes for publication</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-4 border border-purple-200">
              <p className="text-sm font-bold text-purple-700 uppercase tracking-widest" style={{fontFamily: 'Nunito Sans'}}>Total Submissions</p>
              <p className="text-3xl font-bold text-purple-900 mt-2" style={{fontFamily: 'Nunito Sans'}}>{submissions.length}</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4 border border-green-200">
              <p className="text-sm font-bold text-green-700 uppercase tracking-widest" style={{fontFamily: 'Nunito Sans'}}>Approved</p>
              <p className="text-3xl font-bold text-green-900 mt-2" style={{fontFamily: 'Nunito Sans'}}>{approvedCount}</p>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-lg p-4 border border-red-200">
              <p className="text-sm font-bold text-red-700 uppercase tracking-widest" style={{fontFamily: 'Nunito Sans'}}>Needs Review</p>
              <p className="text-3xl font-bold text-red-900 mt-2" style={{fontFamily: 'Nunito Sans'}}>{submissions.length - approvedCount - rejectedCount}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Submissions */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="space-y-6">
          {submissions.map((submission) => {
            const status = approvedItems[submission.id];
            return (
              <div key={submission.id} className={`bg-white rounded-xl border-2 overflow-hidden transition-all ${status === 'approved' ? 'border-green-300 bg-green-50' : status === 'rejected' ? 'border-red-300 bg-red-50' : 'border-gray-200'}`}>
                <div className="grid md:grid-cols-4 gap-6 p-6 md:p-8">
                  {/* Hero Image */}
                  <div>
                    <img src={submission.heroImage} alt={submission.team} className="w-full h-40 object-cover rounded-lg" />
                  </div>

                  {/* Content */}
                  <div className="md:col-span-3 flex flex-col">
                    <div className="mb-4">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="inline-block px-3 py-1 rounded-full text-xs font-bold text-white" style={{backgroundColor: submission.color, fontFamily: 'Nunito Sans'}}>{submission.team}</span>
                        <span className="text-xs font-bold text-gray-500 uppercase" style={{fontFamily: 'Nunito Sans'}}>{status === 'approved' ? '✓ Approved' : status === 'rejected' ? '✗ Rejected' : 'Pending'}</span>
                      </div>

                      <h3 className="text-2xl font-bold text-gray-900" style={{fontFamily: 'Nunito Sans'}}>{submission.title}</h3>
                      <p className="text-gray-600 mt-2" style={{fontFamily: 'Nunito'}}>{submission.summary}</p>

                      <div className="flex flex-wrap gap-2 mt-3">
                        {submission.features.slice(0, 3).map((feature, idx) => (
                          <span key={idx} className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded" style={{fontFamily: 'Nunito'}}>{feature}</span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 py-4 border-t border-gray-200 mt-4">
                      <div>
                        <p className="text-xs text-gray-500 uppercase font-bold tracking-widest" style={{fontFamily: 'Nunito Sans'}}>Owner</p>
                        <p className="text-gray-900 font-semibold mt-1" style={{fontFamily: 'Nunito'}}>{submission.owner}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 uppercase font-bold tracking-widest" style={{fontFamily: 'Nunito Sans'}}>Submitted</p>
                        <p className="text-gray-900 font-semibold mt-1" style={{fontFamily: 'Nunito'}}>{submission.submittedDate}</p>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 mt-4 pt-4 border-t border-gray-200">
                      <button onClick={() => handleApprove(submission.id)} className={`flex-1 py-3 px-4 rounded-lg font-bold transition-all flex items-center justify-center gap-2 ${status === 'approved' ? 'bg-green-600 text-white' : 'border-2 border-green-300 text-green-700 hover:bg-green-50'}`} style={{fontFamily: 'Nunito Sans'}}>
                        <Check size={18} />
                        Approve
                      </button>
                      <button onClick={() => handleReject(submission.id)} className={`flex-1 py-3 px-4 rounded-lg font-bold transition-all flex items-center justify-center gap-2 ${status === 'rejected' ? 'bg-red-600 text-white' : 'border-2 border-red-300 text-red-700 hover:bg-red-50'}`} style={{fontFamily: 'Nunito Sans'}}>
                        <X size={18} />
                        Reject
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer */}
      <div className="bg-white border-t border-gray-200 py-8 px-6 mt-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2" style={{fontFamily: 'Nunito Sans'}}>Ready to Publish?</h3>
              <p className="text-gray-600 text-sm" style={{fontFamily: 'Nunito'}}>Approve all releases you want to publish. They will appear on the public releases page.</p>
            </div>
            <div className="flex items-end justify-end">
              <button disabled={approvedCount === 0} className={`px-8 py-3 rounded-lg font-bold transition-all text-white ${approvedCount > 0 ? 'bg-purple-600 hover:bg-purple-700' : 'bg-gray-300 cursor-not-allowed'}`} style={{fontFamily: 'Nunito Sans'}}>
                Publish {approvedCount} Release{approvedCount !== 1 ? 's' : ''}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
