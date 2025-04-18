import { LifebuoyIcon, NewspaperIcon, PhoneIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'

const cards = [
  {
    name: 'Medical Coordination: Appointment scheduling, specialist matching, and procedure confirmation.',
    description: 'Consectetur vel non. Rerum ut consequatur nobis unde. Enim est quo corrupti consequatur.',
    icon: PhoneIcon,
  },
  {
    name: 'Travel & Accommodations: Flights, ground transport, hotel stays, and post-op recovery lodging.',
    description: 'Quod possimus sit modi rerum exercitationem quaerat atque tenetur ullam.',
    icon: LifebuoyIcon,
  },
  {
    name: 'Logistics & Support: 24/7 assistance, visa support, and personalized travel itineraries.',
    description: 'Ratione et porro eligendi est sed ratione rerum itaque. Placeat accusantium impedit eum odit.',
    icon: NewspaperIcon,
  },
]

export default function Services() {
  return (
    <div id='OurServices' className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      <Image
        alt="Angio"
        src="/Angio.jpg"
        width={1000}
        height={1000}
        className="absolute inset-0 -z-10 size-full object-fill object-right md:object-center opacity-40"
      />
      <div className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl">
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
        />
      </div>
      <div className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu">
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">Our Services</h2>
          <p className="mt-8 text-pretty text-lg font-medium text-gray-300 sm:text-xl/8">
          We specialize in coordinating access to a wide range of cardiovascular treatments — from minimally invasive procedures to complex heart surgeries — performed by trusted medical partners. Through our carefully selected network of specialists and accredited clinics, we help patients receive personalized care and cutting-edge treatment options.
We manage all travel, accommodations, and post-treatment logistics so you can focus fully on your health and recovery.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
          {cards.map((card) => (
            <div key={card.name} className="flex gap-x-4 rounded-xl bg-white/5 p-6 ring-1 ring-inset ring-white/10">
              <card.icon aria-hidden="true" className="h-7 w-5 flex-none text-indigo-400" />
              <div className="text-base/7">
                <h3 className="font-semibold text-white">{card.name}</h3>
                {/* <p className="mt-2 text-gray-300">{card.description}</p> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
