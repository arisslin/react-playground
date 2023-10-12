import MainNav from '@/components/mainNav/MainNav';

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
      <body>
        <MainNav />
        {children}
      </body>
    </html>
  );
}
