"use client";
import { useRouter } from "next/navigation";

export default function Tasks({
	params,
}: {
	params: { profileID: string; taskID: string };
}) {
	const router = useRouter();
	const handleClick = () => {
		router.push(`/profiles/${params.profileID}/tasks/`);
	};
	return (
		<>
			<h1>
				Task {params.taskID} for profile {params.profileID}
			</h1>
			<button onClick={handleClick}>Delete Task</button>
		</>
	);
}
