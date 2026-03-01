import Navbar from '@/shared/layout/Navbar';

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar variant="app" showAuth={true} />
      <main className="pt-16 min-h-screen">{children}</main>
    </>
  );
}