import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import DesktopHeader from "./DesktopHeader";
import MobileHeaeder from "./MobileHeader";

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
}

export default function Header() {
  const navigate = useNavigate();

  const width = useWindowWidth();

  const mobileCutOff = 630;

  if (width > mobileCutOff) {
    return <DesktopHeader />;
  } else {
    return <MobileHeaeder />;
  }
}
