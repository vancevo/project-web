"use client";

import { useRouter } from "next/navigation";
import { Button, Table } from "react-bootstrap";

const RestaurantMenu = () => {
  const router = useRouter();

  const handleButton = () => {
    router.push("./");
  };

  return (
    <>
      <title>RestaurantMenu</title>
      <div>
        <Button variant="danger" onClick={() => handleButton()}>
          Back to Home
        </Button>
        <div className="mt-4"></div>

        <div>
          <h1
            style={{
              color: "#FB9E41",
              paddingLeft: "40px",
            }}
          >
            RESTAURANT
          </h1>
          <h1
            style={{
              color: "#F57C03",
              fontSize: "100px",
            }}
          >
            MENU
          </h1>
          {/* MENU 1 */}
          <h2
            style={{
              backgroundColor: "#CA6814",
              textAlign: "right",
              color: "#F7AE6F",
              fontSize: "40px",
              borderTop: "1px solid black",
              borderBottom: "1px solid black",
            }}
          >
            APPETIZERS
          </h2>
          <br />
          <ul
            style={{
              fontSize: "20px",
              listStyle: "circle",
            }}
          >
            <li>
              <p
                style={{
                  fontSize: "25px",
                }}
              >
                FOOD NAME -{" "}
                <span
                  style={{
                    color: "gray",
                  }}
                >
                  $20.00
                </span>
              </p>
              <p
                style={{
                  fontSize: "15px",
                  width: "50vw",
                  textAlign: "justify",
                  color: "gray",
                }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries
              </p>
            </li>
            <br />
            <li>
              <p
                style={{
                  fontSize: "25px",
                }}
              >
                FOOD NAME -{" "}
                <span
                  style={{
                    color: "gray",
                  }}
                >
                  $20.00
                </span>
              </p>
              <p
                style={{
                  fontSize: "15px",
                  width: "50vw",
                  textAlign: "justify",
                  color: "gray",
                }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries
              </p>
            </li>
          </ul>
          <br></br>
          {/* MENU 2 */}
          <h2
            style={{
              backgroundColor: "#CA6814",
              textAlign: "right",
              color: "#F7AE6F",
              fontSize: "40px",
              borderTop: "1px solid black",
              borderBottom: "1px solid black",
            }}
          >
            DRINKS
          </h2>
          <br />
          <ol
            style={{
              textAlign: "left",
              fontSize: "20px",
              listStyle: "upper-roman",
            }}
          >
            <li>
              <p
                style={{
                  fontSize: "25px",
                }}
              >
                DRINK NAME -
                <span
                  style={{
                    color: "gray",
                  }}
                >
                  $11.00
                </span>
              </p>
              <p
                style={{
                  fontSize: "15px",
                  width: "50vw",
                  textAlign: "justify",
                  color: "gray",
                }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries
              </p>
            </li>
            <br />
            <li>
              <p
                style={{
                  fontSize: "25px",
                }}
              >
                DRINK NAME -{" "}
                <span
                  style={{
                    color: "gray",
                  }}
                >
                  $11.00
                </span>
              </p>
              <p
                style={{
                  fontSize: "15px",
                  width: "50vw",
                  textAlign: "justify",
                  color: "gray",
                }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries
              </p>
            </li>
          </ol>
          <br />
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
                  {`
                  <h1 style="color: #FB9E41; padding-left: 40px;">RESTAURANT</h1>
                  <h1 style="color: #F57C03; font-size: 100px;">MENU</h1>
                  <!--MENU1 -->
                  <h2 style="background-color: #CA6814; text-align: right; color: #F7AE6F; font-size: 40px; border-top: 1px solid black; border-bottom: 1px solid black;">
                    APPETIZERS
                  </h2>
                  <br />
                  <ul style="font-size: 20px; list-style: circle;">
                    <li>
                      <p style="font-size: 25px;">FOOD NAME - <span style="color: gray;">$20.00</span></p>
                      <p style="font-size: 15px; width: 50vw; text-align: justify; color: gray;">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the
                        1500s, when an unknown printer took a galley of type and scrambled it to
                        make a type specimen book. It has survived not only five centuries...
                      </p>
                    </li>
                    <br />
                    <li>
                      <p style="font-size: 25px;">FOOD NAME - <span style="color: gray;">$20.00</span></p>
                      <p style="font-size: 15px; width: 50vw; text-align: justify; color: gray;">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the
                        1500s, when an unknown printer took a galley of type and scrambled it to
                        make a type specimen book. It has survived not only five centuries...
                      </p>
                    </li>
                  </ul>
                  <br /><br />
                  <!--MENU2 -->
                  <h2 style="background-color: #CA6814; text-align: right; color: #F7AE6F; font-size: 40px; border-top: 1px solid black; border-bottom: 1px solid black;">
                    DRINKS
                  </h2>
                  <br />
                  <ol style="text-align: left; font-size: 20px; list-style: upper-roman;">
                    <li>
                      <p style="font-size: 25px;">DRINK NAME - <span style="color: gray;">$11.00</span></p>
                      <p style="font-size: 15px; width: 50vw; text-align: justify; color: gray;">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the
                        1500s, when an unknown printer took a galley of type and scrambled it to
                        make a type specimen book. It has survived not only five centuries...
                      </p>
                    </li>
                    <br />
                    <li>
                      <p style="font-size: 25px;">DRINK NAME - <span style="color: gray;">$11.00</span></p>
                      <p style="font-size: 15px; width: 50vw; text-align: justify; color: gray;">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the
                        1500s, when an unknown printer took a galley of type and scrambled it to
                        make a type specimen book. It has survived not only five centuries...
                      </p>
                    </li>
                  </ol>
                  <br />                  
`}
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

export default RestaurantMenu;
