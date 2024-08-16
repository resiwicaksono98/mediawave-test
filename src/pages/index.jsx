import HighCart from "@/components/HighCart/HighCart";
import Map from "@/components/Map/Index";
import Navbar from "@/components/Navbar";

const covidJakartaDetails = [
  {
    area: "Jakarta Pusat",
    totalCase: 3000
  },
  {
    area: "Jakarta Barat",
    totalCase: 2500
  },
  {
    area: "Jakarta Selatan",
    totalCase: 2000
  },
  {
    area: "Jakarta Timur",
    totalCase: 1500
  },
  {
    area: "Jakarta Timur",
    totalCase: 2000
  }
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="mx-4 md:mx-12 py-8">
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="border py-5 px-4 rounded-lg w-full md:w-2/3">
            <div className="text-xl font-bold">
              Jumlah penduduk tekena COVID-19 di Jakarta pada 2024
            </div>
            <span className="text-xs font-medium italic">
              * Data ini tidak aktual karena dapat berubah ubah{" "}
            </span>
            <div className="mt-4">
              <Map />
            </div>
          </div>
          <div className="w-full md:w-1/3">
            <div className="flex flex-col md:flex-row gap-4 md:gap-8 justify-center border rounded-lg p-6">
              <div className="text-3xl font-bold text-center md:text-left">
                12.000 <br />
                Penduduk
              </div>
              <div className="text-orange-500 text-center md:text-left">
                <div className="text-2xl font-bold">+3000</div>
                <span className="text-xs">
                  meningkat dibandingkan 28 hari sebelumnya
                </span>
              </div>
            </div>
            <div className="mt-4 border rounded-lg p-4">
              <div className="border-b pb-4">
                <div className="text-xl font-bold">
                  Jumlah kasus COVID-19 yang dilaporkan
                </div>
                <span className="text-slate-400 text-sm font-medium">
                  {new Date().toLocaleDateString("id-ID", {
                    day: "numeric",
                    month: "long",
                    year: "numeric"
                  })}
                </span>
              </div>
              <div className="overflow-x-auto">
                <table className="table-auto w-full mt-4">
                  <thead>
                    <tr>
                      <th className="px-4 py-2 text-left">Wilayah</th>
                      <th className="px-4 py-2 text-left">Jumlah Kasus</th>
                    </tr>
                  </thead>
                  <tbody>
                    {covidJakartaDetails.map((detail) => (
                      <tr key={detail.area}>
                        <td className="border px-4 py-2">{detail.area}</td>
                        <td className="border px-4 py-2">{detail.totalCase}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        {/* charts */}
        <HighCart />
      </main>
    </>
  );
}
