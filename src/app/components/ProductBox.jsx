import React from "react";

export default function ProductBox() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/50 dark:border-slate-800 dark:bg-slate-950 dark:shadow-none">
      <h2 className="text-2xl font-semibold text-center text-slate-900 dark:text-slate-100">ProductBox</h2>
      <p className="mt-3 text-slate-600 text-center dark:text-slate-300">
        Showcase your featured product here.
      </p>
    </div>
  );
}
