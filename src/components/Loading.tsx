import LoadingSpinner from '@/components/LoadingSpinner'

export default function Loading() {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center gap-6 px-6">
      <LoadingSpinner size="lg" />
      <p className="text-label text-slate-500">Loading...</p>
    </div>
  )
}
