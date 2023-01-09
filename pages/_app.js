import "../styles/globals.css";
import Navbar from "../components/navbar";
import Footercomponent from "../components/footer";

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* component for all pages */}
      <Navbar />
      <Component {...pageProps} />
      <Footercomponent />
    </>
  );
}
