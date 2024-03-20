import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24  h-1/2 text-xl">
   <section className="px-5 m-5 " style={{borderRadius: '59px',
    background: 'linear-gradient(145deg, #cacaca, #f0f0f0)',
    boxShadow: '33px 33px 44px #929292, -33px -33px 44px #ffffff'}}>

      <div className="text-slate-600 font-serif text-3xl ">This is a Sql_server_side Render_project</div>
     
     <Link href="/blog"> <button className=" border-red-400 bg-slate-400 rounded-md p-5 m-5">
        hello world
      </button>
      </Link>
      
        
     </section>

 

     
    </main>
  );
}
