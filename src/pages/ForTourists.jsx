import { Routes, Route, Link, useLocation } from 'react-router-dom';
import DiscoverPlaces from './tourists/DiscoverPlaces';
import FindLocalServices from './tourists/FindLocalServices';
import ExperiencesTours from './tourists/ExperiencesTours';
import CulturalMarketplace from './tourists/CulturalMarketplace';
import MyTrips from './tourists/MyTrips';
import PlanMyVisit from './tourists/PlanMyVisit';

const navigation = [
  {
    name: 'Discover Places',
    description: 'Explore historical sites and attractions across Egypt',
    href: 'discover',
    icon: 'map',
    component: DiscoverPlaces
  },
  {
    name: 'Experiences & Tours',
    description: 'Find unique experiences and guided tours',
    href: 'experiences',
    icon: 'compass',
    component: ExperiencesTours
  },
  {
    name: 'Cultural Marketplace',
    description: 'Shop for authentic Egyptian crafts and souvenirs',
    href: 'marketplace',
    icon: 'shopping-bag',
    component: CulturalMarketplace
  },
  {
    name: 'Plan My Visit',
    description: 'Create your personalized travel itinerary',
    href: 'plan-my-visit',
    icon: 'calendar',
    component: PlanMyVisit
  }
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function ForTourists() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 justify-between">
            <div className="flex">
              <div className="flex flex-shrink-0 items-center">
                <h1 className="text-2xl font-bold text-gray-900">For Tourists</h1>
              </div>
              <nav className="ml-6 flex space-x-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={classNames(
                      location.pathname === item.href
                        ? 'border-primary-500 text-gray-900'
                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                      'inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium'
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="py-10">
        <main>
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <Routes>
              <Route path="discover" element={<DiscoverPlaces />} />
              <Route path="services" element={<FindLocalServices />} />
              <Route path="experiences" element={<ExperiencesTours />} />
              <Route path="marketplace" element={<CulturalMarketplace />} />
              <Route path="trips" element={<MyTrips />} />
              <Route path="plan-my-visit" element={<PlanMyVisit />} />
              <Route index element={<DiscoverPlaces />} />
            </Routes>
          </div>
        </main>
      </div>
    </div>
  );
} 