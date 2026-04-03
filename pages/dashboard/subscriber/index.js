import Link from 'next/link';

export default function SubscriberDashboard() {
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
              <Link href="/dashboard/subscriber" className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-indigo-600 hover:bg-indigo-50 hover:text-indigo-700">
                <svg className="h-5 w-5 text-indigo-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                </svg>
                Dashboard
              </Link>
              
              <Link href="/content" className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-indigo-600 hover:bg-indigo-50 hover:text-indigo-700">
                <svg className="h-5 w-5 text-indigo-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m2 0a2 2 0 100-4H9a2 2 0 100 4z" />
                </svg>
                Content Library
              </Link>
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="space-y-6">
            <h1 className="text-2xl font-bold text-indigo-800">Subscriber Dashboard</h1>
            <p className="text-indigo-600">
              Your fitness journey starts here. Explore content, join live sessions, and connect with influencers.
            </p>
            
            {/* Stats Overview */}
            <div className="grid gap-6 md:grid-cols-3">
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-medium text-indigo-600">Subscription Plan</h3>
                    <p className="text-2xl font-bold text-indigo-800">Premium</p>
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
                    <h3 className="text-sm font-medium text-indigo-600">Content Completed</h3>
                    <p className="text-2xl font-bold text-indigo-800">42 Videos</p>
                  </div>
                  <div className="bg-indigo-100 p-3 rounded-full">
                    <svg className="h-5 w-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m2 0a2 2 0 100-4H9a2 2 0 100 4z" />
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-medium text-indigo-600">Questions Asked</h3>
                    <p className="text-2xl font-bold text-indigo-800">15</p>
                  </div>
                  <div className="bg-indigo-100 p-3 rounded-full">
                    <svg className="h-5 w-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.758 0 3.42 3.42 0 011.946 1.946 3.42 3.42 0 00.471 3.326 3.42 3.42 0 01-3.42 3.42 3.42 3.42 0 00-2.94 1.255" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Recommended Content */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-indigo-800 mb-4">Recommended for You</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-indigo-100 rounded-lg flex items-center justify-center">
                    <svg className="h-5 w-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-indigo-800">Beginner Yoga Flow</h4>
                    <p className="text-sm text-indigo-600">20 min • By: Sarah Chen</p>
                    <p className="text-xs text-indigo-500 mt-1">Flexibility & Mindfulness</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-indigo-100 rounded-lg flex items-center justify-center">
                    <svg className="h-5 w-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m2 0a2 2 0 100-4H9a2 2 0 100 4z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-indigo-800">HIIT for Weight Loss</h4>
                    <p className="text-sm text-indigo-600">30 min • By: Marcus Rodriguez</p>
                    <p className="text-xs text-indigo-500 mt-1">High Intensity Interval Training</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-indigo-100 rounded-lg flex items-center justify-center">
                    <svg className="h-5 w-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-indigo-800">Strength Training Basics</h4>
                    <p className="text-sm text-indigo-600">45 min • By: Elena Vargas</p>
                    <p className="text-xs text-indigo-500 mt-1">Full Body Workout</p>
                  </div>
                </div>
              </div>
              <Link href="/content" className="block text-center text-indigo-600 hover:text-indigo-700 font-medium mt-4">
                See All Content →
              </Link>
            </div>
            
            {/* Upcoming Live Sessions */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-indigo-800 mb-4">Upcoming Live Sessions</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-indigo-500 pl-4">
                  <p className="text-sm text-indigo-600 mb-1">Today at 6:00 PM EST</p>
                  <h4 className="font-medium text-indigo-800">Full Body Burn Live</h4>
                  <p className="text-indigo-500">Join Marcus Rodriguez for an intense 45-minute workout</p>
                </div>
                
                <div className="border-l-4 border-indigo-500 pl-4 mt-4">
                  <p className="text-sm text-indigo-600 mb-1">Tomorrow at 10:00 AM EST</p>
                  <h4 className="font-medium text-indigo-800">Morning Yoga Flow</h4>
                  <p className="text-indigo-500">Gentle stretching with Sarah Chen to start your day</p>
                </div>
                
                <div className="border-l-4 border-indigo-500 pl-4 mt-4">
                  <p className="text-sm text-indigo-600 mb-1">Friday at 7:00 PM EST</p>
                  <h4 className="font-medium text-indigo-800">Weekend Warrior Challenge</h4>
                  <p className="text-indigo-500">Elena Vargas leads this fun, challenging full-body workout</p>
                </div>
              </div>
              <Link href="/live" className="block text-center text-indigo-600 hover:text-indigo-700 font-medium mt-4">
                View All Live Sessions →
              </Link>
            </div>
            
            {/* Recent Activity */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-indigo-800 mb-4">Your Activity</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                    <svg className="h-5 w-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-indigo-800">Completed: Beginner Yoga Flow</p>
                    <p className="text-sm text-indigo-500">2 hours ago • Rated 5/5</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                    <svg className="h-5 w-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.758 0 3.42 3.42 0 011.946 1.946 3.42 3.42 0 00.471 3.326 3.42 3.42 0 01-3.42 3.42 3.42 3.42 0 00-2.94 1.255" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-indigo-800">Question submitted to Sarah Chen</p>
                    <p className="text-sm text-indigo-500">4 hours ago • Awaiting response</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                    <svg className="h-5 w-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-indigo-800">Added HIIT for Weight Loss to favorites</p>
                    <p className="text-sm text-indigo-500">6 hours ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}