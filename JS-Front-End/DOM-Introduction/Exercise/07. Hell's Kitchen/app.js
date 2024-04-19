function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      const textareaAsText = document.querySelector('div#inputs textarea').value;              // input field (text)
      const bestRestaurantElement = document.querySelector('#outputs #bestRestaurant p');    // 'best resteurant' result
      const workersElement = document.querySelector('#outputs #workers p');                  // 'workers' result

      // Parse INPUT as Array (hard way):
      let restaurants = JSON.parse(textareaAsText);	// OR: parseInputAsArray() but doesn't work in judge!

      // Transform 'restaurant' into: -> [ [res1, {w1:sal, w2:sal...}], [res2, {w3:sal, w4:sal....}] ]
      restaurants = transformIntoOrganizedData(restaurants);

      // Check for any Restaurants name duplications:
      const duplicatesFound = duplicatesCheck(restaurants);

      if (duplicatesFound.length > 0) {
         // clearDuplications() func will be provoked ONLY IF any duplications FOUND!
         clearDuplications(duplicatesFound);
      }

      // Print result:
      bestRestaurantElement.textContent = getBestRestaurant();
      workersElement.textContent = getBestWorkers();


      // Functions declaration:
      function parseInputAsArray(rawInput) {
         let result = [];
         const rePattern = /"([a-zA-Z\d\-\s\,]+)"/g;
         const matches = rawInput.trim().matchAll(rePattern);

         matches.forEach(match => result.push(match[1]));
         return result;
      }
      function transformIntoOrganizedData(data) {
         data = data
             .map(el => el.split(' - '))
             .map(([restaurant, workers]) => [
                restaurant, workers.split(', ')
                    .map(el => el.split(' '))
             ])
             .map(([restaurant, arrOfarrs]) => [
                restaurant, arrOfarrs
                    .reduce((data, arr) => {
                       data[arr[0]] = Number(arr[1]);
                       return data;
                    }, {})
             ]);
         return data;
      }
      function duplicatesCheck(restaurants) {
         // Extract ALL restaurant Names:
         let restaurantNames = [];
         let duplicates = {};
         restaurants.forEach(el => restaurantNames.push(el[0]));

         restaurantNames
             .forEach((name, idx) => !duplicates.hasOwnProperty(name)
                 ? duplicates[name] = [idx]
                 : duplicates[name].push(idx));

         // Get: First-found restaurant index and its duplicates indexes:
         return Object.entries(duplicates)
             .filter(el => el[1].length > 1)
             .map(([a, [b, ...c]]) => [b, [...c]]);	// -->	[ [1, [3, 6]], [2, [ 5 ]] ]
      }
      function clearDuplications(duplicatesFound) {
         for (const indexes of duplicatesFound) {
            const firstRestaurantIndex = indexes[0];
            for (const index of indexes[1]) {
               const restaurantData = restaurants.splice(index, 1)[0];
               restaurants.splice(index, 0, null);
               // merge 2 objects:
               restaurants[firstRestaurantIndex][1] = {...restaurants[firstRestaurantIndex][1], ...restaurantData[1]};
            }
         }
         restaurants = restaurants.filter(el => el !== null);
      }
      function calcBestandAvgSalary(restaurants) {
         return restaurants
             .map(element => {
                const values = Object.values(element[1]);
                return {
                   ['Name']: element[0],
                   ['Average Salary']: (values.reduce((res, el) => res + el, 0) / values.length),
                   ['Best Salary']: Math.max(...values),
                   ['Workers']: Object.entries(element[1]),
                }
             })
             .sort((obj1, obj2) => Number(obj2['Average Salary']) - Number(obj1['Average Salary']));
      }
      function getBestRestaurant() {
         let output = Object.values(calcBestandAvgSalary(restaurants)[0])
             .filter(el => el[0] !== 'Workers');
         // .forEach(([k, v]) => output.push(`${k}: ${v}`));
         return `Name: ${output[0]} Average Salary: ${output[1].toFixed(2)} Best Salary: ${output[2].toFixed(2)}`;
      }
      function getBestWorkers() {
         let output = [];
         const workers = Object.entries(calcBestandAvgSalary(restaurants)[0]).pop();
         workers[1]
             .sort((arr1, arr2) => arr2[1] - arr1[1])
             .forEach(([w, s]) => output.push(`Name: ${w} With Salary: ${s}`));
         return output.join(' ');
      }
   }
}