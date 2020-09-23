

export function generateUrl(filters){


    let url = 'https://movies-app-siit.herokuapp.com/movies';
  
    const searchKey = Object.keys(filters).reduce((acc, key) => {
        const filterValue = filters[key];
        if (filterValue) {
            acc.push(`${key}=${filterValue}`);
  
        }
        return acc;
    }, []).join('&');
    if (searchKey) {
        url = url + '?' + searchKey;
    }
    console.log(url)

    return url;
  
  
  
}