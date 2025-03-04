export default function Loading() {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center gap-6 px-6">
      <div className="h-12 w-12 animate-spin rounded-full border-2 border-slate-200 border-t-blue-primary" />
      <p className="text-label text-slate-500">Loading...</p>
    </div>
  )
}
