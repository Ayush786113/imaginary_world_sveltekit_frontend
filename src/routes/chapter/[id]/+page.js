export async function load({params}){
    console.log(params);
    const data = await fetch(
        `https://api.insiderserver.tk/chapter?chapterid=`+params.id
    )
    const result = await data.json()
    return{
        chapter: result
    }
}