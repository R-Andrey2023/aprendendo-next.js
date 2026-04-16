import Navbar from "./ui/navbar";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>{children}</div>
    </div>
  );
}
