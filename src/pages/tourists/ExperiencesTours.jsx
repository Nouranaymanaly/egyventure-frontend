import { useState } from 'react';

const activities = [
  {
    category: 'Historical Tours',
    items: [
      {
        title: 'Pyramids of Giza',
        description: 'Explore the last remaining wonder of the ancient world, including the Great Pyramid and the Sphinx.',
        image: 'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        duration: '4-6 hours',
        price: 'From $50'
      },
      {
        title: 'Luxor Temple Complex',
        description: 'Visit the magnificent temples of Luxor and Karnak, the largest religious building ever constructed.',
        image: 'https://images.unsplash.com/photo-1565967511849-76a60a516170?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
        duration: 'Full day',
        price: 'From $75'
      }
    ]
  },
  {
    category: 'Desert Adventures',
    items: [
      {
        title: 'Sahara Desert Safari',
        description: 'Experience the magic of the Western Desert with dune bashing, camel rides, and traditional Bedouin dinner.',
        image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
        duration: 'Full day',
        price: 'From $60'
      },
      {
        title: 'Siwa Oasis Tour',
        description: 'Discover the hidden gem of Siwa Oasis, with its ancient ruins, salt lakes, and natural springs.',
        image: 'https://images.unsplash.com/photo-1589802829985-817e51171b92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        duration: '2-3 days',
        price: 'From $200'
      }
    ]
  },
  {
    category: 'Nile Experiences',
    items: [
      {
        title: 'Nile River Cruise',
        description: 'Sail the Nile in luxury, visiting ancient temples and experiencing traditional Egyptian hospitality.',
        image: 'https://images.unsplash.com/photo-1565967511849-76a60a516170?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
        duration: '3-7 days',
        price: 'From $300'
      },
      {
        title: 'Felucca Sunset Ride',
        description: 'Enjoy a traditional wooden sailboat ride on the Nile during the magical sunset hours.',
        image: 'https://images.unsplash.com/photo-1565967511849-76a60a516170?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
        duration: '2-3 hours',
        price: 'From $25'
      }
    ]
  },
  {
    category: 'Cultural Experiences',
    items: [
      {
        title: 'Cairo Food Tour',
        description: 'Taste authentic Egyptian cuisine while exploring local markets and hidden food spots.',
        image: 'https://images.unsplash.com/photo-1565967511849-76a60a516170?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
        duration: '4 hours',
        price: 'From $40'
      },
      {
        title: 'Traditional Craft Workshop',
        description: 'Learn traditional Egyptian crafts like papyrus making, pottery, or jewelry making from local artisans.',
        image: 'https://images.unsplash.com/photo-1565967511849-76a60a516170?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
        duration: '2-3 hours',
        price: 'From $35'
      }
    ]
  },
  {
    category: 'Adventure Activities',
    items: [
      {
        title: 'Red Sea Diving',
        description: 'Explore the vibrant coral reefs and marine life of the Red Sea with professional diving instructors.',
        image: 'https://images.unsplash.com/photo-1565967511849-76a60a516170?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
        duration: 'Full day',
        price: 'From $80'
      },
      {
        title: 'Hot Air Balloon Ride',
        description: 'Soar above the Valley of the Kings and experience breathtaking views of ancient monuments.',
        image: 'https://images.unsplash.com/photo-1565967511849-76a60a516170?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
        duration: '1-2 hours',
        price: 'From $150'
      }
    ]
  }
];

export default function ExperiencesTours() {
  const [selectedCategory, setSelectedCategory] = useState(activities[0].category);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Experiences & Tours</h1>
        <p className="text-xl text-gray-600">
          Discover the best of Egypt through our curated selection of experiences and tours
        </p>
      </div>

      {/* Category Navigation */}
      <div className="flex overflow-x-auto pb-4 mb-8 space-x-4">
        {activities.map((category) => (
          <button
            key={category.category}
            onClick={() => setSelectedCategory(category.category)}
            className={`px-6 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
              selectedCategory === category.category
                ? 'bg-primary-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {category.category}
          </button>
        ))}
      </div>

      {/* Activities Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {activities
          .find((category) => category.category === selectedCategory)
          ?.items.map((activity) => (
            <div key={activity.title} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48">
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{activity.title}</h3>
                <p className="text-gray-600 mb-4">{activity.description}</p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>{activity.duration}</span>
                  <span className="font-medium text-primary-600">{activity.price}</span>
                </div>
                <button className="mt-4 w-full bg-primary-600 text-white py-2 px-4 rounded-md hover:bg-primary-700 transition-colors">
                  Book Now
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
} 