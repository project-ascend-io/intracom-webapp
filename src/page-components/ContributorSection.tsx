import GithubAvatar, { GithubAvatarProps } from '@/components/GithubAvatar';
import { fetchAllContributors } from '@/app/actions';
import { useEffect, useState } from 'react';
import { GithubContributor } from '@/app/actions';
import { openContributeModal } from '@/components/ContributeModal';

const ContributorSection = () => {
  const [contributors, setContributors] = useState<GithubAvatarProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchAllContributors()
      .then((contributors: GithubContributor[]) => {
        const githubContributors: GithubAvatarProps[] = [];
        contributors.forEach((contributor: GithubContributor) => {
          githubContributors.push({
            name: contributor.login,
            username: contributor.login,
            github_url: contributor.html_url,
            avatar_url: contributor.avatar_url,
          });
        });
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
      <div
        id='contributors'
        className='flex min-h-screen flex-col items-center'
      >
        <div className='m-auto text-center'>
          <div className='m-auto'>
            <h3 className='mb-4'>Discover Talented Engineers</h3>
            <p className='m-auto w-[75%]'>
              Intracom isn’t just a tool—it’s a showcase of engineering talent.
              Recruiters and hiring managers can explore contributions from
              skilled engineers, each tied to their GitHub profiles, providing
              clear evidence of their expertise.
            </p>
          </div>
          <div className='m-auto my-12 text-center'>
            {contributors.map((contributor, index) => (
              <GithubAvatar
                name={contributor.name}
                username={contributor.username}
                github_url={contributor.github_url}
                avatar_url={contributor.avatar_url}
                key={index}
              />
            ))}
          </div>
          <p className='font-sm'>
            Are you an engineer?{' '}
            <a className='text-info' onClick={openContributeModal}>
              Learn how to contribute
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default ContributorSection;
