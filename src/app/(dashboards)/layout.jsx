export default function DashboardLayout({ children }) {
  return (
    <section>
      <div className="grid grid-cols-12">
        <div className="col-span-3">Side nav</div>
        <div className="col-span-9">{children}</div>
      </div>
    </section>
  );
}
