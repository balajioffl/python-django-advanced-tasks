import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <h1>👋 Welcome to My React App!</h1>

        <p style={{ maxWidth: "600px", lineHeight: "1.6" }}>
          This project is now set up and running smoothly.  
          We will also integrate <b>CI/CD</b> soon — which means every time we push
          new code, it will automatically:
        </p>

        <ul style={{ textAlign: "left", maxWidth: "500px", margin: "0 auto" }}>
          <li>✔ Build the project</li>
          <li>✔ Test the application</li>
          <li>✔ Deploy the latest version automatically</li>
        </ul>

        <p style={{ marginTop: "20px" }}>
          CI/CD helps ensure faster development, fewer bugs, and seamless updates 🚀
        </p>

      </header>
    </div>
  );
}

export default App;

