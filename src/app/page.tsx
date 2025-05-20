import { Hero } from "@/components/home/Hero";

export default function Home() {
  return (
    <main className="flex flex-col items-center">

      {/* Development banner - remove when live */}
      <div className="dark w-full bg-muted px-4 py-3 text-foreground">
        <p className="flex justify-center text-sm">
          <span className="me-1 text-base leading-none">🚧</span> This website
          is still under development!
        </p>
      </div>

      <Hero />
    </main>
  );
}
