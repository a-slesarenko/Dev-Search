import { Container } from "components/Container";
import { Header } from "components/Header";
import { Search } from "components/Search";
import { UserCard } from "components/UserCard";
import { defaultUser } from "mock";
import { useState } from "react";
import { GithubUser, LocalGithubUser, NotFound } from "types";
import { extractLocalUser } from "utils/extract-local-user";
import { isGitHubUser } from "utils/typeguards";

const BASE_URL = 'https://api.github.com/users/';

function App() {
  const[user, setUser] = useState<LocalGithubUser | null>(defaultUser);
  const fetchUser = async (username: string) => {
    const url = BASE_URL + username;

    const response = await fetch(url);
    const result = await response.json() as GithubUser | NotFound;
    
    if(isGitHubUser(result)) {
      setUser(extractLocalUser(result));
    } else {
      setUser(null);
    }
  };

  return (
    <Container>
      <Header />
      <Search hasError={!user} onSubmit={fetchUser} />
        {user && <UserCard {...user} />}
    </Container>
  );
}

export default App;
