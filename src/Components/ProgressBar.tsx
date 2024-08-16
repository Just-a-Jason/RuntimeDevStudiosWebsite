interface ProgressBarProps {
  progress: number;
}

const ProgressBar = ({ progress }: ProgressBarProps) => {
  return (
    <div className="ProgressBar">
      <div className="bar">
        <div className="fill" style={{ width: `${progress}%` }}></div>
        <div className="separator"></div>
        <div className="separator"></div>
        <div className="separator"></div>
        <div className="separator"></div>
        <div className="separator"></div>
        <div className="separator"></div>
        <div className="separator"></div>
        <div className="separator"></div>
        <div className="separator"></div>
        <div className="separator"></div>
        <div className="separator"></div>
        <div className="separator"></div>
        <div className="separator"></div>
        <div className="separator"></div>
        <div className="separator"></div>
        <div className="separator"></div>
        <div className="separator"></div>
        <div className="separator"></div>
        <div className="separator"></div>
        <p>{progress}%</p>
      </div>
    </div>
  );
};

export default ProgressBar;
