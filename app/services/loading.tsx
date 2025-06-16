import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation skeleton */}
      <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-6 py-4">
            {[...Array(5)].map((_, i) => (
              <Skeleton key={i} className="h-8 w-20 bg-gray-200 rounded-full" />
            ))}
          </div>
        </div>
      </div>

      {/* Hero skeleton */}
      <div className="py-20 bg-gradient-to-br from-emerald-800 to-green-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Skeleton className="h-4 w-32 bg-white/20 mx-auto mb-6" />
          <Skeleton className="h-16 w-96 bg-white/20 mx-auto mb-6" />
          <Skeleton className="h-6 w-[600px] bg-white/20 mx-auto mb-8" />
          <div className="flex justify-center gap-4">
            <Skeleton className="h-14 w-48 bg-white/20 rounded-full" />
            <Skeleton className="h-14 w-40 bg-white/20 rounded-full" />
          </div>
        </div>
      </div>

      {/* Emergency services skeleton */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Skeleton className="h-4 w-40 bg-gray-200 mx-auto mb-4" />
            <Skeleton className="h-12 w-64 bg-gray-200 mx-auto mb-6" />
            <Skeleton className="h-6 w-96 bg-gray-200 mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[...Array(4)].map((_, i) => (
              <Skeleton key={i} className="h-64 bg-gray-200 rounded-2xl" />
            ))}
          </div>
        </div>
      </div>

      {/* Specialties skeleton */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Skeleton className="h-4 w-32 bg-gray-200 mx-auto mb-4" />
            <Skeleton className="h-12 w-80 bg-gray-200 mx-auto mb-6" />
            <Skeleton className="h-6 w-[500px] bg-gray-200 mx-auto" />
          </div>
          <div className="flex justify-center gap-3 mb-12">
            {[...Array(6)].map((_, i) => (
              <Skeleton key={i} className="h-12 w-32 bg-gray-200 rounded-xl" />
            ))}
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <Skeleton className="h-16 w-full bg-gray-200 rounded-xl" />
              <Skeleton className="h-24 w-full bg-gray-200 rounded-xl" />
              <div className="grid grid-cols-2 gap-6">
                <Skeleton className="h-24 bg-gray-200 rounded-xl" />
                <Skeleton className="h-24 bg-gray-200 rounded-xl" />
              </div>
            </div>
            <Skeleton className="h-96 bg-gray-200 rounded-2xl" />
          </div>
        </div>
      </div>

      {/* Directory skeleton */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Skeleton className="h-4 w-48 bg-gray-200 mx-auto mb-4" />
            <Skeleton className="h-12 w-48 bg-gray-200 mx-auto mb-6" />
            <Skeleton className="h-6 w-[600px] bg-gray-200 mx-auto" />
          </div>
          <div className="space-y-16">
            <div>
              <Skeleton className="h-16 w-full max-w-2xl mx-auto bg-gray-200 rounded-2xl mb-8" />
              <Skeleton className="h-96 w-full bg-gray-200 rounded-2xl" />
            </div>
            <div>
              <Skeleton className="h-16 w-full max-w-2xl mx-auto bg-gray-200 rounded-2xl mb-8" />
              <Skeleton className="h-96 w-full bg-gray-200 rounded-2xl" />
            </div>
          </div>
        </div>
      </div>

      {/* FAQ skeleton */}
      <div className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Skeleton className="h-4 w-40 bg-gray-200 mx-auto mb-4" />
            <Skeleton className="h-12 w-80 bg-gray-200 mx-auto mb-6" />
            <Skeleton className="h-6 w-96 bg-gray-200 mx-auto" />
          </div>
          <div className="space-y-6">
            {[...Array(5)].map((_, i) => (
              <Skeleton key={i} className="h-16 w-full bg-gray-200 rounded-2xl" />
            ))}
          </div>
        </div>
      </div>

      {/* CTA skeleton */}
      <div className="py-20 bg-gradient-to-br from-emerald-700 to-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Skeleton className="h-16 w-16 bg-white/20 mx-auto mb-6 rounded-full" />
          <Skeleton className="h-12 w-64 bg-white/20 mx-auto mb-6" />
          <Skeleton className="h-6 w-[600px] bg-white/20 mx-auto mb-10" />
          <div className="flex justify-center gap-6">
            <Skeleton className="h-14 w-48 bg-white/20 rounded-full" />
            <Skeleton className="h-14 w-48 bg-white/20 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  )
}
