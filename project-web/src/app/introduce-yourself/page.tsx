"use client";
import { useRouter } from "next/navigation";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";

const IntroduceYourself = () => {
  const router = useRouter();

  const handleButton = () => {
    router.push("./");
  };

  return (
    <>
      <title>IntroduceYourself</title>
      <div className="font-mono text-sm">
        <Button
          variant="danger"
          className="mb-4"
          onClick={() => handleButton()}
        >
          Back to Home
        </Button>
        <div>
          {/* PROJECT */}
          <img
            src="https://www.irishtimes.com/resizer/0kfyJqddN2aKVhpaXkG1lMFgyAI=/1600x1600/filters:format(jpg):quality(70)/cloudfront-eu-central-1.images.arcpublishing.com/irishtimes/EWBYQYBVC42Z7CEXSKOICLQJDQ.jpg"
            alt="avatar-image"
            style={{
              width: "200px",
            }}
          />
          <h1
            style={{
              fontSize: "30px",
              fontWeight: "bold",
            }}
          >
            Elon Musk
          </h1>
          <h3
            style={{
              color: "#5ebca6",
              fontSize: "20px",
            }}
          >
            Entrepreneur, Engineer, Inventor, and Investor
          </h3>
          <p
            style={{
              textAlign: "justify",
            }}
          >
            <span
              style={{
                color: "#393c41",
                fontWeight: "bold",
              }}
            >
              Aiming to reduce
            </span>
            global warming through sustain- able energy production and
            consumption.
            <span
              style={{
                color: "#393c41",
                fontWeight: "bold",
              }}
            >
              Planning to reduce
            </span>
            the risk of human extinction by making life multi-planetary and
            setting up a human colony on Mars.
          </p>

          <h2
            style={{
              fontSize: "25px",
              fontWeight: "bold",
            }}
          >
            HOBBIES
          </h2>

          <img
            src="https://www.benzinga.com/files/images/story/2023/Elon_Musk_videogames_0.png"
            alt="elon-musk-play-game"
            style={{
              width: "500px",
            }}
          />
          <h4
            style={{
              color: "#Eca46c",
              fontSize: "18px",
              fontWeight: "bold",
            }}
          >
            Elon Musk Play Game
          </h4>

          <img
            src="https://pbs.twimg.com/media/F9FhzN0XAAAbox2.jpg"
            alt="elon-musk-play-music"
            style={{
              width: "500px",
            }}
          />
          <h4
            style={{
              color: "#Eca46c",
              fontSize: "18px",
              fontWeight: "bold",
            }}
          >
            Elon Musk Play Music
          </h4>

          <img
            src="https://image.cnbcfm.com/api/v1/image/104504783-GettyImages-494548555.jpg
          ?v=1533926309&w=1920&h=1080"
            alt="elon-musk-spacex"
            style={{
              width: "500px",
            }}
          />
          <h4
            style={{
              color: "#Eca46c",
              fontSize: "18px",
              fontWeight: "bold",
            }}
          >
            Elon Musk With SpaceX
          </h4>
        </div>

        <Table striped bordered hover size="sm" className="mt-4">
          <thead>
            <tr>
              <th>HTML</th>
              <th>CSS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <pre>
                  {`<img
  src="https://www.irishtimes.com/resizer/0kfyJqddN2aKVhpaXkG1lMFgyAI
  =/1600x1600/filters:format(jpg):quality(70)/cloudfront-eu-central-1.images.arcpublishing.com
  /irishtimes/EWBYQYBVC42Z7CEXSKOICLQJDQ.jpg"
  alt="avatar-image"
  style="width: 200px;"
/>
<h1 style="font-size: 30px; font-weight: bold;">
  Elon Musk
</h1>
<h3 style="color: #5ebca6; font-size: 20px;">
  Entrepreneur, Engineer, Inventor, and Investor
</h3>
<p style="text-align: justify;">
  <span style="color: #393c41; font-weight: bold;">
    Aiming to reduce
  </span>
  global warming through sustainable energy production and
  consumption.
  <span style="color: #393c41; font-weight: bold;">
    Planning to reduce
  </span>
  the risk of human extinction by making life multi-planetary and
  setting up a human colony on Mars.
</p>

<h2 style="font-size: 25px; font-weight: bold;">
  HOBBIES
</h2>

<img
  src="https://www.benzinga.com/files/images/story/2023/Elon_Musk_videogames_0.png"
  alt="elon-musk-play-game"
  style="width: 500px;"
/>
<h4 style="color: #Eca46c; font-size: 18px; font-weight: bold;">
  Elon Musk Play Game
</h4>

<img
  src="https://pbs.twimg.com/media/F9FhzN0XAAAbox2.jpg"
  alt="elon-musk-play-music"
  style="width: 500px;"
/>
<h4 style="color: #Eca46c; font-size: 18px; font-weight: bold;">
  Elon Musk Play Music
</h4>

<img
  src="https://image.cnbcfm.com/api/v1/image/104504783-GettyImages-494548555.jpg
  ?v=1533926309&w=1920&h=1080"
  alt="elon-musk-spacex"
  style="width: 500px;"
/>
<h4 style="color: #Eca46c; font-size: 18px; font-weight: bold;">
  Elon Musk With SpaceX
</h4>`}
                </pre>
              </td>
              <td>No CSS</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default IntroduceYourself;
