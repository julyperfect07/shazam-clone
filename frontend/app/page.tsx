import RecognitionHero from "@/components/recognition/recognition-hero";
import RecognitionPanel from "@/components/recognition/recognition-panel";
import SiteHeader from "@/components/site-header";

export default function Home() {
  return (
    <main className="min-h-screen bg-background px-6 py-8 text-foreground">
      <div className="mx-auto max-w-5xl">
        <SiteHeader />

        <section className="py-24 text-center">
          <RecognitionHero />
          <RecognitionPanel />
        </section>
      </div>
    </main>
  );
}
