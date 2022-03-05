const element = (
  <div className="totalBg">
    <p className="headingEl">Congratulations</p>
    <div className="innerBg">
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
        className="images"
      />
      <h1 className="kiranname">Kiran V</h1>
      <p className="bhimavaram">
        Vishnu Institute of Computer Education and Technology <br /> Bhimavaram
      </p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
        className="images"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
