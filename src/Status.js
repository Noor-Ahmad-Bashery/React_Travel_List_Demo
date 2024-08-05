export default function Status({ items }) {
  if (!items.length)
    return (
      <p className="footer">
        <em>Start adding items to your packing list</em>
      </p>
    );
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  console.log(numPacked);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "you are ready to go ✈"
          : `💼You have ${numItems} items on your list, and you already
          ${numPacked}(${percentage}%)`}
      </em>
    </footer>
  );
}
