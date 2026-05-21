import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "С чего начать, если я никогда не учил языки онлайн?",
      answer:
        "Просто зарегистрируйтесь и пройдите короткий тест на уровень — он займёт 3 минуты. Lingua AI сам составит персональный план обучения и будет вести вас шаг за шагом.",
    },
    {
      question: "Сколько времени нужно уделять занятиям?",
      answer:
        "Достаточно 15–20 минут в день. Платформа адаптируется под ваш график: занимайтесь утром, в перерыве или перед сном — результат будет в любом случае.",
    },
    {
      question: "Подходит ли платформа для детей?",
      answer:
        "Да! Lingua AI подходит для всех возрастов. Для детей от 6 лет предусмотрен специальный игровой режим с мультипликационными персонажами и простыми заданиями.",
    },
    {
      question: "Можно ли учить несколько языков одновременно?",
      answer:
        "Конечно. Вы можете вести несколько курсов параллельно — платформа будет отслеживать прогресс по каждому языку отдельно.",
    },
    {
      question: "Есть ли бесплатная версия?",
      answer:
        "Да, базовый доступ бесплатный. Он включает первый уровень, ежедневные задания и карточки. Премиум открывает все языки, живые разговоры с AI и сертификаты.",
    },
    {
      question: "Как работают сертификаты?",
      answer:
        "После прохождения курса вы можете сдать финальный экзамен и получить сертификат с указанием уровня владения языком. Его можно скачать и добавить в резюме или LinkedIn.",
    },
  ]

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">Частые вопросы</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-space-mono">
            Всё, что вы хотели знать о Lingua AI — собрали здесь.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-red-500/20 mb-4">
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-red-400 font-orbitron px-6 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed px-6 pb-4 font-space-mono">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}