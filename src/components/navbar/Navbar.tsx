'use client'
import Image from "next/image";
import { useState } from "react";
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from "next/link";

const navigation = [
    { name: 'Why Choose Us?', href: '/#WhyChooseUs' },
    { name: 'Our Services', href: '/#OurServices' },
    { name: 'Testimonials', href: '/#Testimonials' },
    { name: 'Services', href: '/services' },
    { name: 'About Us', href: '/about' },
  ]

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <div className="bg-white">
     <header className="absolute inset-x-0 top-0 z-50">
             <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
               <div className="flex lg:flex-1">
                 <Link href="/" className="-m-1.5 p-1.5">
                   <span className="sr-only">Healthy Heart Journey</span>
                   <Image
                       alt="Logo"
                       src="/logo.png"
                     //   className="h-8 w-auto"
                     width={150}
                     height={150}
                     />
                 </Link>
               </div>
               <div className="flex lg:hidden">
                 <button
                   type="button"
                   onClick={() => setMobileMenuOpen(true)}
                   className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                 >
                   <span className="sr-only">Open main menu</span>
                   <Bars3Icon aria-hidden="true" className="size-6" />
                 </button>
               </div>
               <div className="hidden lg:flex lg:gap-x-12">
                 {navigation.map((item) => (
                   <Link key={item.name} href={item.href} className="text-sm/6 font-semibold text-[#615d99] hover:text-[#b2294c]">
                     {item.name}
                   </Link>
                 ))}
               </div>
             </nav>
             <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
               <div className="fixed inset-0 z-50" />
               <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                 <div className="flex items-center justify-between">
                   <a href="/" className="-m-1.5 p-1.5">
                     <span className="sr-only">Healthy Heart Journey</span>
                     <Image
                       alt=""
                       src="/logo.png"
                       height={150}
                       width={150}
                     />
                   </a>
                   <button
                     type="button"
                     onClick={() => setMobileMenuOpen(false)}
                     className="-m-2.5 rounded-md p-2.5 text-gray-700"
                   >
                     <span className="sr-only">Close menu</span>
                     <XMarkIcon aria-hidden="true" className="size-6" />
                   </button>
                 </div>
                 <div className="mt-6 flow-root">
                   <div className="-my-6 divide-y divide-gray-500/10">
                     <div className="space-y-2 py-6">
                       {navigation.map((item) => (
                         <Link
                           key={item.name}
                           href={item.href}
                           onClick={() => setMobileMenuOpen(false)}
                           className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                         >
                           {item.name}
                         </Link>
                       ))}
                     </div>
                   </div>
                 </div>
               </DialogPanel>
             </Dialog>
           </header>
    </div>
  );
}