
// ARRAYS
// {
//     /*
//     ARRAYS
//      - Can store differnet data types
//      - resizable (no need to declare size)
//      - iterable
//     */

//     const arr = [1, 2, 3, 'Tash']
//     arr.push(4) //end add
//     arr.unshift(5) //begin add
//     arr.pop() //remove end
//     arr.shift() //begin remove

//     for (const item of arr) {
//         console.log(item)
//     }

//     // Map, filter, reduce, concat, slice, splice

//     /*
//     add/remove from end - O(1)
//     add/remove from begin - O(n)
//     access - O(1)
//     remove - O(n)
//     */
// }

// //OBJECT
// {
//     /**
//      * Key value pairs
//      * Dot / square bracket notation
//      * NOT ITERABLE
//      */

//     const obj = {
//         name: "Tash",
//         age: "20",
//         sayMyName: function() {
//             console.log(this.name);
//         }
//     }

//     //Access
//     console.log(obj);
//     console.log(obj.name);
//     console.log(obj["age"]);

//     //Add
//     obj.gender = "male";

//     //Delete
//     delete obj.gender


//     //function in key
//     obj.sayMyName();

//     console.log(Object.keys(obj));
//     console.log(Object.values(obj));
//     console.log(Object.entries(obj));

//     console.log(obj);

//     /**
//      * Insert - O(1)
//      * Remove - O(1)
//      * Access - O(1)
//      * 
//      * Search - O(n)
//      * Object.values/keys/entires - O(n)
//      */
// }


//SET
// {
//     /**
//      * - Stores unique values
//      * - Mix of data types
//      * - Dynamically sized - no need to declare size
//      * - Unordered!
//      * - Iterables!
//      */

//     const set = new Set([1, 2, 3]);

//     for(const items of set) {
//         console.log(items);
//     }

//     //Add
//     set.add(4); 
//     set.add(3); //Will ignore duplicate values


//     //Check
//     console.log(set.has(4));

//     //delete
//     set.delete(1);

//     //size check
//     console.log(set.size); //set.size is not a method!! = no brackets

//     //delete all
//     set.clear();

//     console.log(set);
// }


//MAP
{
    /**
     * - Key value pairs 
     * - Unordered
     * - Iterable
     * 
     * 
     * vs MAPS
     * - you cannot add function to maps, only store data
     * - it has size property, object doesnt
     */

    const map = new Map([["a", 1], ["b", 3]]); //constructor must contain array of length 2

    //add
    map.set('c', 3);

    //if key exists
    console.log(map.has('a'));

    //size
    console.log(map.size); //size is not a function!!

    //delete all
    map.clear();
    
    for (const [key, value] of map) { //array inside array
        console.log(key, value);
    }


}
