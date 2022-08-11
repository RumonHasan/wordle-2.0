export const associationWordOptions = {
    method: 'GET',
    headers:{
        'X-RapidAPI-Host': 'twinword-word-graph-dictionary.p.rapidapi.com',
        'X-RapidAPI-Key': process.env.REACT_APP_WORD_API_KEY
    }
}

export const fetchWordClue = async(url, options)=>{
    const res = await fetch(url, options);
    const data = await res.json();
    console.log(data);

    return data;
}









