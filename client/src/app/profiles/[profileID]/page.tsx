import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";

type Props = {
	params: { profileID: number };
};

export const generateMetadata = async ({ params }: Props): Metadata => {
	const res = await fetch(
		`http://localhost:8000/api/profiles/${params.profileID}`
	);
	if (!res.ok) {
		throw new Error("Network is not ok");
	}
	const data = await res.json();
	return {
		title: `${data.data.name} Profile`,
	};
};

export default function Tasks({ params }: Props) {
	if (params.profileID > 10 || params.profileID < 0) return notFound();
	else return (
		<>
		<h1>Tasks for profile {params.profileID}</h1>

		<h2>
			<Link href="/profiles/">Back</Link>
		</h2>
		</>
	);
}
