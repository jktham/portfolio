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
		images: ["tramzone/lines.jpg", "tramzone/mobile.jpg"],
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
	}, {
		name: "Rivulet",
		description: "Browser based debrid client (mostly legal i think).",
		year: "2023-2024",
		status: "Done",
		statusIcon: "done",
		repo: "https://github.com/jktham/rivulet",
		live: "https://rivulet.tv",
		tools: ["JavaScript", "HTML/CSS", "Express"],
		images: ["rivulet/home.jpg", "rivulet/bebop.jpg"],
		contributors: [{
			name: "Alec Franco",
			link: "https://github.com/srpnt3",
		}, {
			name: "Jonas Tham",
			link: "https://github.com/jktham",
		}],
	}, {
		name: "Rivulet v2",
		description: "Migration to NextJS.",
		year: "2024",
		status: "In Progress",
		statusIcon: "more_horiz",
		repo: "https://github.com/jktham/rivulet",
		live: "",
		tools: ["JavaScript", "React", "NextJS"],
		images: [],
		contributors: [{
			name: "Alec Franco",
			link: "https://github.com/srpnt3",
		}, {
			name: "Jonas Tham",
			link: "https://github.com/jktham",
		}, {
			name: "Mark",
			link: "https://github.com/THE-SIMPLE-MARK",
		}],
	}, {
		name: "Eudox",
		description: "Engine for fun shaders and stuff.",
		year: "2023-2024",
		status: "In Progress",
		statusIcon: "more_horiz",
		repo: "https://github.com/jktham/eudox",
		live: "",
		tools: ["C++", "GLSL", "OpenGL"],
		images: [],
		contributors: [{
			name: "Jonas Tham",
			link: "https://github.com/jktham",
		}],
	}, {
		name: "Euclid",
		description: "Basic raytracer in OpenGL.",
		year: "2023",
		status: "Done",
		statusIcon: "done",
		repo: "https://github.com/jktham/euclid",
		live: "",
		tools: ["C++", "GLSL", "OpenGL"],
		images: [],
		contributors: [{
			name: "Jonas Tham",
			link: "https://github.com/jktham",
		}],
	}, {
		name: "Blockgame",
		description: "Very original game lightly inspired by minecraft.",
		year: "2022",
		status: "Done",
		statusIcon: "done",
		repo: "https://github.com/jktham/blockgame",
		live: "",
		tools: ["C++", "OpenGL"],
		images: [],
		contributors: [{
			name: "Jonas Tham",
			link: "https://github.com/jktham",
		}],
	}, {
		name: "DecSat",
		description: "Tool to decode NOAA weather satellite image transmissions.",
		year: "2021",
		status: "Done",
		statusIcon: "done",
		repo: "https://github.com/jktham/decSat",
		live: "",
		tools: ["Python", "PyQt5"],
		images: [],
		contributors: [{
			name: "Jonas Tham",
			link: "https://github.com/jktham",
		}],
	}, {
		name: "Spot",
		description: "Very basic TUI spotify client.",
		year: "2024",
		status: "In Progress",
		statusIcon: "more_horiz",
		repo: "https://github.com/jktham/spot",
		live: "",
		tools: ["Rust", "crossterm"],
		images: [],
		contributors: [{
			name: "Jonas Tham",
			link: "https://github.com/jktham",
		}],
	}, {
		name: "CGTR",
		description: "Guitar preamp and DSP based on the Teensy 4.1 audio board.",
		year: "2024",
		status: "In Progress",
		statusIcon: "more_horiz",
		repo: "https://github.com/jktham/cgtr",
		live: "",
		tools: ["C++", "C", "Teensy41"],
		images: [],
		contributors: [{
			name: "Jonas Tham",
			link: "https://github.com/jktham",
		}],
	}, {
		name: "Bapple",
		description: "Bad apple on FPGA using SPI display.",
		year: "2023",
		status: "Done",
		statusIcon: "done",
		repo: "https://github.com/jktham/bapple",
		live: "",
		tools: ["Verilog", "FPGA"],
		images: [],
		contributors: [{
			name: "Alec Franco",
			link: "https://github.com/srpnt3",
		}, {
			name: "Jonas Tham",
			link: "https://github.com/jktham",
		}],
	}, {
		name: "Helios",
		description: "Solar system \"\"\"simulation\"\"\".",
		year: "2022",
		status: "Done",
		statusIcon: "done",
		repo: "https://github.com/jktham/helios",
		live: "",
		tools: ["C++", "OpenGL"],
		images: [],
		contributors: [{
			name: "Jonas Tham",
			link: "https://github.com/jktham",
		}],
	}, {
		name: "Faketorio",
		description: "Very janky factorio clone type thing.",
		year: "2023",
		status: "Done",
		statusIcon: "done",
		repo: "https://github.com/jktham/faketorio",
		live: "",
		tools: ["Java", "LWJGL"],
		images: [],
		contributors: [{
			name: "Jonas Tham",
			link: "https://github.com/jktham",
		}],
	}, {
		name: "GregOS",
		description: "Completely unnecessary control system for a nomifactory base. Supports multiple clients, autocrafting management and spotify integration.",
		year: "2023",
		status: "Done",
		statusIcon: "done",
		repo: "https://github.com/jktham/gregOS",
		live: "",
		tools: ["Lua", "OpenComputers"],
		images: [],
		contributors: [{
			name: "Jonas Tham",
			link: "https://github.com/jktham",
		}],
	}, {
		name: "Portfolio",
		description: "That's this.",
		year: "2024",
		status: "In Progress",
		statusIcon: "more_horiz",
		repo: "https://github.com/jktham/portfolio",
		live: "https://jktham.github.io/portfolio",
		tools: ["TypeScript", "React", "NextJS"],
		images: ["portfolio/main.jpg"],
		contributors: [{
			name: "Jonas Tham",
			link: "https://github.com/jktham",
		}],
	},
]
