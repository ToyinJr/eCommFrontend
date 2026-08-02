import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import { toast } from "sonner";
import { useRegister } from "../hooks/useAuth";

export default function Register() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const registerUser = useRegister();

  const onSubmit = (data) => {
    registerUser.mutate(data, {
      onSuccess: () => {
        toast.success("Account created successfully!", {
          className: "!bg-emerald-500 !text-white",
        });

        navigate("/login");
      },

      onError: (error) => {
        toast.error(error.message, {
          className: "!bg-red-600 !text-white",
        });
      },
    });
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2">

      {/* Left Side */}

      <div className="hidden lg:flex bg-gradient-to-br from-emerald-500 via-emerald-600 to-emerald-700 items-center justify-center text-white p-16">

        <div className="max-w-md">

          <div className="flex items-center gap-3 mb-8">
            <ShoppingBag size={42} />
            <h1 className="text-4xl font-bold">
              EComm Gadget Store
            </h1>
          </div>

          <h2 className="text-5xl font-black leading-tight">
            Everything Tech.
            <br />
            One Place.
          </h2>

          <p className="mt-8 text-lg opacity-90 leading-8">
            Create your account and discover premium gadgets,
            unbeatable prices and secure shopping.
          </p>

        </div>

      </div>

      {/* Right Side */}

      <div className="flex items-center justify-center bg-emerald-50 px-6 py-10">

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-md rounded-3xl bg-white shadow-xl p-10"
        >
          <h1 className="text-4xl font-bold text-gray-800">
            Create Account
          </h1>

          <p className="text-gray-500 mt-2 mb-8">
            Join thousands of happy shoppers.
          </p>

          {/* Username */}

          <div className="mb-5">
            <input
              {...register("username", {
                required: "Username is required",
              })}
              placeholder="Username"
              className="w-full rounded-xl border border-gray-300 p-4 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
            />

            {errors.username && (
              <p className="mt-2 text-sm text-red-500">
                {errors.username.message}
              </p>
            )}
          </div>

          {/* Email */}

          <div className="mb-5">
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value:
                    /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email",
                },
              })}
              placeholder="Email Address"
              className="w-full rounded-xl border border-gray-300 p-4 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
            />

            {errors.email && (
              <p className="mt-2 text-sm text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}

          <div className="mb-7">
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message:
                    "Password must be at least 8 characters",
                },
              })}
              placeholder="Password"
              className="w-full rounded-xl border border-gray-300 p-4 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
            />

            {errors.password && (
              <p className="mt-2 text-sm text-red-500">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Button */}

          <button
            disabled={registerUser.isPending}
            className="w-full rounded-xl bg-emerald-500 py-4 text-lg font-semibold text-white transition hover:bg-emerald-600 disabled:opacity-60"
          >
            {registerUser.isPending ? (
              <span className="flex items-center justify-center gap-2">
                <span className="loading loading-spinner loading-sm"></span>
                Creating Account...
              </span>
            ) : (
              "Create Account"
            )}
          </button>

          <div className="my-8 flex items-center">
            <div className="h-px flex-1 bg-gray-300"></div>
            <span className="px-4 text-sm text-gray-400">
              OR
            </span>
            <div className="h-px flex-1 bg-gray-300"></div>
          </div>

          <p className="text-center text-gray-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-semibold text-emerald-600 hover:text-emerald-700"
            >
              Login
            </Link>
          </p>

        </form>

      </div>

    </div>
  );
}