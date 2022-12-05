export default function BodyFP() {
  return (
    <div>
      <div id="EngeVideo">
        <video controls autoPlay>
          <source
            src="Afbeeldingen\EftelingHalloweenVideo.mp4"
            type="video/mp4"
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
          <img src="\Afbeeldingen\FrontPageSpookhuis.png" alt="Spookhuis"></img>
        </div>

        <div className="infoblok">
          <h2>Speciaal Halloween snoep voor kinderen!</h2>
          <img src="Afbeeldingen\FrontPageSnoep.png" alt="Snoep"></img>
        </div>
      </article>
    </div>
  );
}
