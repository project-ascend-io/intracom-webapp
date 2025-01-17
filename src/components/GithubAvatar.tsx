export type GithubAvatarProps = {
  name: string;
  username: string;
  github_url: string;
  avatar_url: string;
}

const GithubAvatar = ({ name, username, avatar_url, github_url }: GithubAvatarProps) => {

  const toolTip: string = `${name} (@${username})`;
  return (
    <a href={github_url} target="_blank">
      <div className="avatar tooltip tooltip-bottom mx-1 tooltip-success" data-tip={toolTip} >
        <div className="w-20 rounded-full">
          <img src={avatar_url} />
        </div>
      </div >
    </a >
  )
}

export default GithubAvatar;
