import profileImg from '../images/abdurehim-profile.jpg';

export default function LoadingScreen() {
  return (
    <div className="loading-screen" aria-hidden="true">
      <div className="loading-logo">
        <div className="logo-icon">
          <img src={profileImg} alt="Abdurehim Seid" className="loading-profile-img" />
        </div>
        <p className="loading-name">Abdurehim Seid</p>
        <p className="loading-tagline">Full-Stack Web Developer</p>
        <div className="loading-bar-track">
          <div className="loading-bar-fill" />
        </div>
      </div>
    </div>
  );
}
