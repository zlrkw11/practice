export default function Home() {
  return (
    <div className="w-full flex flex-col items-center font-bold">
      <div className="m-8 text-3xl "> Home page</div>
      <div className="border-2 border-orange-400 rounded-md bg-yellow-200 p-4">
        <div>GDSC hackathon</div>
        <button>go</button>
      </div>
    </div>
  );
}

const section = ({ title }: { title: string }) => {};
