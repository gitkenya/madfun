export default function Hero() {
  return (
    <section className="w-full py-8">
      <div className="mx-auto max-w-[85rem] px-2 md:px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          <div className="grid">
            <div className="rounded-lg bg-violet-100 flex flex-row">
              <div className="w-full sm:w-1/2">Content</div>
              <div className="w-full sm:w-1/2">Image</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
