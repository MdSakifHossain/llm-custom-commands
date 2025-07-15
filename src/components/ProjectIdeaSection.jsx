import React from "react";

const ProjectIdeaSection = () => {
  return (
    <section className="proj-idea-section">
      <div className="proj-content-column">
        <h2>
          Got a project in <br />
          <span>mind?</span>
        </h2>
        <p>
          Always open to new ideas and collaborations.
          <br />
          Let's discuss your next big idea.
        </p>
      </div>
      <form>
        {/* name and email */}
        <div className="name-n-email-container">
          <div className="input-field">
            <label htmlFor="Name">Your name</label>
            <input id="Name" type="text" placeholder="Name" required />
          </div>
          <div className="input-field">
            <label htmlFor="Email">Your email</label>
            <input id="Email" type="email" placeholder="Email" required />
          </div>
        </div>
        {/* just for the message alone */}
        <div className="input-field">
          <label htmlFor="Message">Your Message</label>
          <textarea id="Message" placeholder="Message" required></textarea>
        </div>
        <input type="submit" value="Send Message 🚀" />
      </form>
    </section>
  );
};

export default ProjectIdeaSection;
