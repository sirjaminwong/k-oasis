import '@/styles/globals.css';
import React from 'react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <title>k-oasis</title>
      </head>
      <body className="overflow-y-scroll bg-zinc-900">
        <div className="grid grid-cols-[min(1260px,100%)] justify-center gap-x-8 py-8">
          {children}
        </div>
      </body>
    </html>
  );
}
