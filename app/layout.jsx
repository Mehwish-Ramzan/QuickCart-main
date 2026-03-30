// /app/layout.jsx
import { ClerkProvider } from "@clerk/nextjs";
import { AppContextProvider } from "@/context/AppContext";
import './globals.css';

export const metadata = {
  title: "QuickCart",
  description: "Ecommerce App",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <AppContextProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
      </AppContextProvider>
    </ClerkProvider>
  );
}