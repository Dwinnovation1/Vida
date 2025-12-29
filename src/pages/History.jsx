import React, { useLayoutEffect, useRef } from 'react'; 
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const History = () => {
  const containerRef = useRef(null);

  // --- DATA ---
  const milestones = [
    {
      year: "2011",
      title: "The Genesis",
      desc: "Vida Life Sciences Pvt Ltd. was launched by Dr. Onkar Yadav, Mr. Dhananjay Sawant & Mr Sanjay Khandagale.",
      badge: "Inception",
      img: "/images/2011.jpeg"
    },
    {
      year: "2012",
      title: "Supply Operations",
      desc: "Started hospital equipment & furniture supply.",
      badge: "Operations",
      img: "/images/2012.jpeg"
    },
    {
      year: "2013",
      title: "Market Establishment",
      desc: "Started hospital equipment & furniture supply.",
      badge: "Supply Chain",
      img: "/images/2013.jpeg"
    },
    {
      year: "2014",
      title: "Biomedical Consultancy",
      desc: "Started designing new hospital project services & biomedical consultancy.",
      badge: "Consultancy",
      img: "/images/2014.jpeg"
    },
    {
      year: "2015",
      title: "Geographic Expansion",
      desc: "Vida brand reached almost every district of Maharashtra State along with projects in Karnataka, North region, Telangana, Madhya Pradesh, Gujarat, Muscat and Malaysia.",
      badge: "Global Reach",
      img: "/images/2015.jpeg"
    },
    {
      year: "2016",
      title: "R&D Inception",
      desc: "Started its own Research & Development department to develop new CSSD equipment.",
      badge: "R&D",
      img: "/images/2016.jpeg"
    },
    {
      year: "2017",
      title: "National Excellence",
      desc: "Vida was awarded the Fastest Growing Indian Company Excellence Award at International Achievers Conference.",
      badge: "Award",
      img: "/images/2017.jpeg"
    },
    {
      year: "2018",
      title: "Tech Innovation",
      desc: "Vida Developed Automatic bed pan washer disinfector with its A0 value calculation.",
      badge: "Product Dev",
      img: "/images/2018.jpeg"
    },
    {
      year: "2019",
      title: "International Breakthrough",
      desc: "Vida got a breakthrough in 1st international CSSD set up in South Africa - Congo.",
      badge: "Global",
      img: "/images/2019.jpeg"
    },
    {
      year: "2020",
      title: "Pandemic Resilience",
      desc: "Vida has struggle a lot, coz of Covid effect, but still successfully done installation in Manipur- Imphal with huge challenges at American oncology centre.",
      badge: "Resilience",
      img: "/images/2020.jpeg"
    },
    {
      year: "2021",
      title: "Government Partnerships",
      desc: "Vida moved on with many successful orders for CSSD in government sector too.",
      badge: "Public Sector",
      img: "/images/2021.jpeg"
    },
    {
      year: "2022",
      title: "Advanced Engineering",
      desc: "Vida has newly added double door instrument washer cum dryer.",
      badge: "Technology",
      img: "/images/2022.jpeg"
    },
    {
      year: "2023",
      title: "Infrastructure Scaling",
      desc: "Vida continuing with many CSSD projects including govt. Medical colleges.",
      badge: "Scaling",
      img: "/images/2023.jpeg"
    },
    {
      year: "2024",
      title: "Scientific Validation",
      desc: "Vida Publish research article on A0 Concept in an international journal Scopus Indexed….and many products under development phases for ICU and Dental too…….",
      badge: "Research",
      img: "/images/2024.jpeg"
    },
    {
      year: "2025",
      title: "Patent & Leadership",
      desc: "1) Vida Lifesciences Pvt Ltd received its first patent! 2) Vida unveil the next generation of automated instrument care. 3) Introduced Advanced-Technology Automatic Vertical Sliding Door Steam Sterilizer. 4) Dr. Onkar Yadav earned his doctorate in Healthcare Infection Control and Prevention.",
      badge: "Milestone",
      img: "/images/2025.jpeg"
    }
  ];

  // --- ANIMATION LOGIC ---
  useLayoutEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      
      // HERO ANIMATIONS
      const tl = gsap.timeline();
      tl.from(".hero-badge", { y: 20, opacity: 0, duration: 0.8, ease: "power2.out" })
        .from(".main-title", { y: 30, opacity: 0, duration: 1, ease: "power2.out" }, "-=0.6")
        .from(".desc-text", { y: 20, opacity: 0, duration: 0.8, ease: "power2.out" }, "-=0.6");

      // TIMELINE TRACK
      gsap.to(".track-fill", {
        height: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: ".journey-section",
          start: "top center",
          end: "bottom bottom",
          scrub: true,
        },
      });

      // HUGE YEAR
      gsap.utils.toArray(".huge-year").forEach((year) => {
        gsap.to(year, {
          y: -100,
          ease: "none",
          scrollTrigger: {
            trigger: year,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });

      // CONTENT CARDS
      gsap.utils.toArray(".js-reveal").forEach((card) => {
        gsap.fromTo(card, 
          { opacity: 0, y: 50 },
          {
            opacity: 1, 
            y: 0, 
            duration: 0.8,
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });

      // IMAGE REVEAL
      gsap.utils.toArray(".js-image-reveal img").forEach((img) => {
        gsap.fromTo(img,
          { scale: 1.2 },
          {
            scale: 1,
            duration: 1.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: img,
              start: "top 85%",
            }
          }
        );
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="bg-slate-50 min-h-screen pb-24 overflow-hidden">
      
      {/* ================= HERO (CINEMATIC UPDATE) ================= */}
      <header className="relative h-[80vh] min-h-[600px] flex flex-col items-center justify-center text-center px-6 mb-20 overflow-hidden">
        
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
           <img 
             src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
             alt="History Architecture" 
             className="w-full h-full object-cover"
           />
           {/* Cinematic Dark Overlay */}
           <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto mt-20">
          <div className="hero-badge inline-block px-6 py-2 border border-white/20 rounded-full text-sky-300 font-bold text-sm tracking-[0.2em] uppercase mb-6 bg-white/5 backdrop-blur-md">
            Est. 2011
          </div>
          <h1 className="main-title text-5xl lg:text-8xl font-bold text-white leading-[0.9] tracking-tighter mb-8 drop-shadow-2xl">
            EVOLUTION OF <br/> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">
              DISCIPLINE
            </span>
          </h1>
          <p className="desc-text text-xl text-white max-w-2xl mx-auto leading-relaxed font-bold">
            Vida did not appear overnight. We are the result of 14 years of phased capability building, field-tested research, and validated maturity.
          </p>
        </div>
      </header>

      {/* ================= JOURNEY ================= */}
      <section className="journey-section relative container mx-auto px-6">
        
        {/* Timeline Track */}
        <div className="absolute top-0 bottom-0 left-[2rem] lg:left-1/2 lg:-translate-x-1/2 w-[2px] h-full z-0 hidden md:block">
          <div className="absolute inset-0 bg-slate-200"></div>
          <div className="track-fill absolute top-0 left-0 w-full h-0 bg-sky-600 shadow-[0_0_15px_rgba(14,165,233,0.6)]"></div>
        </div>

        <div className="relative z-10">
          {milestones.map((item, index) => (
            <div 
              key={index}
              className={`flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-0 mb-32 lg:mb-48 relative ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              
              {/* CONTENT SIDE */}
              <div className="w-full lg:w-[45%] relative">
                  <div 
                    className="huge-year absolute -top-32 left-1/2 -translate-x-1/2 text-[6rem] lg:text-[10rem] font-black text-slate-300 leading-none select-none z-[-1] opacity-60"
                    style={{ WebkitTextStroke: '2px #cbd5e1' }}
                  >
                    {item.year}
                  </div>

                {/* Text Card */}
                <div className="js-reveal bg-white/80 backdrop-blur-md p-8 lg:p-12 rounded-2xl border border-white shadow-xl shadow-slate-200/50">
                  <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">{item.title}</h3>
                  <p className="text-slate-600 text-lg leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* IMAGE SIDE */}
              <div className="w-full lg:w-[45%] h-[400px] relative js-image-reveal group">
                <div className={`w-full h-full rounded-3xl overflow-hidden shadow-[20px_20px_0px_#e0f2fe] ${index % 2 === 1 ? 'lg:shadow-[-20px_20px_0px_#e0f2fe]' : ''}`}>
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Badge */}
                <div className={`absolute -bottom-4 bg-sky-600 text-white px-8 py-3 rounded-full font-bold text-sm tracking-widest shadow-lg shadow-sky-900/20 ${index % 2 === 1 ? 'left-8' : 'right-8'}`}>
                  {item.badge}
                </div>
              </div>

            </div>
          ))}
        </div>

      </section>

    </div>
  );
};

export default History;