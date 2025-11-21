import { Pixelify_Sans } from "next/font/google";

const pixelifySans = Pixelify_Sans({
  subsets: ["latin"],
  weight: ["400"],
});

function LogoText() {
  return (
    <div className={pixelifySans.className}>
      <span className="text-4xl font-black tracking-tight text-foreground">
        prtk
      </span>
    </div>
  );
}

export default LogoText;