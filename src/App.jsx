import { useState } from "react";
import SearchBar from "./components/SearchBar";
import ProfileCard from "./components/ProfileCard";
import Loading from "./components/Loading";
import ErrorBox from "./components/ErrorBox";
import FunFacts from "./components/FunFacts";

export default function App() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const searchUser = async (name) => {
    if (!name.trim()) return;

    setLoading(true);
    setUserData(null);
    setErrorMsg("");

    try {
      const res = await fetch(`https://api.github.com/users/${encodeURIComponent(name)}`);

      if (!res.ok) {
        if (res.status === 404) {
          throw new Error("User not found");
        } else if (res.status === 403) {
          throw new Error("Rate limit exceeded");
        } else {
          throw new Error("Something went wrong");
        }
      }

      const data = await res.json();
      setUserData(data);
    } catch (err) {
      if (err.message.includes("Rate Limit")) {
        setErrorMsg("Github API rate limit reached. Please try again later.");
      } else if (err.message.includes("fetch")) {
        setErrorMsg("Connection Error: Unable to connect to Github.");
      } else {
        setErrorMsg("User not found. Please check the username again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen  bg-gradient-to-br from-[#0d1117] via-[#21262d] to-[#161b22] text-[#e6edf3] p-6">
      <div className="max-w-2xl mx-auto pt-10">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-[#f78166] to-[#58a6ff] bg-clip-text text-transparent">
            🐙 Github Profile Explorer
          </h1>
          <p className="text-gray-400 mt-2">Discover Github profiles and their stats</p>
        </div>

        <SearchBar
          username={username}
          setUsername={setUsername}
          onSearch={() => searchUser(username)}
        />

        {!userData && !loading && !errorMsg && <FunFacts />}

        {loading && <Loading />}
        {errorMsg && <ErrorBox message={errorMsg} />}
        {userData && <ProfileCard user={userData} />}
      </div>
    </div>
  );
}