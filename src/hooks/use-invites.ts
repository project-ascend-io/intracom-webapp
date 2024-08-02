import { useEffect, useState } from "react";
import { Invitation } from "@/app/(public)/user-invites/[hash]/types";
import { UserInviteParams } from "@/app/(public)/user-invites/[hash]/page";

export const useInvite = ({ hash }: UserInviteParams) => {
  const [invite, setInvite] = useState<Invitation | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchInvite = async () => {
      try {
        const response = await fetch('http://localhost:8080/user-invites/' + hash, {
            cache: 'no-store'
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        const userInvitation = data.responseObject;
        setInvite(userInvitation);
        setIsLoading(false);
      } catch (err) {
        setError("Failed to load invite");
        setIsLoading(false);
      }
    };
    fetchInvite();
  }, []);

  return { invite, isLoading, error, setInvite, setIsLoading };
};
