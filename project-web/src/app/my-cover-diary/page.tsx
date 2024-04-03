"use client";
import { useRouter } from "next/navigation";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";

const MyCoverDiary = () => {
  const router = useRouter();

  const handleButton = () => {
    router.push("./");
  };

  return (
    <>
      <title>MyCoverDiary</title>
      <div>
        <Button variant="danger" onClick={() => handleButton()}>
          Back to Home
        </Button>
        <div className="mt-4">
          <div
            className="sm:w-[450px] md:w-[500px] md:h-[600px]"
            style={{
              border: "2px solid black",
            }}
          >
            <div
              style={{
                padding: "16px",
              }}
            >
              <h1
                style={{
                  fontSize: "30px",
                  color: "#4A88B2",
                }}
              >
                COVER DESIGN
              </h1>
              <br />
              <h2
                style={{
                  fontSize: "20px",
                  color: "gray",
                }}
              >
                FLYER TEMPLATE
              </h2>
              <p
                style={{
                  textAlign: "justify",
                  color: "gray",
                }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived
                not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged. It was popularised
                in the 1960s with the release of Letraset sheets containing
                Lorem Ipsum passages, and more recently with desktop publishing
              </p>
              <br />
              <h3
                style={{
                  color: "#4A88B2",
                }}
              >
                Lorem Ipsum
              </h3>
              <hr></hr>
              <br />
            </div>
            <div
              style={{
                backgroundImage:
                  "url('https://i.pinimg.com/564x/49/8c/bb/498cbb37dace53c78aa238a9b512f354.jpg')",
                height: "220px",
              }}
            ></div>
            <img
              className="sm:left-[350px] md:left-[290px] xl:left-[340px] 2xl:left-[580px]"
              style={{
                position: "absolute",
                top: "100px",
              }}
              src="https://telegra.ph/file/4c01944eeefd8cd43b3aa.png"
              alt="xuantuyen-education"
            />
          </div>
        </div>
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
                {`<div style="border: 2px solid black; width: 40vw; height: 80vh;">
  <div style="padding: 16px;">
    <h1 style="font-size: 30px; color: #4A88B2;">COVER DESIGN</h1>
    <br />
    <h2 style="font-size: 20px; color: gray;">FLYER TEMPLATE</h2>
    <p style="text-align: justify; color: gray;">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged. It was popularised in the 1960s with the release of Letraset
      sheets containing Lorem Ipsum passages, and more recently with desktop
      publishing
    </p>
    <br />
    <h3 style="color: #4A88B2;">Lorem Ipsum</h3>
    <hr />
    <br />
  </div>
  <div style="background-image: url('https://i.pinimg.com/564x/49/8c/bb/498cbb37dace53c78aa238a9b512f354.jpg'); height: 220px;"></div>
  <img src="https://telegra.ph/file/4c01944eeefd8cd43b3aa.png" alt="xuantuyen-education" style="position: absolute; top: 100px; left: 400px;" />
</div>
`}
              </pre>
            </td>
            <td>No CSS</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default MyCoverDiary;
