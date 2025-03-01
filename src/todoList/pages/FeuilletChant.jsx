export default function FeuilletChant({ titre, refrains, couplets }) {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-2xl mx-auto border-2 border-gray-300">
      <h1 className="text-3xl font-serif text-center mb-4 text-gray-700">{titre}</h1>
      <div className="border-t-2 border-gray-400 my-3"></div>
      {refrains && <p className="text-lg font-bold italic text-gray-800">🎶 Refrain :</p>}
      {refrains && <p className="text-lg text-gray-700 bg-yellow-100 p-2 rounded">{refrains}</p>}
      <div className="mt-4 space-y-3">
        {couplets.map((couplet, index) => (
          <p key={index} className="text-lg text-gray-700">
            <span className="font-semibold">{index + 1}.</span> {couplet}
          </p>
        ))}
      </div>
    </div>
  );
}
