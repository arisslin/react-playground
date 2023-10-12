import './global.css';

export const metadata = {
  title: 'React playground',
  description: 'My react playground.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
