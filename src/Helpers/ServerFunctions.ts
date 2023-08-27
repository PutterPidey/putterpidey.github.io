import { processLines } from "./Functions";
import { EASEE_TOKEN, EASEE_URL, NORDPOOL_URL, TIBBER_TOKEN, TIBBER_URL } from "./Variables";


//Lyrics
// export const getLyrics = async (setLines, setWords, setShowStartButton, setError, url) => {
//   console.log('inside getlyrics', url)
//     await fetch(
//       `https://spotify-lyric-api.herokuapp.com/?url=${url}&format=lrc`
//     )
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);

//         if (data.error) {
//           setError(data.message);
//         } else {
//           setShowStartButton(true)
//           const {words, unique} = processLines(data.lines);
//           setLines(words)
//           setWords(unique)
//         }
//       });
//   };

  //Tibber
  export const makeTibberRequest = async () => {
    try{
    const response = await fetch(TIBBER_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${TIBBER_TOKEN}`,
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify({
        query:
          "{\n  viewer {\n    homes {\n      consumption(resolution: HOURLY, last: 5760) {\n        nodes {\n          from\n          to\n          cost\n          unitPrice\n          unitPriceVAT\n          consumption\n          consumptionUnit\n        }\n      }\n    }\n  }\n}",
      }),
    })
    return response.json().then(x => x.data.viewer.homes[0].consumption.nodes)
  }
  catch{
    console.log('error in maketibberrequest')
  }
  };


  

  export const loginEasee = async () => {
    const options = {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'content-type': 'application/*+json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImN0eSI6IkpXVCJ9.eyJBY2NvdW50SWQiOjczNjI1MSwiVXNlcklkIjo2ODk0NTEsInVuaXF1ZV9uYW1lIjoiR8O2cmFuICBMYXJzc29uICIsInJvbGUiOiJVc2VyIiwibmJmIjoxNjgwOTc3MDg2LCJleHAiOjE2ODEwNjM0ODYsImlhdCI6MTY4MDk3NzA4Nn0.SY6CkMs2vkphSpcoQPBS06Ph2rLkCRsuh3T78M3SCZ0'
      },
      body: '{"userName":"gl@cavati.se","password":"Sanpedro02"}'
    }
    fetch('https://api.easee.cloud/api/accounts/login', options)
      .then((response) => response.json())
      .then((response) => makeEaseeRequest(response.accessToken))
      .catch((err) => console.error(err));
  };
  export const makeEaseeRequest = async (token:string) => {
    fetch('https://api.easee.cloud/api/sessions/charger/EHSXN7S5/total/2023-03-29T00%3A00%3A00/2023-03-30T00%3A00%3A00', {
      method: "GET",
      headers: {
        accept: "application/json",

        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  };
  export const makeNordPoolRequest = async () => {
    fetch(NORDPOOL_URL, {
      method: "GET",
      mode: "no-cors",
      headers: {
        accept: "application/json",
        Authorization: `Bearer `,
      },
    })
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  };