import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";

const DashboardPage =async () => {
  const session=await getServerSession(authOptions)
  return (
    <div>
      {
      session?.user &&
        <>
        <h1 className="text-4xl text-center mt-10">Welcome {session?.user?.name}</h1>
      <h1 className="text-4xl text-center mt-10">Logged-in {session?.user?.email}</h1>
      <Image
      src={session?.user?.image || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"}
      alt="user image"
        width={100}
        height={100}
      
      />
        </>
      }
    </div>
  );
};

export default DashboardPage;
