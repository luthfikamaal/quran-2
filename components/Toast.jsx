const Toast = (type) => {
  let text = '';
  if (type) {
    text = 'Successfully added to favorites list!';
  } else {
    text = 'Failled added to favorites list!';
  }
  return (
    <>
      <div className="rounded-lg bg-blue-dark border-t-4 border-solid border-green-dark px-3 py-2 fixed z-[999] bottom-14 right-4 shadow-xl">
        <h3 className="text-white">{text}</h3>
      </div>
    </>
  );
};

export default Toast;
