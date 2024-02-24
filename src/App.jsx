import "./App.css";
import img1 from "../src/img/dior.png";
import "../src/style.css";

function App() {
  return (
    <div>
      <div
        style={{
          margin: "51px",
          border: "solid 1px black",
          maxWidth: "100vw",
          backgroundColor: "pink",
        }}
      >
        <h1
          className="title red"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
            width: "89%",
            margin: "51px",
            height: "19px",
            textDecoration: "underline",
          }}
        >
          Beauty
        </h1>
        <br />
        <br />

        <div
          className="img"
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "87%",
            margin: "64px",
            padding: "0px",
            height: "381px",
            borderRadius: "15px",
          }}
        >
          <img src="img/chanel.png" alt="" />
          <img src={img1} alt="" />
        </div>
        <br />
      </div>
      <br />
      <video
        width="250"
        height="200"
        controls
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          width: "86%",
          margin: "78px",
          height: "557px",
        }}
      >
        <source src="myVideo.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default App;
