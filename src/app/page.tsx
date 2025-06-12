import { PageSection } from "@/components/PageSection";
import { HeroAnimationSvgUrl } from "@/components/svg";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex grow justify-start items-center">
      <PageSection className="flex flex-col lg:flex-row w-full justify-center items-center">
        <div className="w-full lg:w-1/2 flex flex-col gap-8 justify-center items-center py-8">
          <h1 className="text-5xl text-center">
            {"Scout. Publish."}
            <br />
            {"Deal. Repeat."}
          </h1>
          <p className="text-center font-mono text-lg">
            {
              "Connecting street scouters to mother agencies worldwide for new-face models placement within a revolutionary web3 auction marketplace."
            }
          </p>
          <div className="flex flex-wrap gap-6 w-full px-4 justify-center items-center">
            <Button variant="secondary" size="lg" asChild>
              <Link href="/about">{"Become a Scouter"}</Link>
            </Button>
            <Button size="lg">
              <Link href="https://app.motherhunt.com">
                {"Browse all Models"}
              </Link>
            </Button>
          </div>
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
