"use client";
import React, { SyntheticEvent, useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Link from "next/link";
import { useToast } from "../ui/use-toast";

interface ChangeEvent<T = Element> extends SyntheticEvent<T> {
  target: EventTarget & T;
}
const Header = () => {
  const [search, setSearch] = useState("");
  const { toast } = useToast();

  const handleParams = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className=" w-full text-center">Pokemons</h1>
      <div className="flex max-w-xl w-full">
        <Input
          type="text"
          placeholder="Search Name"
          onChange={(e) => handleParams(e)}
        />
        <Link
          onClick={() => {
            toast({
              variant: "success",
              title: `Pokemon ${search}`,
              description: "Pokemon not found",
            });
          }}
          href={`${search}`}
        >
          <Button>Search</Button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
