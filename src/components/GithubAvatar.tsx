import Image from 'next/image';
export type GithubAvatarProps = {
  name: string;
  username: string;
  github_url: string;
  avatar_url: string;
};

const GithubAvatar = ({
  name,
  username,
  avatar_url,
  github_url,
}: GithubAvatarProps) => {
  const toolTip = `${name} (@${username})`;
  return (
    <a href={github_url} target='_blank'>
      <div
        className='avatar tooltip tooltip-bottom tooltip-success mx-1'
        data-tip={toolTip}
      >
        <div className='w-20 rounded-full'>
          <Image src={avatar_url} alt={name} width='50' height='50' />
        </div>
      </div>
    </a>
  );
};

export default GithubAvatar;
