export type Project = {
	name: string;
	description: string;
	year: string;
	status: string;
	statusIcon: string;
	repo: string;
	live: string;
	tools: string[];
	images: string[];
	contributors: {
		name: string;
		link: string;
	}[];
}

export let projects: Project[] = [{
		name: "Tramzone",
		description: "Live location tracker for trams in Zurich, based on GTFS timetable and realtime updates.",
		year: "2024",
		status: "In Progress",
		statusIcon: "more_horiz",
		repo: "https://github.com/jktham/tramzone",
		live: "https://tramz.one",
		tools: ["TypeScript", "React", "NextJS"],
		images: ["tramzone/main.png", "tramzone/mobile.png"],
		contributors: [{
			name: "Alec Franco",
			link: "https://github.com/srpnt3",
		}, {
			name: "Alexis Elisseeff",
			link: "https://github.com/alexiselisseeff",
		}, {
			name: "Martin Shen",
			link: "https://github.com/AMOGUS-SUSSY",
		}, {
			name: "Jonas Tham",
			link: "https://github.com/jktham",
		}],
	},{
		name: "Rivulet",
		description: "Browser based debrid client (mostly legal i think).",
		year: "2023-2024",
		status: "In Progress",
		statusIcon: "more_horiz",
		repo: "https://github.com/jktham/rivulet",
		live: "https://rivulet.tv",
		tools: ["JavaScript", "HTML/CSS", "Express"],
		images: ["rivulet/home.png", "rivulet/bebop.png"],
		contributors: [{
			name: "Alec Franco",
			link: "https://github.com/srpnt3",
		}, {
			name: "Jonas Tham",
			link: "https://github.com/jktham",
		}],
	}, {
		name: "Tramzone",
		description: "Live tram laaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaa aaaaaaaaaaaaaa aaaaaaaaaaa aaaaaaaaaaaaaa aaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaocation traaaaaaaaaaa aaaaaaaaaaaacker for Zuraaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaa aaaaaaaaich, based on GTFS timetable and realtime updates.",
		year: "2024",
		status: "Done",
		statusIcon: "done",
		repo: "https://github.com/jktham/tramzone",
		live: "https://tramz.one",
		tools: ["TypeScript", "React", "NextJS"],
		images: ["tramzone/main.png", "tramzone/main.png", "tramzone/main.png", "tramzone/main.png", "tramzone/mobile.png"],
		contributors: [{
			name: "Alec Franco",
			link: "https://github.com/srpnt3",
		}, {
			name: "Alexis Elisseeff",
			link: "https://github.com/alexiselisseeff",
		}, {
			name: "Martin Shen",
			link: "https://github.com/AMOGUS-SUSSY",
		}],
	}, {
		name: "Tramzone",
		description: "Live tram location tracker for Zurich, based on GTFS timetable and realtime updates.",
		year: "2024",
		status: "Unfinished",
		statusIcon: "close_small",
		repo: "https://github.com/jktham/tramzone",
		live: "",
		tools: ["TypeScript", "React", "NextJS"],
		images: ["tramzone/mobile.png", "tramzone/mobile.png"],
		contributors: [{
			name: "Jonas Tham",
			link: "https://github.com/jktham",
		}],
	}, {
		name: "Tramzone",
		description: "Live tram location tracker for Zurich, based on GTFS timetable and realtime updates.",
		year: "2024",
		status: "In Progress",
		statusIcon: "more_horiz",
		repo: "",
		live: "",
		tools: ["TypeScript", "React", "NextJS"],
		images: ["tramzone/main.png"],
		contributors: [{
			name: "Alec Franco",
			link: "https://github.com/srpnt3",
		}, {
			name: "Alexis Elisseeff",
			link: "https://github.com/alexiselisseeff",
		}, {
			name: "Martin Shen",
			link: "https://github.com/AMOGUS-SUSSY",
		}],
	}, {
		name: "Tramzone",
		description: "Live tram location tracker for Zurich, based on GTFS timetable and realtime updates.",
		year: "2024",
		status: "In Progress",
		statusIcon: "more_horiz",
		repo: "",
		live: "",
		tools: ["TypeScript", "React", "NextJS", "TypeScript", "React", "NextJS", "TypeScript", "React", "NextJS", "TypeScript", "React", "NextJS"],
		images: [],
		contributors: [],
	}, {
		name: "",
		description: "",
		year: "",
		status: "",
		statusIcon: "",
		repo: "",
		live: "",
		tools: [],
		images: [],
		contributors: [],
	}, {
		name: "Portfolio",
		description: "That's this.",
		year: "2024",
		status: "In Progress",
		statusIcon: "more_horiz",
		repo: "https://github.com/jktham/portfolio",
		live: "https://jktham.github.io/portfolio",
		tools: ["TypeScript", "React", "NextJS"],
		images: ["portfolio/main.png"],
		contributors: [{
			name: "Jonas Tham",
			link: "https://github.com/jktham",
		}],
	},
]
