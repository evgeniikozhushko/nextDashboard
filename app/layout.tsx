import '@/app/ui/global.css';
import { inter} from '@/app/ui/fonts';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={`${inter.className} antialiased`}>{children}</body>
            {/* <h1 className={`${lusitana.className} antialiased`}>{children}</h1> */}
        </html>
    );
}
