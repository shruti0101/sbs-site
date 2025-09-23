
import { Roboto ,Poppins} from "next/font/google"; 
import "./globals.css";
import LayoutWrapper from "@/components/LayoutWrapper";
// import Navbar from "@/components/Landingpage/Navbar";
// import Footer from "@/components/Landingpage/Footer";
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
  title: "SBS Machinery – Best Manufacturer of Paper Cup Machines",
  description: "SBS Machinery offers best paper cup making machines, offset bag printing machines, paper-die cutting machines, and Non-woven bag making machine.",
  icons: {
    icon: "/logo.webp", // path to your favicon in public folder
  
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
