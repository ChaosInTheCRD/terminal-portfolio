import React, { useContext, useState, useEffect } from "react";
import _ from "lodash";
import { Wrapper } from "../styles/Output.styled";
import { termContext } from "../Terminal";

const NowPlaying: React.FC = () => {
  const [song, setSong] = useState([])

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
  

   return (
    <Wrapper>
      I'm currently listening to {song['name']} by {song['artist']} 🧘‍♀️🏡🎧
    </Wrapper>
   );
};

export default NowPlaying;
