// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

let magician_names = ['Shafey','Muzammil','Ahsan']
function show_magicians(array){
    array.forEach(item => {
        console.log(item)
    });
}
show_magicians(magician_names)