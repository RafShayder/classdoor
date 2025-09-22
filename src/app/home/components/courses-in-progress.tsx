export const CoursesInProgress=()=> {
  const coursesInProgress = [
    {
      id: 1,
      title: "React Avanzado con TypeScript",
      instructor: "Carlos Mendoza",
      progress: 75,
      totalLessons: 24,
      completedLessons: 18,
      thumbnail: "/react-course.jpg",
      timeLeft: "2h 30min restantes",
    },
    {
      id: 2,
      title: "Diseño UX/UI Completo",
      instructor: "Ana García",
      progress: 45,
      totalLessons: 32,
      completedLessons: 14,
      thumbnail: "/ux-ui-course.jpg",
      timeLeft: "5h 15min restantes",
    },
    {
      id: 3,
      title: "Node.js y Express Masterclass",
      instructor: "Miguel Torres",
      progress: 60,
      totalLessons: 28,
      completedLessons: 17,
      thumbnail: "/nodejs-course.jpg",
      timeLeft: "3h 45min restantes",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Cursos en Progreso</h2>
        <button className="px-4 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
          Ver Todos
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {coursesInProgress.map((course) => (
          <div
            key={course.id}
            className="bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-all duration-200 overflow-hidden"
          >
            <div className="relative">
              <img
                src={course.thumbnail || "/placeholder.svg"}
                alt={course.title}
                className="w-full h-32 object-cover"
              />
              <div className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded text-xs font-medium">
                {course.progress}%
              </div>
            </div>

            <div className="p-4 space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 text-lg line-clamp-2">{course.title}</h3>
                <p className="text-gray-600 text-sm mt-1">por {course.instructor}</p>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">
                    {course.completedLessons} de {course.totalLessons} lecciones
                  </span>
                  <span className="text-blue-600 font-medium">{course.timeLeft}</span>
                </div>
                {/* Progress bar */}
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
              </div>

              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors">
                Continuar Curso
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
