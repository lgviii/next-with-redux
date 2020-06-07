import Page from "../components/page";

export default function Home() {
  return (
    <Page>
      <h1
        style={{
          marginTop: "30px",
          lineHeight: "1.15",
          fontSize: "40px",
          textAlign: "center",
        }}
      >
        Welcome to the example project!
      </h1>
      <p
        style={{
          marginTop: "30px",
          lineHeight: "1.15",
          fontSize: "20px",
          textAlign: "center",
        }}
      >
        This is the landing page...
      </p>
    </Page>
  );
}
