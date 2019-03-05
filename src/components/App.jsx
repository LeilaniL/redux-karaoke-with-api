import React from "react";
import SongDisplay from "./SongDisplay";
import SongList from "./SongList";
import Header from "./Header";

const styles = {
  fontFamily: "Helvetica, sans-serif",
  color: "navy",
  backgroundColor: "#1fcecb",
  padding: "20px"
};
function App() {
  return (
    <div style={styles}>
      <Header />
      <br />
      <SongList />
      <hr />
      <SongDisplay />
    </div>
  );
}

export default App;
