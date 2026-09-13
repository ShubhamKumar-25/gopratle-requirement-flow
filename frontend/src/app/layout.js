import './globals.css';

export const metadata = {
  title: 'Requirement Posting Flow',
  description: 'Event requirement form',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}