export function dayOfBirthday(date){
    return {
        day : date.split('-')[2],
        month : date.split('-')[1],
        years : date.split('-')[0]
    };
}