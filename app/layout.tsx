import "./globals.css";

// const inter = Montserrat_Alternates({ weight: "400", subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Sagar Chakkarkota</title>
        <meta name="description" content="Sagar Chakkarkota portfolio" />
        <link rel="icon" href="/profilePhoto.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
