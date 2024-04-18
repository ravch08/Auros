export async function getAllProducts() {
  try {
    const res = await fetch(`http://localhost:3000/products`);
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error(`Could not fetch data.`);
  }
}
