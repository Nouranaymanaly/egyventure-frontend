import { GlobeAltIcon, HeartIcon, SparklesIcon } from '@heroicons/react/24/outline';

const team = [
  {
    name: 'Name 1',
    role: 'Founder & CEO',
    imageUrl: 'https://cdn-icons-png.flaticon.com/512/219/219983.png',
  },
  {
    name: 'Name 2',
    role: 'Head of Operations',
    imageUrl: 'https://cdn-icons-png.freepik.com/512/219/219988.png',
  },
  {
    name: 'Name 3',
    role: 'Head of Technology',
    imageUrl: 'https://cdn-icons-png.freepik.com/256/6997/6997658.png',
  },
];

const values = [
  {
    name: 'Sustainable Tourism',
    description: 'We promote responsible travel practices that benefit local communities and preserve cultural heritage.',
    icon: GlobeAltIcon,
  },
  {
    name: 'Local Empowerment',
    description: 'We create economic opportunities for local providers and artisans through our platform.',
    icon: HeartIcon,
  },
  {
    name: 'Authentic Experiences',
    description: 'We connect travelers with genuine local experiences that go beyond typical tourist attractions.',
    icon: SparklesIcon,
  },
];

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-primary-100/20">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Our Mission
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              At EGYventure, we're on a mission to transform how travelers experience Egypt. We believe in creating meaningful connections between travelers and local communities while promoting sustainable tourism practices.
            </p>
          </div>
        </div>
      </div>

      {/* Values section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600">Our Values</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            What drives us forward
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {values.map((value) => (
              <div key={value.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <value.icon className="h-5 w-5 flex-none text-primary-600" aria-hidden="true" />
                  {value.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{value.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Team section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Team</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Meet the passionate individuals behind EGYventure who are dedicated to transforming travel experiences in Egypt.
            </p>
          </div>
          <ul role="list" className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {team.map((person) => (
              <li key={person.name}>
                <img
                  className="aspect-[3/4] w-full object-contain rounded-2xl"
                  src={person.imageUrl}
                  alt={person.name}
                />
                <h3 className="mt-6 text-lg font-semibold leading-8 text-gray-900">{person.name}</h3>
                <p className="text-base leading-7 text-gray-600">{person.role}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* SDGs section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600">Our Commitment</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Supporting Sustainable Development Goals
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We are committed to contributing to the United Nations Sustainable Development Goals through our platform and operations.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900">Decent Work & Economic Growth</h3>
              <p className="mt-2 text-gray-600">
                Creating sustainable employment opportunities for local communities through tourism.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900">Sustainable Cities & Communities</h3>
              <p className="mt-2 text-gray-600">
                Promoting responsible tourism practices that preserve cultural heritage.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900">Partnerships for the Goals</h3>
              <p className="mt-2 text-gray-600">
                Collaborating with local stakeholders to achieve sustainable development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 