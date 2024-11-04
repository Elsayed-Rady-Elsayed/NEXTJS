// "use client";

const Posts = async () => {
  const result = await fetch("https://jsonplaceholder.typicode.com/todos/1", {
    cache: "force-cache",
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
  console.log(result);
  return (
    <div>
      <h1>{result}</h1>
    </div>
  );
};

export default Posts;
