"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Scroll to top
 * when clicking a link, user will not scroll to the top of the page if the header is sticky.
 * their current scroll position will persist to the next page. This is a workaround to 'fix' that behavior.
 * @returns useEffect
 */
export default function ScrollToTop() {
	const pathname = usePathname();
	useEffect(() => {
		window.scroll(0, 0);
	}, [pathname]);
	return <></>;
}
