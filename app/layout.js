
import { Roboto ,Poppins} from "next/font/google"; 
import "./globals.css";
import LayoutWrapper from "@/components/LayoutWrapper";

import Social from "@/components/Landingpage/Social";
import Stickybutton from "@/components/Landingpage/Stickybutton";


// Roboto
const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets:["latin"],
  weight:["300", "400", "500", "700"]
})

export const metadata = {
  title: "SBS Machinery – Paper Cup Making Machines Manufacturer in Delhi India",
  description: "Discover top-quality paper cup Making machines manufactured in Delhi, India. Enhance your production efficiency with our innovative and reliable solutions.",
  icons: {
    icon: "/logo.webp", 
  
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`  ${roboto.variable} ${poppins.variable} antialiased`}
      >
        
          <LayoutWrapper>
             <Social></Social>
   <Stickybutton></Stickybutton>
            {children}</LayoutWrapper>
      </body>
    </html>
  );
}
