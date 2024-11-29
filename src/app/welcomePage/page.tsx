// app/welcomePage/page.tsx
export default function WelcomePage() {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h1 className="text-5xl font-bold text-blue-600">Welcome to DBMine</h1>
        <p className="text-xl mt-4">Your go-to tool for managing databases effortlessly.</p>
        <div className="mt-8">
          <a href="/connectDB" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Create DB connection
          </a>
        </div>
      </div>
    );
  }
  