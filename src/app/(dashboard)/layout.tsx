export default function DashboardLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div className="h-screen flex">
        {/*LEFT */}
        <div className="W-[15%] md:w[8%] bg-red-200">L</div>
        {/*RIGHT */}
        <div className="W-[85%] md:w[92%] bg-blue-200">R</div>
        
      </div>
    );
  }