/**

Problem Statement
You are tasked to design a function that processes customer service tickets based on:

Priority (1 is the highest priority, and tickets with this priority are processed first in order of arrival time).
Tickets with priorities 2-5 are processed in a FIFO (First In, First Out) manner by their timestamp.

*/

function processTickets(tickets){
     // Handle empty input
    if(tickets.length < 1 ) return [];

    // Separate tickets into two groups: Priority 1 and others
    const priorityOne = [];
    const others = []; 
    for(let ticket of tickets){
        if(ticket.priority == 1){
            priorityOne.push(ticket);
        }else{
            others.push(ticket);
        }
    }
    priorityOne.sort((a,b) => {a.timestamp - b.timestamp}); // Sort by timestamp for Priority 1
    others.sort((a,b)=>{ a.timestamp - b.timestamp});
    // Combine the results and return indices
    const result = [...priorityOne , ...others].map(tickets =>tickets.index);
    return result;
}

// Example Usage
const input1 = [
    { priority: 2, timestamp: 100, index: 0 },
    { priority: 1, timestamp: 110, index: 1 },
    { priority: 1, timestamp: 90, index: 3 },
    { priority: 3, timestamp: 50, index: 2 },
];

console.log(processTickets(input1));