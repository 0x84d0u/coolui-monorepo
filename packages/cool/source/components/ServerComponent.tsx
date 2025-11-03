export async function ServerComponent() {
  // This can use async/await and server-only features
  const data = await fetchData();

  return (
    <div>
      <h1>Server Component</h1>
      <p>{data}</p>
    </div>
  );
}

async function fetchData() {
  // Simulate data fetching
  return 'Data from server';
}

export const serverUtility = () => {
  return 'This runs on the server';
};