import { PageSection } from "@/components/PageSection";
import { HeroAnimationSvgUrl } from "@/components/svg";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex grow justify-start items-center">
      <PageSection className="flex flex-col lg:flex-row w-full">
        <div className="w-full lg:w-1/2 flex flex-col gap-8 justify-center items-center py-8">
          <p className="text-5xl font-bold text-center">
            {"Scout. Publish. Deal. Repeat."}
          </p>
          <p className="text-center font-mono text-lg">
            {
              "Connecting street scouters to mother agencies worldwide for new-face models placement within a revolutionary web3 auction marketplace."
            }
          </p>
        </div>
        <div className="relative w-full lg:w-1/2 h-full">
          <Image
            src={HeroAnimationSvgUrl}
            alt="hero-animation"
            width="0"
            height="0"
            sizes="100vh"
            className="h-full w-auto"
            priority
          />
        </div>
      </PageSection>
    </div>
  );
}
