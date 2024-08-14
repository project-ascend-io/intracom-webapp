"use client";
import { ReactNode, useEffect, useState } from "react";
import { checkSession } from "@/services/auth";
import { useAuth } from "@/context/auth";
import { redirect } from "next/navigation";

type Props = {
  children: ReactNode;
};
export default function AuthLayout({ children }: Props) {
  const [loading, setLoading] = useState(true);
  const { user, setUser } = useAuth();

  async function checkUserSession() {
    const data = await checkSession();
    if (data?.success) setUser(data.responseObject);

    setLoading(false);
  }
  useEffect(() => {
    if (!user) checkUserSession();
    else setLoading(false);
  }, []);

  if (loading) return;

  return user ? (
    <div className="w-full">
      <div className="w-full border-b-2 border-solid">
        <div className="container md:mx-auto navbar">
          <a className="btn btn-ghost text-xl">Intracom</a>
        </div>
      </div>
      <main className="container px-4 md:px-0 mx-auto">{children}</main>
    </div>
  ) : (
    redirect("/")
  );
}
