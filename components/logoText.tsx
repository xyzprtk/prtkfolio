import { Pixelify_Sans , Trocchi} from "next/font/google";

const pixelifySans = Pixelify_Sans({
  subsets: ["latin"],
  weight: ["400"],
});

const trocchi = Trocchi({
  subsets: ["latin"],
  weight: ["400"],
});

function LogoText() {
  return (
    <div className={trocchi.className}>
      <span className="text-xl font-black tracking-tight text-foreground">
        prtk
      </span>
    </div>
  );
}

export default LogoText;