import { useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const cities = {
  'Cairo': {
    name: 'Cairo',
    image: 'https://images.unsplash.com/photo-1572252009286-268acec5ca0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    places: [
      {
        name: 'Khan El Khalili',
        description: 'One of the oldest and most famous bazaars in the Middle East, offering traditional crafts, spices, and souvenirs.',
        image: 'https://images.unsplash.com/photo-1589802829985-817e51171b92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        bestTime: 'Morning or Evening',
        type: 'Market & Shopping'
      },
      {
        name: 'El Moez Street',
        description: 'A historic street in Old Cairo featuring stunning Islamic architecture and monuments.',
        image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
        bestTime: 'Morning',
        type: 'Historical Site'
      },
      {
        name: 'The Egyptian Museum',
        description: 'Home to the world\'s largest collection of ancient Egyptian artifacts.',
        image: 'https://images.unsplash.com/photo-1565967511849-76a60a516170?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
        bestTime: 'Morning',
        type: 'Museum'
      }
    ]
  },
  'Alexandria': {
    name: 'Alexandria',
    image: 'https://www.imtilak.net/uploads/posts/b8df22b62d1d4e26df4e009d85bd4d12kCZ275.webp',
    places: [
      {
        name: 'Bibliotheca Alexandrina',
        description: 'A modern library and cultural center built to commemorate the ancient Library of Alexandria.',
        image: 'https://images.unsplash.com/photo-1589802829985-817e51171b92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        bestTime: 'Morning',
        type: 'Cultural Site'
      },
      {
        name: 'Qaitbay Citadel',
        description: 'A 15th-century defensive fortress located on the Mediterranean sea coast.',
        image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
        bestTime: 'Sunset',
        type: 'Historical Site'
      }
    ]
  },
  'Luxor': {
    name: 'Luxor',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc2HCuwIb6NnnkC7dEwrvHzrXVroX5L3Tu3GWVYmLLHUdxCRAFO52I9OMToFhpBafPMV0&usqp=CAU0',
    places: [
      {
        name: 'Valley of the Kings',
        description: 'Ancient burial ground of Egyptian pharaohs and powerful nobles.',
        image: 'https://images.unsplash.com/photo-1589802829985-817e51171b92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        bestTime: 'Early Morning',
        type: 'Historical Site'
      },
      {
        name: 'Karnak Temple',
        description: 'The largest religious building ever constructed, dedicated to the Theban triad.',
        image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
        bestTime: 'Morning',
        type: 'Temple'
      }
    ]
  },
  'Aswan': {
    name: 'Aswan',
    image: 'https://a.storyblok.com/f/53624/6720x4480/4b40d87f79/philae-aswan-egypt_shutterstock_2043885743.jpg/m/1534x1023',
    places: [
      {
        name: 'Philae Temple',
        description: 'Ancient temple complex dedicated to the goddess Isis, located on an island in the Nile.',
        image: 'https://images.unsplash.com/photo-1589802829985-817e51171b92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        bestTime: 'Morning',
        type: 'Temple'
      },
      {
        name: 'Nubian Village',
        description: 'Experience traditional Nubian culture, colorful houses, and local hospitality.',
        image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
        bestTime: 'Afternoon',
        type: 'Cultural Experience'
      },
      {
        name: 'High Dam',
        description: 'One of the world\'s largest embankment dams, offering stunning views of Lake Nasser.',
        image: 'https://images.unsplash.com/photo-1565967511849-76a60a516170?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
        bestTime: 'Morning',
        type: 'Engineering Marvel'
      }
    ]
  },
  'Siwa': {
    name: 'Siwa',
    image: 'https://beta.sis.gov.eg//media/380728/siwa-nature-reserve-matrouh-governorate.jpg',
    places: [
      {
        name: 'Shali Fortress',
        description: 'Ancient mud-brick fortress in the heart of Siwa Oasis, offering panoramic views.',
        image: 'https://images.unsplash.com/photo-1589802829985-817e51171b92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        bestTime: 'Sunset',
        type: 'Historical Site'
      },
      {
        name: 'Cleopatra\'s Bath',
        description: 'Natural spring pool where Cleopatra is said to have bathed, surrounded by palm trees.',
        image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
        bestTime: 'Morning',
        type: 'Natural Wonder'
      },
      {
        name: 'Great Sand Sea',
        description: 'Experience the vast desert landscape with sand dunes and unique desert activities.',
        image: 'https://images.unsplash.com/photo-1565967511849-76a60a516170?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
        bestTime: 'Sunrise or Sunset',
        type: 'Desert Adventure'
      }
    ]
  }
};

const interests = [
  'Historical Landmarks',
  'Islamic Heritage',
  'Hidden Gems',
  'Local Markets',
  'Food Experiences',
];

export default function DiscoverPlaces() {
  const [selectedCity, setSelectedCity] = useState(null);
  const [savedPlaces, setSavedPlaces] = useState([]);
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleInterest = (interest) => {
    setSelectedInterests((prev) =>
      prev.includes(interest)
        ? prev.filter((i) => i !== interest)
        : [...prev, interest]
    );
  };

  const handleAddToList = (place) => {
    if (!savedPlaces.find(p => p.name === place.name)) {
      setSavedPlaces([...savedPlaces, place]);
    }
  };

  const handleRemoveFromList = (place) => {
    setSavedPlaces(savedPlaces.filter(p => p.name !== place.name));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Discover Places</h1>
        <p className="text-xl text-gray-600">
          Explore the most fascinating places across Egypt's cities
        </p>
      </div>

      {/* City Selection */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {Object.values(cities).map((city) => (
          <button
            key={city.name}
            onClick={() => setSelectedCity(city)}
            className={`relative h-48 rounded-lg overflow-hidden group ${
              selectedCity?.name === city.name ? 'ring-2 ring-primary-500' : ''
            }`}
          >
            <img
              src={city.image}
              alt={city.name}
              className="w-full h-full object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h2 className="text-2xl font-bold text-white">{city.name}</h2>
            </div>
          </button>
        ))}
      </div>

      {/* Places List */}
      {selectedCity && (
        <div className="space-y-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Places to Visit in {selectedCity.name}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {selectedCity.places.map((place) => (
              <div key={place.name} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-48">
                  <img
                    src={place.image}
                    alt={place.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{place.name}</h3>
                  <p className="text-gray-600 mb-4">{place.description}</p>
                  <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                    <span>{place.type}</span>
                    <span>Best time: {place.bestTime}</span>
                  </div>
                  <button
                    onClick={() => handleAddToList(place)}
                    className="w-full bg-primary-600 text-white py-2 px-4 rounded-md hover:bg-primary-700 transition-colors"
                  >
                    Add to My List
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Saved Places */}
      {savedPlaces.length > 0 && (
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">My Places List</h2>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <ul className="space-y-4">
              {savedPlaces.map((place) => (
                <li key={place.name} className="flex justify-between items-center">
                  <span className="text-gray-900">{place.name}</span>
                  <button
                    onClick={() => handleRemoveFromList(place)}
                    className="text-red-600 hover:text-red-700"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            <button className="mt-6 w-full bg-primary-600 text-white py-3 px-4 rounded-md hover:bg-primary-700 transition-colors">
              Book a Guide
            </button>
          </div>
        </div>
      )}
    </div>
  );
} 