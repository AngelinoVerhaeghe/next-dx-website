import type { Metadata } from "next";
import "@/assets/css/main.css";

export const metadata: Metadata = {
    title: "DX-Solutions",
    description: "Freedom IT Solutions",
};

export default function RootLayout( {
                                        children,
                                    }: Readonly<{
    children: React.ReactNode;
}> ) {
    return (
        <html lang="en" className="relative antialiased scroll-smooth font-figtree">
            <body>
                <main className="bg-[#14102C]">
                    { children }
                </main>
            </body>
        </html>
    );
}
