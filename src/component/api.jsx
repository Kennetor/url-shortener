// function MyComponent() {
//   const [link, setLink] = useState("");
//   const [shortcodeData, setShortcodeData] = useState(null);

//   const handleClick = async () => {
//     const response = await fetch(
//       `https://api.shrtco.de/v2/shorten?url={inputLink}`,
//       {
//         method: "POST",
//         body: JSON.stringify({ url: link }),
//         headers: { "Content-Type": "application/json" },
//       }
//     );
//     const data = await response.json();
//     setShortcodeData(data);
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Shorten a link here..."
//         value={link}
//         onChange={(e) => setLink(e.target.value)}
//       />
//       <button onClick={handleClick}>Shorten it!</button>
//       {shortcodeData && <div>{shortcodeData.shortlink}</div>}
//     </div>
//   );
// }
