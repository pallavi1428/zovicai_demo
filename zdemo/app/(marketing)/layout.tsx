import Navbar from '@/shared/layout/Navbar';

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar variant="marketing" showAuth={true} />
      <main className="pt-16 min-h-screen">{children}</main>
    </>
  );
}