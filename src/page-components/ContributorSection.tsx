
import GithubAvatar from "@/components/GithubAvatar";

const ContributorSection = () => {
  const contributors: GithubAvatarProps[] = [
    {
      name: 'John Doe',
      username: 'john_doe',
      github_url: 'https://github.com/john_doe',
      avatar_url: 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp',
      bio: 'Engineer at XYZ Corp',
      living_portfolio: 'https://example.com/john_doe_portfolio'
    },
    {
      name: 'Jane Smith',
      username: 'jane_smith',
      github_url: 'https://github.com/jane_smith',
      avatar_url: 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp',
      bio: 'Software Engineer at ABC Corp',
      living_portfolio: 'https://example.com/jane_smith_portfolio'
    },
    {
      name: 'Michael Johnson',
      username: 'michael_johnson',
      github_url: 'https://github.com/michael_johnson',
      avatar_url: 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp',
      bio: 'Product Manager at DEF Corp',
      living_portfolio: 'https://example.com/michael_johnson_portfolio'
    }
  ]

  return (
    <>
      <div id="contributors" className="min-h-screen flex items-center flex-col">
        <div className="text-center m-auto">
          <div className="prose m-auto">
            <h2 className="font-bold mb-4">Discover Talented Engineers</h2>
            <p>
              Intracom is not just a product—it's a showcase of talent. Explore contributions from skilled engineers and connect with individuals driving real-world solutions.
            </p>
          </div>
          <div className="m-auto text-center my-12">
            {contributors.map((contributor, index) => (
              <GithubAvatar
                name={contributor.name}
                username={contributor.username}
                github_url={contributor.github_url}
                bio={contributor.bio}
                living_portfolio={contributor.living_portfolio}
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
