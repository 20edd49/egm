const profile = {
  name: "Eduardo Galindo Munoz",
  bio: "I am a third-year Computer Science student at Columbia University who loves building thoughtful technology and learning through the process. I am ambitious, excited for what is ahead, and I really love a good cup of coffee.",
  image: "/IMG_1409.jpeg",
  links: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/eduardo-galindo-munoz/",
      icon: "linkedin"
    },
    {
      label: "GitHub",
      href: "https://github.com/your-github",
      icon: "github"
    },
    {
      label: "Gmail",
      href: "mailto:20edd49@gmail.com",
      icon: "mail"
    },
    {
      label: "Resume",
      href: "/resume.pdf",
      icon: "file"
    }
  ]
};

function Icon({ kind }) {
  switch (kind) {
    case "linkedin":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3.14a1.97 1.97 0 1 0 0 3.94 1.97 1.97 0 0 0 0-3.94ZM20.44 13.05c0-3.46-1.85-5.07-4.32-5.07-1.99 0-2.88 1.09-3.38 1.86V8.5H9.37c.04.89 0 11.5 0 11.5h3.37v-6.42c0-.34.02-.68.13-.92.27-.68.88-1.38 1.91-1.38 1.35 0 1.89 1.03 1.89 2.54V20H20v-6.95Z" />
        </svg>
      );
    case "github":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.41-4.04-1.41-.55-1.38-1.33-1.75-1.33-1.75-1.09-.75.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.49.99.11-.77.42-1.3.76-1.6-2.66-.3-5.47-1.33-5.47-5.94 0-1.31.47-2.39 1.23-3.23-.12-.3-.53-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.29-1.23 3.29-1.23.66 1.65.25 2.87.13 3.17.77.84 1.23 1.92 1.23 3.23 0 4.62-2.82 5.63-5.5 5.93.43.37.82 1.1.82 2.22v3.29c0 .32.22.69.83.57A12 12 0 0 0 12 .5Z" />
        </svg>
      );
    case "mail":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M3 5.5A2.5 2.5 0 0 1 5.5 3h13A2.5 2.5 0 0 1 21 5.5v13a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 18.5v-13Zm2.2.5 6.8 5.33L18.8 6H5.2Zm13.3 1.27-6.04 4.73a.75.75 0 0 1-.92 0L5.5 7.27v11.23h13V7.27Z" />
        </svg>
      );
    case "file":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M7 2.75A2.75 2.75 0 0 0 4.25 5.5v13A2.75 2.75 0 0 0 7 21.25h10A2.75 2.75 0 0 0 19.75 18.5V8.56a2.75 2.75 0 0 0-.8-1.94l-3.01-3A2.75 2.75 0 0 0 13.99 2.75H7Zm0 1.5h6.25V7.5A1.75 1.75 0 0 0 15 9.25h3.25v9.25c0 .69-.56 1.25-1.25 1.25H7c-.69 0-1.25-.56-1.25-1.25v-13c0-.69.56-1.25 1.25-1.25Zm7.75 1.06 2.94 2.94H15A.25.25 0 0 1 14.75 8V5.31Z" />
        </svg>
      );
    default:
      return null;
  }
}

export default function HomePage() {
  return (
    <main className="page-shell">
      <section className="profile-card">
        <div className="photo-wrap">
          <img className="profile-photo" src={profile.image} alt={`${profile.name} portrait`} />
        </div>

        <div className="profile-copy">
          <p className="eyebrow">Personal site</p>
          <h1>{profile.name}</h1>
          <p className="bio">{profile.bio}</p>

          <div className="icon-row" aria-label="Social links">
            {profile.links.map((link) => (
              <a
                key={link.label}
                className="icon-link"
                href={link.href}
                aria-label={link.label}
                title={link.label}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              >
                <Icon kind={link.icon} />
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
