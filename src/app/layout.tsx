// src/app/layout.tsx
import './globals.css';
import Navbar from '../components/Navbar';

export const metadata = {
  title: 'Michal',
  description: 'A social network similar to Instagram',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Navbar /> {/* Make sure Navbar is at the bottom */}
      </body>
    </html>
  );
}




