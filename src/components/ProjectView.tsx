/* eslint-disable @next/next/no-img-element */
"use client";

import {Project} from "@/lib/projects";
import styles from "@/styles/ProjectView.module.css"
import nextConfig from "../../next.config";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination, Autoplay, Mousewheel, Zoom, Manipulation} from "swiper/modules";
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/zoom';

export default function ProjectView({project, index}: {project: Project; index: number}) {
	return (
		<div className={(index % 2 == 0 ? `${styles.projectView} ${styles.reverse}` : styles.projectView)}>
			<div className={styles.info}>
				{project.name && <div className={styles.name}>{project.name}</div>}
				{(project.year || project.status) && <div className={styles.subtitle}>
					{project.year && <div className={styles.year}>{project.year}</div>}
					{project.status && <div className={styles.status}><span className="material-symbols-outlined">{project.statusIcon}</span>{project.status}</div>}
				</div>}
				{(project.tools.length > 0) && <div className={styles.tools}>
					{project.tools.map((tool, i) => <div className={styles.tool} key={i}>{tool}</div>)}
				</div>}
				{<div className={styles.description}>{project.description}</div>}
				{(project.repo || project.live) && <div className={styles.links}>
					{project.repo && <a className={styles.repo} href={project.repo}><span className="material-symbols-outlined">Code</span>GitHub</a>}
					{project.live && <a className={styles.live} href={project.live}><span className="material-symbols-outlined">Public</span>{project.live.split("https://")[1]}</a>}
				</div>}
				{(project.contributors.length > 0) && <div className={styles.contributors}>
					{project.contributors.map((contributor, i) => <a className={styles.contributor} href={contributor.link} key={i}><span className="material-symbols-outlined">person</span>{contributor.name}</a>)}
				</div>}
			</div>
			<div className={styles.images}>
				<Swiper 
					modules={[Navigation, Pagination, Autoplay, Mousewheel, Zoom, Manipulation]} 
					navigation={false} 
					pagination={{clickable: true}} 
					loop={project.images.length > 1 && true} 
					autoplay={{delay: 4000, disableOnInteraction: false}} 
					spaceBetween={20} 
					mousewheel={true} 
					zoom={true} 
					onAfterInit={(swiper) => { // breaks state on rerender :/
						if (swiper.slides.length > project.images.length) {
							swiper?.removeSlide(0);
						}
						swiper?.update();
						swiper?.slideTo(0, 0, false);
						swiper?.autoplay?.stop();
						setTimeout(() => swiper?.autoplay?.start(), index * 100 + 1000);
					}} 
					onZoomChange={(swiper, scale) => 
						scale == 1 ? swiper?.autoplay?.start() : swiper?.autoplay?.stop()
					} 
					onSlideChange={(swiper) => 
						swiper?.slides?.[0] && swiper?.zoom?.out()
					}
				>
					<SwiperSlide>
						<div className={`${styles.image} swiper-zoom-container`}>
							<img src={`${nextConfig.basePath}/blank.jpg`} alt="" loading="eager"></img>
						</div>
						<div className="swiper-lazy-preloader"></div>
					</SwiperSlide>
					{project.images.map((image, i) => 
						<SwiperSlide key={i}>
							<div className={`${styles.image} swiper-zoom-container`}>
								<img src={`${nextConfig.basePath}/${image}`} alt="" loading="lazy"></img>
							</div>
							<div className="swiper-lazy-preloader"></div>
						</SwiperSlide>
					)}
				</Swiper>
			</div>
		</div>
	);
}
