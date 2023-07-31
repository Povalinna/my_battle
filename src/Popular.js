import { useState, useEffect } from "react";
import { fetchPopularRepos } from "./api";
import "./Popular.css";

const languages = ["All", "Javascript", "Ruby", "Java", "CSS", "Python"];
const TabLang = ({ selectedLanguage, setSelectedLanguage, loading }) => {
  return (
    <ul className="languages">
      {languages.map((language, index) => (
        <li
          key={index}
          style={{
            color: selectedLanguage === language ? "#d0021b" : `#000000`,
          }}
          onClick={(loading) => {
            if (loading) {
              setSelectedLanguage(language);
            }
          }}
        >
          {language}
        </li>
      ))}
    </ul>
  );
};
const PopularList = ({ repos, setRepos }) => {
  return (
    <ul className="popular-list">
      {repos.map((repo, index) => {
        return (
          <li key={repo.id} className="popular-item">
            <div className="popular-rank">#{index + 1}</div>
            <ul className="space-list-item">
              <li>
                <img
                  className="avatar"
                  src={repo.owner.avatar_url}
                  alt="avatar"
                />{" "}
              </li>
              <li>
                <a href={repo.html_url} target="_blank">
                  {" "}
                  {repo.name}{" "}
                </a>
              </li>
              <li>@{repo.owner.login}</li>
              <li> {repo.stargazers_count}</li>
            </ul>
          </li>
        );
      })}
    </ul>
  );
};

const Popular = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("All");
  const [loading, setLoading] = useState(false);
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetchPopularRepos(selectedLanguage)
      .then((data) => setRepos(data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [selectedLanguage]);

  if (loading) {
    return <div className="loader"></div>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <div>
      <TabLang
        selectedLanguage={selectedLanguage}
        setSelectedLanguage={setSelectedLanguage}
        loading={loading}
      />
      <PopularList repos={repos} setRepos={setRepos} />
    </div>
  );
};
export default Popular;
