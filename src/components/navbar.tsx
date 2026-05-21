import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { getUser, logout, type User } from "@/lib/auth"
import Icon from "@/components/ui/icon"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [user, setUser] = useState<User | null>(null)
  const navigate = useNavigate()

  useEffect(() => {
    setUser(getUser())
  }, [])

  const handleLogout = () => {
    logout()
    setUser(null)
    navigate("/")
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-[9999] bg-black/95 backdrop-blur-md border-b border-red-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="font-orbitron text-xl font-bold text-white">
              Lingua<span className="text-red-500">AI</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a
                href="#technology"
                className="font-geist text-white hover:text-red-500 transition-colors duration-200"
              >
                Возможности
              </a>
              <a href="#safety" className="font-geist text-white hover:text-red-500 transition-colors duration-200">
                Методика
              </a>
              <a href="#faq" className="font-geist text-white hover:text-red-500 transition-colors duration-200">
                Вопросы
              </a>
            </div>
          </div>

          {/* CTA Buttons — desktop */}
          <div className="hidden md:flex items-center gap-3">
            {user ? (
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 text-white">
                  <Icon name="User" size={16} className="text-red-400" />
                  <span className="font-geist text-sm">{user.name}</span>
                </div>
                <Button onClick={handleLogout} variant="outline" className="border-red-500/50 text-red-400 hover:bg-red-500 hover:text-white font-geist h-9 px-4 bg-transparent">
                  Выйти
                </Button>
              </div>
            ) : (
              <>
                <Button onClick={() => navigate("/login")} className="border-2 border-red-500 text-red-500 bg-transparent hover:bg-red-500 hover:text-white font-geist h-10 px-5 font-semibold">
                  Войти
                </Button>
                <Button onClick={() => navigate("/register")} className="bg-red-500 hover:bg-red-600 text-white font-geist border-0 h-10 px-5 font-semibold">Начать бесплатно</Button>
              </>
            )}
          </div>

          {/* CTA Buttons — mobile (всегда видны) */}
          <div className="flex md:hidden items-center gap-2">
            {user ? (
              <Button onClick={handleLogout} size="sm" variant="outline" className="border-red-500/50 text-red-400 hover:bg-red-500 hover:text-white font-geist bg-transparent text-xs px-3">
                Выйти
              </Button>
            ) : (
              <>
                <Button onClick={() => navigate("/login")} size="sm" variant="outline" className="border-white/20 text-white hover:bg-white/10 font-geist bg-transparent text-xs px-3">
                  Войти
                </Button>
                <Button onClick={() => navigate("/register")} size="sm" className="bg-red-500 hover:bg-red-600 text-white font-geist border-0 text-xs px-3">
                  Бесплатно
                </Button>
              </>
            )}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-red-500 transition-colors duration-200 ml-1"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/98 border-t border-red-500/20">
              <a
                href="#technology"
                className="block px-3 py-2 font-geist text-white hover:text-red-500 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Возможности
              </a>
              <a
                href="#safety"
                className="block px-3 py-2 font-geist text-white hover:text-red-500 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Методика
              </a>
              <a
                href="#faq"
                className="block px-3 py-2 font-geist text-white hover:text-red-500 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Вопросы
              </a>
              <div className="px-3 py-2 space-y-2">
                {user ? (
                  <>
                    <p className="text-gray-400 text-sm px-1">Вы вошли как <span className="text-white">{user.name}</span></p>
                    <Button onClick={handleLogout} className="w-full border-red-500/50 text-red-400 hover:bg-red-500 hover:text-white font-geist bg-transparent border">
                      Выйти
                    </Button>
                  </>
                ) : (
                  <>
                    <Button onClick={() => { navigate("/login"); setIsOpen(false) }} className="w-full border-white/20 text-white hover:bg-white/10 font-geist bg-transparent border">
                      Войти
                    </Button>
                    <Button onClick={() => { navigate("/register"); setIsOpen(false) }} className="w-full bg-red-500 hover:bg-red-600 text-white font-geist border-0">
                      Начать бесплатно
                    </Button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}