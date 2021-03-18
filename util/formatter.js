import Button from "@/components/Button";
import InfoText from "@/components/InfoText";
import Br from "@/components/Br";
import Pre from "@/components/Pre";

export function numFormatter(num) {
    if (num > 999 && num < 1000000) {
        return (num/1000).toFixed(1) + 'k'; // convert to K for number from > 1000 < 1 million
    }else if(num > 1000000){
        return (num/1000000).toFixed(1) + 'M'; // convert to M for number from > 1 million
    }else if(num < 900){
        return num; // if value < 1000, nothing to do
    }
}

export function numCommaFormatter(num) {
    return num.toString().replaceAll(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

export function dateFormatter(date) {
    const createdDate = new Date(date * 1000);
    const currentDate = new Date();
    const milliseconds = Math.abs(currentDate - createdDate);
    const hours = Math.floor(milliseconds / 36e5);
    if (hours < 24) {
        return hours + ` ${hours > 1 ? 'HOURS' : 'HOUR'} AGO`;
    } else if (hours < 168) {
        return Math.floor(hours / 24) + ` ${hours/24 > 1 ? 'DAYS' : 'DAY'} AGO`;
    } else {
        let resultDate = ""
        resultDate += createdDate.toLocaleString('default', { month: 'long' }); // month name
        resultDate += " " + createdDate.getDate(); // day number
        if (createdDate.getFullYear() !== currentDate.getFullYear()) {
            resultDate += ", " + createdDate.getFullYear(); // year
        }
        return resultDate
    }
}

export function timeFormatter(time) {
    const createdDate = new Date(time * 1000);
    const currentDate = new Date();
    const milliseconds = Math.abs(currentDate - createdDate);
    const hours = Math.floor(milliseconds / 36e5);
    if (hours < 24) {
        return hours + "h";
    } else if (hours < 168) {
        return Math.floor(hours / 24) + "d";
    } else if (hours < 61320) {
        return Math.floor(hours / 24 / 7) + "w";
    } else {
        return Math.floor(hours / 24 / 7 / 365) + "y";
    }
}

export function urlFormatter(url) {
    return new URL(url).hostname
}
//
// export function bioFormatter(bio) {
//
//     let test = bio.replace("\n", "<ERR>").split("<ERR>")
//     if (test.length > 1) {
//         return bio.split(/(?:\r\n|\r|\n)/g).map(function(item) {
//             return (
//                 <>
//                     {item}
//                     <br/>
//                 </>
//             )
//         })
//     }
//     return test
//
// }

function linkFormatter (array) {
    return array.map(item => {
        if (item.startsWith('#')) {
            return {
                currentComponent: Button,
                currentProperties: { href: `/explore/tags/${item.slice(1)}` },
                text: item,
                style: { color: "#00376b" }
            }
        } else if (item.startsWith('@')) {
            return {
                currentComponent: Button,
                currentProperties: { href: `/${item.slice(1)}` },
                text: item,
                style: { color: "#00376b" }
            }
        } else if (item == "<br/>") {
            return { currentComponent: Br }
        } else if (item == " ") {
            return { currentComponent: Pre }
        } else {
            return {
                currentComponent: InfoText,
                text: item
            }
        }
    })
}

export function hashtagFormatter(text) {
    if (!text) {
        return [{
            currentComponent: InfoText,
            text: text
        }]
    }
    const hashArray = text.match(/#(\w+)/g); // find hashtags
    const userArray = text.match(/@(\w+)/g); // find users

    if (!hashArray && !userArray) {
        return [{
            currentComponent: InfoText,
            text: text
        }]
    }

    let splitHashesArray = text.replace(/#/gi, "<ERR>#").replace(/@/gi, "<ERR>@").split("<ERR>");
    let splitSpacesArray = [];
    for (const item of splitHashesArray) {
        splitSpacesArray.push(
            ...item.replace(" ", "<ERR> ") // find spaces
                .replace(/(?! )\s/g, "<ERR><br/><ERR>") // find new lines
                .split("<ERR>")) // separate spaces and new lines
    }
    return linkFormatter(splitSpacesArray)
}
//
// export function mutualFollow(mutualFollow) {
//     const result = ["Followed by "];
//     for (let step = 0; step < mutualFollow.usernameArray.length; step++) {
//         result.push(
//             <Button href={`/${mutualFollow.usernameArray[step]}`} key={step}>
//                 <Info weight="500" color="#262626">{mutualFollow.usernameArray[step]}</Info>
//             </Button>
//         )
//         result.push(step + 1 == mutualFollow.usernameArray.length ? " " : ", ")
//     }
//
//     if (mutualFollow.count - mutualFollow.usernameArray.length > 0) {
//         result.push(`+${mutualFollow.count - mutualFollow.usernameArray.length} more`)
//     }
//
//     return result
// }
//
