import React from "react"
import { useData } from "../../hooks/useData"

export default function ItemListContainer({ greeting }) {
  const URL = "https://run.mocky.io/v3/7dd4f734-40e4-48d6-91ed-0f18314f1d54"
  const { data, loading } = useData(URL)

  return (
    <div>
      <section className="m-10">
        <p>{greeting}</p>
        {loading ? (
          <div className="flex items-center justify-normal">
            <p>Loading...</p>
          </div>
        ) : (
          <>
            {data && (
              <div className="flex w-screen justify-center">
                <section className="m-10 flex flex-row flex-wrap gap-10">
                  {data.map((product) => (
                    <div key={product.id}>
                      <img className="h-[300px]" src={product.images[1]} alt={product.title} />
                      <p>{product.title}</p>
                      <p>Price: ${product.price}</p>
                    </div>
                  ))}
                </section>
              </div>
            )}
          </>
        )}
      </section>
    </div>
  )
}
