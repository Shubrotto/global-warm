import "./about.scss";

const About = () => {
  return (
    <div className="about_container">
      <h1 className="about_title">About Global Warm</h1>
      <p className="about_desc">
        Global warming is the long-term warming of the planet's overall
        temperature.{" "}
      </p>
      <div className="about_wrapper">
        <div className="info_img">
          <img
            src="https://media.licdn.com/dms/image/D4D12AQHHuJFqBhAdzw/article-cover_image-shrink_720_1280/0/1690745085102?e=2147483647&v=beta&t=BtFDjL7lDtzcCNdA1NX_7rcsCZyro9REEUmz8ddGNT8"
            alt=""
          />
        </div>
        <div className="some_reason_info">
          <h4 className="info_title">The Accelerating Climate Crisis</h4>
          <p className="info_desc">
            The term `global boiling` reflects the intensified climate crisis,
            marked by rapidly rising temperatures, extreme heatwaves, severe
            droughts, and wildfires. It highlights the urgent need for immediate
            and decisive action to combat climate change through sustainable
            living, clean energy, and greenhouse gas reduction. Without swift
            global efforts, the consequences could be catastrophic.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
