import Image from "next/image";
import Link from "next/link";
import { Provider } from "react-redux";
import store from "./store/store";

export default function Home() {
  return (
    <div className="">
      <Link href={"/posts"}>go to posts</Link>
    </div>
  );
}
