import styles from "@/styles/page.module.css";
import ProjectView from "@/components/ProjectView";
import {projects} from "@/lib/projects";
import React from "react";

export default function Page() {
	return (
		<div className={styles.page}>
			<main className={styles.main}>
				<div className={styles.title}>
					<h1 className={styles.titleText}>title</h1>
				</div>
				{projects.map((p, i) => <React.Fragment key={i}>{ProjectView(p)}</React.Fragment>)}
			</main>
			<footer className={styles.footer}>
				<p className={styles.footerText}>footer</p>
			</footer>
		</div>
	);
}
