import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-indigo-100 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-indigo-800 mb-4">
            FitInfluence
          </h1>
          <p className="text-xl text-indigo-600 mb-8">
            Where fitness influencers share their expertise
          </p>
          
          <div className="flex flex-col items-center gap-4 md:flex-row md:justify-center">
            <Link 
              href="/login" 
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-lg transition-colors transform hover:scale-105 md:w-48"
            >
              Login
            </Link>
            <Link 
              href="/register" 
              className="border-2 border-indigo-600 hover:border-indigo-700 text-indigo-600 hover:text-indigo-700 font-medium py-3 px-6 rounded-lg transition-colors transform hover:scale-105 md:w-48"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}