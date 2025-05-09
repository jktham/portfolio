"use client";

import styles from "@/styles/page.module.css";
import ProjectView from "@/components/ProjectView";
import {projects} from "@/lib/projects";

export default function Page() {
	return (
		<div className={styles.page}>
			<main className={styles.main}>
				<div className={styles.title}>
					<h1>{"stuff"}</h1>
				</div>
				{projects.map((p, i) => <ProjectView project={p} index={i} key={i}></ProjectView>)}
			</main>
			<footer className={styles.footer}>
				<p>{"<3"}</p>
			</footer>
		</div>
	);
}
