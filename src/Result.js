import "./result.css";

function Result() {
  return (
    <div>
      <header className="result-header">
        <div className="first-box">
          <h3>Your Result</h3>
          <div className="circle">
            <div>
              <p className="num">76</p>
              <p className="num-of">of 100</p>
            </div>
          </div>
          <p className="great">Great</p>
          <p className="text-result">
            Your performance exceed 65% of the people conducting the <br /> test
            here!
          </p>
        </div>
      </header>
    </div>
  );
}

export default Result;
