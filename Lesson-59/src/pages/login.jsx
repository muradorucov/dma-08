import { useState } from 'react'
import { login } from '../services/auth';
import { useNavigate } from 'react-router';

function Login() {
  const [isShow, setisShow] = useState(false)
  const navigate = useNavigate()



  const formSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await login({
        username: e.target.username.value,
        password: e.target.password.value
      })
      navigate("/")
    } catch (error) {
      alert(error.message)
    }

  }



  return (
    <div className="min-h-screen bg-linear-to-br from-[#661BDC] via-indigo-600 to-blue-600">
      <div className="absolute inset-0 -z-10 opacity-20 blur-3xl [background:radial-gradient(60rem_60rem_at_70%_20%,white,transparent)]" />
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="w-full max-w-md">
          <div className="rounded-2xl bg-white/90 shadow-xl ring-1 ring-black/5 backdrop-blur p-8">
            <div className="mb-8 flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-[#661BDC] flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="h-6 w-6 text-white" aria-hidden="true">
                  <path
                    d="M4 12L11 5v14M13 7h7v10h-7"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <h1 className="text-xl font-semibold text-gray-900">Admin Panel</h1>
                <p className="text-sm text-gray-500">Hesabınıza daxil olun</p>
              </div>
            </div>

            <form className="space-y-5" onSubmit={formSubmit}>
              <div>
                <label htmlFor="username" className="mb-2 block text-sm font-medium text-gray-700">
                  İstifadəçi adı
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  placeholder="admin"
                  className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2.5 text-sm outline-none placeholder:text-gray-400 hover:border-gray-400 focus:ring-2 focus:ring-[#661BDC]/50"
                />
              </div>

              <div className='relative'>
                <div className="mb-2 flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Şifrə
                  </label>
                  <a href="#" className="text-xs font-medium text-[#661BDC] hover:underline">
                    Şifrəni unutdun?
                  </a>
                </div>
                <input
                  id="password"
                  name="password"
                  type={isShow ? "text" : "password"}
                  placeholder="••••••••"
                  className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2.5 text-sm outline-none placeholder:text-gray-400 hover:border-gray-400 focus:ring-2 focus:ring-[#661BDC]/50"
                />
                <button
                  type="button"
                  onClick={() => setisShow(!isShow)}
                  className="absolute top-[35px] right-2 rounded-md p-1 text-gray-500 hover:bg-gray-100"
                >
                  {
                    isShow ? <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7Z" />
                      <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      <path d="M3 3l18 18" />
                    </svg> : <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7Z" />
                      <path d="M12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z" />
                    </svg>
                  }

                </button>
              </div>

              <div className="flex items-center justify-between">
                <label className="inline-flex items-center gap-2 text-sm text-gray-700">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-[#661BDC] focus:ring-[#661BDC]"
                  />
                  Məni xatırla
                </label>
              </div>

              <button
                className="inline-flex w-full items-center justify-center rounded-xl bg-[#661BDC] px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[#661BDC]/20 transition hover:brightness-110"
              >
                Daxil ol
              </button>

              <p className="text-center text-xs text-gray-500">
                Bu səhifə qorunur. Yalnız səlahiyyətli istifadəçilər.
              </p>
            </form>
          </div>

          <div className="mt-6 text-center text-xs text-white/80">© 2025 — Admin Panel</div>
        </div>
      </div>
    </div>
  );

}

export default Login