import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";


const inter = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Home Comfort",
  description: "Get Best Home Services and Repairs",
  
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>
        <div className="mx-6 md:mx-16">
        <Toaster />
          {children}
          </div>
        </body>
    </html>
    </ClerkProvider>
    
  );
}
