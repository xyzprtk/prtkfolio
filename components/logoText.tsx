import { Pixelify_Sans , Trocchi} from "next/font/google";
import Link from "next/link";

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
      <Link href="/">
        <span className="text-xl font-black tracking-tight text-foreground cursor-pointer hover:underline">
          prtk
        </span>
      </Link>
    </div>
  );
}

export default LogoText;