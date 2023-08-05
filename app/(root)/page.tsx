import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="underline">
      Root <UserButton afterSignOutUrl="/" />
    </div>
  );
}
