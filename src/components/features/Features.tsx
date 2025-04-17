// import { titleFont } from '@/config/fonts'
import { HeartIcon, TrophyIcon, TruckIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Personalized care for international patients.',
    description:
      'We understand that traveling for medical care can be challenging. That’s why we offer personalized support for international patients, including multilingual assistance, treatment coordination, and comfortable recovery options.',
    href: '#',
    icon: HeartIcon,
  },
  {
    name: 'Top-tier hospitals and heart specialists',
    description:
      'We parter with leading hospitals and heart specialists to provide you with the best care possible. Our network includes renowned cardiologists, surgeons, and healthcare professionals dedicated to your heart health.',
    href: '#',
    icon: TrophyIcon,
  },
  {
    name: 'Stress-free travel, accommodation, and recovery arrangements',
    description:
      'We take care of every detail so you can focus on your health. From travel planning and comfortable accommodations to seamless recovery arrangements. Let us handle the logistics while you receive world-class cardiovascular care.',
    href: '#',
    icon: TruckIcon,
  },
]

export default function Features() {
  return (
    <div id='WhyChooseUs' className="bg-white py-24 sm:py-32">
      <div className="relative isolate">
        <svg
          aria-hidden="true"
          className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
        >
          <defs>
            <pattern
              x="50%"
              y={-1}
              id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
              width={200}
              height={200}
              patternUnits="userSpaceOnUse"
            >
              <path d="M.5 200V.5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)" width="100%" height="100%" strokeWidth={0} />
        </svg>
        <div
          aria-hidden="true"
          className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
        >
          <div
            style={{
              clipPath:
                'polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)',
            }}
            className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
          />
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-pretty text-4xl font-semibold tracking-tight text-[#615d99] sm:text-5xl">
            Why Choose Us?
          </h2>
          <p className="mt-6 text-lg/8 text-[#b2294c]">
            Your heart deserves the best care.
            At Healthy Heart Journey, we connect you with expert cardiovascular surgeons who combine cutting-edge technology with compassionate treatment. Through our trusted medical partners and state-of-the-art facilities, we coordinate personalized care solutions tailored to your unique needs. Let us handle the details — so you can focus on your health with peace of mind.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="text-base/7 font-semibold text-[#615d99]">
                  <div className="mb-6 flex size-10 items-center justify-center rounded-lg bg-[#615d99]">
                    <feature.icon aria-hidden="true" className="size-6 text-white" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base/7 text-[#b2294c]">
                  <p className="flex-auto">{feature.description}</p>
                  <p className="mt-6">
                    {/* <a href={feature.href} className="text-sm/6 font-semibold text-indigo-600">
                      Learn more <span aria-hidden="true">→</span>
                    </a> */}
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
