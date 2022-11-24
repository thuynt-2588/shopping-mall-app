import MainLayout from "../../layouts/MainLayout";

function HomePage() {
  return (
    <MainLayout>
      <div className="home__video">
        <video className="video" autoPlay muted loop width="100%" height="100%">
          <source
            src={require("../../../assets/videos/video-evo.mp4")}
            type="video/mp4"
          />
        </video>
      </div>
      <div className="feature"></div>
    </MainLayout>
  );
}

export default HomePage;
