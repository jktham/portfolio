export type Project = {
	name: string;
	description: string;
	year: string;
	status: string;
	statusIcon: string;
	repo: string;
	live?: string;
	tools: string[];
	images: string[];
	contributors: {
		name: string;
		link: string;
	}[];
}

export const projects: Project[] = [{
		name: "Tramzone",
		description: "Live location tracker for trams in Zurich, based on GTFS timetable and realtime updates.",
		year: "2024-2025",
		status: "In Progress",
		statusIcon: "more_horiz",
		repo: "https://github.com/jktham/tramzone",
		live: "https://tramz.one",
		tools: ["TypeScript", "React", "NextJS"],
		images: ["tramzone/lines.jpg", "tramzone/info.jpg", "tramzone/far.jpg", "tramzone/mobile.jpg"],
		contributors: [{
			name: "alexiselisseeff",
			link: "https://github.com/alexiselisseeff",
		}, {
			name: "amogus-sussy",
			link: "https://github.com/AMOGUS-SUSSY",
		}, {
			name: "jktham",
			link: "https://github.com/jktham",
		}, {
			name: "srpnt3",
			link: "https://github.com/srpnt3",
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
			name: "jktham",
			link: "https://github.com/jktham",
		}, {
			name: "srpnt3",
			link: "https://github.com/srpnt3",
		}],
	}, {
		name: "Eudox",
		description: "Engine for fun shaders and stuff. Supports various per object shader stages and postprocessing effects.",
		year: "2023-2024",
		status: "In Progress",
		statusIcon: "more_horiz",
		repo: "https://github.com/jktham/eudox",
		live: undefined,
		tools: ["C++", "GLSL", "OpenGL"],
		images: ["eudox/1.jpg", "eudox/2.jpg", "eudox/3.jpg", "eudox/4.jpg", "eudox/5.jpg", "eudox/6.jpg", "eudox/7.jpg", "eudox/8.jpg"],
		contributors: [{
			name: "jktham",
			link: "https://github.com/jktham",
		}],
	}, {
		name: "Ambi",
		description: "Yet another engine, this time with WebGPU^^. Trying out more cohesive scenes and visual styles.",
		year: "2025",
		status: "In Progress",
		statusIcon: "more_horiz",
		repo: "https://github.com/jktham/ambi",
		live: "https://ambi.jktham.dev",
		tools: ["TypeScript", "WGSL", "WebGPU"],
		images: ["ambi/1.png", "ambi/2.png"],
		contributors: [{
			name: "jktham",
			link: "https://github.com/jktham",
		}],
	}, {
		name: "Exo",
		description: "Low res 3D spaceflight sim inspired by Elite (1984). Rasterizes polygons directly to framebuffer, runs in browser via wasm.",
		year: "2025",
		status: "In Progress",
		statusIcon: "more_horiz",
		repo: "https://github.com/jktham/exo",
		live: "https://exo.jktham.dev",
		tools: ["Rust", "pixels-rs"],
		images: ["exo/1.png", "exo/2.png", "exo/3.png"],
		contributors: [{
			name: "jktham",
			link: "https://github.com/jktham",
		}],
	}, {
		name: "Euclid",
		description: "Rudimentary OpenGL raytracer, capable of rendering primitives with phong shading.",
		year: "2023",
		status: "Done",
		statusIcon: "done",
		repo: "https://github.com/jktham/euclid",
		live: undefined,
		tools: ["C++", "GLSL", "OpenGL"],
		images: ["euclid/1.jpg", "euclid/2.jpg", "euclid/3.jpg", "euclid/4.jpg", "euclid/5.jpg", "euclid/6.jpg", "euclid/7.jpg"],
		contributors: [{
			name: "jktham",
			link: "https://github.com/jktham",
		}],
	}, {
		name: "Blockgame",
		description: "Original game lightly inspired by minecraft.",
		year: "2022",
		status: "Done",
		statusIcon: "done",
		repo: "https://github.com/jktham/blockgame",
		live: undefined,
		tools: ["C++", "OpenGL"],
		images: ["blockgame/1.jpg", "blockgame/2.jpg", "blockgame/3.jpg", "blockgame/4.jpg", "blockgame/5.jpg", ],
		contributors: [{
			name: "jktham",
			link: "https://github.com/jktham",
		}],
	}, {
		name: "Rivulet v2",
		description: "Redesign and migration to NextJS.",
		year: "2024",
		status: "In Progress",
		statusIcon: "more_horiz",
		repo: "https://github.com/jktham/rivulet",
		live: undefined,
		tools: ["JavaScript", "React", "NextJS"],
		images: ["rivulet2/1.jpg", "rivulet2/2.jpg"],
		contributors: [{
			name: "jktham",
			link: "https://github.com/jktham",
		}, {
			name: "srpnt3",
			link: "https://github.com/srpnt3",
		}, {
			name: "the-simple-mark",
			link: "https://github.com/THE-SIMPLE-MARK",
		}],
	}, {
		name: "DecSat",
		description: "Tool to decode NOAA weather satellite image transmissions.",
		year: "2021",
		status: "Done",
		statusIcon: "done",
		repo: "https://github.com/jktham/decSat",
		live: undefined,
		tools: ["Python", "PyQt5"],
		images: ["decSat/1.jpg", "decSat/2.jpg", "decSat/3.jpg", "decSat/4.jpg", "decSat/5.jpg"],
		contributors: [{
			name: "jktham",
			link: "https://github.com/jktham",
		}],
	}, {
		name: "Omni",
		description: "Journal / mood tracker thing.",
		year: "2025",
		status: "In Progress",
		statusIcon: "more_horiz",
		repo: "https://github.com/jktham/omni",
		live: "https://omni.jktham.dev",
		tools: ["TypeScript", "React", "React Router"],
		images: ["omni/4.jpg", "omni/1.jpg", "omni/2.jpg", "omni/3.jpg"],
		contributors: [{
			name: "jktham",
			link: "https://github.com/jktham",
		}],
	}, {
		name: "Helios",
		description: "Solar system \"\"\"simulation\"\"\".",
		year: "2022",
		status: "Done",
		statusIcon: "done",
		repo: "https://github.com/jktham/helios",
		live: undefined,
		tools: ["C++", "OpenGL"],
		images: ["helios/1.jpg", "helios/2.jpg", "helios/3.jpg", "helios/4.jpg"],
		contributors: [{
			name: "jktham",
			link: "https://github.com/jktham",
		}],
	}, {
		name: "Faketorio",
		description: "Janky 3D factorio clone type thing.",
		year: "2023",
		status: "Done",
		statusIcon: "done",
		repo: "https://github.com/jktham/faketorio",
		live: undefined,
		tools: ["Java", "LWJGL"],
		images: ["faketorio/1.jpg", "faketorio/2.jpg", "faketorio/3.jpg"],
		contributors: [{
			name: "jktham",
			link: "https://github.com/jktham",
		}],
	}, {
		name: "9 to 5 Simulator",
		description: "VR game that immerses you in the realtime experience of a full shift at Tasty Burgers™.",
		year: "2024",
		status: "Done",
		statusIcon: "done",
		repo: "https://github.com/jktham/9-to-5-simulator",
		live: undefined,
		tools: ["C#", "Unity", "Blender"],
		images: ["9to5simulator/1.jpg", "9to5simulator/2.jpg", "9to5simulator/3.jpg"],
		contributors: [{
			name: "amogus-sussy",
			link: "https://github.com/AMOGUS-SUSSY",
		}, {
			name: "jktham",
			link: "https://github.com/jktham",
		}],
	}, {
		name: "Spot",
		description: "Very basic TUI spotify client.",
		year: "2024",
		status: "In Progress",
		statusIcon: "more_horiz",
		repo: "https://github.com/jktham/spot",
		live: undefined,
		tools: ["Rust", "crossterm"],
		images: ["spot/1.jpg"],
		contributors: [{
			name: "jktham",
			link: "https://github.com/jktham",
		}],
	}, {
		name: "CGTR",
		description: "Guitar preamp and DSP based on the Teensy 4.1 audio board.",
		year: "2024",
		status: "In Progress",
		statusIcon: "more_horiz",
		repo: "https://github.com/jktham/cgtr",
		live: undefined,
		tools: ["C++", "C", "Teensy41"],
		images: ["cgtr/1.jpg"],
		contributors: [{
			name: "jktham",
			link: "https://github.com/jktham",
		}],
	}, {
		name: "Bapple",
		description: "Bad apple on FPGA using an SPI display.",
		year: "2023",
		status: "Done",
		statusIcon: "done",
		repo: "https://github.com/jktham/bapple",
		live: undefined,
		tools: ["Verilog", "FPGA"],
		images: ["bapple/1.jpg", "bapple/2.jpg"],
		contributors: [{
			name: "jktham",
			link: "https://github.com/jktham",
		}, {
			name: "srpnt3",
			link: "https://github.com/srpnt3",
		}],
	}, {
		name: "mlib",
		description: "TUI local media browser.",
		year: "2025",
		status: "Done",
		statusIcon: "done",
		repo: "https://github.com/jktham/mlib",
		live: undefined,
		tools: ["Rust", "crossterm"],
		images: ["mlib/1.jpg"],
		contributors: [{
			name: "jktham",
			link: "https://github.com/jktham",
		}],
	}, {
		name: "GregOS",
		description: "Very necessary control system for a nomifactory base. Supports multiple clients, autocrafting management and spotify integration.",
		year: "2023",
		status: "Done",
		statusIcon: "done",
		repo: "https://github.com/jktham/gregOS",
		live: undefined,
		tools: ["Lua", "OpenComputers"],
		images: ["gregOS/1.jpg", "gregOS/3.jpg", "gregOS/5.jpg"],
		contributors: [{
			name: "jktham",
			link: "https://github.com/jktham",
		}],
	}, {
		name: "Portfolio",
		description: "That's this :)",
		year: "2024-2025",
		status: "In Progress",
		statusIcon: "more_horiz",
		repo: "https://github.com/jktham/jktham.github.io",
		live: "https://jktham.dev",
		tools: ["TypeScript", "React", "NextJS"],
		images: ["portfolio/main.jpg"],
		contributors: [{
			name: "jktham",
			link: "https://github.com/jktham",
		}],
	},
]
