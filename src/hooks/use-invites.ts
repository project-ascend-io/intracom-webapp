import { useEffect, useState } from "react";
import { Invitation } from "@/app/(public)/user-invites/[hash]/types";

export const useInvite = () => {
  const [invite, setInvite] = useState<Invitation | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchInvite = async () => {
      try {
        // fetch('/api/profile-data')
        //   .then((res) => res.json())
        //   .then((data) => {
        //       setInvite(data);
        //       setIsLoading(false);
        //   });
        setTimeout(() => {
          setInvite({
            _id: "random-hash",
            email: "foo@bar.com",
            organization: {
              _id: "random-org-id",
              name: "Letstat's Coffee Shop"
            },
            state: "pending",
            hash: "random-invite-hash"
          });
          setIsLoading(false);
        }, 1500);
      } catch (err) {
        setError("Failed to load invite");
        setIsLoading(false);
      }
    };
    fetchInvite();
  }, []);

  return { invite, isLoading, error, setInvite, setIsLoading };
};
