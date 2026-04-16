'use client'
 
export default function Error({
  unstable_retry,
}: {
  error: Error & { digest?: string }
  unstable_retry: () => void
}) {
 
  return (
    <div>
      <h2>Error fetching requested images</h2>
      <button
        onClick={
          () => unstable_retry()
        }
      >
        Try again
      </button>
    </div>
  )
}