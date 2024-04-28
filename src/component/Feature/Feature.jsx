import "./feature.scss";

const Feature = () => {
  return (
    <div className="feature_container">
      <h1 className="feature_title">Global warming is increase in the Earth</h1>
      <p className="feature_desc">
        This warming is caused by carbon dioxide and other air pollutants that
        absorb sunlight and solar radiation , trapping heat in the atmosphere
        for years or centuries.
      </p>
      <div className="feature_wrapper">
        <h4>Causes of Climate Change</h4>
        <div className="top">
          <div className="top_top">
            <div className="img">
              <img
                src="https://nnr.co.za/wp-content/uploads/2022/10/Cottam-PP-EDFEnergy.jpg"
                alt=""
              />
            </div>
            <h5>Generating power</h5>
            <p>
              Burning fossil fuels for electricity and heat is a major
              contributor to global emissions, primarily carbon dioxide and
              nitrous oxide, which are potent greenhouse gases. Over a quarter
              of global electricity comes from renewable sources like wind and
              solar, which produce minimal emissions compared to fossil fuels.
            </p>
          </div>
          <div className="top_top">
            <div className="img">
              <img
                src="https://sightmachine.com/wp-content/uploads/2019/12/factory.jpg"
                alt=""
              />
            </div>
            <h5>Manufacturing goods</h5>
            <p>
              The manufacturing and industrial sectors emit significant
              greenhouse gases, primarily from burning fossil fuels for energy.
              This includes processes for making cement, steel, electronics,
              plastics, and more. Mining and construction also contribute to
              emissions. Machinery often runs on fossil fuels, and materials
              like plastics are derived from them. Overall, manufacturing is a
              major global emitter of greenhouse gases.
            </p>
          </div>
          <div className="top_top">
            <div className="img">
              <img
                src="https://cdn.zmescience.com/wp-content/uploads/2019/12/deforestation-1559122088Cbl-1024x498.jpg"
                alt=""
              />
            </div>
            <h5>Cutting down forests</h5>
            <p>
              Deforestation, driven by activities like farming and logging,
              releases stored carbon dioxide as trees are cut down.
              Approximately 12 million hectares of forest are lost annually.
              Forests act as carbon sinks, so their destruction reduces nature's
              ability to absorb emissions. Deforestation, along with land use
              changes, contributes to about a quarter of global greenhouse gas
              emissions
            </p>
          </div>
        </div>
        <h4>Effect of Climate Change</h4>
        <div className="top">
          <div className="top_top">
            <div className="img">
              <img
                src="https://c.ndtvimg.com/2023-12/20hffh2_climate-change_650x400_18_December_23.jpg"
                alt=""
              />
            </div>
            <h5>Hotter temperatures</h5>
            <p>
              Nearly all land areas are seeing more hot days and heat waves.
              Higher temperatures increase heat-related illnesses and make
              working outdoors more difficult. Wildfires start more easily and
              spread more rapidly when conditions are hotter. Temperatures in
              the Arctic have warmed at least twice as fast as the global
              average.
            </p>
          </div>
          <div className="top_top">
            <div className="img">
              <img
                src="https://earthjustice.org/wp-content/uploads/harvey_joe-raedle-getty-1200.jpg"
                alt=""
              />
            </div>
            <h5>More severe storms</h5>
            <p>
              Destructive storms have become more intense and more frequent in
              many regions. As temperatures rise, more moisture evaporates,
              which exacerbates extreme rainfall and flooding, causing more
              destructive storms. The frequency and extent of tropical storms is
              also affected by the warming ocean. Cyclones, hurricanes, and
              typhoons feed on warm waters at the ocean surface.
            </p>
          </div>
          <div className="top_top">
            <div className="img">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAU-AGOHR2yzascWlp8K3SQrOtX9Qz5cKpZSYTgzV8Pg&s"
                alt=""
              />
            </div>
            <h5>A warming, rising ocean</h5>
            <p>
              Climate change is changing water availability, making it scarcer
              in more regions. Global warming exacerbates water shortages in
              already water-stressed regions and is leading to an increased risk
              of agricultural droughts affecting crops, and ecological droughts
              increasing the vulnerability of ecosystems. Droughts can also stir
              destructive sand and dust storms that can move billions of tons of
              sand across continents.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
