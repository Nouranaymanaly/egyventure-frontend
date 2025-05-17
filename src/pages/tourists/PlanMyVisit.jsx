import { useState } from 'react';

const cities = [
  'Cairo',
  'Alexandria',
  'Giza',
  'Luxor',
  'Aswan',
  'Sharm El Sheikh',
  'Hurghada',
  'Dahab',
  'Marsa Alam',
  'Siwa Oasis',
  'Port Said',
  'Suez',
  'Ismailia',
  'Mansoura',
  'Tanta',
  'Assiut',
  'Sohag',
  'Qena',
  'Minya',
  'Beni Suef'
];

export default function PlanMyVisit() {
  const [formData, setFormData] = useState({
    arrivalDate: '',
    departureDate: '',
    selectedCities: [],
    additionalNotes: ''
  });

  const handleDateChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCityChange = (city) => {
    setFormData(prev => {
      const selectedCities = prev.selectedCities.includes(city)
        ? prev.selectedCities.filter(c => c !== city)
        : [...prev.selectedCities, city];
      return { ...prev, selectedCities };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Visit plan submitted:', formData);
    // Show success message or redirect
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Plan Your Visit to Egypt</h1>
        <p className="text-lg text-gray-600">
          Let us help you plan your perfect Egyptian adventure. Fill in your travel details below.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Date Selection */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="arrivalDate" className="block text-sm font-medium text-gray-700 mb-2">
              Arrival Date
            </label>
            <input
              type="date"
              id="arrivalDate"
              name="arrivalDate"
              required
              value={formData.arrivalDate}
              onChange={handleDateChange}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
            />
          </div>
          <div>
            <label htmlFor="departureDate" className="block text-sm font-medium text-gray-700 mb-2">
              Departure Date
            </label>
            <input
              type="date"
              id="departureDate"
              name="departureDate"
              required
              value={formData.departureDate}
              onChange={handleDateChange}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
            />
          </div>
        </div>

        {/* City Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Cities to Visit (Select all that apply)
          </label>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {cities.map((city) => (
              <div key={city} className="flex items-center">
                <input
                  type="checkbox"
                  id={city}
                  checked={formData.selectedCities.includes(city)}
                  onChange={() => handleCityChange(city)}
                  className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label htmlFor={city} className="ml-2 text-sm text-gray-700">
                  {city}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Notes */}
        <div>
          <label htmlFor="additionalNotes" className="block text-sm font-medium text-gray-700 mb-2">
            Additional Notes (Optional)
          </label>
          <textarea
            id="additionalNotes"
            name="additionalNotes"
            rows={4}
            value={formData.additionalNotes}
            onChange={(e) => setFormData(prev => ({ ...prev, additionalNotes: e.target.value }))}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
            placeholder="Tell us about your interests, preferences, or any specific requirements..."
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="px-6 py-3 bg-primary-600 text-white font-medium rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
          >
            Submit Visit Plan
          </button>
        </div>
      </form>
    </div>
  );
} 