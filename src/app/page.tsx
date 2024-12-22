import styles from "./page.module.css";
import nextConfig from "../../next.config";

export default function Page() {
	return (
		<div className={styles.page}>
			<main className={styles.main}>
				<h1 className={styles.title}>test</h1>
			</main>
			<footer className={styles.footer}>
				<p className={styles.footerText}>footer</p>
			</footer>
		</div>
	);
}
