import { useRouter } from "next/router";
import { withPageAuthRequired } from "@auth0/nextjs-auth0/dist/frontend";

export default withPageAuthRequired(function Echo() {
  const router = useRouter();
  console.log(router.asPath);
  return (
    <div>
      hello {router.query["echo-string"]} {router.asPath}
    </div>
  );
});
