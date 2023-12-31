import React from "react";

export default function ThirdwebGuideFooter() {
  const url = "https://thirdweb.com/ethereum/0xF2aECeE06841F0Cc984aB8d7dE5B1e9106890FDC/nfts";
  return (
    <>
      <div
        style={{
          position: "fixed",
          bottom: -120,
          right: -80,
          height: 300,
          width: 150,
          border: "1px solid #eaeaea",
          transform: "rotate(45deg)",
          backgroundColor: " #262935",
          cursor: "pointer",
        }}
        role="button"
        onClick={() => window.open(url, "_blank")}
      />

      <div
        style={{
          position: "fixed", 
          bottom: 14,
          right: 18,
        }}
      >
        <img
          src={"favicon.ico"}
          width={40}
          height={40}
          role="button"
          style={{ cursor: "pointer" }}
          onClick={() => window.open(url, "_blank")}
        />
      </div>
    </>
  );
}
