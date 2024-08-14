"use client";
import { logout } from "@/services/auth";
import { useAuth } from "@/context/auth";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Index() {
  const { user, setUser } = useAuth();
  const router = useRouter();
  return (
    <>
      <h1>Index Page</h1>
      <p>
        <Link className="link link-primary" href="/login">
          Go to Login Page
        </Link>
      </p>
      {user && (
        <button
          onClick={async () => {
            logout();
            setUser(null);
            router.push("/login");
          }}
          className="btn btn-primary"
        >
          Logout
        </button>
      )}
    </>
  );
}
