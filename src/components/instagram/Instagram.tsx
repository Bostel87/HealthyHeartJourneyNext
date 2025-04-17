import Image from "next/image";

export default function Instagram() {
    return (
      <section id="Testimonials" className="isolate overflow-hidden bg-white px-6 lg:px-8">
        <div className="relative mx-auto max-w-2xl py-24 sm:py-32 lg:max-w-4xl">
          <div className="absolute left-1/2 top-0 -z-10 h-[50rem] w-[90rem] -translate-x-1/2 bg-[radial-gradient(50%_100%_at_top,theme(colors.indigo.100),white)] opacity-20 lg:left-36" />
          <div className="absolute inset-y-0 right-1/2 -z-10 mr-12 w-[150vw] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-20 md:mr-0 lg:right-full lg:-mr-36 lg:origin-center" />
          <figure className="grid grid-cols-1 items-center gap-x-6 gap-y-8 lg:gap-x-10">
            <div className="relative col-span-2 lg:col-start-1 lg:row-start-2">
              <svg
                fill="none"
                viewBox="0 0 162 128"
                aria-hidden="true"
                className="absolute -top-12 left-0 -z-10 h-32 stroke-gray-900/10"
              >
                <path
                  d="M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71C74.9162 106.155 75.8027 102.28 75.8027 98.0919C75.8027 94.237 75.16 90.6155 73.8708 87.2314C72.5851 83.8565 70.8137 80.9533 68.553 78.5292C66.4529 76.1079 63.9476 74.2482 61.0407 72.9536C58.2795 71.4949 55.276 70.767 52.0386 70.767C48.9935 70.767 46.4686 71.1668 44.4872 71.9924L44.4799 71.9955L44.4726 71.9988C42.7101 72.7999 41.1035 73.6831 39.6544 74.6492C38.2407 75.5916 36.8279 76.455 35.4159 77.2394L35.4047 77.2457L35.3938 77.2525C34.2318 77.9787 32.6713 78.3634 30.6736 78.3634C29.0405 78.3634 27.5131 77.2868 26.1274 74.8257C24.7483 72.2185 24.0519 69.2166 24.0519 65.8071C24.0519 60.0311 25.3782 54.4081 28.0373 48.9335C30.703 43.4454 34.3114 38.345 38.8667 33.6325C43.5812 28.761 49.0045 24.5159 55.1389 20.8979C60.1667 18.0071 65.4966 15.6179 71.1291 13.7305C73.8626 12.8145 75.8027 10.2968 75.8027 7.38572C75.8027 3.6497 72.6341 0.62247 68.8814 1.1527C61.1635 2.2432 53.7398 4.41426 46.6119 7.66522C37.5369 11.6459 29.5729 17.0612 22.7236 23.9105C16.0322 30.6019 10.618 38.4859 6.47981 47.558L6.47976 47.558L6.47682 47.5647C2.4901 56.6544 0.5 66.6148 0.5 77.4391C0.5 84.2996 1.61702 90.7679 3.85425 96.8404L3.8558 96.8445C6.08991 102.749 9.12394 108.02 12.959 112.654L12.959 112.654L12.9646 112.661C16.8027 117.138 21.2829 120.739 26.4034 123.459L26.4033 123.459L26.4144 123.465C31.5505 126.033 37.0873 127.316 43.0178 127.316C47.5035 127.316 51.6783 126.595 55.5376 125.148L55.5376 125.148L55.5477 125.144C59.5516 123.542 63.0052 121.456 65.9019 118.881L65.5697 118.507Z"
                  id="b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb"
                />
                <use x={86} href="#b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb" />
              </svg>
              <blockquote className="text-xl/8 font-semibold text-gray-900 sm:text-2xl/9">
                <p>
                Healthy Heart Journey made my heart surgery stress-free. Everything was handled perfectly!
                </p>
              </blockquote>
            </div>
            <div className="col-end-1 w-16 lg:row-span-4 lg:w-72">
              {/* <Image
                alt=""
                src="/Testimonio.jpg"
                className="rounded-xl bg-indigo-50 lg:rounded-3xl"
                width={300}
                height={300}
              /> */}
              {/* <iframe src="/TERRYCARTERHHJ_005.mp4" className="aspect-video"></iframe>
               */}
               <video width="320" height="240" controls>
              <source src="/TERRYCARTERHHJ _005.mp4" type="video/mp4" />
              <track
                src="/TERRYCARTERHHJ _005.mp4"
                kind="subtitles"
                srcLang="en"
                label="English"
              />
                Your browser does not support the video tag.
              </video>
            </div>
            <figcaption className="text-base lg:col-start-1 lg:row-start-3">
              <div className="font-semibold text-gray-900">Terry Carter</div>
              <div className="mt-1 text-gray-500">CEO of Workcation</div>
            </figcaption>
          </figure>
        </div>
      </section>
    )
  }
  


// import Image from "next/image"

// // import avatarImage3 from '@/images/avatars/logoinsta.png'
// function SwirlyDoodle(props: any) {
//     return (
//         <svg
//             aria-hidden="true"
//             viewBox="0 0 281 40"
//             preserveAspectRatio="none"
//             {...props}
//         >
//             <path
//                 fillRule="evenodd"
//                 clipRule="evenodd"
//                 d="M240.172 22.994c-8.007 1.246-15.477 2.23-31.26 4.114-18.506 2.21-26.323 2.977-34.487 3.386-2.971.149-3.727.324-6.566 1.523-15.124 6.388-43.775 9.404-69.425 7.31-26.207-2.14-50.986-7.103-78-15.624C10.912 20.7.988 16.143.734 14.657c-.066-.381.043-.344 1.324.456 10.423 6.506 49.649 16.322 77.8 19.468 23.708 2.65 38.249 2.95 55.821 1.156 9.407-.962 24.451-3.773 25.101-4.692.074-.104.053-.155-.058-.135-1.062.195-13.863-.271-18.848-.687-16.681-1.389-28.722-4.345-38.142-9.364-15.294-8.15-7.298-19.232 14.802-20.514 16.095-.934 32.793 1.517 47.423 6.96 13.524 5.033 17.942 12.326 11.463 18.922l-.859.874.697-.006c2.681-.026 15.304-1.302 29.208-2.953 25.845-3.07 35.659-4.519 54.027-7.978 9.863-1.858 11.021-2.048 13.055-2.145a61.901 61.901 0 0 0 4.506-.417c1.891-.259 2.151-.267 1.543-.047-.402.145-2.33.913-4.285 1.707-4.635 1.882-5.202 2.07-8.736 2.903-3.414.805-19.773 3.797-26.404 4.829Zm40.321-9.93c.1-.066.231-.085.29-.041.059.043-.024.096-.183.119-.177.024-.219-.007-.107-.079ZM172.299 26.22c9.364-6.058 5.161-12.039-12.304-17.51-11.656-3.653-23.145-5.47-35.243-5.576-22.552-.198-33.577 7.462-21.321 14.814 12.012 7.205 32.994 10.557 61.531 9.831 4.563-.116 5.372-.288 7.337-1.559Z"
//             />
//         </svg>
//     )
// }

// export default function Instagram() {
//     return (
//         <div id="insta" className="container mx-auto flex flex-col items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
//             {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
//             <div >
//                 <div  >
//                     <div  >
//                         <div >
//                             <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-[14.5rem]" >

//                                 <h1  class="inst__title align-right col-lg-5 mbr-fonts-style display-2"><a href="https://www.instagram.com/doctor_trinoandrade/?hl=es-la" target="_blank">@doctor_trinoandrade</a></h1>
//                                 <a href="https://www.instagram.com/weightlossjourney.us/?hl=es-la">
                                
//                                     <Image
//                                         src="/logo.png"
//                                         alt="Logo"
//                                         width={250}
//                                         height={250}
//                                         className="mt-10 mb-10 object-contain"
//                                     />
                                    
                                
//                                     <svg
//                                         xmlns="http://www.w3.org/2000/svg"
//                                         width={150}
//                                         height={150}
//                                         fill="none"
//                                         viewBox="0 0 32 32"

//                                     >
//                                         <rect width={28} height={28} x={2} y={2} fill="url(#a)" rx={6} />
//                                         <rect width={28} height={28} x={2} y={2} fill="url(#b)" rx={6} />
//                                         <rect width={28} height={28} x={2} y={2} fill="url(#c)" rx={6} />
//                                         <path fill="#fff" d="M23 10.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
//                                         <path
//                                             fill="#fff"
//                                             fillRule="evenodd"
//                                             d="M16 21a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
//                                             clipRule="evenodd"
//                                         />
//                                         <path
//                                             fill="#fff"
//                                             fillRule="evenodd"
//                                             d="M6 15.6c0-3.36 0-5.04.654-6.324a6 6 0 0 1 2.622-2.622C10.56 6 12.24 6 15.6 6h.8c3.36 0 5.04 0 6.324.654a6 6 0 0 1 2.622 2.622C26 10.56 26 12.24 26 15.6v.8c0 3.36 0 5.04-.654 6.324a6 6 0 0 1-2.622 2.622C21.44 26 19.76 26 16.4 26h-.8c-3.36 0-5.04 0-6.324-.654a6 6 0 0 1-2.622-2.622C6 21.44 6 19.76 6 16.4v-.8ZM15.6 8h.8c1.713 0 2.878.002 3.778.075.877.072 1.325.202 1.638.361a4 4 0 0 1 1.748 1.748c.16.313.29.761.36 1.638.074.9.076 2.065.076 3.778v.8c0 1.713-.002 2.878-.075 3.778-.072.877-.202 1.325-.361 1.638a4 4 0 0 1-1.748 1.748c-.313.16-.761.29-1.638.36-.9.074-2.065.076-3.778.076h-.8c-1.713 0-2.878-.002-3.778-.075-.877-.072-1.325-.202-1.638-.361a4 4 0 0 1-1.748-1.748c-.16-.313-.29-.761-.36-1.638C8.001 19.278 8 18.113 8 16.4v-.8c0-1.713.002-2.878.075-3.778.072-.877.202-1.325.361-1.638a4 4 0 0 1 1.748-1.748c.313-.16.761-.29 1.638-.36.9-.074 2.065-.076 3.778-.076Z"
//                                             clipRule="evenodd"
//                                         />
//                                         <defs>
//                                             <radialGradient
//                                                 id="a"
//                                                 cx={0}
//                                                 cy={0}
//                                                 r={1}
//                                                 gradientTransform="rotate(-55.376 27.916 .066) scale(25.5196)"
//                                                 gradientUnits="userSpaceOnUse"
//                                             >
//                                                 <stop stopColor="#B13589" />
//                                                 <stop offset={0.793} stopColor="#C62F94" />
//                                                 <stop offset={1} stopColor="#8A3AC8" />
//                                             </radialGradient>
//                                             <radialGradient
//                                                 id="b"
//                                                 cx={0}
//                                                 cy={0}
//                                                 r={1}
//                                                 gradientTransform="rotate(-65.136 29.766 6.89) scale(22.5942)"
//                                                 gradientUnits="userSpaceOnUse"
//                                             >
//                                                 <stop stopColor="#E0E8B7" />
//                                                 <stop offset={0.445} stopColor="#FB8A2E" />
//                                                 <stop offset={0.715} stopColor="#E2425C" />
//                                                 <stop offset={1} stopColor="#E2425C" stopOpacity={0} />
//                                             </radialGradient>
//                                             <radialGradient
//                                                 id="c"
//                                                 cx={0}
//                                                 cy={0}
//                                                 r={1}
//                                                 gradientTransform="matrix(38.50003 -5.5 1.1764 8.23476 .5 3)"
//                                                 gradientUnits="userSpaceOnUse"
//                                             >
//                                                 <stop offset={0.157} stopColor="#406ADC" />
//                                                 <stop offset={0.468} stopColor="#6A45BE" />
//                                                 <stop offset={1} stopColor="#6A45BE" stopOpacity={0} />
//                                             </radialGradient>
//                                         </defs>
//                                     </svg>
//                                 </a>
//                                 <h2 className="font-display text-3xl tracking-tight text-black sm:text-1xl">
//                                     <a href=" https://www.instagram.com/weightlossjourney.us/?hl=es-la" className="hover:text-[#b2294c]"><span className="relative whitespace-nowrap">
//                                         <SwirlyDoodle className="absolute left-0 top-1/2 h-[1em] w-full fill-[#615d99]" />
//                                         <span className="relative">@healthyheartjourney.us</span>
//                                     </span>{' '}</a> 
//                                 </h2>
//                                 <div className="relative container lg:flex gap-40 mt-10" >
//                                     <div >
//                                     <iframe  id="instagram-embed-1" src="https://www.instagram.com/reel/C_ZXO-psUbW/embed/captioned/?cr=1&amp;v=12&amp;wp=728&amp;rp=%2Ftestimonios%2F#%7B%22ci%22%3A1%2C%22os%22%3A1099.0300000003117%2C%22ls%22%3A1073.4100000008766%2C%22le%22%3A1074.800000000323%7D"  height="1190" data-instgrm-payload-id="instagram-media-payload-1" ></iframe>
//                                     </div>
//                                     <div >
//                                     <iframe  id="instagram-embed-2" src="https://www.instagram.com/reel/CiMDdvLjIXU/embed/captioned/?cr=1&amp;v=12&amp;wp=728&amp;rd=http%3A%2F%2Fdoctortrinoandrade.com&amp;rp=%2Ftestimonios%2F#%7B%22ci%22%3A1%2C%22os%22%3A1099.0300000003117%2C%22ls%22%3A1073.4100000008766%2C%22le%22%3A1074.800000000323%7D"   height="990" data-instgrm-payload-id="instagram-media-payload-1" ></iframe>
                                
//                                     </div>
                                    
//                                 </div>
                               
//                                 <h1><a href="https://www.instagram.com/weightlossjourney.us/?hl=es-la" target="_blank"></a></h1>

//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }
