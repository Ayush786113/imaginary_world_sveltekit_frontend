export async function load({ params }) {
    let data = await fetch(
        `https://api.insiderserver.tk/story?storyid=`+params.id
    )
    let resultStory = await data.json()
    data = await fetch(
        `https://api.insiderserver.tk/chapters?chaptersid=`+resultStory.chapters
    )
    let resultchapter = await data.json()
    return {
        story: resultStory,
        chapters: resultchapter
    }
}