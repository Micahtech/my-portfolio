(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [931],
    {
        922: function (e, t, i) {
            Promise.resolve().then(i.bind(i, 252));
        },
        252: function (e, t, i) {
            "use strict";
            i.r(t);
            i.d(t, { default: function () { return C; } });

            var s = i(7437),
                a = i(2265),
                n = i(7138),
                r = i(1177);

            let socialLinks = [
                { name: "Facebook", link: "https://faceboook.com/idighs", icon: "basil:facebook-outline" },
                { name: "Twitter", link: "https://x.com/idighekere", icon: "hugeicons:new-twitter" },
                { name: "Whatsapp", link: "https://wa.me/+2347041300445", icon: "basil:whatsapp-outline" },
                { name: "LinkedIn", link: "https://linkedin.com/in/idighekere-udo", icon: "basil:linkedin-outline" }
            ];

            var MainSection = (props) => (
                <s.Fragment>
                    <main className="flex h-[80vh] md:h-screen items-center justify-between p-5 md:p-20">
                        <div className="md:pr-10 mt-0" data-aos="fade-right">
                            <p className="text-primary-blue text-[1.125rem]">Hi👋, my name is</p>
                            <h1
                                className="text-5xl md:text-6xl lg:text-8xl font-[600] bg-text-gradient text-transparent bg-clip-text font-incognito"
                                data-aos="flip-up"
                            >
                                Idighekere Udo
                            </h1>
                            <h3 className="text-3xl md:text-3xl lg:text-4xl font-[600] text-[#8892b0] bg-clip-text font-incognito">
                                I'm a Web Developer
                            </h3>
                            <p className="text-[1.125rem] text-[#8892b0]">
                                I am glad to have you here. I am excited to connect & share my works with you.
                            </p>
                            <div className="flex gap-3 py-3 text-primary-blue">
                                {socialLinks.map((link) => (
                                    <n.default
                                        key={link.link}
                                        href={link.link}
                                        className="hover:bg-button-gradient-r rounded-full bg-transparent duration-350 p-3 w-10 h-10 flex justify-center items-center border-primary-blue border transition ease-in-out hover:scale-[1.2]"
                                    >
                                        <r.JO icon={link.icon} width="25" height="25" />
                                    </n.default>
                                ))}
                            </div>
                        </div>
                    </main>
                </s.Fragment>
            );

            var SkillsSection = () => {
                let skills = [
                    { name: "HTML", icon: "simple-icons:html5" },
                    { name: "CSS", icon: "simple-icons:css3" },
                    { name: "Javascript", icon: "simple-icons:javascript" },
                    { name: "Typescript", icon: "simple-icons:typescript" },
                    { name: "Tailwind", icon: "simple-icons:tailwindcss" },
                    { name: "React Js", icon: "simple-icons:react" },
                    { name: "Next Js", icon: "akar-icons:nextjs-fill" },
                    { name: "Wordpress", icon: "simple-icons:wordpress" },
                    { name: "Firebase", icon: "simple-icons:firebase" },
                    { name: "ShadCN UI", icon: "simple-icons:shadcnui" },
                    { name: "Docker", icon: "simple-icons:docker" }
                ];

                return (
                    <section className="p-5 mt-10 md:p-20">
                        <div className="flex justify-center mb-5 items-center flex-col">
                            <h2 className="text-[1.6rem] md:text-4xl font-[700] text-center">MY SKILLS</h2>
                            <p className="text-center text-soft-white/75 mt-4">
                                A showcase of my technical skills and tools that I've mastered to build efficient and scalable solutions.
                            </p>
                        </div>
                        <div className="grid grid-cols-3 gap-3 p-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 py-9 md:p-10 md:gap-5">
                            {skills.map((skill) => (
                                <div
                                    key={skill.icon}
                                    className="flex flex-col items-center transition-transform duration-200 ease-in-out transform cursor-pointer text-primary-blue hover:text-light-blue hover:scale-110"
                                    data-aos="zoom-in"
                                >
                                    <r.JO icon={skill.icon} height="55" width="55" className="text-7xl md:text-9xl" />
                                    <p className="text-[0.7rem] mt-1">{skill.name}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                );
            };

            function C() {
                return (
                    <s.Fragment>
                        <MainSection />
                        <SkillsSection />
                        {/* Add other sections like Projects, About Me, and Contact Me here */}
                    </s.Fragment>
                );
            }
        }
    },
    function (e) {
        e.O(0, [704, 177, 56, 173, 307, 9, 971, 23, 744], function () {
            return e((e.s = 922));
        }),
            (_N_E = e.O());
    }
]);