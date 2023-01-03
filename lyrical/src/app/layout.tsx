import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <nav className="fixed z-50 flex h-12 w-full flex-nowrap items-center justify-center bg-white/50 px-4 backdrop-blur-sm">
          <Link href="songs/">View Song Directory</Link>
        </nav>
        <div>{children}</div>
      </body>
    </html>
  );
}
