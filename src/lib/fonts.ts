import {
  Teko,
  Inconsolata,
  Baskervville,
  Anton,
  Onest,
} from "next/font/google";

const teko = Teko({ subsets: ["latin"] });

const inconsolata = Inconsolata({ subsets: ["latin"] });

const baskervville = Baskervville({ subsets: ["latin"], weight: "400" });

const anton = Anton({ subsets: ["latin"], weight: "400" });

const onest = Onest({ subsets: ["latin"], weight: "400" });

export { teko, inconsolata, baskervville, anton, onest };
