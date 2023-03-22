interface ExpLaneIconProps {
  width?: string;
  height?: string;
}

const ExpLaneIcon: React.FC<ExpLaneIconProps> = ({
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
          background: "linear-gradient(90deg, #C0A0DC, #E4E8F6)",
          clipPath:
            "polygon(0 0, 100% 0, 80% 20%, 30% 20%, 50% 40%, 70% 40%, 80% 50%, 70% 60%, 50% 60%, 30% 80%, 80% 80%, 100% 100%, 0 100%, 0 80%, 30% 50%, 0 20%)",
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
          background: "linear-gradient(90deg, #C0A0DC, #E4E8F6)",
          clipPath: "polygon(0 30%, 20% 50%, 0 70%)",
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
          clipPath: "polygon(100% 10%, 100% 90%, 90% 80%, 90% 20%)",
        }}
      />
    </div>
  );
};

export default ExpLaneIcon;
