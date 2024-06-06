import Link from 'next/link';
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex items-center justify-center w-full">
        <div className={"grid grid-cols-2 gap-4 place-content-center"}>
            <Link href="/about" className={"rounded"}>
                <Button >About</Button></Link>
            <p></p>
            <p >Bernard Opieliński</p>
            <p>numer indeksu: 119247</p>
        </div>
    </div>
  );
}
