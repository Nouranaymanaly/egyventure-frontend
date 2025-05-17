import { EnvelopeIcon, PhoneIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';

const contactMethods = [
  {
    name: 'Email',
    description: 'support@egyventure.com',
    icon: EnvelopeIcon,
  },
  {
    name: 'Phone',
    description: '+20 123 456 7890',
    icon: PhoneIcon,
  },
  {
    name: 'WhatsApp',
    description: '+20 123 456 7890',
    icon: ChatBubbleLeftRightIcon,
  },
];

export default function Contact() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contact Us</h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Have questions or need assistance? We're here to help. Choose the best way to reach us below.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {contactMethods.map((method) => (
            <div key={method.name}>
              <dt className="font-semibold text-gray-900">
                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600">
                  <method.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                {method.name}
              </dt>
              <dd className="mt-1 text-gray-600">{method.description}</dd>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20">
          <form action="#" method="POST" className="space-y-8">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                  First name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
                  Last name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="subject" className="block text-sm font-semibold leading-6 text-gray-900">
                  Subject
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
            <div className="mt-10">
              <button
                type="submit"
                className="block w-full rounded-md bg-primary-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Press & Partnerships section */}
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20">
          <div className="rounded-2xl bg-gray-50 p-8">
            <h2 className="text-base font-semibold leading-7 text-gray-900">Press & Partnerships</h2>
            <p className="mt-2 text-sm leading-6 text-gray-600">
              For press inquiries or partnership opportunities, please contact our team at{' '}
              <a href="mailto:partnerships@egyventure.com" className="font-semibold text-primary-600">
                partnerships@egyventure.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 