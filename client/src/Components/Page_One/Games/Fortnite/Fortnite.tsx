import axios from "axios";
import { useEffect, useState } from "react";
import "./Fortnite.css";
import { FortniteMap } from "./FortniteMap";
import { FortniteNews } from "./FotniteNews";

export function Fortnite() {
  return (
    <>
      <FortniteMap />
      <FortniteNews />
    </>
  );
}
