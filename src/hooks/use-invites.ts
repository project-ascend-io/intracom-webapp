import { useEffect, useState } from 'react';
import {
  ApiResponseWrapper,
  Invitation,
  UserInviteParams,
} from '@/app/(public)/user-invites/[hash]/types';
const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

export const useInvite = ({ hash }: UserInviteParams) => {
  const [invite, setInvite] = useState<Invitation | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<ApiResponseWrapper | null>(null);

  useEffect(() => {
    const fetchInvite = async () => {
      try {
        const response = await fetch(API_URL + '/user-invites/' + hash, {
          cache: 'no-store',
        });

        if (!response.ok) {
          const data = await response.json();
          setError(data);
          setIsLoading(false);
          return;
        }

        const data = await response.json();
        const userInvitation = data.responseObject;
        setInvite(userInvitation);
        setIsLoading(false);
      } catch (err) {
        setError(err);
        setIsLoading(false);
      }
    };
    fetchInvite();
  }, [hash]);

  return { invite, isLoading, error, setInvite, setIsLoading };
};
