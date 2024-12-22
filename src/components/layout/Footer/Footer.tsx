import { SocialMediaIcons } from "@/components/SocialMediaIcons";
import { getCurrentYear } from "@/util";

export default function Footer() {
  return (
    <footer className="dark:bg-soft-black">
      <SocialMediaIcons />
      <p className="py-2 text-center text-xs font-normal tracking-wide text-soft-black dark:text-white ">
        {`\u{00A9} 1993-${getCurrentYear()} \u{2022} Tyler Earls`}
      </p>
    </footer>
  );
}
