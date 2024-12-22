import {Project} from "@/lib/projects";
import style from "@/styles/ProjectView.module.css"

export default function ProjectView(project: Project) {
	return (
		<div className={style.projectView}>
			{project.name}
		</div>
	);
}
