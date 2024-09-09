function App() {
  return (
    <main className="min-h-screen bg-primary grid place-items-center">
      <article className="relative h-screen max-h-64 w-full max-w-screen-md flex flex-col items-center gap-4">
        <h1 className="font-bold text-6xl">Josh Terceira</h1>
        <p className="text-2xl">Associate Creative Director</p>
        <p className="text-xl">(Warwick)</p>
        <p className="decoration-sign uppercase absolute bg-secondary text-primary p-2 aspect-square grid place-items-center bottom-4 left-4 -rotate-12 text-primary-600">
          <p>Ready</p>
        </p>
        <div className="decoration-heart uppercase absolute bg-accent text-primary aspect-square bottom-4 right-4 rotate-12 grid place-items-center p-2">
          <p>Difference</p>
        </div>
      </article>
    </main>
  );
}

export default App;
