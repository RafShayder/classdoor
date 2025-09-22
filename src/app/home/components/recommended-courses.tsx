export const RecommendedCourses = ()=> {
  const recommendedCourses = [
    {
      id: 1,
      title: "Python para Data Science",
      instructor: "Dr. Laura Ruiz",
      rating: 4.8,
      students: 15420,
      price: "$89.99",
      originalPrice: "$199.99",
      thumbnail: "/python-data-science.jpg",
      level: "Intermedio",
      duration: "12h 30min",
    },
    {
      id: 2,
      title: "Marketing Digital 2024",
      instructor: "Roberto Silva",
      rating: 4.9,
      students: 8750,
      price: "$69.99",
      originalPrice: "$149.99",
      thumbnail: "/digital-marketing.jpg",
      level: "Principiante",
      duration: "8h 15min",
    },
    {
      id: 3,
      title: "Fotografía Profesional",
      instructor: "Elena Morales",
      rating: 4.7,
      students: 12300,
      price: "$79.99",
      originalPrice: "$179.99",
      thumbnail: "/professional-photography.jpg",
      level: "Todos los niveles",
      duration: "15h 45min",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Recomendado para Ti</h2>
        <button className="px-4 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
          Ver Más
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recommendedCourses.map((course) => (
          <div
            key={course.id}
            className="bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-all duration-200 group overflow-hidden"
          >
            <div className="relative overflow-hidden">
              <img
                src={course.thumbnail || "/placeholder.svg"}
                alt={course.title}
                className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-200"
              />
              <span className="absolute top-2 left-2 bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs font-medium">
                {course.level}
              </span>
            </div>

            <div className="p-4 space-y-3">
              <div>
                <h3 className="font-semibold text-gray-900 line-clamp-2 mb-1">{course.title}</h3>
                <p className="text-gray-600 text-sm">por {course.instructor}</p>
              </div>

              <div className="flex items-center space-x-2 text-sm">
                <div className="flex items-center">
                  <span className="text-yellow-500 mr-1">★</span>
                  <span className="font-medium">{course.rating}</span>
                </div>
                <span className="text-gray-600">({course.students.toLocaleString()} estudiantes)</span>
              </div>

              <div className="flex items-center justify-between text-sm text-gray-600">
                <span>{course.duration}</span>
                <div className="flex items-center space-x-2">
                  <span className="text-gray-900 font-bold">{course.price}</span>
                  <span className="line-through text-xs">{course.originalPrice}</span>
                </div>
              </div>

              <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition-colors">
                Inscribirse Ahora
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
