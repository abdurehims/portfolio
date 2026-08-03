import profileImg from '../images/abdurehim-profile.jpg';

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-[100000] flex items-center justify-center bg-[#060609]" aria-hidden="true">
      <div className="flex flex-col items-center gap-5">
        <div className="avatar-ring animate-logo-pulse h-[84px] w-[84px] flex-shrink-0">
          <img src={profileImg} alt="Abdurehim Seid" className="h-full w-full rounded-full object-cover" />
        </div>
        <p className="font-heading text-[1.25rem] font-bold tracking-[.5px] text-[#f0f0f5]">Abdurehim Seid</p>
        <p className="-mt-3 font-mono text-[.7rem] uppercase tracking-[2.5px] text-cyan">Full-Stack Web Developer</p>
        <div className="h-[2px] w-[180px] overflow-hidden rounded-full bg-white/[.08]">
          <div className="h-full animate-load-fill rounded-full bg-gradient-bar shadow-[0_0_10px_#00e5ff]" />
        </div>
      </div>
    </div>
  );
}
