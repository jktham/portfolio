"use client";

import styles from "@/styles/page.module.css";
import ProjectView from "@/components/ProjectView";
import {projects, moreProjects} from "@/lib/projects";
import { useState } from "react";

export default function Page() {
	const [more, setMore] = useState<boolean>(false);
	return (
		<div className={styles.page}>
			<main className={styles.main}>
				<div className={styles.title}>
					<h1>{"stuff :)"}</h1>
				</div>
				{projects.map((p, i) => <ProjectView project={p} index={i} key={i}></ProjectView>)}
				{!more && <button className={styles.moreButton} onClick={() => setMore(true)}>More<span className="material-symbols-outlined">keyboard_arrow_down</span></button>}
				{more && moreProjects.map((p, i) => <ProjectView project={p} index={projects.length + i} key={projects.length + i}></ProjectView>)}
				{more && <button className={styles.moreButton} onClick={() => setMore(false)}>Less<span className="material-symbols-outlined">keyboard_arrow_up</span></button>}
			</main>
			<footer className={styles.footer}>
				<p>{"<3"}</p>
			</footer>
		</div>
	);
}
