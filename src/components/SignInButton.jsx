import { useModal } from "@getpara/react-sdk";

export default function SignInButton() {
  const { openModal } = useModal();

  return (
    <button
      onClick={openModal}
      style={{
        padding: "10px 20px",
        background: "#111",
        color: "white",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer",
      }}
    >
      Sign In with Para
    </button>
  );
}
