import dynamic from "next/dynamic";

const Map = dynamic(() => import("./HighCart"), {
  ssr: false
});

export default Map
