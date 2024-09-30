import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Project Apollo",
  description: "Apollo Scorecard System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="coffee">
      <body>
        {children}
      </body>
    </html>
  );
}
