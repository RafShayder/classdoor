export const  RecentActivity =()=> {
  const activities = [
    {
      id: 1,
      type: "completed",
      title: 'Completaste "Hooks Avanzados"',
      course: "React Avanzado",
      time: "Hace 2 horas",
      icon: "✅",
    },
    {
      id: 2,
      type: "certificate",
      title: "Obtuviste un certificado",
      course: "JavaScript ES6+",
      time: "Hace 1 día",
      icon: "🏆",
    },
    {
      id: 3,
      type: "started",
      title: "Iniciaste un nuevo curso",
      course: "Node.js Masterclass",
      time: "Hace 2 días",
      icon: "🚀",
    },
    {
      id: 4,
      type: "milestone",
      title: "Alcanzaste 100 horas de estudio",
      course: "Logro desbloqueado",
      time: "Hace 3 días",
      icon: "🎯",
    },
    {
      id: 5,
      type: "completed",
      title: 'Completaste "Componentes Reutilizables"',
      course: "React Avanzado",
      time: "Hace 4 días",
      icon: "✅",
    },
  ]

  const getActivityColor = (type: string) => {
    switch (type) {
      case "completed":
        return "bg-green-100 text-green-800"
      case "certificate":
        return "bg-yellow-100 text-yellow-800"
      case "started":
        return "bg-blue-100 text-blue-800"
      case "milestone":
        return "bg-purple-100 text-purple-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="bg-white border border-gray-200 rounded-lg">
      <div className="p-6 border-b border-gray-200">
        <h3 className="text-xl font-bold text-gray-900">Actividad Reciente</h3>
      </div>
      <div className="p-6 space-y-4">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <div className="text-2xl">{activity.icon}</div>
            <div className="flex-1 space-y-1">
              <p className="text-sm font-medium text-gray-900">{activity.title}</p>
              <div className="flex items-center justify-between">
                <span
                  className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getActivityColor(activity.type)}`}
                >
                  {activity.course}
                </span>
                <span className="text-xs text-gray-500">{activity.time}</span>
              </div>
            </div>
          </div>
        ))}

        <div className="pt-4 border-t border-gray-200">
          <button className="w-full text-center text-sm text-blue-600 hover:text-blue-800 font-medium">
            Ver toda la actividad
          </button>
        </div>
      </div>
    </div>
  )
}
