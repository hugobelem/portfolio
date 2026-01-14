import "./globals.css";
import { lekton } from "./fonts";
import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "Hugo Belém",
  description: "Software Engineer",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`bg-background p-4 sm:px-10 ${lekton.className} uppercase antialiased`}
      >
        <header className="top-0 left-0 right-0 p-1 rounded-md bg-secondary/15">
          <div className="grid grid-cols-3 items-center px-1 text-primary font-bold">
            <p className="text-xs sm:text-sm justify-self-start">
              hugo belém{" "}
              <span className="text-tertiary/60">
                / <span className="block sm:inline">software engineer</span>
              </span>
            </p>

            <p className="text-xs sm:text-sm justify-self-center">■</p>

            <p className="text-xs justify-self-end">brazil • porto/pt</p>
          </div>
        </header>

        {children}
      </body>
    </html>
  );
}
