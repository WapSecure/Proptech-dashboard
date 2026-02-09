import Header from '@/components/layout/Header';
import Sidebar from '@/components/layout/Sidebar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <div className="flex min-h-screen">
        <div className="flex-1">
          <div className="bg-white border-b border-neutral-200">
            <div className="max-w-[1440px] mx-auto px-[78px]">
              <Sidebar />
            </div>
          </div>
          <div className="max-w-[1440px] mx-auto px-[78px] py-6">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}