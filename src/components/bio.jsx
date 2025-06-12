function profileBio(props) {
  return (
    <div className="bio-container">
        <div ref={props.ref} className="bio">
              <h2>✨ About me</h2>
        <p>💬 About Me
          Hi, I’m Raju — a self-taught frontend developer with a passion for clean UI and functional web apps.
          I’m currently learning React, building projects, and aiming for my first IT role.</p>
        </div>
    </div>
  );
}

export default profileBio;