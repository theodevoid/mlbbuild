interface GoldLaneIconProps {
  width?: string;
  height?: string;
}

const GoldLaneIcon: React.FC<GoldLaneIconProps> = ({
  height = "100px",
  width = "100px",
}) => {
  return (
    <div
      style={{
        position: "relative",
        width,
        height,
        background: "#13253F",
        display: "inline-block",
        borderRadius: "5px",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "80%",
          height: "80%",
          transform: "translate(12.5%, 12.5%)",
          background: "linear-gradient(#FAEBB1, #E9D99A)",
          clipPath:
            "polygon(100% 10%, 80% 30%, 30% 30%, 100% 70%, 100% 90%, 60% 90%, 60% 100%, 40% 100%, 40% 90%, 0 90%, 20% 70%, 70% 70%, 0 30%, 0 10%, 40% 10%, 40% 0, 60% 0, 60% 10%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "80%",
          height: "80%",
          transform: "translate(12.5%, 12.5%)",
          background: "linear-gradient(90deg, #556C87, #3C4B77)",
          clipPath: "polygon(0 35%, 10% 40.71%, 10% 75%, 0 85%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "80%",
          height: "80%",
          transform: "translate(12.5%, 12.5%)",
          background: "linear-gradient(90deg, #556C87, #3C4B77)",
          clipPath: "polygon(100% 15%, 100% 65%, 90% 59.29%, 90% 25%)",
        }}
      />
    </div>
  );
};

export default GoldLaneIcon;
