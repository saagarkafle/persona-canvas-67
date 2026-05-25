import { t as require_jsx_runtime } from "./jsx-runtime-BuMTCWze.js";
//#region src/assets/profile.jpg
var profile_default = "/persona-canvas-67/assets/profile-aTQPYby_.jpg";
//#endregion
//#region src/assets/project-1.jpg
var project_1_default = "/persona-canvas-67/assets/project-1-a9kqxycB.jpg";
//#endregion
//#region src/assets/project-2.jpg
var project_2_default = "/persona-canvas-67/assets/project-2-DPft_ETp.jpg";
//#endregion
//#region src/assets/project-3.jpg
var project_3_default = "/persona-canvas-67/assets/project-3-B02IDiE3.jpg";
//#endregion
//#region src/assets/project-4.jpg
var project_4_default = "/persona-canvas-67/assets/project-4-Caa7DZxI.jpg";
//#endregion
//#region src/assets/project-5.jpg
var project_5_default = "/persona-canvas-67/assets/project-5-DMz_8wtV.jpg";
//#endregion
//#region src/assets/project-6.jpg
var project_6_default = "/persona-canvas-67/assets/project-6-gyz4Y7KQ.jpg";
//#endregion
//#region src/routes/index.tsx?tsr-split=component
var import_jsx_runtime = require_jsx_runtime();
var SECTION_LINKS = [
	{
		href: "#projects",
		label: "Projects"
	},
	{
		href: "#experience",
		label: "History"
	},
	{
		href: "#blog",
		label: "Insights"
	},
	{
		href: "#contact",
		label: "Connect"
	}
];
var SKILL_CATEGORIES = [
	{
		n: "01",
		title: "Frontend Engineering",
		desc: "React, Next.js, TypeScript, Tailwind, Framer Motion."
	},
	{
		n: "02",
		title: "Backend Engineering",
		desc: "Node, Go, PostgreSQL, edge runtimes, event-driven systems."
	},
	{
		n: "03",
		title: "UI / UX Design",
		desc: "Design systems, motion, prototyping, accessibility."
	},
	{
		n: "04",
		title: "Cloud & DevOps",
		desc: "AWS, Vercel, Cloudflare, Docker, CI/CD pipelines."
	},
	{
		n: "05",
		title: "Data & Analytics",
		desc: "Pipelines, dashboards, experimentation frameworks."
	},
	{
		n: "06",
		title: "AI Tooling",
		desc: "LLM orchestration, RAG, agentic workflows, eval loops."
	},
	{
		n: "07",
		title: "Business Strategy",
		desc: "GTM, product-market fit, monetization, brand systems."
	},
	{
		n: "08",
		title: "Cybersecurity",
		desc: "Zero-trust patterns, auth, threat modeling."
	}
];
var PROJECTS = [
	{
		img: project_1_default,
		title: "Lumina OS",
		desc: "Next-gen operating environment for distributed engineering teams.",
		tags: ["TypeScript", "AWS"]
	},
	{
		img: project_2_default,
		title: "Vault Protocol",
		desc: "Zero-knowledge security layer for enterprise asset management.",
		tags: ["Rust", "Wasm"]
	},
	{
		img: project_3_default,
		title: "Neural Draft",
		desc: "AI-powered architectural drafting for urban planning teams.",
		tags: ["Python", "PyTorch"]
	},
	{
		img: project_4_default,
		title: "Flux Commerce",
		desc: "Headless commerce engine engineered for ultra-fast performance.",
		tags: ["Next.js", "Stripe"]
	},
	{
		img: project_5_default,
		title: "Nexus Analytics",
		desc: "Real-time event tracking system with millisecond latency.",
		tags: ["Go", "Redis"]
	},
	{
		img: project_6_default,
		title: "Aether Home",
		desc: "IoT orchestration platform for sustainable living spaces.",
		tags: ["Zigbee", "Node.js"]
	}
];
var EXPERIENCE = [
	{
		role: "Founder & CEO",
		org: "Kafle Digital Labs",
		when: "2022 — Present",
		desc: "Leading technical strategy and execution for early-stage startups in FinTech and AI.",
		active: true
	},
	{
		role: "Senior Software Architect",
		org: "Global Tech Solutions",
		when: "2020 — 2022",
		desc: "Spearheaded migration of legacy monoliths to modern microservices on GCP."
	},
	{
		role: "Full-Stack Engineer",
		org: "Horizon Studio",
		when: "2018 — 2020",
		desc: "Shipped product surfaces for international SaaS clients across web and mobile."
	},
	{
		role: "B.Sc. Computer Science",
		org: "Tribhuvan University",
		when: "2014 — 2018",
		desc: "Focus on distributed systems, algorithms, and human-computer interaction."
	}
];
var TESTIMONIALS = [
	{
		name: "Marcus Thorne",
		role: "CTO, Vector Dynamics",
		quote: "Sagar pairs a rare technical depth with sharp product instinct. He didn't just write code — he helped us define the core value proposition."
	},
	{
		name: "Sarah Chen",
		role: "Founder, Horizon AI",
		quote: "Precision is the word that comes to mind. Sagar's approach is methodical, and what we build today will scale for years."
	},
	{
		name: "Aarav Singh",
		role: "Head of Product, Northwind",
		quote: "Genuinely the calmest, most thoughtful engineer I've worked with. Ships fast, communicates clearly, raises the bar for everyone around him."
	}
];
var POSTS = [
	{
		date: "March 12, 2025",
		cat: "AI Strategy",
		title: "Scaling Neural Interfaces: Lessons from the Edge",
		desc: "A deep dive into optimizing model inference latency for real-time human interaction systems."
	},
	{
		date: "Feb 28, 2025",
		cat: "Product",
		title: "The Minimalist Founder's Stack",
		desc: "Why choosing boring technology is the most aggressive growth move you can make this year."
	},
	{
		date: "Jan 14, 2025",
		cat: "Engineering",
		title: "Designing for Speed, Not Just Performance",
		desc: "Perceived latency, optimistic UI, and the architecture decisions that compound over time."
	}
];
var STATS = [
	{
		value: "40+",
		label: "Projects shipped"
	},
	{
		value: "12",
		label: "Countries served"
	},
	{
		value: "6+",
		label: "Years building"
	},
	{
		value: "99.9%",
		label: "Uptime delivered"
	}
];
function Nav() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
		className: "fixed top-0 z-50 flex w-full items-center justify-between border-b border-border glass-panel px-6 py-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: "#top",
				className: "flex items-center gap-2 text-mono text-xs font-bold tracking-tighter",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 rounded-full bg-accent shadow-[0_0_8px_var(--color-accent)]" }), "SAGAR_KAFLE.SYS"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "hidden gap-8 text-mono text-[11px] uppercase tracking-widest text-muted-foreground md:flex",
				children: SECTION_LINKS.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: l.href,
					className: "transition-colors hover:text-accent",
					children: l.label
				}, l.href))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#contact",
				className: "text-mono text-[10px] uppercase tracking-widest text-accent transition-opacity hover:opacity-80 md:hidden",
				children: "Connect"
			})
		]
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "top",
		className: "relative px-6 pt-40 pb-24",
		style: { backgroundImage: "var(--gradient-radial)" },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-7xl",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col items-end gap-12 md:flex-row",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex-1 animate-fade-up",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-4 text-mono text-sm uppercase tracking-tight text-accent",
							children: "Founder · Engineer · Strategist"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "mb-8 text-balance text-5xl font-extrabold leading-[0.9] tracking-tighter md:text-7xl lg:text-8xl",
							children: [
								"Hi, I'm ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-accent",
									children: "Sagar Kafle"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-mono animate-blink text-accent",
									children: "_"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-10 max-w-[55ch] text-pretty text-lg text-muted-foreground",
							children: "Builder, developer, and digital strategist creating impactful experiences on the web. I work at the intersection of engineering, product, and brand — translating ambitious ideas into precisely machined software."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#projects",
								className: "cursor-pointer rounded-sm bg-accent px-8 py-4 text-sm font-bold uppercase tracking-widest text-accent-foreground transition-all hover:brightness-110",
								children: "View Projects"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#contact",
								className: "cursor-pointer rounded-sm border border-border px-8 py-4 text-sm font-bold uppercase tracking-widest transition-all hover:bg-secondary",
								children: "Contact Me"
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "w-full md:w-1/3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative overflow-hidden rounded-lg border border-border outline outline-1 outline-white/5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: profile_default,
							alt: "Portrait of Sagar Kafle",
							width: 800,
							height: 1e3,
							className: "aspect-[4/5] w-full object-cover"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute bottom-4 left-4 right-4 glass-panel rounded-md p-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 rounded-full bg-accent animate-pulse-dot" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-mono text-[10px] uppercase tracking-widest",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground",
										children: "Status / "
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-accent",
										children: "Open to ventures"
									})]
								})]
							})
						})]
					})
				})]
			})
		})
	});
}
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "about",
		className: "border-y border-border bg-white/[0.02] px-6 py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl gap-16 md:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
				className: "mb-8 flex items-center gap-4 text-mono text-xs uppercase tracking-widest text-muted-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-8 bg-border" }), " 01. Origin"]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-6 leading-relaxed text-muted-foreground",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"I view software as a",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-foreground",
							children: "precisely machined instrument"
						}),
						". Every line of code should earn its place; every pixel must serve a functional purpose."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "As a developer and entrepreneur, I bridge the gap between technical complexity and business growth — translating abstract ideas into scalable digital products that real people use and trust." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Originally from Nepal, working with teams across four continents. Always shipping, always learning, always asking what's actually worth building." })
				]
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mb-8 text-mono text-xs uppercase tracking-widest text-muted-foreground",
				children: "By the numbers"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-border bg-border",
				children: STATS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-2 bg-background p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-3xl font-extrabold tracking-tighter text-accent",
						children: s.value
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-mono text-[10px] uppercase tracking-widest text-muted-foreground",
						children: s.label
					})]
				}, s.label))
			})] })]
		})
	});
}
function Skills() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "skills",
		className: "px-6 py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-16 flex items-end justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-4xl font-extrabold tracking-tighter",
					children: "Technical Stack"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-mono text-[10px] uppercase tracking-widest text-muted-foreground",
					children: "CAPABILITIES / 2025"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-4",
				children: SKILL_CATEGORIES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "group flex flex-col gap-3 bg-background p-6 transition-colors hover:bg-secondary",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-mono text-xs text-accent",
							children: s.n
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-base font-bold group-hover:text-accent",
							children: s.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm text-muted-foreground",
							children: s.desc
						})
					]
				}, s.n))
			})]
		})
	});
}
function Projects() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "projects",
		className: "border-y border-border bg-white/[0.02] px-6 py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-16 flex items-end justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-4xl font-extrabold tracking-tighter",
					children: "Selected Works"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-mono text-[10px] uppercase tracking-widest text-muted-foreground",
					children: "SYSTEM_OUTPUT / 2025"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-8 md:grid-cols-2 lg:grid-cols-3",
				children: PROJECTS.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "group cursor-pointer",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-6 overflow-hidden rounded-lg border border-border outline outline-1 outline-white/5 transition-transform group-hover:-translate-y-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: p.img,
								alt: p.title,
								width: 800,
								height: 600,
								loading: "lazy",
								className: "aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-2 flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-lg font-bold transition-colors group-hover:text-accent",
								children: p.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-mono text-[10px] text-muted-foreground",
								children: ["0", i + 1]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-4 text-sm text-muted-foreground",
							children: p.desc
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center gap-2 text-mono text-[10px] uppercase tracking-tight text-accent",
							children: [p.tags.map((t, j) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-2",
								children: [j > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-border",
									children: "/"
								}), t]
							}, t)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "ml-auto flex gap-3 text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#",
									className: "hover:text-accent",
									children: "Live ↗"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#",
									className: "hover:text-accent",
									children: "GitHub ↗"
								})]
							})]
						})
					]
				}, p.title))
			})]
		})
	});
}
function Experience() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "experience",
		className: "px-6 py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-4xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-16 flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-3xl font-extrabold tracking-tighter",
					children: "Career Protocol"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#",
					className: "text-mono border border-accent/30 px-4 py-2 text-[10px] uppercase tracking-widest text-accent transition-all hover:bg-accent hover:text-accent-foreground",
					children: "Download_Resume.PDF"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative space-y-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-[7px] top-2 bottom-2 w-px bg-border" }), EXPERIENCE.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative pl-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `absolute left-0 top-1.5 h-4 w-4 rounded-full border-2 bg-background ${e.active ? "border-accent shadow-[0_0_12px_var(--color-accent)]" : "border-border"}` }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-2 flex flex-col gap-1 md:flex-row md:justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-lg font-bold",
								children: e.role
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-mono text-xs text-muted-foreground",
								children: e.when
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-4 text-sm text-accent",
							children: e.org
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground",
							children: e.desc
						})
					]
				}, e.role))]
			})]
		})
	});
}
function Testimonials() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-y border-border bg-white/[0.02] px-6 py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mb-16 text-3xl font-extrabold tracking-tighter",
				children: "Trusted Signal"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-6 md:grid-cols-3",
				children: TESTIMONIALS.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
					className: "flex flex-col gap-6 rounded-lg border border-border bg-background p-8 transition-colors hover:border-accent/30",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
						className: "text-sm leading-relaxed text-foreground",
						children: [
							"\"",
							t.quote,
							"\""
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
						className: "mt-auto flex items-center gap-3 border-t border-border pt-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid h-10 w-10 place-items-center rounded-full bg-secondary text-mono text-xs font-bold text-accent",
							children: t.name.split(" ").map((n) => n[0]).join("")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-sm font-bold",
							children: t.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-mono text-[10px] uppercase tracking-widest text-muted-foreground",
							children: t.role
						})] })]
					})]
				}, t.name))
			})]
		})
	});
}
function Blog() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "blog",
		className: "px-6 py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-12 flex items-end justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-3xl font-extrabold tracking-tighter",
					children: "Insights & Logic"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#",
					className: "text-mono text-[10px] uppercase tracking-widest text-muted-foreground hover:text-accent",
					children: "All writing ↗"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-px overflow-hidden border-y border-border bg-border md:grid-cols-3",
				children: POSTS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#",
					className: "group flex flex-col gap-4 bg-background p-8 transition-colors hover:bg-secondary",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-mono flex items-center justify-between text-[10px] uppercase tracking-widest text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: p.date }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-accent",
								children: p.cat
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-xl font-bold transition-colors group-hover:text-accent",
							children: p.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground",
							children: p.desc
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-mono mt-auto text-[10px] uppercase tracking-widest text-accent",
							children: "Read →"
						})
					]
				}, p.title))
			})]
		})
	});
}
function Contact() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contact",
		className: "px-6 py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-4xl rounded-lg border border-accent/20 glass-panel p-8 md:p-12",
			style: { backgroundImage: "var(--gradient-radial)" },
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-10 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-mono mb-4 text-xs uppercase tracking-widest text-accent",
							children: "04. Connect"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mb-6 text-balance text-4xl font-extrabold tracking-tighter md:text-5xl",
							children: "Let's build something meaningful together."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mx-auto max-w-[50ch] text-muted-foreground",
							children: "Currently open to strategic partnerships, freelance engagements, and high-impact engineering leadership roles."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "grid gap-4 md:grid-cols-2",
					onSubmit: (e) => {
						e.preventDefault();
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "text",
							placeholder: "Name",
							className: "text-mono rounded-sm border border-border bg-background px-4 py-3 text-sm outline-none placeholder:text-muted-foreground focus:border-accent"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "email",
							placeholder: "Email",
							className: "text-mono rounded-sm border border-border bg-background px-4 py-3 text-sm outline-none placeholder:text-muted-foreground focus:border-accent"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							rows: 4,
							placeholder: "Tell me about your project…",
							className: "text-mono md:col-span-2 resize-none rounded-sm border border-border bg-background px-4 py-3 text-sm outline-none placeholder:text-muted-foreground focus:border-accent"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "submit",
							className: "text-mono md:col-span-2 rounded-sm bg-accent px-8 py-4 text-sm font-bold uppercase tracking-widest text-accent-foreground transition-all hover:brightness-110",
							children: "Send Transmission →"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-mono mt-10 flex flex-wrap items-center justify-center gap-6 border-t border-border pt-8 text-xs uppercase tracking-widest",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "mailto:hello@sagar-kafle.com.np",
							className: "text-accent hover:underline",
							children: "hello@sagar-kafle.com.np"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#",
							className: "text-muted-foreground hover:text-accent",
							children: "LinkedIn"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#",
							className: "text-muted-foreground hover:text-accent",
							children: "GitHub"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#",
							className: "text-muted-foreground hover:text-accent",
							children: "Twitter / X"
						})
					]
				})
			]
		})
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-border px-6 py-12",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-mono text-[10px] uppercase tracking-widest text-muted-foreground",
				children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" SAGAR KAFLE // ALL SYSTEMS OPERATIONAL"
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-mono flex gap-6 text-[10px] uppercase tracking-widest text-muted-foreground",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#top",
						className: "hover:text-foreground",
						children: "Back to top ↑"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#projects",
						className: "hover:text-foreground",
						children: "Projects"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#contact",
						className: "hover:text-foreground",
						children: "Contact"
					})
				]
			})]
		})
	});
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skills, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Projects, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Experience, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Testimonials, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Blog, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { Index as component };
