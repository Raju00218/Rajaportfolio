const ContactForm = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(new FormData(form)).toString(),
    })
      .then(() => alert("Message sent successfully!"))
      .catch((error) => alert("Error: " + error));
  };

  return (
    <form
      className="form"
      name="contact"
      method="POST"
      data-netlify="true"
      onSubmit={handleSubmit}
      netlify-honeypot="bot-field" // Optional spam filter
      ref={props.ref}
    >
      <input type="hidden" name="form-name" value="contact" /> {/* Required for Netlify */}
      <p hidden>
        <label>Don’t fill this out: <input name="bot-field" /></label>
      </p>

      <div className="title">Contact us</div>
      <input type="text" placeholder="Your name" className="input" name="name" required />
      <input type="email" placeholder="Your email" className="input" name="email" required />
      <textarea name="message" placeholder="Your message" required></textarea>

      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;