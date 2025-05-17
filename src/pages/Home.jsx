import { Link } from 'react-router-dom';
import { MapPinIcon, UserGroupIcon, ShieldCheckIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Local Guides',
    description: 'Connect with experienced local guides who know the hidden gems of Egypt.',
    icon: UserGroupIcon,
  },
  {
    name: 'Curated Tours',
    description: 'Discover authentic experiences and tours tailored to your interests.',
    icon: MapPinIcon,
  },
  {
    name: 'Safe Travel',
    description: 'Verified providers and secure booking system for peace of mind.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Handmade Souvenirs',
    description: 'Shop authentic Egyptian crafts and support local artisans.',
    icon: ShoppingBagIcon,
  },
];

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-primary-100/20">
        <div className="mx-auto max-w-7xl pb-16 pt-6 sm:pb-24 lg:px-8 lg:py-24">
          <div className="px-6 lg:px-0 lg:pt-4">
            <div className="mx-auto max-w-2xl">
              <div className="max-w-lg lg:ml-20">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  Explore Egypt Like a Local
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Discover authentic experiences, connect with local guides, and immerse yourself in the rich culture of Egypt.
                </p>
                <div className="mt-8 flex items-center justify-center gap-x-6">
                  <Link
                    to="/for-tourists"
                    className="btn-primary"
                  >
                    Explore Experiences
                  </Link>
                  <Link
                    to="/for-providers"
                    className="btn-secondary"
                  >
                    Become a Local Partner
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12 sm:py-16">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600">Why Choose EGYventure</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to explore Egypt
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We connect travelers with local experts and authentic experiences, making your Egyptian adventure unforgettable.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <feature.icon className="h-5 w-5 flex-none text-primary-600" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Testimonials section */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-lg font-semibold leading-8 tracking-tight text-primary-600">Testimonials</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              What our travelers say
            </p>
          </div>
          <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {/* Add testimonial cards here */}
              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <p className="text-gray-600">"An amazing experience! Our local guide showed us places we never would have found on our own."</p>
                <div className="mt-6 flex items-center gap-x-4">
                  <div className="h-10 w-10 rounded-full bg-gray-200" />
                  <div>
                    <div className="font-semibold text-gray-900">Sarah Johnson</div>
                    <div className="text-gray-600">United States</div>
                  </div>
                </div>
              </div>
              {/* Add more testimonial cards */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 