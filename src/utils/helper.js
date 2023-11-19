export function filterData(searchText, restaurants){
    const filterData = restaurants.filter((res)=>{
        return (res?.info?.name.toLowerCase()).includes(searchText.toLowerCase());
    });
    return filterData;
}
