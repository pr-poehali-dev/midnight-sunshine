import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Icon from "@/components/ui/icon"
import { useNavigate } from "react-router-dom"
import { getUser, saveUser } from "@/lib/auth"

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    const user = getUser()
    if (!user) {
      setError("Аккаунт не найден. Зарегистрируйтесь сначала.")
      return
    }
    if (user.email !== email) {
      setError("Неверный email или пароль.")
      return
    }

    saveUser(user)
    navigate("/")
  }

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-4 py-16">
      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <h1
            className="font-orbitron text-2xl font-bold text-white cursor-pointer"
            onClick={() => navigate("/")}
          >
            Samurai<span className="text-red-500">LanguageAI</span>
          </h1>
        </div>

        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-2 font-orbitron">Войти</h2>
          <p className="text-gray-400">Рады видеть вас снова</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
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
              placeholder="Ваш пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="bg-white/5 border-white/20 text-white placeholder:text-gray-500 focus:border-red-500 h-12"
            />
          </div>

          {error && (
            <div className="flex items-center gap-2 text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-3">
              <Icon name="AlertCircle" size={16} />
              {error}
            </div>
          )}

          <Button
            type="submit"
            size="lg"
            className="w-full bg-red-500 hover:bg-red-600 text-white font-orbitron text-base mt-2 border-0 h-12"
          >
            Войти
          </Button>
        </form>

        <p className="text-center text-gray-500 text-sm mt-6">
          Нет аккаунта?{" "}
          <button
            onClick={() => navigate("/register")}
            className="text-red-400 hover:underline"
          >
            Зарегистрироваться
          </button>
        </p>
      </div>
    </div>
  )
}
