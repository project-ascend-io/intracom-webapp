import GithubAvatar, { GithubAvatarProps } from "@/components/GithubAvatar";
import { fetchAllContributors, fetchNextJsContributors, fetchElectronJsContributors, fetchExpressJsContributors } from "@/app/actions";
import { useEffect, useState } from "react";
import { GithubContributor } from "@/app/actions";

const ContributorSection = () => {
  const [contributors, setContributors] = useState<GithubAvatarProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchAllContributors()
      .then((contributors: GithubContributor[]) => {

        console.log('Fetched contributors:', contributors);

        const githubContributors: GithubAvatarProps[] = []
        contributors.forEach((contributor: GithubContributor) => {
          githubContributors.push({
            name: contributor.login,
            username: contributor.login,
            github_url: contributor.html_url,
            avatar_url: contributor.avatar_url,
          })
        })
        setContributors(githubContributors);
        setIsLoading(false);



      })
      .catch((error) => console.error('Error fetching contributors:', error));
  }, []);

  if (isLoading) {
    return false;
  }

  return (
    <>
      <div id="contributors" className="min-h-screen flex items-center flex-col">
        <div className="text-center m-auto">
          <div className="m-auto">
            <h3 className="mb-4">Discover Talented Engineers</h3>
            <p className="w-[75%] m-auto">
              Intracom isn’t just a tool—it’s a showcase of engineering talent. Recruiters and hiring managers can explore contributions from skilled engineers, each tied to their GitHub profiles, providing clear evidence of their expertise.
            </p>
          </div>
          <div className="m-auto text-center my-12">
            {contributors.map((contributor, index) => (
              <GithubAvatar
                name={contributor.name}
                username={contributor.username}
                github_url={contributor.github_url}
                avatar_url={contributor.avatar_url} key={index} />
            ))}
          </div>
          <p className="font-sm">
            Are you an engineer? <a className="text-info" href='/organization'>Learn how to contribute</a>
          </p>
        </div>
      </div>
    </>
  )
}

export default ContributorSection;
