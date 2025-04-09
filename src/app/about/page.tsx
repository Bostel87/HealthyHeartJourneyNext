import { Metadata } from "next";
import About from "./ui/About";


export const metadata: Metadata = {
    title: "HealthyHeartJourney - Services",
    description: "Expertly coordinated heart surgery and endovascular procedures ",
    keywords: ['Manga Gástrica', 'Bypas Gástrico', 'Lipoescultura', 'Blefaroplastia', 'Papada', 'Mamoplastia de aumento', 'Rinoplastia', 'Mamoplastia de reducción', 'Liposucción', 'Abdominoplastia', 'Ritidectomía', 'Otoplastia', 'Mentoplastia', 'Gluteoplastia', 'Implantes de gluteos', 'Lifting de muslos', 'Braquioplastia' ],
  
  };

export default function AboutPage() {
  return (
    <About/>
  );
}
