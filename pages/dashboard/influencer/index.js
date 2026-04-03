import Link from 'next/link';

export default function InfluencerDashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r border-gray-200">
          <div className="p-6">
            <Link href="/" className="flex items-center space-x-4 mb-8">
              <div className="bg-indigo-100 p-3 rounded-full">
                <svg className="h-6 w-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2-1.343-2-3-2zM9 18a3 3 0 100-6 3 3 0 000 6z" />
                </svg>
              </div>
              <span className="text-xl font-bold text-indigo-800">FitInfluence</span>
            </Link>
            
            <nav className="space-y-2">
              <Link href="/dashboard/influencer" className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-indigo-600 hover:bg-indigo-50 hover:text-indigo-700">
                <svg className="h-5 w-5 text-indigo-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                </svg>
                Dashboard
              </Link>
              
              <Link href="/content/upload" className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-indigo-600 hover:bg-indigo-50 hover:text-indigo-700">
                <svg className="h-5 w-5 text-indigo-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Upload Content
              </Link>
              
              <Link href="/analytics" className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-indigo-600 hover:bg-indigo-50 hover:text-indigo-700">
                <svg className="h-5 w-5 text-indigo-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18M3 18h18" />
                </svg>
                Analytics
              </Link>
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="space-y-6">
            <h1 className="text-2xl font-bold text-indigo-800">Influencer Dashboard</h1>
            <p className="text-indigo-600">
              Manage your fitness influence and grow your audience.
            </p>
            
            {/* Stats Overview */}
            <div className="grid gap-6 md:grid-cols-4">
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-medium text-indigo-600">Total Followers</h3>
                    <p className="text-2xl font-bold text-indigo-800">1.2K</p>
                  </div>
                  <div className="bg-indigo-100 p-3 rounded-full">
                    <svg className="h-5 w-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-medium text-indigo-600">Monthly Revenue</h3>
                    <p className="text-2xl font-bold text-indigo-800">$2.4K</p>
                  </div>
                  <div className="bg-indigo-100 p-3 rounded-full">
                    <svg className="h-5 w-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2-1.343-2-3-2zM9 18a3 3 0 100-6 3 3 0 000 6z" />
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-medium text-indigo-600">Engagement Rate</h3>
                    <p className="text-2xl font-bold text-indigo-800">8.5%</p>
                  </div>
                  <div className="bg-indigo-100 p-3 rounded-full">
                    <svg className="h-5 w-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.758 0 3.42 3.42 0 011.946 1.946 3.42 3.42 0 00.471 3.326 3.42 3.42 0 01-3.42 3.42 3.42 3.42 0 00-2.94 1.255" />
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-medium text-indigo-600">Content Library</h3>
                    <p className="text-2xl font-bold text-indigo-800">24 Videos</p>
                  </div>
                  <div className="bg-indigo-100 p-3 rounded-full">
                    <svg className="h-5 w-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m2 0a2 2 0 100-4H9a2 2 0 100 4z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Recent Activity */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-indigo-800 mb-4">Recent Activity</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-indigo-100 p-2 rounded-full">
                    <svg className="h-5 w-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-indigo-800">New workout video uploaded: "Beginner HIIT Routine"</p>
                    <p className="text-sm text-indigo-500">2 hours ago • 45 views</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-indigo-100 p-2 rounded-full">
                    <svg className="h-5 w-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-indigo-800">Gained 12 new followers</p>
                    <p className="text-sm text-indigo-500">4 hours ago</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-indigo-100 p-2 rounded-full">
                    <svg className="h-5 w-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.758 0 3.42 3.42 0 011.946 1.946 3.42 3.42 0 00.471 3.326 3.42 3.42 0 01-3.42 3.42 3.42 3.42 0 00-2.94 1.255" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-indigo-800">Received 8 new questions from subscribers</p>
                    <p className="text-sm text-indigo-500">6 hours ago</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-indigo-800 mb-4">Quick Actions</h3>
              <div className="grid gap-4 md:grid-cols-2">
                <Link href="/content/upload" className="flex items-center space-x-4 p-4 bg-indigo-50 hover:bg-indigo-100 rounded-lg transition-colors">
                  <div className="bg-indigo-100 p-3 rounded-full">
                    <svg className="h-5 w-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-indigo-800">Upload Content</h4>
                    <p className="text-sm text-indigo-600">Add new workout videos</p>
                  </div>
                </Link>
                
                <Link href="/qa" className="flex items-center space-x-4 p-4 bg-indigo-50 hover:bg-indigo-100 rounded-lg transition-colors">
                  <div className="bg-indigo-100 p-3 rounded-full">
                    <svg className="h-5 w-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.758 0 3.42 3.42 0 011.946 1.946 3.42 3.42 0 00.471 3.326 3.42 3.42 0 01-3.42 3.42 3.42 3.42 0 00-2.94 1.255" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-indigo-800">Answer Questions</h4>
                    <p className="text-sm text-indigo-600">Respond to subscriber inquiries</p>
                  </div>
                </Link>
                
                <Link href="/live-schedule" className="flex items-center space-x-4 p-4 bg-indigo-50 hover:bg-indigo-100 rounded-lg transition-colors">
                  <div className="bg-indigo-100 p-3 rounded-full">
                    <svg className="h-5 w-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-indigo-800">Schedule Live</h4>
                    <p className="text-sm text-indigo-600">Plan your next live session</p>
                  </div>
                </Link>
                
                <Link href="/analytics" className="flex items-center space-x-4 p-4 bg-indigo-50 hover:bg-indigo-100 rounded-lg transition-colors">
                  <div className="bg-indigo-100 p-3 rounded-full">
                    <svg className="h-5 w-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18M3 18h18" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-indigo-800">View Analytics</h4>
                    <p className="text-sm text-indigo-600">Check your performance metrics</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}