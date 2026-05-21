import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import Icon from "@/components/ui/icon"
import { useNavigate } from "react-router-dom"

type Plan = "free" | "pro"

const plans = [
  {
    id: "free" as Plan,
    name: "Бесплатно",
    price: "0 ₽",
    period: "навсегда",
    badge: null,
    description: "Идеально для старта",
    features: [
      { text: "Раздел «Для школьников и студентов»", included: true },
      { text: "Ежедневные задания и карточки", included: true },
      { text: "Базовый AI-репетитор", included: true },
      { text: "Взрослые и профессионалы", included: false },
      { text: "Путешественники", included: false },
      { text: "Живые диалоги с AI", included: false },
      { text: "Сертификаты", included: false },
    ],
  },
  {
    id: "pro" as Plan,
    name: "Про",
    price: "399 ₽",
    period: "в месяц",
    badge: "Популярный",
    description: "Полный доступ ко всем возможностям",
    features: [
      { text: "Все разделы обучения", included: true },
      { text: "Ежедневные задания и карточки", included: true },
      { text: "Продвинутый AI-репетитор 24/7", included: true },
      { text: "Взрослые и профессионалы", included: true },
      { text: "Путешественники", included: true },
      { text: "Живые диалоги с AI", included: true },
      { text: "Официальные сертификаты", included: true },
    ],
  },
]

export default function Register() {
  const [selectedPlan, setSelectedPlan] = useState<Plan>("free")
  const [step, setStep] = useState<"plan" | "form">("plan")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const navigate = useNavigate()

  const handleContinue = () => {
    setStep("form")
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    navigate("/")
  }

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-4 py-16">
      <div className="w-full max-w-4xl">
        {/* Logo */}
        <div className="text-center mb-10">
          <h1 className="font-orbitron text-2xl font-bold text-white cursor-pointer" onClick={() => navigate("/")}>
            Lingua<span className="text-red-500">AI</span>
          </h1>
        </div>

        {step === "plan" && (
          <>
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 font-orbitron">
                Выберите тариф
              </h2>
              <p className="text-gray-400 text-lg">Начните бесплатно — обновите в любой момент</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {plans.map((plan) => (
                <div
                  key={plan.id}
                  onClick={() => setSelectedPlan(plan.id)}
                  className={`relative rounded-2xl border-2 p-8 cursor-pointer transition-all duration-300 ${
                    selectedPlan === plan.id
                      ? "border-red-500 bg-red-500/10"
                      : "border-white/10 bg-white/5 hover:border-white/30"
                  }`}
                >
                  {plan.badge && (
                    <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-red-500 text-white border-0 px-4 py-1">
                      {plan.badge}
                    </Badge>
                  )}

                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-xl font-bold text-white font-orbitron mb-1">{plan.name}</h3>
                      <p className="text-gray-400 text-sm">{plan.description}</p>
                    </div>
                    <div
                      className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-1 transition-all ${
                        selectedPlan === plan.id ? "border-red-500 bg-red-500" : "border-white/30"
                      }`}
                    >
                      {selectedPlan === plan.id && <Icon name="Check" size={14} className="text-white" />}
                    </div>
                  </div>

                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white font-orbitron">{plan.price}</span>
                    <span className="text-gray-400 ml-2 text-sm">{plan.period}</span>
                  </div>

                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <Icon
                          name={feature.included ? "CheckCircle" : "XCircle"}
                          size={18}
                          className={feature.included ? "text-red-400 flex-shrink-0" : "text-white/20 flex-shrink-0"}
                        />
                        <span className={`text-sm ${feature.included ? "text-gray-200" : "text-white/30 line-through"}`}>
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button
                size="lg"
                onClick={handleContinue}
                className="bg-red-500 hover:bg-red-600 text-white font-orbitron text-lg px-12 py-4 border-0"
              >
                Продолжить с тарифом «{plans.find((p) => p.id === selectedPlan)?.name}»
              </Button>
            </div>
          </>
        )}

        {step === "form" && (
          <div className="max-w-md mx-auto">
            <button
              onClick={() => setStep("plan")}
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
            >
              <Icon name="ArrowLeft" size={18} />
              <span className="text-sm">Назад к выбору тарифа</span>
            </button>

            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-2 font-orbitron">Создать аккаунт</h2>
              <p className="text-gray-400">
                Тариф:{" "}
                <span className="text-red-400 font-semibold">
                  {plans.find((p) => p.id === selectedPlan)?.name} —{" "}
                  {plans.find((p) => p.id === selectedPlan)?.price}
                </span>
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-sm text-gray-400 mb-1.5 block">Ваше имя</label>
                <Input
                  placeholder="Иван Иванов"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="bg-white/5 border-white/20 text-white placeholder:text-gray-500 focus:border-red-500 h-12"
                />
              </div>
              <div>
                <label className="text-sm text-gray-400 mb-1.5 block">Email</label>
                <Input
                  type="email"
                  placeholder="ivan@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-white/5 border-white/20 text-white placeholder:text-gray-500 focus:border-red-500 h-12"
                />
              </div>
              <div>
                <label className="text-sm text-gray-400 mb-1.5 block">Пароль</label>
                <Input
                  type="password"
                  placeholder="Минимум 8 символов"
                  required
                  className="bg-white/5 border-white/20 text-white placeholder:text-gray-500 focus:border-red-500 h-12"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-red-500 hover:bg-red-600 text-white font-orbitron text-base mt-2 border-0 h-12"
              >
                {selectedPlan === "pro" ? "Оплатить и начать" : "Начать бесплатно"}
              </Button>
            </form>

            <p className="text-center text-gray-500 text-xs mt-6">
              Нажимая кнопку, вы соглашаетесь с{" "}
              <a href="#" className="text-red-400 hover:underline">условиями использования</a>
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
