import Head from "next/head";
import Script from "next/script";
import { FC, useState } from "react";

import Loader from "../ui/Loader";

import favIcon from "../../assets/images/taxi.png";
import { useEffect } from "react";

interface ILayout {
  title: string;
  children: any;
}
const APP_KEY = "AIzaSyAJT3q7_kr0408k9ia1bU3vRYryav-kALc";
const libraries: any = [
  "places",
  "geometry",
  "localContext",
  "drawing",
  "visualization",
];
const Layout: FC<ILayout> = ({ children, title }) => {
  const [isLoaded, setIsLoaded] = useState(true);
  // const { isLoaded } = useJsApiLoader({
  //   googleMapsApiKey: APP_KEY,
  //   id: "google-map-script",
  //   libraries: libraries,
  // });
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoaded(false);
    }, 4000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div>
      <Head>
        <title>{title || "Taxi app"}</title>
        <meta name="description" content="Taxi app" />

        <link
          rel="shortcut icon"
          type="image/png"
          sizes="16x16"
          href={favIcon.src}
        />
      </Head>

      <Script
        strategy="beforeInteractive"
        src={`https://maps.googleapis.com/maps/api/js?key=${APP_KEY}&libraries=places`}
      ></Script>

      <div
        style={{ maxWidth: "480px", margin: "0 auto" }}
        className="mx-auto relative overflow-hidden"
      >
        {isLoaded ? <Loader /> : children}
      </div>
    </div>
  );
};

export default Layout;
