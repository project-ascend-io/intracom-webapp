type GithubAvatarProps = {
  name: string;
  username: string;
  github_url: string;
  avatar_url: string;
  bio: string;
  living_portfolio: string;
}


const GithubAvatar = ({ name, username, avatar_url, living_portfolio }: GithubAvatarProps) => {

  const toolTip: string = `${name} (@${username})`;
  return (
    <a href={living_portfolio} target="_blank">
      <div className="avatar tooltip tooltip-bottom mx-1" data-tip={toolTip} >
        <div className="w-20 rounded-full">
          <img src={avatar_url} />
        </div>
      </div >
    </a >
  )
}

export default GithubAvatar;
