import React, { useContext, useState, useEffect, useMemo, useCallback, useRef } from "react";
import _ from "lodash";
import { Wrapper } from "../styles/Output.styled";
import { termContext } from "../Terminal";



let outputStr = ""
const Music: React.FC = () => {
  const [song, setSong] = useState(false)
  const { arg, history, rerender } = useContext(termContext);

  const fetchUserData = () => {
    fetch("https://server-c43490057edbe1b0e7e025f228997f3a-af5y7nyk6a-uc.a.run.app/status")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setSong(data)
      })
  }

  useEffect(() => {
    fetchUserData()
  }, [])

  const s = (song as any).name
  const a = (song as any).artist
  const l = (song as any).previewURL

  if (song.name === undefined) {
    <Wrapper>
    </Wrapper>
  }

  if (song.name != null && song.name != "") {
     outputStr = "I'm currently listening to " + s + " by " + a + " 🧘‍♀️🏡🎧";
  } else if (song.name == "") {
     outputStr = "I'm not currently listening to anything 😴";
  }

  const audio = new Audio(l);
  audio.loop = true;

   return (
    <div>
      <Wrapper>
      {outputStr}
      </Wrapper>
      <div>
        <button
          onClick={() => {
            audio.loop = true;
            audio.play();
          }}
        >
          Play
        </button>
        <button onClick={() => {
        audio.loop = false;
        audio.pause();
        }}>Pause</button>
      </div>
    </div>
   );
};

export default Music;

function handleEnded() {
    setActiveSong(false);
}



