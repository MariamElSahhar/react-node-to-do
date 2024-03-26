"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./styles.css"

const profileLinks = [
  {href: "/profiles/0", name: "Learning"},
  {href: "/profiles/1", name: "Home"},
]

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const pathname = usePathname();
	return (
		<html lang="en">
			<body>
				<header
					style={{
						backgroundColor: "lightpink",
						display: "flex",
						justifyContent: "center",
						flexDirection: "column",
					}}
				>
			<h1>Get things done today</h1>
			<nav>
				{
				profileLinks.map(profileLink => (
					<Link key={profileLink.href} href={profileLink.href} className={pathname.startsWith(profileLink.href) ? "font-bold text-blue-500 p-2" : 'p-2'}>{profileLink.name}</Link>
				))
				}
			</nav>
				</header>
				{children}
				<footer
					style={{
						backgroundColor: "lightyellow",
						display: "flex",
						justifyContent: "center",
					}}
				>
					<h3>Get Organized by Mariam</h3>
				</footer>
			</body>
		</html>
	);
}
