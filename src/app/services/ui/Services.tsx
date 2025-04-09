import {
    ArrowPathIcon,
    ChevronRightIcon,
    CloudArrowUpIcon,
    Cog6ToothIcon,
    FingerPrintIcon,
    LockClosedIcon,
    ServerIcon,
  } from '@heroicons/react/20/solid'
import { BeakerIcon, CalendarDateRangeIcon, ClockIcon, HomeModernIcon, PaperAirplaneIcon, TruckIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';


const secondaryFeatures = [


    {
      name: 'Medical Appointment Scheduling:',
      description: 'Direct coordination with top cardiac surgeons and specialists.',
      description1: 'Management of pre-operative consultations and post-operative follow-ups.',
      icon: CalendarDateRangeIcon,
    },
    {
      name: 'Travel Coordination:',
      description: 'Arrangement of international and domestic flights.',
      description1: 'Ground transportation between airports, medical facilities, and accommodations.',
      icon: PaperAirplaneIcon,
    },
    {
      name: 'Accommodation Planning:',
      description: 'Selection of hotels and recovery centers equipped for post-operative care.',
      description1: 'Extended stay options for long-term recovery needs.',
      icon: HomeModernIcon,
    },
    {
      name: 'Logistics Management:',
      description: 'Assistance with visa applications and travel documentation.',
      description1: 'Provision of medical translators and local guides as needed.',
      icon: TruckIcon,
    },
    {
      name: '24/7 Support:',
      description: 'Continuous access to our support team for any inquiries or assistance during your journey.',
      icon: ClockIcon,
    },
    // {
    //   name: 'Database backups.',
    //   description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. ',
    //   icon: ServerIcon,
    // },
  ]
export const Services = () => {
  return (
    <div className="mt-26 mb-10  sm:mt-26 sm:mb-10">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl sm:text-center">
              {/* <h2 className="text-base/7 font-semibold text-indigo-400">Everything you need</h2> */}
              <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-[#b2294c] sm:text-balance sm:text-5xl">
              Tailored Solutions for Your Heart Health Journey
              </p>
              <p className="mt-6 text-lg/8 text-[#615d99]">
              Every heart is unique, and so is our approach. We provide customized treatment plans designed to meet your specific needs and lifestyle. From diagnosis to recovery, our team ensures you receive the care and attention your heart deserves every step of the way.
              </p>
            </div>
          </div>
          <div className="relative overflow-hidden pt-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <Image
                alt="Angiography"
                src="/angio.jpg"
                width={2432}
                height={1442}
                className="mb-[-12%] mt-[-12%] rounded-xl shadow-8xl ring-4 ring-white/10"
              />
              <div aria-hidden="true" className="relative">
                <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-gray-900 pt-[7%]" />
              </div>
            </div>
          </div>
          <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
            <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base/7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
              {secondaryFeatures.map((feature) => (
                <div key={feature.name} className="relative pl-9">
                  <dt className="inline font-semibold text-[#b2294c]">
                    <feature.icon aria-hidden="true" className="absolute left-1 top-1 size-5 text-[#615d99]" />
                    {feature.name}
                  </dt>{' '}
                  <dd className="flex text-[#615d99]">{feature.description}</dd>
                  <dd className="flex text-[#615d99]">{feature.description1}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
  );
}