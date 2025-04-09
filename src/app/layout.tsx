import type { Metadata } from "next";
import "./globals.css";
import { geistMono, geistSans } from "@/config/fonts";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";





export const metadata: Metadata = {
  title: "Healthy Heart Journey",
  authors: [{ name: "Healthy-Heart-Journey" }],
  keywords: [
    "Healthy Heart Journey",
    "Medical Travel",
    "Cardiac Care",
    "Heart Surgery",
    "Endovascular Procedures",
    "Medical Tourism",
    "Cardiology",
    "Travel for Health",
    "Cardiac Surgery",
    "Heart Health",
    "Patient Care",
    "Medical Services",
    "Healthcare",
    "Travel Assistance",
    "Health and Wellness",
    "Medical Coordination",
    "Cardiac Rehabilitation",
    "Patient Support",
    "Health Travel",
    "Medical Consultation",
    "Cardiac Specialists",
    "Heart Disease",
    "Cardiac Procedures",
    "Medical Facilities",
    "Health Services",
    "Travel for Cardiac Care",
    "Cardiac Health",
    "Heart Surgery Abroad",
    "Cardiac Care Abroad",
    "Medical Travel Services",
    "Cardiac Surgery Services",
    "Heart Health Services",
    "Medical Travel Coordination",
    "Cardiac Care Coordination",
    "Heart Surgery Coordination",
    "Endovascular Procedures Abroad",
    "Medical Travel Assistance",
    "Cardiac Care Assistance",
    "Heart Surgery Assistance",
    "Endovascular Procedures Assistance",
    "Medical Travel Support",
    "Cardiac Care Support",
    "Heart Surgery Support",
    "Endovascular Procedures Support",
    "Medical Travel Experts",
    "Cardiac Care Experts",
    "Heart Surgery Experts",
    "Endovascular Procedures Experts",
    "Medical Travel Solutions",
    "Cardiac Care Solutions",
    "Heart Surgery Solutions",
    "Endovascular Procedures Solutions",
    "Medical Travel Planning",
    "Cardiac Care Planning",
    "Heart Surgery Planning",
    "Endovascular Procedures Planning",
    "Medical Travel Services Abroad",
    "Cardiac Care Services Abroad",
    "Heart Surgery Services Abroad",
    "Endovascular Procedures Services Abroad",
    "Medical Travel Coordination Abroad",
    "Cardiac Care Coordination Abroad",
    "Heart Surgery Coordination Abroad",
    "Endovascular Procedures Coordination Abroad",
    "Medical Travel Assistance Abroad",
    "Cardiac Care Assistance Abroad",
    "Heart Surgery Assistance Abroad",
    "Endovascular Procedures Assistance Abroad",
    "Medical Travel Support Abroad",
    "Cardiac Care Support Abroad",
    "Heart Surgery Support Abroad",
    "Endovascular Procedures Support Abroad",
    "Medical Travel Experts Abroad",
    "Cardiac Care Experts Abroad",
    "Heart Surgery Experts Abroad",
    "Endovascular Procedures Experts Abroad",
    "Medical Travel Solutions Abroad",
    "Cardiac Care Solutions Abroad",
    "Heart Surgery Solutions Abroad",
    "Endovascular Procedures Solutions Abroad",
    "Medical Travel Planning Abroad",
  ],
  openGraph: {
    title: "Healthy Heart Journey",
    description:
      "Your Heart, Our Journey – Premium Medical Travel for Cardiac Care",
    url: "https://healthyheartjourney.com",
    siteName: "Healthy Heart Journey",
    images: [
      {
        url: "https://healthyheartjourney.com/Angio.jpg",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  description: "Your Heart, Our Journey – Premium Medical Travel for Cardiac Care",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
