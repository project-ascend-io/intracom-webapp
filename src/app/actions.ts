"use server"
const github_token = process.env.GITHUB_TOKEN;

export interface GithubContributor {
	login: string
	id: number
	node_id: string
	avatar_url: string
	gravatar_id: string
	url: string
	html_url: string
	followers_url: string
	following_url: string
	gists_url: string
	starred_url: string
	subscriptions_url: string
	organizations_url: string
	repos_url: string
	events_url: string
	received_events_url: string
	type: string
	user_view_type: string
	site_admin: boolean
	contributions: number
}

const fetchGitHubContributors = async (owner: string, repo: string): Promise<GithubContributor[]> => {
	const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/contributors`,
		{
			method: "GET",
			headers: {
				accept: "application/vnd.github+json",
				Authorization: `Bearer ${github_token}`,
				"X-GitHub-Api-Version": "2022-11-28"
			}
		});
	const data = await response.json();
	return data;
}


export async function fetchNextJsContributors(): Promise<GithubContributor[]> {
	const owner = "project-ascend-io"
	const repo = "intracom-webapp"

	return await fetchGitHubContributors(owner, repo);

}

export async function fetchElectronJsContributors(): Promise<GithubContributor[]> {
	const owner = "project-ascend-io"
	const repo = "intracom-electron"

	return await fetchGitHubContributors(owner, repo);
}

export async function fetchExpressJsContributors(): Promise<GithubContributor[]> {
	const owner = "project-ascend-io"
	const repo = "intracom-be-06-2024"

	return await fetchGitHubContributors(owner, repo);
}


export async function fetchDesignerContributors(): Promise<GithubContributor[]> {
	return new Promise((resolve) => {
		resolve([{
			login: 'kaitlynmatousek',
			id: 111,
			node_id: '',
			avatar_url: 'https://media.licdn.com/dms/image/v2/C5603AQHsH-B4K4gJ0w/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1602702782705?e=1742428800&v=beta&t=vbxQ_cWVFh1GMqZM_nHEw2RAyGxBlaSwVpA68a_zEhE',
			gravatar_id: '',
			url: '',
			html_url: 'https://www.kaitlynmatousekportfolio.net/',
			followers_url: '',
			following_url: '',
			gists_url: '',
			starred_url: '',
			subscriptions_url: '',
			organizations_url: '',
			repos_url: '',
			events_url: '',
			received_events_url: '',
			type: '',
			user_view_type: '',
			site_admin: false,
			contributions: 1,
		}]);
	});
}

export async function fetchAllContributors(): Promise<GithubContributor[]> {
	const nextJsData = await fetchNextJsContributors();
	const electronJsData = await fetchElectronJsContributors();
	const expressJsData = await fetchExpressJsContributors();
	const designerData = await fetchDesignerContributors();

	const contributors = [...nextJsData, ...electronJsData, ...expressJsData, ...designerData];
	const uniqueContributors: {
		[key: string]: GithubContributor
	} = {};

	contributors.forEach((contributor: GithubContributor) => {
		if (!uniqueContributors[contributor.id]) {
			uniqueContributors[contributor.id] = contributor;
		}
	})
	return Object.values(uniqueContributors);
}
