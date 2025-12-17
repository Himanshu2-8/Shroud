"use client"

import { Button } from "@/components/ui/button"
import { nanoid } from "nanoid"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react"

const ANIMALS=["Wolf","Falcon","Shark","Hawk"];

export default function Page(){

    const [id,setId]=useState<string>("");
    const [username,setUsername]=useState<string>("");
    const router=useRouter();

    const generateRandomId=()=>{
        const id=nanoid(6);
        const random=Math.floor(Math.random()*ANIMALS.length);
        const animal=ANIMALS[random];
        setId(id);
        setUsername(animal+id);
    }

    useEffect(()=>{
        generateRandomId();
    },[]);

    return <div>
        <h3>{">"}Welcome {username}</h3>
        <Button onClick={()=>router.push(`/room/${id}`)}>Create Secure Room</Button>
    </div>
}