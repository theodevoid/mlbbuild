interface MidLaneIconProps {
  width?: string;
  height?: string;
}

const MidLaneIcon: React.FC<MidLaneIconProps> = ({
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
          background: "linear-gradient(90deg, #45F6E3, #C7F7F7)",
          clipPath:
            "polygon(0 100%, 0% 80%, 80% 0%, 100% 0, 100% 20%, 20% 100%)",
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
          clipPath:
            "polygon(100% 100%, 30% 100%, 45% 85%, 85% 85%, 85% 45%, 100% 30%)",
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
          clipPath: "polygon(0 0, 70% 0, 55% 15%, 15% 15%, 15% 55%, 0 70%)",
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
          clipPath: "polygon(20% 20%, 50% 20%, 20% 50%)",
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
          clipPath: "polygon(80% 80%, 50% 80%, 80% 50%)",
        }}
      />
    </div>
  );
};

export default MidLaneIcon;
