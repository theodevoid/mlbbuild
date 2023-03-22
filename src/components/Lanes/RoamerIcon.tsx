interface RoamerIconProps {
  width?: string;
  height?: string;
}

const RoamerIcon: React.FC<RoamerIconProps> = ({
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
            "polygon(0 100%, 100% 100%, 100% 20%, 60% 70%, 80% 70%, 80% 80%, 40% 80%, 100% 0, 60% 0, 0 0, 0 80%, 40% 30%, 20% 30%, 20% 20%, 60% 20%)",
        }}
      />
    </div>
  );
};

export default RoamerIcon;
