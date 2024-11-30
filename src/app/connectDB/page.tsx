//app/connectDB/page.tsx
import DBForm from "@/components/DBForm";

export default function Home() {
  return (
    <div>
      <h1>Create new connection</h1>
      <DBForm />
    </div>
  );
}