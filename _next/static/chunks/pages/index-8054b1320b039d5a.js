(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [405], {
        5557: function(e, s, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
                return t(9289)
            }])
        },
        9289: function(e, s, t) {
            "use strict";
            t.r(s), t.d(s, {
                __N_SSG: function() {
                    return A
                },
                default: function() {
                    return H
                }
            });
            var i = t(5893),
                a = t(9008),
                n = t.n(a),
                r = t(1664),
                c = t.n(r),
                l = t(1163),
                o = t(8636),
                d = t.n(o),
                h = function() {
                    var e = (0, l.useRouter)();
                    return (0, i.jsxs)("section", {
                        className: d().container,
                        children: [(0, i.jsx)("div", {
                            className: d().circle
                        }), (0, i.jsx)("img", {
                            src: "/assets/shapes/circle_1.png",
                            alt: "circle",
                            className: d().shape_1
                        }), (0, i.jsx)("img", {
                            src: "/assets/shapes/shape_1.png",
                            alt: "shape",
                            className: d().shape_2
                        }), (0, i.jsxs)("div", {
                            className: d().wrapper,
                            children: [(0, i.jsxs)("div", {
                                className: d().left,
                                children: [(0, i.jsxs)("h1", {
                                    children: ["I bring", " ", (0, i.jsxs)("span", {
                                        children: ["ideas ", (0, i.jsx)("span", {
                                            className: d().underline
                                        })]
                                    }), " ", "to web."]
                                }), (0, i.jsx)("p", {
                                    className: d().text,
                                    children: "Transforming complex ideas into elegant and scalable front-end solutions."
                                }), (0, i.jsx)("div", {
                                    className: d().btnContainer,
                                    children: (0, i.jsx)("button", {
                                        onClick: function() {
                                            return e.push("/portfolio")
                                        },
                                        children: "View My Work"
                                    })
                                }), (0, i.jsxs)("div", {
                                    className: d().socials,
                                    children: [(0, i.jsx)(c(), {
                                        href: "https://twitter.com/TheRealSaadBaig",
                                        children: (0, i.jsxs)("div", {
                                            className: d().social,
                                            children: [(0, i.jsx)("img", {
                                                src: "/assets/icons/twitter_2.svg",
                                                alt: "twitter"
                                            }), (0, i.jsx)("p", {
                                                children: "Twitter"
                                            })]
                                        })
                                    }), (0, i.jsx)(c(), {
                                        href: "https://github.com/saadbaigg",
                                        children: (0, i.jsxs)("div", {
                                            className: d().social,
                                            children: [(0, i.jsx)("img", {
                                                src: "/assets/icons/github_2.svg",
                                                alt: "github"
                                            }), (0, i.jsx)("p", {
                                                children: "Github"
                                            })]
                                        })
                                    }), (0, i.jsx)(c(), {
                                        href: "https://www.linkedin.com/in/TheRealSaadBaig/",
                                        children: (0, i.jsxs)("div", {
                                            className: d().social,
                                            children: [(0, i.jsx)("img", {
                                                src: "/assets/icons/linkedin_2.svg",
                                                alt: "linkedin"
                                            }), (0, i.jsx)("p", {
                                                children: "Linkedin"
                                            })]
                                        })
                                    })]
                                })]
                            }), (0, i.jsx)("div", {
                                className: d().right,
                                children: (0, i.jsx)("img", {
                                    src: "/assets/images/hero-1.png",
                                    alt: "hero"
                                })
                            })]
                        })]
                    })
                },
                p = t(211),
                _ = t.n(p),
                m = function(e) {
                    var s = e.text;
                    return (0, i.jsxs)("div", {
                        className: _().container,
                        children: [(0, i.jsx)("span", {}), (0, i.jsx)("p", {
                            children: s
                        })]
                    })
                },
                x = t(603),
                j = t(5675),
                g = t.n(j),
                u = t(7294),
                b = t(544),
                v = t.n(b),
                f = function(e) {
                    var s = e.projects,
                        t = (0, x.Z)((0, u.useState)(0), 2);
                    t[0], t[1];
                    var a = (0, l.useRouter)(),
                        n = s && s.length > 4 ? s.slice(0, 4) : s;
                    return (0, i.jsxs)("section", {
                        className: v().container,
                        children: [(0, i.jsx)("img", {
                            src: "/assets/icons/bulb.png",
                            alt: "bulb",
                            className: v().object_1
                        }), (0, i.jsxs)("div", {
                            className: v().wrapper,
                            children: [(0, i.jsx)(m, {
                                text: "Portfolio"
                            }), (0, i.jsxs)("h1", {
                                children: [(0, i.jsxs)("span", {
                                    children: ["Creative ", (0, i.jsx)("span", {
                                        className: v().underline
                                    })]
                                }), " ", "Work"]
                            }), (0, i.jsx)("div", {
                                className: v().cards,
                                children: n.map(function(e) {
                                    return (0, i.jsxs)("div", {
                                        className: v().card,
                                        children: [(0, i.jsx)("div", {
                                            className: v().imgWrapper,
                                            children: (0, i.jsx)(g(), {
                                                src: "https:".concat(e.fields.featureImg.fields.file.url),
                                                alt: e.fields.featureImg.fields.title,
                                                sizes: "100vw",
                                                fill: !0
                                            })
                                        }), (0, i.jsxs)("div", {
                                            className: v().hoverElement,
                                            children: [(0, i.jsx)("p", {
                                                className: v().tag,
                                                children: e.fields.category
                                            }), (0, i.jsx)("h3", {
                                                children: e.fields.name
                                            }), (0, i.jsx)("p", {
                                                className: v().tech,
                                                children: e.fields.tech
                                            }), (0, i.jsx)("button", {
                                                onClick: function() {
                                                    return a.push("/portfolio/".concat(e.fields.slug))
                                                },
                                                children: "View Details"
                                            })]
                                        })]
                                    }, e.sys.id)
                                })
                            }), (0, i.jsx)("button", {
                                onClick: function() {
                                    return a.push("/portfolio")
                                },
                                children: "View All Work"
                            })]
                        })]
                    })
                },
                w = t(719),
                N = t(1911);
            t(3997), t(1071);
            var y = t(6141),
                k = t.n(y),
                S = function(e) {
                    var s = e.testimonials;
                    return (0, i.jsxs)("section", {
                        className: k().container,
                        children: [(0, i.jsx)("img", {
                            src: "/assets/shapes/typing.png",
                            alt: "typing",
                            className: k().object_1
                        }), (0, i.jsx)("img", {
                            src: "/assets/shapes/ball_1.png",
                            alt: "ball",
                            className: k().object_2
                        }), (0, i.jsx)("img", {
                            src: "/assets/shapes/shape_2.png",
                            alt: "shape",
                            className: k().object_3
                        }), (0, i.jsxs)("div", {
                            className: k().wrapper,
                            children: [(0, i.jsxs)("div", {
                                className: k().top,
                                children: [(0, i.jsx)(m, {
                                    text: "Testimonial"
                                }), (0, i.jsx)("h1", {
                                    children: "Testimonials"
                                })]
                            }), (0, i.jsx)("div", {
                                className: k().cards,
                                children: (0, i.jsx)(w.tq, {
                                    pagination: {
                                        clickable: !0
                                    },
                                    modules: [N.tl],
                                    loop: !0,
                                    className: "mySwiper",
                                    children: s.map(function(e) {
                                        var s = e.fields,
                                            t = e.sys;
                                        return (0, i.jsx)(w.o5, {
                                            children: (0, i.jsx)("div", {
                                                children: (0, i.jsxs)("div", {
                                                    className: k().card,
                                                    children: [(0, i.jsx)("div", {
                                                        className: k().clientImg,
                                                        children: (0, i.jsx)(g(), {
                                                            src: "https:".concat(s.image.fields.file.url),
                                                            alt: s.image.fields.title,
                                                            fill: !0
                                                        })
                                                    }), (0, i.jsx)("h4", {
                                                        children: s.name
                                                    }), (0, i.jsxs)("div", {
                                                        className: k().rating,
                                                        children: [(0, i.jsx)("img", {
                                                            src: "/assets/icons/star.svg",
                                                            alt: "star"
                                                        }), (0, i.jsx)("img", {
                                                            src: "/assets/icons/star.svg",
                                                            alt: "star"
                                                        }), (0, i.jsx)("img", {
                                                            src: "/assets/icons/star.svg",
                                                            alt: "star"
                                                        }), (0, i.jsx)("img", {
                                                            src: "/assets/icons/star.svg",
                                                            alt: "star"
                                                        }), (0, i.jsx)("img", {
                                                            src: "/assets/icons/star.svg",
                                                            alt: "star"
                                                        })]
                                                    }), (0, i.jsx)("p", {
                                                        className: k().text,
                                                        children: s.text
                                                    })]
                                                })
                                            })
                                        }, t.id)
                                    })
                                })
                            })]
                        })]
                    })
                },
                C = t(7801),
                I = t.n(C),
                E = function() {
                    return (0, i.jsxs)("section", {
                        className: I().container,
                        id: "about",
                        children: [(0, i.jsx)("div", {
                            className: I().orbit,
                            children: (0, i.jsx)("span", {
                                className: "".concat(I().circle_1)
                            })
                        }), (0, i.jsxs)("div", {
                            className: I().wrapper,
                            children: [(0, i.jsx)(m, {
                                text: "About me"
                            }), (0, i.jsxs)("div", {
                                className: I().about,
                                children: [(0, i.jsx)("div", {
                                    className: I().left,
                                    children: (0, i.jsx)("div", {
                                        className: I().imgContainer,
                                        children: (0, i.jsx)(g(), {
                                            src: "/assets/images/me2.png",
                                            alt: "Saad-Baig",
                                            fill: !0
                                        })
                                    })
                                }), (0, i.jsxs)("div", {
                                    className: I().right,
                                    children: [(0, i.jsxs)("div", {
                                        className: I().text,
                                        children: [(0, i.jsx)("h2", {
                                            children: "Saad Baig"
                                        }), (0, i.jsx)("small", {
                                            children: "Frontend Developer"
                                        }), (0, i.jsx)("p", {
                                            children: "I'm a Frontend Web developer, working in web development industry for over 3 years. I'm dedicated to developing & optimizing interactive, user-friendly, and feature rich websites and applications. I'm also proficient in troubleshooting complex issues, and implementing new features. If you are a business seeking a web presence or an employer looking to hire, feel free to get in touch."
                                        }), (0, i.jsxs)("ul", {
                                            children: [(0, i.jsxs)("li", {
                                                children: [(0, i.jsx)("strong", {
                                                    children: "Expertise:"
                                                }), "Frontend Web Development"]
                                            }), (0, i.jsxs)("li", {
                                                children: [(0, i.jsx)("strong", {
                                                    children: "Experience:"
                                                }), "3 Years"]
                                            }), (0, i.jsxs)("li", {
                                                children: [(0, i.jsx)("strong", {
                                                    children: "E-mail:"
                                                }), (0, i.jsxs)("p", {
                                                    children: [(0, i.jsx)("span", {
                                                        children: "saad@saadbaig.me"
                                                    }), (0, i.jsx)("span", {
                                                        children: "saadbaig7777@gmail.com"
                                                    })]
                                                })]
                                            })]
                                        })]
                                    }), (0, i.jsxs)("div", {
                                        className: I().socials,
                                        children: [(0, i.jsx)(c(), {
                                            href: "https://twitter.com/TheRealSaadBaig",
                                            children: (0, i.jsx)("div", {
                                                className: I().social,
                                                children: (0, i.jsx)("img", {
                                                    src: "/assets/icons/twitter_white.svg",
                                                    alt: "twitter"
                                                })
                                            })
                                        }), (0, i.jsx)(c(), {
                                            href: "https://www.linkedin.com/in/TheRealSaadBaig/",
                                            children: (0, i.jsx)("div", {
                                                className: I().social,
                                                children: (0, i.jsx)("img", {
                                                    src: "/assets/icons/linkedin_white.svg",
                                                    alt: "linkedin"
                                                })
                                            })
                                        }), (0, i.jsx)(c(), {
                                            href: "https://github.com/saadbaigg",
                                            children: (0, i.jsx)("div", {
                                                className: I().social,
                                                children: (0, i.jsx)("img", {
                                                    src: "/assets/icons/github_4.svg",
                                                    alt: "github"
                                                })
                                            })
                                        })]
                                    })]
                                })]
                            })]
                        })]
                    })
                },
                D = t(6929),
                R = t.n(D),
                F = function() {
                    return (0, i.jsxs)("section", {
                        className: R().container,
                        children: [(0, i.jsx)("img", {
                            src: "/assets/shapes/bucket.png",
                            alt: "bucket",
                            className: R().object_1
                        }), (0, i.jsx)("img", {
                            src: "/assets/shapes/spiral.png",
                            alt: "spiral",
                            className: R().object_2
                        }), (0, i.jsxs)("div", {
                            className: R().wrapper,
                            children: [(0, i.jsx)(m, {
                                text: "I'm Expert In"
                            }), (0, i.jsx)("h1", {
                                children: "Skills"
                            }), (0, i.jsxs)("p", {
                                className: R().text,
                                children: ["I have been working in web development industry for over ", (0, i.jsx)("span", {
                                    children: "3 years"
                                }), "."]
                            }), (0, i.jsxs)("div", {
                                className: R().images,
                                children: [(0, i.jsx)("a", {
                                    href: "https://en.wikipedia.org/wiki/HTML",
                                    children: (0, i.jsx)(g(), {
                                        src: "/assets/icons/html.svg",
                                        alt: "html",
                                        width: 80,
                                        height: 80
                                    })
                                }), (0, i.jsx)("a", {
                                    href: "https://en.wikipedia.org/wiki/CSS",
                                    children: (0, i.jsx)(g(), {
                                        src: "/assets/icons/css3.svg",
                                        alt: "css3",
                                        width: 80,
                                        height: 80
                                    })
                                }), (0, i.jsx)("a", {
                                    href: "https://en.wikipedia.org/wiki/Sass_(stylesheet_language)",
                                    children: (0, i.jsx)(g(), {
                                        src: "/assets/icons/sass.svg",
                                        alt: "sass",
                                        width: 80,
                                        height: 80
                                    })
                                }), (0, i.jsx)("a", {
                                    href: "https://en.wikipedia.org/wiki/JavaScript",
                                    children: (0, i.jsx)(g(), {
                                        src: "/assets/icons/javascript.svg",
                                        alt: "javascript",
                                        width: 80,
                                        height: 80
                                    })
                                }), (0, i.jsx)("a", {
                                    href: "https://en.wikipedia.org/wiki/React_(JavaScript_library)",
                                    children: (0, i.jsx)(g(), {
                                        src: "/assets/icons/reactjs.svg",
                                        alt: "reactjs",
                                        width: 80,
                                        height: 80
                                    })
                                }), (0, i.jsx)("a", {
                                    href: "https://en.wikipedia.org/wiki/Next.js",
                                    children: (0, i.jsx)(g(), {
                                        src: "/assets/icons/nextdotjs.svg",
                                        alt: "nextdotjs",
                                        width: 80,
                                        height: 80
                                    })
                                }), (0, i.jsx)("a", {
                                    href: "https://en.wikipedia.org/wiki/Firebase",
                                    children: (0, i.jsx)(g(), {
                                        src: "/assets/icons/firebase.svg",
                                        alt: "firebase",
                                        width: 80,
                                        height: 80
                                    })
                                }), (0, i.jsx)("a", {
                                    href: "https://en.wikipedia.org/wiki/Git",
                                    children: (0, i.jsx)(g(), {
                                        src: "/assets/icons/git.svg",
                                        alt: "git",
                                        width: 80,
                                        height: 80
                                    })
                                })]
                            })]
                        })]
                    })
                },
                M = t(2264),
                W = t.n(M),
                B = function() {
                    return (0, i.jsxs)("section", {
                        className: W().container,
                        id: "resume",
                        children: [(0, i.jsx)("img", {
                            src: "/assets/shapes/lamp.png",
                            alt: "lamp",
                            className: W().object
                        }), (0, i.jsxs)("div", {
                            className: W().wrapper,
                            children: [(0, i.jsx)(m, {
                                text: "Adventure is worthwhile"
                            }), (0, i.jsx)("h1", {
                                children: "Resume"
                            }), (0, i.jsxs)("div", {
                                className: W().row,
                                children: [(0, i.jsxs)("div", {
                                    className: W().block,
                                    children: [(0, i.jsx)("h2", {
                                        children: "Experience"
                                    }), (0, i.jsxs)("ul", {
                                        className: W().experience,
                                        children: [(0, i.jsxs)("li", {
                                            children: [(0, i.jsx)("span", {
                                                className: W().circle
                                            }), (0, i.jsx)("h3", {
                                                className: W().title,
                                                children: "Frontend Web Developer"
                                            }), (0, i.jsx)("small", {
                                                children: "2022 - present | Feedo"
                                            }), (0, i.jsx)("p", {
                                                children: "Responsible for developing, and implementing user-friendly and responsive web applications. My primary focus is on creating engaging user experiences by using a combination of ReactJS, NextJS, and other latest Frontend technologies while also working closely with designers and back-end developers to ensure seamless integration of web applications."
                                            })]
                                        }), (0, i.jsxs)("li", {
                                            children: [(0, i.jsx)("span", {
                                                className: W().circle
                                            }), (0, i.jsx)("h3", {
                                                className: W().title,
                                                children: "Full-time Freelance Web Developer"
                                            }), (0, i.jsx)("small", {
                                                children: "2020 - present | Self Employed"
                                            }), (0, i.jsx)("p", {
                                                children: "Worked on a range of freelance web projects from custom CMS, LMS, admin panels to ecommerce and serverless web applications so far. I build a web application from start to finish."
                                            })]
                                        }), (0, i.jsxs)("li", {
                                            children: [(0, i.jsx)("span", {
                                                className: W().circle
                                            }), (0, i.jsx)("h3", {
                                                className: W().title,
                                                children: "Front-end developer"
                                            }), (0, i.jsx)("small", {
                                                children: "2022 - 2023 | NFSea.tools"
                                            }), (0, i.jsx)("p", {
                                                children: "Responsible for developing clean, readable, reusable and maintainable solutions. Mostly work on Javascript technologies such as ReactJS and NextJS."
                                            })]
                                        }), (0, i.jsxs)("li", {
                                            children: [(0, i.jsx)("span", {
                                                className: W().circle
                                            }), (0, i.jsx)("h3", {
                                                className: W().title,
                                                children: "Front-end developer"
                                            }), (0, i.jsx)("small", {
                                                children: "2020 - 2022 | Kpibar"
                                            }), (0, i.jsx)("p", {
                                                children: "Worked as a Front End Developer on a spain based Saas company, Where I had translated XD designs to responsive and interactive user interface using ReactJS and GatsbyJS"
                                            })]
                                        })]
                                    })]
                                }), (0, i.jsxs)("div", {
                                    className: W().block,
                                    children: [(0, i.jsx)("h2", {
                                        children: "Education"
                                    }), (0, i.jsxs)("ul", {
                                        className: W().education,
                                        children: [(0, i.jsxs)("li", {
                                            children: [(0, i.jsx)("span", {
                                                className: W().circle
                                            }), (0, i.jsx)("h3", {
                                                className: W().title,
                                                children: "Bachelors in Computer Science (CS)"
                                            }), (0, i.jsx)("small", {
                                                children: "2020 - 2022 | Iqra University"
                                            }), (0, i.jsx)("p", {
                                                children: "Studied some core computer science courses including theory of computation, fundamentals of computer science, compilers and operating systems, information theory, systems and architecture, algorithms, data structures, software development and testing."
                                            })]
                                        }), (0, i.jsxs)("li", {
                                            children: [(0, i.jsx)("span", {
                                                className: W().circle
                                            }), (0, i.jsx)("h3", {
                                                className: W().title,
                                                children: "Cloud Native Computing / MERN Stack Development"
                                            }), (0, i.jsx)("small", {
                                                children: "2019 - 2020 | Axiom"
                                            }), (0, i.jsx)("p", {
                                                children: "This course taught me about the devOps and Full Stack Web Development. Cloud native is an approach to building and running applications that exploits the advantages of the cloud computing delivery model. Whereas, MERN is a javascript Stack for building dynamic web sites and web applications."
                                            })]
                                        }), (0, i.jsxs)("li", {
                                            children: [(0, i.jsx)("span", {
                                                className: W().circle
                                            }), (0, i.jsx)("h3", {
                                                className: W().title,
                                                children: "Intermediate - (Pre-Engineering)"
                                            }), (0, i.jsx)("small", {
                                                children: "2017 - 2019 | Jinnah Govt. College"
                                            }), (0, i.jsx)("p", {
                                                children: "During my time in college, I continued learning physics, chemistry and mathematics. Also during this time, I started to create static HTML5 and CSS3 websites."
                                            })]
                                        }), (0, i.jsxs)("li", {
                                            children: [(0, i.jsx)("span", {
                                                className: W().circle
                                            }), (0, i.jsx)("h3", {
                                                className: W().title,
                                                children: "Highschool - (Computer Science)"
                                            }), (0, i.jsx)("small", {
                                                children: "2004 - 2017 | Green Land Public School"
                                            }), (0, i.jsx)("p", {
                                                children: "I completed School, where I enjoyed doing computer science, maths, physics and arts. I realized in the last year of school that I wanted to do something with software, so I started learning HTML5 and CSS3."
                                            })]
                                        })]
                                    })]
                                })]
                            }), (0, i.jsx)("a", {
                                href: "/assets/docs/Saad Baig Resume.pdf",
                                download: !0,
                                children: (0, i.jsx)("button", {
                                    children: "Download CV"
                                })
                            })]
                        })]
                    })
                },
                T = t(2167),
                V = t(4740),
                q = t(3948),
                J = t.n(q),
                G = function(e) {
                    var s = e.data,
                        t = (0, l.useRouter)(),
                        a = s && s.length > 2 ? s.slice(0, 2) : s;
                    return (0, i.jsxs)("section", {
                        className: J().container,
                        children: [(0, i.jsx)("div", {
                            className: J().orbit,
                            children: (0, i.jsx)("span", {
                                className: "".concat(J().circle_1)
                            })
                        }), (0, i.jsx)("div", {
                            className: J().orbit2,
                            children: (0, i.jsx)("span", {
                                className: "".concat(J().circle_2)
                            })
                        }), (0, i.jsxs)("div", {
                            className: J().wrapper,
                            children: [(0, i.jsx)(m, {
                                text: "Blog & Article"
                            }), (0, i.jsxs)("h1", {
                                children: ["Recent", " ", (0, i.jsxs)("span", {
                                    children: ["blog ", (0, i.jsx)("span", {
                                        className: J().underline
                                    })]
                                }), " ", "post"]
                            }), (0, i.jsx)("div", {
                                className: J().cards,
                                children: a.map(function(e) {
                                    var s = e.fields;
                                    return (0, i.jsxs)("div", {
                                        className: J().card,
                                        onClick: function() {
                                            return t.push("/blog/".concat(s.slug))
                                        },
                                        children: [(0, i.jsx)("div", {
                                            className: J().imgWrapper,
                                            children: (0, i.jsx)(g(), {
                                                src: "https:".concat(s.image.fields.file.url),
                                                alt: s.image.fields.title,
                                                fill: !0
                                            })
                                        }), (0, i.jsxs)("div", {
                                            className: J().row,
                                            children: [(0, i.jsx)("div", {
                                                className: "".concat(J().category, " ").concat(J().block),
                                                children: (0, i.jsx)("p", {
                                                    children: s.category
                                                })
                                            }), (0, i.jsx)("div", {
                                                className: "".concat(J().date, " ").concat(J().block),
                                                children: s.publishedDate && (0, i.jsx)("p", {
                                                    children: (0, T.Z)(new Date(s.publishedDate), "MMMM. dd. yyyy")
                                                })
                                            })]
                                        }), (0, i.jsx)("h2", {
                                            children: s.title
                                        }), (0, i.jsx)("div", {
                                            className: J().content,
                                            children: (0, i.jsx)(V.D, {
                                                children: s.description
                                            })
                                        })]
                                    }, s.slug)
                                })
                            }), (0, i.jsx)("button", {
                                onClick: function() {
                                    return t.push("/blog")
                                },
                                children: "View All Blogs"
                            })]
                        })]
                    })
                },
                P = t(1313),
                z = t.n(P),
                O = t(4678),
                Z = t.n(O),
                L = function() {
                    var e = (0, l.useRouter)(),
                        s = (0, x.Z)((0, u.useState)(""), 2),
                        t = s[0],
                        a = s[1],
                        n = (0, x.Z)((0, u.useState)(""), 2),
                        r = n[0],
                        c = n[1],
                        o = (0, x.Z)((0, u.useState)(""), 2),
                        d = o[0],
                        h = o[1];
                    return (0, i.jsxs)("section", {
                        className: Z().container,
                        id: "contact",
                        children: [(0, i.jsx)("img", {
                            src: "/assets/shapes/typing_2.png",
                            alt: "typing",
                            className: Z().object
                        }), (0, i.jsxs)("div", {
                            className: Z().wrapper,
                            children: [(0, i.jsx)(m, {
                                text: "Contact me"
                            }), (0, i.jsxs)("h1", {
                                children: ["Let’s build something together", " ", (0, i.jsx)("img", {
                                    src: "/assets/icons/handshake.svg",
                                    alt: "handshake"
                                })]
                            }), (0, i.jsxs)("p", {
                                className: Z().text,
                                children: ["More than ", (0, i.jsx)("span", {
                                    children: "3 years"
                                }), " in the game and just getting started."]
                            }), (0, i.jsxs)("form", {
                                onSubmit: function(s) {
                                    s.preventDefault(), e.push("mailto:saadbaig7777@gmail.com?subject=".concat(t, "%20contacting%20Saad%20Baig&body=").concat(d, "&from=hello"))
                                },
                                children: [(0, i.jsx)("input", {
                                    type: "text",
                                    placeholder: "Enter your name",
                                    value: t,
                                    required: !0,
                                    onChange: function(e) {
                                        return a(e.target.value)
                                    }
                                }), (0, i.jsx)("input", {
                                    type: "email",
                                    placeholder: "Enter your email",
                                    value: r,
                                    required: !0,
                                    onChange: function(e) {
                                        return c(e.target.value)
                                    }
                                }), (0, i.jsx)("textarea", {
                                    name: "message",
                                    placeholder: "Enter your message",
                                    value: d,
                                    required: !0,
                                    onChange: function(e) {
                                        return h(e.target.value)
                                    }
                                }), (0, i.jsx)("button", {
                                    type: "submit",
                                    children: "Send Message"
                                })]
                            })]
                        })]
                    })
                },
                A = !0,
                H = function(e) {
                    var s = e.posts,
                        t = e.testimonials,
                        a = e.projects;
                    return (0, i.jsxs)("div", {
                        className: z().container,
                        children: [(0, i.jsxs)(n(), {
                            children: [(0, i.jsx)("title", {
                                children: "Saad Baig - Frontend Developer"
                            }), (0, i.jsx)("meta", {
                                name: "description",
                                content: "Frontend Developer with over 3 years of experience in the industry."
                            }), (0, i.jsx)("meta", {
                                property: "og:type",
                                content: "website"
                            }), (0, i.jsx)("meta", {
                                property: "og:title",
                                content: "Saad Baig"
                            }), (0, i.jsx)("meta", {
                                property: "og:image",
                                content: "/assets/images/hero.jfif"
                            }), (0, i.jsx)("meta", {
                                property: "og:description",
                                content: "Frontend Developer with over 3 years of experience in the industry."
                            }), (0, i.jsx)("meta", {
                                property: "og:url",
                                content: "https://saadbaig.me/"
                            }), (0, i.jsx)("meta", {
                                property: "og:type",
                                content: "website"
                            }), (0, i.jsx)("meta", {
                                property: "og:title",
                                content: "Saad Baig"
                            }), (0, i.jsx)("meta", {
                                property: "og:description",
                                content: "Frontend Developer with over 3 years of experience in the industry."
                            }), (0, i.jsx)("meta", {
                                property: "og:image",
                                content: "https://saadbaig.me/assets/images/hero.jfif"
                            }), (0, i.jsx)("meta", {
                                name: "twitter:card",
                                content: "summary_large_image"
                            }), (0, i.jsx)("meta", {
                                property: "twitter:domain",
                                content: "saadbaig.me"
                            }), (0, i.jsx)("meta", {
                                property: "twitter:url",
                                content: "https://saadbaig.me/"
                            }), (0, i.jsx)("meta", {
                                name: "twitter:title",
                                content: "Saad Baig"
                            }), (0, i.jsx)("meta", {
                                name: "twitter:description",
                                content: "Frontend Developer with over 3 years of experience in the industry."
                            }), (0, i.jsx)("meta", {
                                name: "twitter:image",
                                content: "https://saadbaig.me/assets/images/hero.jfif"
                            })]
                        }), (0, i.jsxs)("main", {
                            className: z().main,
                            children: [(0, i.jsx)(h, {}), (0, i.jsx)(F, {}), a && a.length > 0 && (0, i.jsx)(f, {
                                projects: a
                            }), t && t.length > 0 && (0, i.jsx)(S, {
                                testimonials: t
                            }), (0, i.jsx)(E, {}), (0, i.jsx)(B, {}), (0, i.jsx)(G, {
                                data: s
                            }), (0, i.jsx)(L, {})]
                        })]
                    })
                }
        },
        211: function(e) {
            e.exports = {
                container: "subTitle_container__sG_qp"
            }
        },
        1313: function(e) {
            e.exports = {
                container: "home_container__Jmzag",
                main: "home_main__fOcqE"
            }
        },
        7801: function(e) {
            e.exports = {
                container: "about_container__Ysygn",
                orbit: "about_orbit__2jZpO",
                "spin-right": "about_spin-right__zjIFP",
                circle_1: "about_circle_1__HVODq",
                wrapper: "about_wrapper__HhmGE",
                about: "about_about__nmPI5",
                left: "about_left__bjbka",
                imgContainer: "about_imgContainer__i4et8",
                right: "about_right__Dh2f_",
                text: "about_text__Z4OSQ",
                socials: "about_socials__DSknr",
                social: "about_social__n3Tka"
            }
        },
        3948: function(e) {
            e.exports = {
                container: "blogs_container__BcV01",
                orbit: "blogs_orbit__KI9vl",
                "spin-right": "blogs_spin-right__x6Zzk",
                circle_1: "blogs_circle_1__qsrCf",
                orbit2: "blogs_orbit2__TPYms",
                "spin-right2": "blogs_spin-right2__SZtIT",
                circle_2: "blogs_circle_2__AodRZ",
                wrapper: "blogs_wrapper___4CU0",
                underline: "blogs_underline__mcp8y",
                cards: "blogs_cards__cduWG",
                card: "blogs_card__oRMpG",
                imgWrapper: "blogs_imgWrapper__d77fb",
                row: "blogs_row__v3mJq",
                block: "blogs_block__iqhfo",
                category: "blogs_category__HoQJQ",
                date: "blogs_date__fUuIt",
                content: "blogs_content__l9FJE"
            }
        },
        4678: function(e) {
            e.exports = {
                container: "contact_container___CE5a",
                object: "contact_object__VBBQI",
                move2: "contact_move2__xjEAZ",
                wrapper: "contact_wrapper__tvaVr",
                text: "contact_text__mmipH"
            }
        },
        8636: function(e) {
            e.exports = {
                container: "hero_container__JPDnU",
                circle: "hero_circle__sV8je",
                shape_1: "hero_shape_1__p1IkS",
                "move-around": "hero_move-around__M7814",
                shape_2: "hero_shape_2__5dPGb",
                wrapper: "hero_wrapper__vBwQd",
                left: "hero_left__K7g02",
                underline: "hero_underline__YNKEH",
                text: "hero_text__CixBV",
                btnContainer: "hero_btnContainer__aUeYJ",
                socials: "hero_socials__fREhu",
                social: "hero_social__IbqZd",
                right: "hero_right__Cq3O3"
            }
        },
        544: function(e) {
            e.exports = {
                container: "portfolio_container__OIUnK",
                object_1: "portfolio_object_1__Gz9oo",
                move: "portfolio_move__x5lq9",
                wrapper: "portfolio_wrapper__VMq1A",
                underline: "portfolio_underline__gm7oP",
                tabMenu: "portfolio_tabMenu___18SQ",
                tab: "portfolio_tab__haujF",
                active: "portfolio_active__9vYUV",
                cards: "portfolio_cards__XzO9K",
                card: "portfolio_card__k6zpR",
                imgWrapper: "portfolio_imgWrapper__68Tgz",
                hoverElement: "portfolio_hoverElement___hKNw",
                tag: "portfolio_tag__1VWho",
                tech: "portfolio_tech__YNVfy"
            }
        },
        2264: function(e) {
            e.exports = {
                container: "resume_container__wwbUj",
                object: "resume_object__V_kLc",
                wrapper: "resume_wrapper__QWFy8",
                row: "resume_row__XCMOf",
                block: "resume_block__11RqP",
                experience: "resume_experience__eVcdY",
                education: "resume_education__K_mMM",
                circle: "resume_circle__j_sjt",
                title: "resume_title__clPa8"
            }
        },
        6929: function(e) {
            e.exports = {
                container: "skills_container__rvjHS",
                object_1: "skills_object_1__t3aIq",
                move: "skills_move__Rs4_z",
                object_2: "skills_object_2__V1ppz",
                move2: "skills_move2__1hWGa",
                wrapper: "skills_wrapper__j67gd",
                text: "skills_text__OcUml",
                images: "skills_images__XlE_6"
            }
        },
        6141: function(e) {
            e.exports = {
                container: "testimonial_container__sodKI",
                object_1: "testimonial_object_1__hx4kt",
                move: "testimonial_move__uFnv6",
                object_2: "testimonial_object_2__4n2_z",
                move2: "testimonial_move2__9Uu7j",
                object_3: "testimonial_object_3__gxer0",
                wrapper: "testimonial_wrapper__xuSBZ",
                top: "testimonial_top___EfDe",
                underline: "testimonial_underline__fxPLG",
                cards: "testimonial_cards__aPW8E",
                card: "testimonial_card__LJLYn",
                clientImg: "testimonial_clientImg__oYuGK",
                rating: "testimonial_rating__tCL0E",
                text: "testimonial_text___gmOA"
            }
        }
    },
    function(e) {
        e.O(0, [45, 675, 167, 747, 774, 888, 179], function() {
            return e(e.s = 5557)
        }), _N_E = e.O()
    }
]);