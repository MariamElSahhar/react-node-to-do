import Link from "next/link";

export const metadata = {
	title: "Fullstack To-Do",
	description: "Node, Express, and Next",
};

export default function Home() {
	return (
		<>
			<h1>Home page</h1>
			<Link href="/profiles/">Profiles</Link>
		</>
	);
}
