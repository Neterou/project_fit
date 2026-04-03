import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function ContentLibrary() {
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    // Simulate fetching content
    setTimeout(() => {
      setContent([
        {
          id: 1,
          title: "Beginner Yoga Flow",
          description: "Gentle yoga sequence for flexibility and relaxation",
          influencerName: "Sarah Chen",
          category: "yoga",
          difficulty: "beginner",
          duration: 20,
          thumbnailUrl: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400",
          viewCount: 1240,
          likeCount: 89,
          isPremium: false
        },
        {
          id: 2,
          title: "HIIT for Weight Loss",
          description: "High-intensity interval training to burn fat and build endurance",
          influencerName: "Marcus Rodriguez",
          category: "hiit",
          difficulty: "intermediate",
          duration: 30,
          thumbnailUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400",
          viewCount: 2105,
          likeCount: 156,
          isPremium: true
        },
        {
          id: 3,
          title: "Strength Training Basics",
          description: "Foundational strength exercises for full body development",
          influencerName: "Elena Vargas",
          category: "strength",
          difficulty: "beginner",
          duration: 45,
          thumbnailUrl: "https://images.unsplash.com/photo-1583454120918-58404d298d18?w=400",
          viewCount: 1876,
          likeCount: 134,
          isPremium: false
        },
        {
          id: 4,
          title: "Senior Fitness Routine",
          description: "Low-impact exercises designed for older adults",
          influencerName: "Robert Kim",
          category: "senior",
          difficulty: "beginner",
          duration: 25,
          thumbnailUrl: "https://images.unsplash.com/photo-1517836357463-d25dfe93410a?w=400",
          viewCount: 942,
          likeCount: 78,
          isPremium: false
        },
        {
          id: 5,
          title: "Kids Fitness Fun",
          description: "Engaging workout games for children ages 5-12",
          influencerName: "Lisa Wang",
          category: "kids",
          difficulty: "beginner",
          duration: 15,
          thumbnailUrl: "https://images.unsplash.com/photo-1579950088873-0888d7cb5d37?w=400",
          viewCount: 1563,
          likeCount: 112,
          isPremium: false
        }
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  const filteredContent = filter === 'all' 
    ? content 
    : content.filter(item => item.category === filter || 
       (filter === 'premium' && item.isPremium) || 
       (filter === 'free' && !item.isPremium));

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-indigo-800">Content Library</h1>
          <p className="text-indigo-600">
            Explore our collection of fitness videos from top influencers
          </p>
        </div>
        
        {/* Filters */}
        <div className="mb-6 flex flex-wrap gap-4">
          <button 
            onClick={() => setFilter('all')}
            className={`px-4 py-2 bg-${filter === 'all' ? 'indigo-600' : 'white'} 
                     text-${filter === 'all' ? 'white' : 'indigo-600'} 
                     rounded-lg hover:bg-indigo-50 transition-colors`}
          >
            All
          </button>
          <button 
            onClick={() => setFilter('yoga')}
            className={`px-4 py-2 bg-${filter === 'yoga' ? 'indigo-600' : 'white'} 
                     text-${filter === 'yoga' ? 'white' : 'indigo-600'} 
                     rounded-lg hover:bg-indigo-50 transition-colors`}
          >
            Yoga
          </button>
          <button 
            onClick={() => setFilter('hiit')}
            className={`px-4 py-2 bg-${filter === 'hiit' ? 'indigo-600' : 'white'} 
                     text-${filter === 'hiit' ? 'white' : 'indigo-600'} 
                     rounded-lg hover:bg-indigo-50 transition-colors`}
          >
            HIIT
          </button>
          <button 
            onClick={() => setFilter('strength')}
            className={`px-4 py-2 bg-${filter === 'strength' ? 'indigo-600' : 'white'} 
                     text-${filter === 'strength' ? 'white' : 'indigo-600'} 
                     rounded-lg hover:bg-indigo-50 transition-colors`}
          >
            Strength
          </button>
          <button 
            onClick={() => setFilter('senior')}
            className={`px-4 py-2 bg-${filter === 'senior' ? 'indigo-600' : 'white'} 
                     text-${filter === 'senior' ? 'white' : 'indigo-600'} 
                     rounded-lg hover:bg-indigo-50 transition-colors`}
          >
            Senior
          </button>
          <button 
            onClick={() => setFilter('kids')}
            className={`px-4 py-2 bg-${filter === 'kids' ? 'indigo-600' : 'white'} 
                     text-${filter === 'kids' ? 'white' : 'indigo-600'} 
                     rounded-lg hover:bg-indigo-50 transition-colors`}
          >
            Kids
          </button>
          <button 
            onClick={() => setFilter('premium')}
            className={`px-4 py-2 bg-${filter === 'premium' ? 'indigo-600' : 'white'} 
                     text-${filter === 'premium' ? 'white' : 'indigo-600'} 
                     rounded-lg hover:bg-indigo-50 transition-colors`}
          >
            Premium Only
          </button>
          <button 
            onClick={() => setFilter('free')}
            className={`px-4 py-2 bg-${filter === 'free' ? 'indigo-600' : 'white'} 
                     text-${filter === 'free' ? 'white' : 'indigo-600'} 
                     rounded-lg hover:bg-indigo-50 transition-colors`}
          >
            Free Content
          </button>
        </div>
        
        {/* Content Grid */}
        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600 mx-auto"></div>
            <p className="mt-4 text-indigo-600">Loading content...</p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredContent.length > 0 ? (
              filteredContent.map(item => (
                <Link key={item.id} href={`/content/${item.id}`} className="block">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative">
                      <img 
                        src={item.thumbnailUrl} 
                        alt={item.title} 
                        className="w-full h-48 object-cover"
                      />
                      {item.isPremium && (
                        <div className="absolute top-2 right-2 bg-indigo-600 text-white text-xs px-2 py-1 rounded">
                          PREMIUM
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium text-indigo-800 mb-2">{item.title}</h3>
                      <p className="text-sm text-indigo-600 mb-2 line-clamp-2">{item.description}</p>
                      <div className="flex items-center justify-between text-sm text-indigo-500">
                        <span>By: {item.influencerName}</span>
                        <span>{item.duration} min • {item.viewCount} views</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-indigo-600">No content found matching your filters.</p>
              </div>
            )}
          </div>
        )}
        
        <div className="mt-8 text-center">
          <Link href="/content/upload" className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-lg transition-colors transform hover:scale-105">
            Upload New Content
          </Link>
        </div>
      </div>
    </div>
  );
}