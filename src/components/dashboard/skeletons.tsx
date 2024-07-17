export function UserListSkeleton() {
  return (
    <div className="flex flex-col gap-2 col-span-12">
      <h1 className="p-2 h-10 w-52 rounded-lg bg-gray-500 animate-pulse"></h1>
      <table className="w-full text-center border-collapse">
        <thead>
          <tr className="text-gray-300 border border-white/20">
            <th className="p-3 h-8 bg-gray-500 animate-pulse"></th>
            <th className="p-3 h-8 bg-gray-500 animate-pulse"></th>
            <th className="p-3 h-8 bg-gray-500 animate-pulse"></th>
            <th className="p-3 h-8 bg-gray-500 animate-pulse"></th>
            <th className="p-3 h-8 bg-gray-500 animate-pulse"></th>
            <th className="p-3 h-8 bg-gray-500 animate-pulse"></th>
            <th className="p-3 h-8 bg-gray-500 animate-pulse"></th>
          </tr>
        </thead>
        <tbody>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
            <tr
              key={i}
              className="hover:bg-white/5 border border-white/20 transition-colors duration-200 text-white cursor-pointer"
            >
              <td className="text-sm md:text-xl p-3">
                <div className="w-10 h-10 bg-gray-500 rounded-full animate-pulse"></div>
              </td>
              <td className="text-sm md:text-xl p-3">
                <div className="w-20 h-5 bg-gray-500 rounded-full animate-pulse"></div>
              </td>
              <td className="text-sm md:text-xl p-3">
                <div className="w-20 h-5 bg-gray-500 rounded-full animate-pulse"></div>
              </td>
              <td className="text-sm md:text-xl p-3">
                <div className="w-20 h-5 bg-gray-500 rounded-full animate-pulse"></div>
              </td>
              <td className="text-sm md:text-xl p-3">
                <div className="w-20 h-5 bg-gray-500 rounded-full animate-pulse"></div>
              </td>
              <td className="text-sm md:text-xl p-3">
                <div className="w-20 h-5 bg-gray-500 rounded-full animate-pulse"></div>
              </td>
              <td className="text-sm md:text-xl p-3">
                <div className="w-20 h-5 bg-gray-500 rounded-full animate-pulse"></div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function LatestUsersSkeleton() {
  return (
    <div className="flex flex-col gap-2 col-span-12 md:col-span-6">
      <h2 className="text-lg md:text-2xl font-semibold text-white mb-4">
        Últimos usuarios
      </h2>
      <table className="w-full text-center border-collapse">
        <thead>
          <tr className="text-gray-300 border border-white/20">
            <th className="p-3 text-xs md:text-base">Avatar</th>
            <th className="p-3 text-xs md:text-base">Usuario</th>
            <th className="p-3 text-xs md:text-base">Email</th>
            <th className="p-3 text-xs md:text-base">Rol</th>
            <th className="p-3 text-xs md:text-base">Creación</th>
          </tr>
        </thead>
        <tbody>
          {[1, 2, 3, 4, 5].map((i) => (
            <tr
              key={i}
              className="hover:bg-white/5 border border-white/20 transition-colors duration-200 text-white cursor-pointer"
            >
              <td className="text-sm md:text-xl p-3">
                <div className="w-10 h-10 bg-gray-500 rounded-full animate-pulse"></div>
              </td>
              <td className="text-sm md:text-xl p-3">
                <div className="w-20 h-5 bg-gray-500 rounded-full animate-pulse"></div>
              </td>
              <td className="text-sm md:text-xl p-3">
                <div className="w-20 h-5 bg-gray-500 rounded-full animate-pulse"></div>
              </td>
              <td className="text-sm md:text-xl p-3">
                <div className="w-20 h-5 bg-gray-500 rounded-full animate-pulse"></div>
              </td>
              <td className="text-sm md:text-xl p-3">
                <div className="w-20 h-5 bg-gray-500 rounded-full animate-pulse"></div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function HeaderDashboardSkeleton() {
  return (
    <div className="col-span-12 grid grid-cols-4 w-full m-auto gap-5">
      <HeaderCardSkeleton />
      <HeaderCardSkeleton />
      <HeaderCardSkeleton />
      <HeaderCardSkeleton />
    </div>
  );
}

export function HeaderCardSkeleton() {
  return (
    <span className="w-full p-6 rounded-lg flex flex-col gap-2 bg-[#1a1e26] border-[0.1px] border-white/30">
      <div className="flex flex-row gap-2 items-center">
        <div className="w-10 h-10 bg-gray-500 rounded-full animate-pulse"></div>
        <h1 className="text-white/70">
          <div className="w-20 h-5 bg-gray-500 rounded-full animate-pulse"></div>
        </h1>
      </div>
      <p className="text-white/70 py-5 px-3 bg-[#424a52] w-full text-center m-auto rounded-lg">
        <div className="w-20 h-5 bg-gray-500 rounded-full animate-pulse"></div>
      </p>
    </span>
  );
}

export function ChartSkeleton() {
  return (
    <div className="col-span-12">
      <div className="w-full p-6 rounded-lg bg-[#1a1e26] border-[0.1px] border-white/30">
        <div className="w-full h-[400px] bg-gray-500 animate-pulse"></div>
      </div>
    </div>
  );
}
