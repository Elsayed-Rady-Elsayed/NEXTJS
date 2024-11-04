import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <h1>hello</h1>
      <p>how are you?</p>
      <Link href={"/posts"}>go to me</Link>
    </div>
  );
}
