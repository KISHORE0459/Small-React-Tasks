import { Link } from "react-router-dom";

const Backtohome = () => {
  return (
    <div style={{ margin: "20px", width: "300px", height: "100px" }}>
      <Link
        to="/"
        style={{
          width: "150px",
          height: "20px",
          padding: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: "1px solid rgb(188, 188, 188)",
        }}
      >
        Back To Home
      </Link>
    </div>
  );
};

export default Backtohome;
