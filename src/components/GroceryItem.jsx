export const GroceryItem = ({ item, onDelete }) => {
  return (
    <div>
      {item}
      <button
        onclick={() => {
          onDelete(item);
        }}
      >
        Delete
      </button>
    </div>
  );
};
