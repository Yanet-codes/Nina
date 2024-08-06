names = ['yanet', 'got','this'];
let a = 0; a < names.length; a++;
//function arr(names){
names.forEach(function(name,a){
    console.log(name+ " - "+ a)
})
// Another way
names = ['yanet', 'got','this'];
//function arr(names){
names.forEach(function(name,i){
    console.log(name+ " - "+ i)
})        
