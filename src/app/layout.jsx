import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ProductHomepageCardComponent from "@/components/ProductHomepageCardComponent";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";

const geistSans = Geist({ subsets: ["latin"] });
const geistMono = Geist_Mono({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html>
      <TooltipProvider>
        <SidebarProvider>
          <AppSidebar />
          <main>
            <SidebarTrigger />
            <body className={`${geistSans.className} ${geistMono.className}`}>
              {children}
            </body>
          </main>
        </SidebarProvider>
      </TooltipProvider>
    </html>
  );
}
