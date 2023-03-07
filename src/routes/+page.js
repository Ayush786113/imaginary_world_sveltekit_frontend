export async function load(){
    let data = await fetch(
        `https://api.insiderserver.tk/stories`
    )
    const resStories = await data.json();
    data = await fetch(
        `https://api.insiderserver.tk/connections`
    )
    const resConnections = await data.json();
    return {
        stories: resStories,
        connections: resConnections
    }
}