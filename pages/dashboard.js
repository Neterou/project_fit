import Link from 'next/link';

export default function Dashboard() {
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
              <Link href="/dashboard" className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-indigo-600 hover:bg-indigo-50 hover:text-indigo-700">
                <svg className="h-5 w-5 text-indigo-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                </svg>
                Dashboard
              </Link>
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="space-y-6">
            <h1 className="text-2xl font-bold text-indigo-800">Dashboard</h1>
            <p className="text-indigo-600">
              Welcome to your FitInfluence dashboard. This is where you can manage your fitness journey.
            </p>
            
            <div className="grid gap-6 md:grid-cols-3">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-indigo-800 mb-4">Get Started</h3>
                <p className="text-indigo-600">
                  Begin your fitness journey by exploring content, joining live sessions, or connecting with influencers.
                </p>
                <Link href="/content" className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg transition-colors">
                  Explore Content
                </Link>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-indigo-800 mb-4">Join Live Sessions</h3>
                <p className="text-indigo-600">
                  Participate in live workout sessions with top fitness influencers from around the world.
                </p>
                <Link href="/live" className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg transition-colors">
                  View Live Sessions
                </Link>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-indigo-800 mb-4">Connect with Community</h3>
                <p className="text-indigo-600">
                  Engage with other fitness enthusiasts, ask questions, and share your progress.
                </p>
                <Link href="/community" className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg transition-colors">
                  Join Community
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}