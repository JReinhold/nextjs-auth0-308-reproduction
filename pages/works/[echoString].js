import { useRouter } from "next/router";

export default function Echo() {
  const router = useRouter();
  console.log("router.asPath:" + router.asPath);
  return (
    <div>
      hello {router.query.echoString}. router.asPath: {router.asPath}
    </div>
  );
}
