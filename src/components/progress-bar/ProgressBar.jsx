import styled from "styled-components";
const ProgressBar = () => {
  const progressBar = document.getElementsByClassName("progress-bar")[0];
  setInterval(() => {
    const computedStyle = getComputedStyle(progressBar);
    const width = parseFloat(computedStyle.getPropertyValue("--width" || 0));
    progressBar.style.setProperty("--width", width + 0.1);
  }, 0.05);
  return (
    <Bar>
      <div
        className="progress-bar"
        data-label="Loading.."
        style={{ "--width": "0" }}
      ></div>
    </Bar>
  );
};

const Bar = styled.div`
  .progress-bar {
    width: 500px;
    height: 3em;
    background-color: #111;
    border-radius: 1em;
    color: white;
    position: relative;
  }

  .progress-bar::before {
    content: attr(data-label);
    display: flex;
    align-items: center;
    position: absolute;
    left: 0.5em;
    top: 0.5em;
    bottom: 0.5em;
    width: calc(var(--width, 0) * 1%);
    min-width: 2rem;
    max-width: calc(100% - 1em);
    background-color: #069;
    border-radius: 1em;
    padding: 1em;
  }
`;
export default ProgressBar;
