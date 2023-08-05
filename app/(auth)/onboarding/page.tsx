import { UserButton } from "@clerk/nextjs";
import React, { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div>
      <div className="p-4">
        Onboarding Page <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};

export default page;
