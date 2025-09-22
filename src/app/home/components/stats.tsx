export const StatsOverview = ()=> {
  const stats = [
    {
      title: "Cursos Completados",
      value: "12",
      icon: "🎓",
      change: "+2 este mes",
    },
    {
      title: "Horas de Estudio",
      value: "156",
      icon: "⏱️",
      change: "+24 esta semana",
    },
    {
      title: "Certificados",
      value: "8",
      icon: "🏆",
      change: "+1 nuevo",
    },
    {
      title: "Racha de Días",
      value: "15",
      icon: "🔥",
      change: "Récord personal",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">{stat.title}</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
              <p className="text-xs text-blue-600 mt-1">{stat.change}</p>
            </div>
            <div className="text-3xl">{stat.icon}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
