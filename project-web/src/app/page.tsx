"use client";
import Link from "next/link";
import Container from "react-bootstrap/Container";
import Dropdown from "react-bootstrap/Dropdown";
import home from "@/styles/home.module.css";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <title>Project-WEB</title>
      <Container className="py-4">
        <div className="z-10 font-mono">
          <p className="rounded-lg border border-dark px-2 py-2 w-fit text-center text-dark mb-4 text-xl">
            Project-WEB
          </p>
          {/* LIST */}
          <Dropdown.Menu show className="w-fit text-sm font-mono">
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
          </Dropdown.Menu>
        </div>
      </Container>
    </>
  );
}
