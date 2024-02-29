function App() {
  return (
    <div>
      <Tweet
        name="sponge bob"
        username="spongibobi"
        date={new Date().toDateString()}
        message="who lives in a pineapple under the sea?"
      />
      <Tweet
        name="Elon musk"
        username="richguy"
        date={new Date().toDateString()}
        message="free money for everyone"
      />
      <Tweet
        name="bob"
        username="bobIsTheMan"
        date={new Date().toDateString()}
        message="Im the man"
      />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
