import { useState } from "react";
const ContactForm = ({ref}) => {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("")



  const handleSendClick = () => {
    const yourEmail = "rajualaveni7893@gmail.com"; // your email
    const subject = "Message from Portfolio";
    const body = encodeURIComponent(`Hi Raju,\n\nMy name is ${name}.\n\n${message}`); // escape special characters

    const mailtoLink = `mailto:${yourEmail}?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink; // this opens the mail client
  };



  return (
    <div ref={ref} className="form">
        <div className="title">Contact us</div>
      <input type="text" placeholder="Raju Alabeni" className="input" name="name" required disabled />
      <input type="email" placeholder="rajualaveni7893@gmail.com" name="email" required disabled />
      <input 
      type="text" 
      placeholder="Your Name" 
      value={name}
      onChange={(e) => setName(e.target.value)} 
      required />
      <textarea 
      value={message} 
      placeholder="Your message" 
      required
      onChange={(e) => setMessage(e.target.value)}
      >  
      </textarea>

      <button onClick={handleSendClick}>Submit</button>
    </div>
  );
};

export default ContactForm;