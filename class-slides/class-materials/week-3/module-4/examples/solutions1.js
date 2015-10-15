// Exercise 6
var numbers = [2,3,5,37,0]
var doubled_numbers = {}

var double_key_move = function(arr_val){
    doubled_numbers[arr_val] = arr_val*2;
    //delete doubled_numbers[0];
    //console.log(doubled_numbers);
}

numbers.forEach(double_key_move);

//Exercise 7
var famous = ['alex smith', 'amy whinehouse', 'cameron diaz', 'brad pitt', 'ashton kutcher', 'mark whalberg', 'morgan freeman', 'mila kunis']
var favorites = []

var famous_log_1 = function(celeb){
    if(!!celeb.match('a')){
        console.log(celeb + ' passed!')
    }
    else{
        console.log(celeb + ' is not worthy')
    }
}

var famous_log_2 = function(celeb){
    if(!!celeb[0].match('a')){
        console.log(celeb + ' passed!')
    }
    else{
        console.log(celeb + ' is not worthy')
    }
}

var famous_log_3 = function(celeb){
    if(!!celeb[0].match('a')){
        console.log(celeb + ' passed!');
        favorites.push(celeb);
    }
    else{
        console.log(celeb + ' is not worthy')
    }
}
famous.forEach(famous_log_1);
famous.forEach(famous_log_2);
famous.forEach(famous_log_3);

// Exercise 7b
var obama_jobs = []
var b_named_politicos = {}

var job_picker = function(politicos_object){
    for(var job in politicos_object){
        if(!!politicos_object[job].match('obama')){
            console.log(job);
            obama_jobs.push(job);
        }
    }
}

var job_picker_dos = function(politicos_object){
    for(var job in politicos_object){
        var name = politicos_object[job];
        if(!!name[0].match('b') || !!politicos_object[job].match(' b')){
            console.log(job);
            obama_jobs.push(job);
        }
    }
}

var job_picker_tres = function(politicos_object){
    for(var job in politicos_object){
        var name = politicos_object[job];
        var both_name = name.split(' ');
        var first_name = both_name[0];
        var last_name = both_name[1];
        //console.log(both_name);
        
        if(!!first_name[0].match('b')||!!last_name[0].match('b')){
            //console.log(job);
            b_named_politicos[job] = politicos_object[job];
        }
    }
}

// Exercise 7b
var reverse_politico_lookup = {}

var reverse_object = function(politico_object){
    for(var person in politico_object){
        var reverse_person = politico_object[person];
        reverse_politico_lookup[reverse_person] = person;
        //console.log(reverse_politico_lookup);
    }
}

// Exercise 8
var type_tester = function(input) {
    if (typeof input === 'number' || typeof input === 'number' || typeof input === 'string' || typeof input === 'undefined' || typeof input === 'function'){
    console.log(input + ' is a ' + typeof input)}
    else {
        if(Array.isArray(input) === true){
        console.log(input + ' is an Array')
        } else {console.log(input + ' is an Object')}
    }
}