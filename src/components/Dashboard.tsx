import React, { useState } from 'react';
import { 
  MapPin, 
  Calendar, 
  Users, 
  Star, 
  TrendingUp, 
  Heart,
  Camera,
  Clock,
  Award,
  Settings,
  Bell,
  LogOut
} from 'lucide-react';

interface DashboardProps {
  onNavigate: (page: string) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    { icon: MapPin, label: 'Places Visited', value: '12', color: 'emerald' },
    { icon: Calendar, label: 'Trips Planned', value: '8', color: 'blue' },
    { icon: Users, label: 'Travel Buddies', value: '24', color: 'purple' },
    { icon: Star, label: 'Reviews Given', value: '15', color: 'yellow' }
  ];

  const recentTrips = [
    {
      id: 1,
      name: 'Hundru Falls Adventure',
      date: 'Dec 15, 2024',
      status: 'Completed',
      image: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 5
    },
    {
      id: 2,
      name: 'Netarhat Sunrise Tour',
      date: 'Jan 20, 2025',
      status: 'Upcoming',
      image: 'https://images.pexels.com/photos/1562058/pexels-photo-1562058.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: null
    },
    {
      id: 3,
      name: 'Betla Wildlife Safari',
      date: 'Nov 28, 2024',
      status: 'Completed',
      image: 'https://images.pexels.com/photos/1059823/pexels-photo-1059823.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 4
    }
  ];

  const achievements = [
    { icon: Award, title: 'Explorer', description: 'Visited 10+ destinations' },
    { icon: Camera, title: 'Photographer', description: 'Shared 50+ photos' },
    { icon: Heart, title: 'Community Lover', description: 'Helped 20+ travelers' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Welcome back, Traveler!</h1>
              <p className="text-gray-600 mt-1">Ready for your next adventure in Jharkhand?</p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors duration-300">
                <Bell size={20} />
              </button>
              <button className="p-2 text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors duration-300">
                <Settings size={20} />
              </button>
              <button 
                onClick={() => onNavigate('home')}
                className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-300"
              >
                <LogOut size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm font-medium">{stat.label}</p>
                    <p className="text-3xl font-bold text-gray-900 mt-1">{stat.value}</p>
                  </div>
                  <div className={`p-3 rounded-lg bg-${stat.color}-100`}>
                    <IconComponent size={24} className={`text-${stat.color}-600`} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Trips */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Recent Trips</h2>
                <button className="text-emerald-600 hover:text-emerald-700 font-medium">
                  View All
                </button>
              </div>
              
              <div className="space-y-4">
                {recentTrips.map((trip, index) => (
                  <div
                    key={trip.id}
                    className="flex items-center p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors duration-300"
                    style={{
                      animation: `slideIn 0.6s ease-out ${index * 0.1}s both`
                    }}
                  >
                    <img
                      src={trip.image}
                      alt={trip.name}
                      className="w-16 h-16 rounded-lg object-cover mr-4"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{trip.name}</h3>
                      <p className="text-gray-600 text-sm flex items-center mt-1">
                        <Clock size={14} className="mr-1" />
                        {trip.date}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        trip.status === 'Completed' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {trip.status}
                      </span>
                      {trip.rating && (
                        <div className="flex items-center mt-2">
                          {[...Array(trip.rating)].map((_, i) => (
                            <Star key={i} size={14} className="text-yellow-400 fill-current" />
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div>
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Achievements</h2>
              
              <div className="space-y-4">
                {achievements.map((achievement, index) => {
                  const IconComponent = achievement.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-center p-4 bg-gradient-to-r from-emerald-50 to-emerald-100 rounded-lg"
                      style={{
                        animation: `fadeInUp 0.6s ease-out ${index * 0.2}s both`
                      }}
                    >
                      <div className="bg-emerald-500 p-2 rounded-lg mr-4">
                        <IconComponent size={20} className="text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{achievement.title}</h3>
                        <p className="text-gray-600 text-sm">{achievement.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-sm p-6 mt-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Quick Actions</h2>
              
              <div className="space-y-3">
                <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3 rounded-lg font-medium transition-colors duration-300">
                  Plan New Trip
                </button>
                <button className="w-full border border-emerald-500 text-emerald-600 hover:bg-emerald-50 py-3 rounded-lg font-medium transition-colors duration-300">
                  Browse Tours
                </button>
                <button className="w-full border border-gray-300 text-gray-700 hover:bg-gray-50 py-3 rounded-lg font-medium transition-colors duration-300">
                  View Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;