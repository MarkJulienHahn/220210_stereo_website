import React, { useState } from "react";
import styles from "../styles/WaterfallGialloRoman.module.css";
import { Slider } from "@material-ui/core";

const WaterfallGialloRoman = () => {
  const [wdth, setWdth] = useState(Math.random() * 800);

  const changeWdth = (e, val) => {
    setWdth(val);
  };

  const fontWeightStyle = {
    fontVariationSettings: `'wght' ${wdth}, 'wdth' 50`,
  };

  const marks = [
    {
      value: 100,
      label: "Light",
    },
    {
      value: 200,
      label: "Regular",
    },
    {
      value: 300,
      label: "Book",
    },
    {
      value: 400,
      label: "Medium",
    },
    {
      value: 500,
      label: "Bold",
    },
    {
      value: 600,
      label: "Extrabold",
    },
    {
      value: 700,
      label: "Black",
    },
  ];

  return (
    <div style={fontWeightStyle} className={`${styles.waterfallWrapper}`}>
      <div className={styles.controls}>
        <Slider
          className={styles.slider}
          min={100}
          max={700}
          step={0.1}
          defaultValue={wdth}
          onChange={changeWdth}
          marks={marks}
        />
      </div>
      <div className={styles.waterfallRow}>
        <div className={`${styles.waterfallSingle} ${styles.xxl}`}>
          “H2Odio” —2006
        </div>
      </div>
      <div className={styles.waterfallRow}>
        <div className={`${styles.waterfallElement} ${styles.xl}`}>
          Il caso »Venere privata« (1970)
        </div>
        <div className={`${styles.waterfallElement} ${styles.l}`}>
          Il thrilling assunse una connotazione sempre più violenta ed erotica,
          specializzandosi soprattutto nella descrizione della figura
          dell’assassino
        </div>
      </div>
      <div className={styles.waterfallRow}>
        <div className={`${styles.waterfallSingle} ${styles.xxl}`}>
        L’uomo dagli occhi di ghiaccio
        </div>
      </div>
      <div className={styles.waterfallRow}>
        <div className={`${styles.waterfallSingle} ${styles.m}`}>
          Oltre a imitarne il modello nei contenuti, questi nuovi thrilling si
          rifecero anche nei titoli ai primi film di Dario Argento, portacolori
          del genere anche all’estero, ha prodotto numerosi film di qualità e
          facendo affermare definitivamente il genere. Nacquerò così sulla scia
          de L’uccello dalle piume di cristallo, pellicole come La tarantola dal
          ventre nero, La coda dello scorpione, Una farfalla con le ali
          insanguinate, L’iguana dalla lingua di fuoco, La sanguisuga conduce la
          danza, L’uomo più velenoso del cobra, Il gatto dagli occhi di giada,
          Gatti rossi in un labirinto di vetro, La volpe dalla coda di velluto,
          Il sorriso della iena, Nella stretta morsa del ragno ovvero una ricca
          serie di film a titolazione zoonomica.
        </div>
      </div>
      <div className={styles.waterfallRow}>
        <div className={`${styles.waterfallElement} ${styles.s}`}>
          Ma nacquero anche dei film d’autore che quasi raggiungono il modello
          argentiano come Giornata nera per l’ariete di Luigi Bazzoni, Il
          profumo della signora in nero di Francesco Barilli, Cosa avete fatto a
          Solange? di Massimo Dallamano, E tanta paura di Paolo Cavara, La corta
          notte delle bambole di vetro e Chi l’ha vista morire? di Aldo Lado, La
          donna della domenica di Luigi Comencini, Gran bollito di Mauro
          Bolognini e Il mostro di Luigi Zampa. Nei primi anni 70 si ha un vero
          e proprio boom del thrilling, tant’è che solo tra il 1971 e il 1972
          vennero girati e distribuiti nelle sale oltre trenta film appartenenti
          al filone, diretti dai maggiori registi italiani del cinema di genere;
          tra questi sono da menzionare Mio caro assassino di Tonino Valerii, un
          giallo avvincente e a lungo trascurato[5], e L’etrusco uccide ancora
          di Armando Crispino, uno dei primi esempi di contaminazione tra giallo
          e horror, considerato il capostipite del "filone archelogico" di
          questo genere cinematografico.
        </div>
        <div className={styles.waterfallElement}>
          <div className={`${styles.waterfallElement} ${styles.xs}`}>
            Nel 1975 Dario Argento realizza Profondo rosso (film che
            inizialmente avrebbe dovuto avere anch'esso un titolo dal richiamo
            faunistico, ovvero La tigre dai denti a sciabola) che ottiene un
            grande successo, anche a livello internazionale, ed è considerato da
            molti critici e dagli stessi fan come uno dei titoli più riusciti
            nella storia del giallo all'italiana; Profondo rosso è sicuramente,
            tra tutte le opere thrilling, quella più famosa e celebrata, ancora
            oggi trasmessa spesso e con successo in televisione. Sette note in
            nero di Lucio Fulci (1977): il particolare degli occhi, cifra
            stilistica tipica del regista. Lucio Fulci, futuro maestro del gore
            italiano, girerà contributi di indubbio valore come l'hitchockiano
            Una sull'altra, il violento Una lucertola con la pelle di donna, il
            rurale Non si sevizia un paperino e l'onirico Sette note in nero. Il
            regista emiliano Pupi Avati dirigerà nel 1976 uno dei più famosi
            gialli horror italiani, La casa dalle finestre che ridono.
            Ironicamente l'anno successivo è la volta del parodistico Tutti
            defunti... tranne i morti che oltre agli stessi regista e
            sceneggiatori, presenta molti attori della precedente pellicola.
            Altri film sono anche precursori dello slasher (in particolare della
            saga hollywoodiana di Venerdì 13[3]), come Reazione a catena di
            Mario Bava o I corpi presentano tracce di violenza carnale di Sergio
            Martino.
          </div>
          <div className={`${styles.waterfallElement} ${styles.xs}`}>
            Con l'arrivo degli anni 80 e la nascita negli Stati Uniti d'America
            di un nuovo modo di fare cinema thriller e horror, il giallo
            all'italiana ha quasi terminato di esistere. Renée Simonsen in Sotto
            il vestito niente di Carlo Vanzina (1985), tra le ultime opere
            afferenti al filone originale. Poche sono state le pellicole che
            sono rimaste devote ai primi film del genere, tra queste ci sono
            Tenebre, Phenomena e Opera di Dario Argento, Macabro, La casa con la
            scala nel buio, Morirai a mezzanotte e Le foto di Gioia di Lamberto
            Bava (figlio di Mario), Caramelle da uno sconosciuto di Franco
            Ferrini, L'assassino è ancora tra noi di Camillo Teti, Il mostro di
            Firenze di Cesare Ferrario e Tramonti fiorentini di Gianni Siragusa
            e Paolo Frajoli (questi ultimi tre titoli ispirati al caso del
            Mostro di Firenze), Lo squartatore di New York e Murderock - Uccide
            a passo di danza di Lucio Fulci, Mystère e Sotto il vestito niente
            di Carlo Vanzina (quest'ultimo ebbe anche un seguito apocrifo
            diretto da Dario Piana).
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaterfallGialloRoman;
