import { json } from '@sveltejs/kit'
import type { Post } from '$lib/types'

async function getPosts() {
	let posts: Post[] = []

	const paths = import.meta.glob('../../posts/*.svx', { eager: true })
	console.log("Paths found:", Object.keys(paths))

	for (const path in paths) {
		const file = paths[path]
		const slug = path.split('/').at(-1)?.replace('.svx', '')
		console.log("Slug:", slug);
		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<Post, 'slug'>
			console.log("Metadata:", metadata);
			const post = { ...metadata, slug } satisfies Post
			post.published && posts.push(post)
		}
	}

	posts = posts.sort((first, second) =>
		new Date(second.date).getTime() - new Date(first.date).getTime()
	)

	return posts
}

export async function GET() {
    const posts = await getPosts()
    return new Response(JSON.stringify(posts), {
        headers: { 'Content-Type': 'application/json' }
    })
}