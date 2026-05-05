import Loader from "@/components/ui/Loader";

export default function Loading() {
  return (
    <div style={overlay}>
      <Loader />
    </div>
  );
}

const overlay: React.CSSProperties = {
  position: "fixed",
  inset: 0,
  zIndex: 9999,

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  backdropFilter: "blur(12px)",
  WebkitBackdropFilter: "blur(12px)",

  background: "rgba(255, 255, 255, 0.2)",
};
