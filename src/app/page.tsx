import OceaniaTemplate from "@/components/oceania";
import { projectContent } from "@/data/content";

export default function Home() {
  return (
    <main>
      <OceaniaTemplate content={projectContent} />
    </main>
  );
}
