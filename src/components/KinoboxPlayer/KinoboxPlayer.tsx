import { useEffect, useRef } from "react";
import { IKinoboxPlayer } from "./KinoboxPlayer.props";



function KinoboxPlayer({ kinopoiskId, imdbId }: IKinoboxPlayer) {
   const containerRef = useRef(null);

   useEffect(() => {
      const script = document.createElement("script");
      script.src = "https://kinobox.tv/kinobox.min.js";
      script.async = true;
      document.body.appendChild(script);

      script.onload = () => {
         if (containerRef.current) {
            (window as any).kbox(containerRef.current, {
               search: {
                  kinopoisk: kinopoiskId,
                  imdb: imdbId
               },
               menu: {
                  enabled: false,
               }
            });
         }
      };

      return () => {
         try {
            document.body.removeChild(script);
         } catch (e) { }
      };
   }, [kinopoiskId, imdbId]);

   return <div ref={containerRef} className="kinobox_player"></div>;
}

export default KinoboxPlayer;