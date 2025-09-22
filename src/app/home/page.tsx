import { DashboardHeader } from "@/components/header"
import { StatsOverview } from "@/app/home/components/stats"
import { CoursesInProgress } from "@/app/home/components/courses-in-progress"
import { RecommendedCourses } from "@/app/home/components/recommended-courses"
import { RecentActivity } from "@/app/home/components/recent-activity"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />

      <main className="container mx-auto px-4 py-8 space-y-8">
        {/* Welcome Section */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-gray-900">¡Bienvenido de vuelta, María!</h1>
          <p className="text-gray-600 text-lg">Continúa tu viaje de aprendizaje donde lo dejaste</p>
        </div>

        {/* Stats Overview */}
        <StatsOverview />

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Courses in Progress */}
          <div className="lg:col-span-2 space-y-8">
            <CoursesInProgress />
            <RecommendedCourses />
          </div>

          {/* Right Column - Recent Activity */}
          <div className="lg:col-span-1">
            <RecentActivity />
          </div>
        </div>
      </main>
    </div>
  )
}
