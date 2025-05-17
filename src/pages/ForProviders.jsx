import { useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { UserGroupIcon, TruckIcon, CameraIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';

const providerTypes = [
  {
    id: 'guide',
    name: 'Guide',
    description: 'Share your local knowledge and expertise with travelers',
    icon: UserGroupIcon,
  },
  {
    id: 'driver',
    name: 'Driver',
    description: 'Provide safe and comfortable transportation services',
    icon: TruckIcon,
  },
  {
    id: 'photographer',
    name: 'Photographer',
    description: 'Capture memorable moments for travelers',
    icon: CameraIcon,
  },
  {
    id: 'artisan',
    name: 'Artisan / Shop',
    description: 'Sell your handmade products and crafts',
    icon: ShoppingBagIcon,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function ForProviders() {
  const [selectedType, setSelectedType] = useState(null);
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-12">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Become a Local Partner
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Share your expertise and earn income by providing authentic experiences to travelers
            </p>
          </div>

          <div className="mt-12">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {providerTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setSelectedType(type.id)}
                  className={classNames(
                    selectedType === type.id
                      ? 'ring-2 ring-primary-500'
                      : 'hover:ring-2 hover:ring-primary-500/50',
                    'relative flex flex-col items-center rounded-lg border border-gray-300 bg-white p-6 text-center shadow-sm transition-all'
                  )}
                >
                  <type.icon
                    className={classNames(
                      selectedType === type.id ? 'text-primary-600' : 'text-gray-400',
                      'h-12 w-12'
                    )}
                    aria-hidden="true"
                  />
                  <h3 className="mt-4 text-lg font-medium text-gray-900">{type.name}</h3>
                  <p className="mt-2 text-sm text-gray-500">{type.description}</p>
                </button>
              ))}
            </div>
          </div>

          {selectedType && (
            <div className="mt-12">
              <div className="mx-auto max-w-2xl">
                <form className="space-y-8 divide-y divide-gray-200 bg-white p-8 rounded-lg shadow-sm">
                  <div className="space-y-8 divide-y divide-gray-200">
                    <div>
                      <div>
                        <h3 className="text-lg font-medium leading-6 text-gray-900">
                          Registration Information
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">
                          Please provide your details to start the registration process.
                        </p>
                      </div>

                      <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                          <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                            First name
                          </label>
                          <div className="mt-1">
                            <input
                              type="text"
                              name="first-name"
                              id="first-name"
                              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                            />
                          </div>
                        </div>

                        <div className="sm:col-span-3">
                          <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                            Last name
                          </label>
                          <div className="mt-1">
                            <input
                              type="text"
                              name="last-name"
                              id="last-name"
                              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                            />
                          </div>
                        </div>

                        <div className="sm:col-span-4">
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email address
                          </label>
                          <div className="mt-1">
                            <input
                              id="email"
                              name="email"
                              type="email"
                              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                            />
                          </div>
                        </div>

                        <div className="sm:col-span-3">
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                            Phone number
                          </label>
                          <div className="mt-1">
                            <input
                              type="text"
                              name="phone"
                              id="phone"
                              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                            />
                          </div>
                        </div>

                        <div className="sm:col-span-6">
                          <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                            City
                          </label>
                          <div className="mt-1">
                            <input
                              type="text"
                              name="city"
                              id="city"
                              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                            />
                          </div>
                        </div>

                        <div className="sm:col-span-6">
                          <label htmlFor="experience" className="block text-sm font-medium text-gray-700">
                            Experience
                          </label>
                          <div className="mt-1">
                            <textarea
                              id="experience"
                              name="experience"
                              rows={3}
                              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                            />
                          </div>
                          <p className="mt-2 text-sm text-gray-500">
                            Tell us about your experience and expertise.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-5">
                    <div className="flex justify-end">
                      <button
                        type="button"
                        className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-primary-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                      >
                        Submit Application
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 