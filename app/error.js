"use client";
export default function Error({ reset }) {
  return <div className="card p-10 text-center"><h1 className="text-2xl font-extrabold text-accent2">Something went wrong</h1><p className="my-4 text-muted">Please try again in a moment.</p><button onClick={reset} className="btn mx-auto max-w-xs">Try again</button></div>;
}
