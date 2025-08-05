
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <section>
      <div>
        <Button>
          <Link href="/home">
            Home
          </Link>
        </Button>

      </div>
    </section>
  );
}
