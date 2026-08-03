import SectionReveal from './SectionReveal';
import StatsCard from './StatsCard';
import { stats } from '../data/portfolioData';

const TAGS = ['React', 'Node.js', 'Express', 'MySQL', 'MongoDB', 'REST APIs', 'Tailwind CSS', 'Git'];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-[1200px] px-6 py-[110px] md:py-20">
      <SectionReveal>
        <span className="eyebrow">About Me</span>
        <h2 className="text-gradient mb-2 inline-block font-heading font-extrabold leading-[1.15] tracking-[-0.5px]"
          style={{ fontSize: 'clamp(2rem,5vw,2.75rem)' }}>
          Who I Am
        </h2>
        <p className="mb-14 font-mono text-[.8rem] uppercase tracking-[2.5px] text-[#55556a]">
          {/* background &amp; passion */}
        </p>
      </SectionReveal>

      <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-16">
        <SectionReveal className="flex flex-col gap-5">
          {/* <p className="text-[1.02rem] leading-[1.85] text-[#8a8aaa]">
            I'm a
            and a <strong className="font-semibold text-[#f0f0f5]">Software Engineering student</strong>{' '}
            who turns complex problems into clean, intuitive digital experiences. I specialise in
            building end-to-end web applications — from pixel-precise frontends to robust, scalable backends.
          </p> */}

          <p className='text-[1.02rem] leading-[1.85] text-[#8a8aaa]'>
            I'm a <strong className="font-semibold text-[#f0f0f5]">Full-Stack Web Developer</strong>{' '} passionate about building fast, modern, and scalable web applications.
            I turn ideas into clean, responsive, and user-friendly digital experiences that help businesses grow.
            Every project I build focuses on performance, quality, and delivering real value.
          </p>

          <p className="text-[1.02rem] leading-[1.85] text-[#8a8aaa]">
            I care about the details: clean architecture, readable code, and interfaces that feel
            effortless. Every project is built with a focus on{' '}
            <strong className="font-semibold text-[#f0f0f5]">performance</strong>,{' '}
            <strong className="font-semibold text-[#f0f0f5]">accessibility</strong>, and real
            business value — because great software should work as good as it looks.
          </p>

          {/* <div className="mt-1 flex flex-wrap gap-2">
            {TAGS.map(tag => (
              <span key={tag} className="rounded-md border border-cyan/25 bg-cyan/[.06] px-3 py-[5px] font-mono text-[.75rem] tracking-[.3px] text-cyan transition-colors duration-200 hover:border-cyan/50 hover:bg-cyan/[.12]">
                {tag}
              </span>
            ))}
          </div> */}
        </SectionReveal>

        <div className="grid grid-cols-2 gap-4">
          {stats.map((s, i) => (
            <StatsCard key={i} label={s.label} value={s.value} suffix={s.suffix} />
          ))}
        </div>
      </div>
    </section>
  );
}
