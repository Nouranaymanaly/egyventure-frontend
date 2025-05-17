import { useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

const categories = [
  {
    name: 'Ceramics & Pottery',
    description: 'Traditional Egyptian ceramics and pottery, featuring intricate designs and vibrant colors.',
    items: [
      {
        name: 'Fayoum Pottery',
        description: 'Hand-painted pottery from the Fayoum region, known for its distinctive patterns and colors.',
        image: 'https://images.unsplash.com/photo-1589802829985-817e51171b92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        price: 'Starting from $15'
      },
      {
        name: 'Nubian Ceramics',
        description: 'Colorful ceramic pieces made by Nubian artisans, featuring traditional motifs.',
        image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
        price: 'Starting from $20'
      }
    ]
  },
  {
    name: 'Silver & Jewelry',
    description: 'Handcrafted silver jewelry and decorative items, showcasing traditional Egyptian designs.',
    items: [
      {
        name: 'Pharaonic Jewelry',
        description: 'Silver jewelry inspired by ancient Egyptian designs and symbols.',
        image: 'https://images.unsplash.com/photo-1589802829985-817e51171b92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        price: 'Starting from $30'
      },
      {
        name: 'Islamic Silverware',
        description: 'Traditional silver items with Islamic geometric patterns and calligraphy.',
        image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
        price: 'Starting from $25'
      }
    ]
  },
  {
    name: 'Textiles & Rugs',
    description: 'Handwoven rugs, tapestries, and traditional Egyptian textiles.',
    items: [
      {
        name: 'Handmade Rugs',
        description: 'Traditional Egyptian rugs made from natural materials with intricate patterns.',
        image: 'https://images.unsplash.com/photo-1589802829985-817e51171b92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        price: 'Starting from $100'
      },
      {
        name: 'Traditional Tapestries',
        description: 'Colorful tapestries featuring Egyptian scenes and patterns.',
        image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
        price: 'Starting from $50'
      }
    ]
  },
  {
    name: 'Woodwork & Furniture',
    description: 'Handcrafted wooden items and furniture featuring traditional Egyptian designs.',
    items: [
      {
        name: 'Inlaid Wooden Boxes',
        description: 'Beautiful wooden boxes with mother-of-pearl and bone inlay work.',
        image: 'https://images.unsplash.com/photo-1589802829985-817e51171b92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        price: 'Starting from $40'
      },
      {
        name: 'Traditional Furniture',
        description: 'Hand-carved wooden furniture with traditional Egyptian motifs.',
        image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
        price: 'Starting from $200'
      }
    ]
  },
  {
    name: 'Glass & Lamps',
    description: 'Traditional Egyptian glassware and decorative lamps.',
    items: [
      {
        name: 'Stained Glass Lamps',
        description: 'Colorful glass lamps with traditional patterns and designs.',
        image: 'https://images.unsplash.com/photo-1589802829985-817e51171b92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        price: 'Starting from $35'
      },
      {
        name: 'Hand-blown Glass',
        description: 'Traditional hand-blown glass items in various colors and shapes.',
        image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
        price: 'Starting from $20'
      }
    ]
  }
];

export default function CulturalMarketplace() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleViewDetails = (item) => {
    setSelectedItem(item);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handleCloseModal();
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Cultural Marketplace</h1>
        <p className="text-xl text-gray-600">
          Discover authentic Egyptian crafts and traditional products
        </p>
      </div>

      {/* Categories Navigation */}
      <div className="flex overflow-x-auto pb-4 mb-8 space-x-4">
        {categories.map((category) => (
          <button
            key={category.name}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-3 rounded-full whitespace-nowrap ${
              selectedCategory.name === category.name
                ? 'bg-primary-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Selected Category Content */}
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">{selectedCategory.name}</h2>
          <p className="text-gray-600">{selectedCategory.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {selectedCategory.items.map((item) => (
            <div key={item.name} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.name}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-primary-600 font-semibold">{item.price}</span>
                  <button 
                    onClick={() => handleViewDetails(item)}
                    className="bg-primary-600 text-white py-2 px-4 rounded-md hover:bg-primary-700 transition-colors"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Item Details Modal */}
      {selectedItem && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          onClick={handleBackdropClick}
        >
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                aria-label="Close modal"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
              <div className="relative h-64">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{selectedItem.name}</h2>
                <p className="text-gray-600 mb-4">{selectedItem.description}</p>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Product Details</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>Handcrafted by local artisans</li>
                      <li>Made with traditional techniques</li>
                      <li>Authentic Egyptian design</li>
                      <li>High-quality materials</li>
                    </ul>
                  </div>
                  <div className="pt-4 border-t">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-2xl font-bold text-primary-600">{selectedItem.price}</span>
                    </div>
                    <button
                      onClick={handleCloseModal}
                      className="w-full py-2 px-4 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 