function Message() {
  const name = "X";
  if (name)
    return (
      <div>
        <h1>Hello {name}</h1>;
      </div>
    );
  return <h2>Goodbye World</h2>;
}
export default Message;
