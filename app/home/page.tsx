import { getServerSession } from "next-auth";
import { authOptions } from "../utils/auth";
import { redirect } from "next/navigation";

const HomePage = async () => {
	const session = await getServerSession(authOptions);
	if(!session) redirect("/login");
	
	return (
		<div>Hello Authenticated Man!</div>
	);
};

export default HomePage