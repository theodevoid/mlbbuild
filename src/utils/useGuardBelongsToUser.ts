import { NextRouter } from "next/router";
import { useEffect } from "react";

interface useGuardBelongsToUserParams {
  isLoaded: boolean;
  router: NextRouter;
  belongsToUser: boolean;
}

export const useGuardBelongsToUser = ({
  isLoaded,
  router,
  belongsToUser,
}: useGuardBelongsToUserParams) => {
  useEffect(() => {
    if (isLoaded && !belongsToUser) {
      void router.push("/");
    }
  }, [isLoaded, router, belongsToUser]);
};
