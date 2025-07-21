import React from "react";

const ProjectIdeaSection = () => {
  return (
    // <section className="px-6 grid grid-cols-1 gap-8 md:px-8 md:grid-cols-2 lg:px-16 ">
    <section className="px-6 grid grid-cols-1 gap-8 md:px-8 md:grid-cols-2 lg:px-16 xl:px-64">
      <div className="md:flex md:flex-col md:justify-center">
        <h2 className="text-5xl leading-tight font-bold block md:text-7xl">
          Got a project in <span className="text-accent block">mind?</span>
        </h2>
        <p className="text-lg leading-snug text-svg md:text-[1.2rem]">
          Always open to new ideas and collaborations.
          <br />
          Let's discuss your next big idea.
        </p>
      </div>
      <form className="flex flex-col justify-between gap-6">
        {/* name and email */}
        <div className="flex flex-col gap-2.5">
          <div className="flex flex-col gap-2.5">
            <label className="font-bold text-lg" htmlFor="Name">
              Your name
            </label>
            <input
              className="
              font-bold text-lg text-text py-4 px-6 bg-input-bg border-3 border-transparent rounded-2xl outline-0 w-full
              focus:border-accent
              "
              id="Name"
              type="text"
              placeholder="Name"
              required
            />
          </div>
          <div className="flex flex-col gap-2.5">
            <label className="font-bold text-lg" htmlFor="Email">
              Your email
            </label>
            <input
              className="
              font-bold text-lg text-text py-4 px-6 bg-input-bg border-3 border-transparent rounded-2xl outline-0 w-full
              focus:border-accent
              "
              id="Email"
              type="email"
              placeholder="Email"
              required
            />
          </div>
        </div>
        {/* just for the message alone */}
        <div className="flex flex-col gap-2.5">
          <label className="font-bold text-lg" htmlFor="Message">
            Your Message
          </label>
          <textarea
            className="
            font-bold text-lg text-text py-4 px-6 bg-input-bg border-3 border-transparent rounded-2xl outline-0 w-full
            resize-none h-[15rem]
            focus:border-accent
            "
            id="Message"
            placeholder="Message"
            required
          ></textarea>
        </div>
        <input
          className="text-lg font-semibold py-4 bg-accent rounded-2xl"
          type="submit"
          value="Send Message 🚀"
        />
      </form>
    </section>
  );
};

export default ProjectIdeaSection;
