function profileBio(props) {
  return (
    <div className="bio-container">
        <div ref={props.ref} className="bio">
              <h2>✨ About me</h2>
        <p>
          I'm a self-taught frontend developer with a strong foundation in JavaScript, React, and modern web practices. 
          I’ve built multiple live projects, including an AI recipe generator and a real-time news app. 
          I'm currently looking for opportunities to contribute to a fast-paced dev team and grow in a professional IT environment.
        </p>
        </div>
    </div>
  );
}

export default profileBio;