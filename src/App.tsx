import ProductCard from "./components/ProductCard/ProductCard";
// import data from "/products.json" assert {type: "json"} <- adat importálása
import "./App.css";
import { Product } from "./types";
import { FormEvent, useEffect, useState } from "react";

function App() {
  const products: Product[] = [];
  useEffect(() => {
    fetch("../public/products.json")
      .then((res) => res.json())
      .then((data) => {
        const items = data.products as unknown as Product[];
        products.push(...items);
      }).catch(err => console.error(err))
      .finally(() => console.log(products));
  });

  const HandleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const err = document.getElementsByClassName("error")[0] as HTMLElement;
    const searchedProduct = products.filter(x => x.name.toLowerCase() === text.toLowerCase());
    if(searchedProduct.length !== 0) {
      err.style.display = "none";
      setProduct(searchedProduct[0]);
      return
    }
      err.style.display = "contents";

  };
  const [text, setText] = useState<string>("");
  const [product, setProduct] = useState<Product | undefined>();
  return (
    <>
    <div className="product-card">

      <h1>Product Information</h1>
        <form action="" onSubmit={HandleSubmit} className="search-section">
          <label htmlFor="search">Enter product name:</label>
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Enter product name here"
            onInput={(e) =>
              setText((prev) => (prev = (e.target as HTMLInputElement).value))
            }
            />
          <button type="submit">Search</button>
        </form>
        <div className="results-section">
        <div className="error" style={{display : "none"}}>No Product Found with given name</div>
          <ProductCard product={product}/>
        </div>
      </div>
    </>
  );
}

export default App;
