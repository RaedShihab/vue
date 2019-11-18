 Vue.component('app-count',{
     data: function name() {
         return {
             name: 'RUDY',
             count: 0
         }
     },
     tamplate: '<p @click="{{count++}}">{{name}} You Clicked this page {{count}} times</p>'
 })
 
 new Vue({
     'el': '#id',
     'data': {
         name: 'RAED',
         age: '',
         skills: ['HTML', 'CSS', 'JS'],
         isSubsecribe: false,
         comletedTests: [
             {first: 80},
             {second: 90}
         ],
         date: new Date,
         src: './imgs/1.png',
         href: "http://www.google.com",
         checked: '',
         checkedNames: []
    },
     'methods': {
         showNewDate: function() {
             this.date = new Date()
         }
     }
 })