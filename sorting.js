function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
   
  // Function to perform Bubble Sort
  function bubbleSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          // Swap arr[j] and arr[j + 1]
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
  }
   
  // Function to perform Selection Sort
  function selectionSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n; i++) {
      let minIndex = i;
      for (let j = i + 1; j < n; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
      // Swap arr[i] and arr[minIndex]
      const temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }
   
  // Function to perform Insertion Sort
  function insertionSort(arr) {
    const n = arr.length;
    for (let i = 1; i < n; i++) {
      const key = arr[i];
      let j = i - 1;
      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j--;
      }
      arr[j + 1] = key;
    }
  }
   
  // Main function
  function main() {
    const arr = new Array(10000);
   
    // Populate the array with random values
    for (let i = 0; i < 10000; i++) {
      arr[i] = getRandomInt(1, 10000); // Adjust the range as needed
    }
   
    const startTimeBubble = performance.now();
    bubbleSort(arr);
    const bubbleSortTime = performance.now() - startTimeBubble;
   
    const startTimeSelection = performance.now();
    selectionSort([...arr]);
    const selectionSortTime = performance.now() - startTimeSelection;
   
    const startTimeInsertion = performance.now();
    insertionSort([...arr]);
    const insertionSortTime = performance.now() - startTimeInsertion;
   
    console.log("Bubble Sort time: " + bubbleSortTime.toFixed(2) + " ms");
    console.log("Selection Sort time: " + selectionSortTime.toFixed(2) + " ms");
    console.log("Insertion Sort time: " + insertionSortTime.toFixed(2) + " ms");
  }
   
  // Call the main function
  main();