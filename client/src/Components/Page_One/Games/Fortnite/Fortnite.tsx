import axios from "axios";
import { useEffect, useState } from "react";
import "./Fortnite.css";
import { FortniteMap } from "./FortniteMap";
import { FortniteShop } from "./FotniteShop";

export function Fortnite() {
  return (
    <>
      <FortniteMap />
      <FortniteShop />
    </>
  );
}
