// function to help us calculate the number of monitors needed

function monitorCount(rows, columns){
  return rows * columns
}

const numOfMonitors = monitorCount(5, 4);
console.log(numOfMonitors);

