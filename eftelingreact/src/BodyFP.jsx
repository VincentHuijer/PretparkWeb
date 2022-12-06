export default function BodyFP() {
  return (
    <div>
      <div id="EngeVideo">
        <video controls autoPlay>
          <source
            src={require("./EftelingHalloweenVideo.mp4")}
            type="video/mp4"
            alt="halloweenvideo"
          ></source>
        </video>
      </div>

      <article>
        <div className="bestelText">
          <h1 style={{ color: "red" }}>
            {" "}
            BESTEL NU TICKETS VOOR HET HALLOWEEN EVENEMENT!
          </h1>
        </div>

        <div className="infoblok">
          <h2>Beleef enge avonturen in het spookhuis!</h2>
          {/* <img src="Afbeeldingen\FrontPageSpookhuis.png" alt="Spookhuis"></img> */}
          <img src={require("./FrontPageSpookhuis.png")} alt="spookhuis"></img>
        </div>

        <div className="infoblok">
          <h2>Speciaal Halloween snoep voor kinderen!</h2>
          <img src={require("./FrontPageSnoep.png")} alt="Snoep"></img>
        </div>
      </article>
    </div>
  );
}
