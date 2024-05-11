import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import profesorVideo from "../assets/professorbg.mp4";

export default function Final() {
  const user = useSelector((state) => state.user.user.user.user);
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div className="h-screen">
      {user ? (
        <div className="relative h-full">
          <video
            autoPlay
            loop
            muted
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
          >
            <source src={profesorVideo} type="video/mp4" />
          </video>
          <audio id="audio" autoPlay loop className="hidden">
            <source src={user.selectedSong} type="audio/mp3" />
          </audio>
        </div>
      ) : (
        <h1 className="text-center text-white">Loading...</h1>
      )}

      {isPaused && (
        <button
          className="btn btn-success absolute bottom-2 right-2 z-10"
          onClick={() => {
            setIsPaused(false);
            document.getElementById("audio").play();
            document.querySelector("video").play();
          }}
        >
          Play
        </button>
      )}

      {!isPaused && (
        <button
          className="btn btn-danger absolute bottom-2 right-2 z-10"
          onClick={() => {
            setIsPaused(true);
            document.getElementById("audio").pause();
            document.querySelector("video").pause();
          }}
        >
          Pause
        </button>
      )}
    </div>
  );
}
