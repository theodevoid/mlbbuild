interface JunglerIconProps {
  width?: string;
  height?: string;
}

const JunglerIcon: React.FC<JunglerIconProps> = ({
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
          clipPath: "polygon(20% 20%, 75% 20%, 20% 75%)",
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
          background: "linear-gradient(90deg, #45F6E3, #C7F7F7)",
          clipPath: "polygon(80% 80%, 25% 80%, 80% 25%)",
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
          clipPath: "polygon(0% 100%, 0 70%, 30% 100%)",
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
          clipPath: "polygon(100% 0, 100% 30%, 70% 0)",
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
            "polygon(0 0, 60% 0, 72.5% 12.5%, 12.5% 12.5%, 12.5% 72.5%, 0 60%)",
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
            "polygon(100% 100%, 100% 40%, 87.5% 27.5%, 87.5% 87.5%, 27.5% 87.5%, 40% 100%)",
        }}
      />
    </div>
  );
};

export default JunglerIcon;
