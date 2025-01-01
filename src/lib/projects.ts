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
		images: ["tramzone/lines.jpg", "tramzone/info.jpg", "tramzone/far.jpg", "tramzone/mobile.jpg"],
		contributors: [{
			name: "Alec Franco",
			link: "https://github.com/srpnt3",
		}, {
			name: "Alexis Elisseeff",
			link: "https://github.com/alexiselisseeff",
		}, {
			name: "Jonas Tham",
			link: "https://github.com/jktham",
		}, {
			name: "Martin Shen",
			link: "https://github.com/AMOGUS-SUSSY",
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
		name: "Eudox",
		description: "Engine for fun shaders and stuff.",
		year: "2023-2024",
		status: "In Progress",
		statusIcon: "more_horiz",
		repo: "https://github.com/jktham/eudox",
		live: "",
		tools: ["C++", "GLSL", "OpenGL"],
		images: ["eudox/1.jpg", "eudox/2.jpg", "eudox/3.jpg", "eudox/4.jpg", "eudox/5.jpg", "eudox/6.jpg", "eudox/7.jpg", "eudox/8.jpg"],
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
		images: ["euclid/1.jpg", "euclid/2.jpg", "euclid/3.jpg", "euclid/4.jpg", "euclid/5.jpg", "euclid/6.jpg", "euclid/7.jpg"],
		contributors: [{
			name: "Jonas Tham",
			link: "https://github.com/jktham",
		}],
	}, {
		name: "Blockgame",
		description: "Original game lightly inspired by minecraft.",
		year: "2022",
		status: "Done",
		statusIcon: "done",
		repo: "https://github.com/jktham/blockgame",
		live: "",
		tools: ["C++", "OpenGL"],
		images: ["blockgame/1.jpg", "blockgame/2.jpg", "blockgame/3.jpg", "blockgame/4.jpg", "blockgame/5.jpg", ],
		contributors: [{
			name: "Jonas Tham",
			link: "https://github.com/jktham",
		}],
	}, {
		name: "Rivulet v2",
		description: "Redesign and migration to NextJS.",
		year: "2024",
		status: "In Progress",
		statusIcon: "more_horiz",
		repo: "https://github.com/jktham/rivulet",
		live: "",
		tools: ["JavaScript", "React", "NextJS"],
		images: ["rivulet2/1.jpg", "rivulet2/2.jpg"],
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
		name: "DecSat",
		description: "Tool to decode NOAA weather satellite image transmissions.",
		year: "2021",
		status: "Done",
		statusIcon: "done",
		repo: "https://github.com/jktham/decSat",
		live: "",
		tools: ["Python", "PyQt5"],
		images: ["decSat/1.jpg", "decSat/2.jpg", "decSat/3.jpg", "decSat/4.jpg", "decSat/5.jpg"],
		contributors: [{
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
		images: ["helios/1.jpg", "helios/2.jpg", "helios/3.jpg", "helios/4.jpg"],
		contributors: [{
			name: "Jonas Tham",
			link: "https://github.com/jktham",
		}],
	}, {
		name: "Faketorio",
		description: "Janky 3D factorio clone type thing.",
		year: "2023",
		status: "Done",
		statusIcon: "done",
		repo: "https://github.com/jktham/faketorio",
		live: "",
		tools: ["Java", "LWJGL"],
		images: ["faketorio/1.jpg", "faketorio/2.jpg", "faketorio/3.jpg"],
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
		images: ["spot/1.jpg"],
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
		images: ["cgtr/1.jpg", "cgtr/2.jpg"],
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
		images: ["bapple/1.jpg", "bapple/2.jpg"],
		contributors: [{
			name: "Alec Franco",
			link: "https://github.com/srpnt3",
		}, {
			name: "Jonas Tham",
			link: "https://github.com/jktham",
		}],
	}, {
		name: "GregOS",
		description: "Very necessary control system for a nomifactory base. Supports multiple clients, autocrafting management and spotify integration.",
		year: "2023",
		status: "Done",
		statusIcon: "done",
		repo: "https://github.com/jktham/gregOS",
		live: "",
		tools: ["Lua", "OpenComputers"],
		images: ["gregOS/1.jpg", "gregOS/2.jpg", "gregOS/3.jpg", "gregOS/4.jpg", "gregOS/5.jpg"],
		contributors: [{
			name: "Jonas Tham",
			link: "https://github.com/jktham",
		}],
	}, {
		name: "Portfolio",
		description: "That's this :)",
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
