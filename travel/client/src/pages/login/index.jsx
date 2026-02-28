import { useState } from "react";
import { currentUser, login } from "../../services/auth";
import { useNavigate } from "react-router";
import { getUser } from "../../features/user.slice";
import { useDispatch } from "react-redux";

function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch()

  const navigate = useNavigate()
  const [isSee, setIsSee] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {

      const payload = {
        email: form.email.trim(),
        password: form.password
      };

      await login(payload);
      const data = await currentUser()
      dispatch(getUser(data.user));
      navigate("/admin")

    } catch (error) {
      console.log(error);

    }

    setTimeout(() => setLoading(false), 500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900">
      <form
        onSubmit={handleSubmit}
        className="w-90 bg-slate-950 border border-slate-800 rounded-xl p-6 space-y-4"
      >
        <h2 className="text-center text-xl font-semibold text-white">
          Admin Login
        </h2>

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Admin email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 rounded-md bg-slate-900 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
        />

        {/* Password */}
        <div className="relative">
          <input
            type={isSee ? "text" : "password"}
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 pr-10 rounded-md bg-slate-900 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />

          <button
            type="button"
            onClick={() => setIsSee(!isSee)}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
          >
            {isSee ? "🙈" : "👁️"}
          </button>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-medium disabled:opacity-50 disabled:cursor-not-allowed transition"
        >
          {loading ? "Checking..." : "Login"}
        </button>
      </form>
    </div>
  );
}

export default Login;
