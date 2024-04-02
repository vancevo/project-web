"use client";
import Link from "next/link";
import Container from "react-bootstrap/Container";
import Dropdown from "react-bootstrap/Dropdown";
import home from "@/styles/home.module.css";

export default function Home() {
  return (
    <Container className="py-4">
      <div className="z-10 font-mono">
        <p className="rounded-lg border border-dark px-2 py-2 w-[200px] text-center">
          Project-WEB
        </p>
        {/* LIST */}
        <Dropdown.Menu show className="w-50">
          <div className="flex flex-col px-4 py-2">
            <Link
              className={`py-1 ${home["dropItem"]}`}
              href={"./introduce-yourself"}
            >
              Introduce yourself
            </Link>
            <Link
              className={`py-1 ${home["dropItem"]}`}
              href={"./my-cover-diary"}
            >
              My Cover Diary
            </Link>
            <Link
              className={`py-1 ${home["dropItem"]}`}
              href={"./restaurant-menu"}
            >
              Restaurant Menu
            </Link>
            <Link
              className={`py-1 ${home["dropItem"]}`}
              href={"./my-album-memory"}
            >
              My Album memory
            </Link>
          </div>
          {/* <Dropdown.Item eventKey="1">
            <Link href={"./introduce-yourself"}>Introduce yourself</Link>
          </Dropdown.Item>
          <Dropdown.Item eventKey="2">
            <Link href={"./my-cover-diary"}>My Cover Diary</Link>
          </Dropdown.Item>
          <Dropdown.Item eventKey="3">
            <Link href={"./restaurant-menu"}>Restaurant Menu</Link>
          </Dropdown.Item>
          <Dropdown.Item eventKey="4">
            <Link href={"./my-album-memory"}>My Album memory</Link>
          </Dropdown.Item> */}
        </Dropdown.Menu>
      </div>
    </Container>
  );
}
