"use client"
import { nanoid } from "nanoid"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import { Button } from "../ui/button"

const ANIMALS = ["Wolf", "Falcon", "Shark", "Hawk"];

const RandomId = () => {

  const [id, setId] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    const generateRandomId = () => {
      const id = nanoid(6);
      const random = Math.floor(Math.random() * ANIMALS.length);
      const animal = ANIMALS[random];
      setId(id);
      setUsername(animal + id);
    };
    generateRandomId();
  }, [])
  return (
    <div>
      <h3>
        {">"}Welcome {username}
      </h3>
      <Button onClick={() => router.push(`/room/${id}`)}>
        Create Secure Room
      </Button>
    </div>
  );
}

export default RandomId;