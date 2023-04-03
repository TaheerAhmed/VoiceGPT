import SideBar from "@/components/SideBar";
import "../styles/globals.css";
import { getServerSession } from "next-auth";
import { SessionProvider } from "@/components/SessionProvider";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import Login from "@/components/Login";
import ClientProvider from "@/components/ClientProvider";
import NavBar from "@/components/NavBar";
export const metadata = {
  title: "ChatGPT Voice Enabled",
  description: "Created By Mohammed Taheer Ahmed",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  console.log(session);
  return (
    <html lang="en">
      <body>
        <SessionProvider session={session}>
          {!session ? (
            <Login />
          ) : (
            <div className="sm:flex">
                <div className="sm:hidden">
                  <NavBar />
                </div>
              {/* sidebar */}
              <div className="bg-[#202123] max-w-xs h-screen overflow-y-auto md:min-w-[20rem] hidden sm:block">
                <SideBar />
              </div>
              

              {/* client-provider */}
              <ClientProvider />
              <div className="bg-[#1111] flex-1">{children}</div>
            </div>
          )}
        </SessionProvider>
      </body>
    </html>
  );
}
