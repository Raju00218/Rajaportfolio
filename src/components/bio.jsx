function profileBio(props) {
  return (
    <div className="bio-container">
        <div ref={props.ref} className="bio">
              <h2>✨ About me</h2>
              <p>Hi, I’m Raju — a self-taught Frontend Developer passionate about building clean, interactive, and user-friendly web experiences. I started my journey learning JavaScript and React, and quickly fell in love with the way code turns into real, usable products.From crafting intuitive to-do apps to building an AI-powered recipe generator, I enjoy blending logic and creativity to solve problems. I focus on writing optimized code, responsive layouts using modern CSS techniques, and creating interfaces that feel smooth and polished.</p>
        </div>
    </div>
  );
}

export default profileBio;