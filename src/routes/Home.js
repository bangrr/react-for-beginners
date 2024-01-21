import Button from "../components/Button";

function Home() {
  return (
    <div>
      <Button text={"To Do List"} url={"/todo"} />
      <Button text={"Coin Tracker"} url={"/coin"} />
      <Button text={"Movie Info"} url={"/movie"} />
    </div>
  );
}

export default Home;
