import { useSession, signIn, signOut } from "next-auth/react"
import Image from "next/image";
import logo from "./img/logo.png"
import { useRouter } from "next/router";
import Loading from "@/components/Loading";


export default function Login(){
  const { data: session, status } = useSession();

  if(status === "loading"){
    return <div className="loadingdata flex flex-col flex-center wh_100">
    <Loading />
    </div>
  }

  const router = useRouter();

  async function login(){
    await router.push('/');
    await signIn();
  }

  if(session){
    router.push('/');
    return null; //return null or any loading indicator
  }

  // not session or not login then this page for login 
  if(!session){
    return <>
    <div className="loginfront flex flex-center flex-col full-w">
      <Image src={logo} width={250} height={250}/>
      <h1>Welcome Admin of the Code Bank 👋</h1>
      <p>Visit our main website <a href="http://localhost:3000">Code Bank</a></p>
      <button className="mt-2">Login with google</button>
    </div>
    </>
  } 

  
}