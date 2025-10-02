import LoginForm from "@/components/LoginForm";

export default function AdminLogin() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          ადმინისტრატორის შესვლა
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          შეიყვანეთ ადმინისტრატორის მონაცემები დაშოფორდზე წვდომისთვის
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <LoginForm />
      </div>
    </div>
  );
}
