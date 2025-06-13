import { Marquee } from "@/components/Marquee";
import { PageSection } from "@/components/PageSection";
import { Quote } from "@/components/Quote/Quote";
import HeroAnimationSvgUrl from "@/components/svg/HeroAnimation.svg?url";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getContentfulEntriesByType } from "@/config/contentful/client";
import { DisplayAgencyContentfulSkeleton } from "@/lib/types/contentful";
import Image from "next/image";
import Link from "next/link";

interface DisplayAgencyData {
  name: string;
  url: string;
  logoUrl: string;
}

export default async function Home() {
  let agencies: DisplayAgencyData[];

  try {
    const data =
      await getContentfulEntriesByType<DisplayAgencyContentfulSkeleton>(
        "displayAgency"
      );

    agencies = data
      .map((each) => ({
        ...each.fields,
        name: each.fields.name,
        url: each.fields.url,
        logoUrl: each.fields.logo?.fields.file?.url || "",
      }))
      .reverse();
  } catch {
    throw new Error("Unable to get data from CMS");
  }

  return (
    <div className="flex flex-col gap-12 grow justify-start items-center pb-12">
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
      <PageSection className="flex flex-col grow justify-start items-center">
        <Card className="w-full max-w-lg pt-0">
          <CardTitle className="bg-linear-to-tr from-accent-foreground to-accent-foreground/50 border-b-2 py-2">
            <CardHeader className="text-4xl font-bold text-center text-foreground/95">
              {"🛸 Our Mission ✨"}
            </CardHeader>
          </CardTitle>
          <CardContent>
            <ul className="flex flex-col justify-center items-centerw-full px-2 gap-4">
              <li>
                <Quote className="text-xl font-medium py-1 mb-1">
                  {"From ghetto to the spotlight"}
                </Quote>
                <p className="font-mono text-md px-2">
                  {
                    "We help creating life-changing opportunities for good looking individuals."
                  }
                </p>
              </li>
              <li>
                <Quote className="text-xl font-medium py-1 mb-1">
                  {"Effortless passive income for anyone"}
                </Quote>
                <p className="font-mono text-md px-2">
                  {
                    "Read through our simple scouting guide and start earning with minimum time investment - just keep an eye out, wherever you go."
                  }
                </p>
              </li>
              <li>
                <Quote className="text-xl font-medium py-1 mb-1">
                  {"Agencies go Global"}
                </Quote>
                <p className="font-mono text-md px-2">
                  {
                    "Agencies can now collaborate with scouters from anywhere and find those hidden gems in places they could never reach before."
                  }
                </p>
              </li>
            </ul>
          </CardContent>
        </Card>
      </PageSection>
      <PageSection fullWidth>
        <h2 className="text-3xl font-medium font-mono px-4 mb-1 text-foreground/90">
          {"Partnered with:"}
        </h2>
        <Marquee>
          <div className="bg-primary bg-[linear-gradient(to_right,#FF00F9,transparent_1px),linear-gradient(to_bottom,#FF00F9,transparent_1px)] bg-[size:70px_70px] py-2">
            <div className="flex flex-col justify-start items-center border-background border-y-12 border-dashed py-2">
              <div className="flex gap-12 pl-12">
                {agencies.map((agency) => (
                  <Button
                    asChild
                    variant="ghost"
                    size="reset"
                    key={agency.name}
                    className="h-48 w-64 relative shrink-0"
                  >
                    <Link
                      href={agency.url}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <Image
                        key={agency.name}
                        alt={`logo image for ${agency.name} agency`}
                        className="h-full w-full object-contain"
                        src={`https:${agency.logoUrl}`}
                        width={0}
                        height={0}
                        sizes="100vw"
                        priority
                      />
                    </Link>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </Marquee>
        <p className="flex justify-center items-center text-2xl font-mono mt-2 flex-wrap gap-x-4">
          <span className="font-semibold text-foreground/90">
            {"Are you a Mother Agent?"}
          </span>
          <span>
            <Button variant="secondary" className="text-xl font-mono" asChild>
              <Link href="/apply">{"Apply here"}</Link>
            </Button>
            <span className="ml-4 font-semibold text-foreground/90">
              {"to join!"}
            </span>
          </span>
        </p>
      </PageSection>
    </div>
  );
}
