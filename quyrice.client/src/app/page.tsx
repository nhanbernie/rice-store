import ThemeToggleButton from "@/components/ThemeToggleButton";

export default function Home() {
  return (
      <div className="min-h-screen bg-white dark:bg-black flex flex-col items-center justify-center">
        <h1 className="text-4xl text-black dark:text-white mb-4">
          Chào mừng bạn đến với Rice Store
        </h1>
        <ThemeToggleButton />
      </div>
  );
}
