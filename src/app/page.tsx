
// app/page.tsx
import { redirect } from "next/navigation";

export default function HomeRedirect() {
  redirect("/welcomePage");
}



// Niros, I comment this to show a welcome page on entering the app
// // pages/index.js
// import DBForm from "@/components/DBForm";

// export default function Home() {
//   return (
//     <div>
//       <h1>DBMine</h1>
//       <DBForm />
//     </div>
//   );
// }