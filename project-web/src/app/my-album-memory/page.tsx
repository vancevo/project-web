"use client";

import { useRouter } from "next/navigation";
import { Button } from "react-bootstrap";

const MyAlbum = () => {
  const router = useRouter();

  const handleButton = () => {
    router.push("./");
  };

  return (
    <>
      <title>MyAlbum</title>
      <div>
        <Button variant="danger" onClick={() => handleButton()}>
          Back to Home
        </Button>
        <div>
          <p>MyAlbum</p>
        </div>
      </div>
    </>
  );
};

export default MyAlbum;
