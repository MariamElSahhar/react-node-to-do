import Link from "next/link";

export default function Profiles() {
	return (
		<>
			<h1>Profiles page</h1>
			<h2>
				<Link href="/profiles/0">Learning</Link>
			</h2>
			<h2>
				<Link href="/profiles/1">Home</Link>
			</h2>
			<h2>
				<Link href="/">Back</Link>
			</h2>
		</>
	);
}
