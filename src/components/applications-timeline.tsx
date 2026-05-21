import { Timeline } from "@/components/ui/timeline"

export function ApplicationsTimeline() {
  const data = [
    {
      title: "Для школьников и студентов",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Lingua AI помогает детям и студентам подготовиться к экзаменам, улучшить оценки и полюбить иностранные
            языки через игры, истории и интерактивные задания.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Подготовка к ЕГЭ, IELTS, TOEFL и другим экзаменам
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Игровые уроки, которые не надоедают
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Контроль прогресса для родителей
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Для взрослых и профессионалов",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Деловой английский, переговоры, презентации — LinguaAI готовит вас к реальным рабочим ситуациям.
            Занимайтесь по 15 минут в день и замечайте результат уже через месяц.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Деловой и профессиональный словарь
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Разговорная практика с AI-собеседником
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Гибкий график — учись когда и где удобно
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Для путешественников",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Выучи базовый разговорный язык за несколько недель до поездки. Lingua AI обучает фразам, которые
            реально используются в аэропортах, ресторанах, отелях и на улице.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Разговорник для туристов с аудиопроизношением
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Ситуативные диалоги: отель, транспорт, шопинг
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Работает оффлайн — без интернета за рубежом
            </div>
          </div>
        </div>
      ),
    },
  ]

  return (
    <section id="applications" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6">Для кого создан Lingua AI</h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Неважно, сколько вам лет и какова цель — платформа подстраивается под вас и ведёт к результату
            кратчайшим путём.
          </p>
        </div>

        <div className="relative">
          <Timeline data={data} />
        </div>
      </div>
    </section>
  )
}