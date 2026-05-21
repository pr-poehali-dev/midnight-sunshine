export interface User {
  name: string
  email: string
  plan: "free" | "pro"
}

const KEY = "samurai_user"

export function saveUser(user: User) {
  localStorage.setItem(KEY, JSON.stringify(user))
}

export function getUser(): User | null {
  try {
    const raw = localStorage.getItem(KEY)
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

export function logout() {
  localStorage.removeItem(KEY)
}
