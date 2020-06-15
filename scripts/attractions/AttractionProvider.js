let attractions = [];

export const useAttractions = () => {
  return attractions;
};

export const getAttractions = () => {
  return fetch("http://holidayroad.nss.team/bizarreries")
    .then(response => response.json())
    .then(parsedAttractions => {
      // console.log(parsedAttractions)
      attractions = parsedAttractions.slice();
    });
};
